enum Volunteer;
enum Role;
int: occasions;
enum Occasion = O(1..occasions);

enum RoleConstraints = {
	NoConsecutiveWeeks,
	NoOtherRole,
};

% --- INPUT DATA ---

% Whether a volunteer has the capability to fulfil a role.
array[Volunteer, Role] of bool: capability;
% Whether a volunteer is available for a particular occasion.
array[Volunteer, Occasion] of bool: availability;

% A collection of roles that are mutually exclusive
array[int] of tuple(Role, Role): exclusive_roles;

% Special rules that are applied to particular roles
array[Role] of set of RoleConstraints: restrictions;

% --- DECISION ---

% The volunteer to which the role will be assigned at each occasion
array[Occasion, Role] of var Volunteer: assignment;

% --- CONSTRAINTS ---

% A volunteer cannot be assigned a role that it is not capable of fulfilling.
constraint forall (v in Volunteer, r in Role where not capability[v,r]) (
	forall (o in Occasion) (
		assignment[o, r] != v
	)
);

% A volunteer cannot be assigned a role on a week where they are not available.
constraint forall (v in Volunteer, o in Occasion where not availability[v,o]) (
	forall (r in Role) (
		assignment[o, r] != v
	)
);

% A volunteer cannot be assigned two roles in the same occasion that are mutually exclusive.
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
solve
	:: int_search(assignment, input_order, indomain_random, complete)
	minimize sum(v in Volunteer) (num_roles[v]^2);
