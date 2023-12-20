import { Model } from 'https://cdn.jsdelivr.net/npm/minizinc/dist/minizinc.mjs';


// TODO: Can this be impored from a seperate file?
const MznModel = `
enum Volunteer;
enum Role;
int: occasions;
enum Occasion = O(1..occasions);

enum RoleConstraints = {
	NoConsecutiveWeeks,
	NoOtherRole,
};

% --- INPUT DATA ---

% From all the scheduled occasions, how many times can a volunteer be assigned a
% particular roles.
array[Volunteer, Role] of 0..card(Occasion): capability;

% A collection of roles that are mutually exclusive
array[int] of tuple(Role, Role): exclusive_roles;

% Special rules that are applied to particular roles
array[Role] of set of RoleConstraints: restrictions;

% --- DECISION ---

% The volunteer to which the role will be assigned at each occasion
array[Occasion, Role] of var Volunteer: assignment;

% --- CONSTRAINTS ---
include "global_cardinality_low_up.mzn";

% A volunteer cannot be assigned a role more time then possible accord to their
% capability
constraint forall(r in Role) (
	global_cardinality_low_up(assignment[.., r], Volunteer, [v: 0 | v in Volunteer], capability[.., r])
);

constraint forall(excl in exclusive_roles) (
	forall(o in Occasion) (
		assignment[o, excl.1] != assignment[o, excl.2]
	)
);

% NoConsecutiveWeeks -> Ensure a role is not assigned to the same volunteer two
% weeks in a row
constraint forall(r in Role where NoConsecutiveWeeks in restrictions[r]) (
	forall (o1 in min(Occasion)..<max(Occasion), o2 = enum_next(o1)) (
		assignment[o1, r] != assignment[o2, r]
	)
);

% NoOtherRole -> Ensure that the volunteer that is assigned this role is not
% assigned any other role in the same occasion.
constraint forall(r1 in Role where NoOtherRole in restrictions[r1]) (
	forall(o in Occasion, r2 in Role where r1 != r2) (
		assignment[o,r1] != assignment[o,r2]
	)
);

% --- OBJECTIVE ---
include "global_cardinality_fn.mzn";

% Optimize the assignment by minimizing the number of that a volunteer gets assigned.
array[Volunteer] of var int: num_roles = global_cardinality(assignment, [v: v | v in Volunteer]);
solve minimize sum(v in Volunteer) (num_roles[v]^2);
`;


export class Scheduler {
	orgName;
	occasions;
	weeklySchedule; // Boolean
	volunteers; // List of `Volunteer` instances
	roles; // List of `Role` instances

	constructor(orgName = "", occasions = 4, weeklySchedule = true, volunteers = [], roles = []) {
		this.orgName = orgName;
		this.occasions = occasions;
		this.weeklySchedule = weeklySchedule;
		this.volunteers = volunteers
		this.roles = roles;
	}

	async schedule() {
		// Initialize the model instance
		const model = new Model();
		model.addFile('volunteer_scheduling.mzn', MznModel);
		model.interface({
			options: {
				solver: 'gecode'
			}
		});
		const data = {
			occasions: this.occasions,
			Volunteer: this.volunteers.map((v) => `v${v.id}`),
			Role: this.roles.map((r) => `r${r.id}`),
			restrictions: this.roles.map((r) => ({ set: r.restrictions })),
			// TODO
			capability: this.volunteers.map((_v) => (this.roles.map((_r) => this.occasions))),
			exclusive_roles: [],
		};
		model.addJson(data);
		// console.log(data);
		// Solve and process
		let roster = null;
		try {
			const result = await model.solve({
				options: {
					solver: 'gecode',
				}
			});
			// console.log(result.status);
			// console.log(result.solution);
			if (result.solution !== null) {
				const assignment = result.solution.output.json.assignment;
				roster = {
					rosterId: 100,
					date: new Date().toDateString(),
					roster: this.roles.map((r, i) => ({
						roleId: r.id,
						occasions: assignment.map((li) => Number(li[i].e.substring(1))),
					})),
				};
			}
		} catch (error) {
			console.error(error);
		}
		return roster;
	}
}

export class Volunteer {
	static nextId = 1;
	#id; // Unique integer identifier
	firstName; // String first name
	surname = ""; // String suranme

	constructor(firstName, surname = "") {
		this.#id = Volunteer.nextId++;
		this.firstName = firstName;
		this.surname = surname
	}

	get id() {
		return this.#id;
	}
}

export class Role {
	static nextId = 1;
	#id; // Unique integer identifier
	name; // String naming of role 
	restrictions; // List of `Rule` instances

	constructor(name, restrictions = []) {
		this.#id = Role.nextId++;
		this.name = name;
		this.restrictions = restrictions;
	}

	get id() {
		return this.#id;
	}
}

export const Restriction = {
	NoOtherRole: 'NoOtherRole',
	NoConsecutiveWeeks: 'NoConsecutiveWeeks',
};

