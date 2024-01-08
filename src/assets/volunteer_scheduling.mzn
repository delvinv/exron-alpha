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
