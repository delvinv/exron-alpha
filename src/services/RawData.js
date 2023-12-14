// Name of organisation
const orgName = "DCOC";
// Number of occasions for which to generate a roster
const occasions = 4;
// Suited for organisations that schedule for weekly occurrences (i.e. each occasion = one week)
const weeklySchedule = true;




// List of volunteers in the organisation
const volunteers = 
[
    {
        "id": 1,
        "forename": "Alan",
        "surname": "B",
        "unavailable": ["2024-01-07"]
    },
    {
        "id": 2,
        "forename": "Bev",
        "surname": "B",
        "unavailable": ["2024-01-07"]
    },
    {
        "id": 3,
        "forename": "Paul",
        "surname": "B",
        "unavailable": ["2023-12-31"]
    },
    {
        "id": 4,
        "forename": "Andy",
        "surname": "C",
        "unavailable": []
    },
    {
        "id": 5,
        "forename": "Mitch",
        "surname": "C",
        "unavailable": []
    },
    {
        "id": 6,
        "forename": "Nora",
        "surname": "C",
        "unavailable": []
    },
    {
        "id": 7,
        "forename": "Barbara",
        "surname": "E",
        "unavailable": []
    },
    {
        "id": 8,
        "forename": "Jack",
        "surname": "E",
        "unavailable": []
    },
    {
        "id": 9,
        "forename": "Clive",
        "surname": "G",
        "unavailable": []
    },
    {
        "id": 10,
        "forename": "Jenny",
        "surname": "G",
        "unavailable": []
    },
    {
        "id": 11,
        "forename": "Arthur",
        "surname": "H",
        "unavailable": []
    },
    {
        "id": 12,
        "forename": "Catherine",
        "surname": "H",
        "unavailable": []
    },
    {
        "id": 13,
        "forename": "Gabriel",
        "surname": "H",
        "unavailable": []
    },
    {
        "id": 14,
        "forename": "Nathanael",
        "surname": "H",
        "unavailable": []
    },
    {
        "id": 15,
        "forename": "Dorothy",
        "surname": "H",
        "unavailable": []
    },
    {
        "id": 16,
        "forename": "Boutros",
        "surname": "J",
        "unavailable": []
    },
    {
        "id": 17,
        "forename": "Glenda",
        "surname": "J",
        "unavailable": []
    },
    {
        "id": 18,
        "forename": "Michelle",
        "surname": "J",
        "unavailable": []
    },
    {
        "id": 19,
        "forename": "Don",
        "surname": "K",
        "unavailable": []
    },
    {
        "id": 20,
        "forename": "Val",
        "surname": "K",
        "unavailable": []
    },
    {
        "id": 21,
        "forename": "Abin",
        "surname": "M",
        "unavailable": []
    },
    {
        "id": 22,
        "forename": "Tesia",
        "surname": "M",
        "unavailable": []
    },
    {
        "id": 23,
        "forename": "Tina",
        "surname": "M",
        "unavailable": []
    },
    {
        "id": 24,
        "forename": "Vinod",
        "surname": "M",
        "unavailable": []
    },
    {
        "id": 25,
        "forename": "Gora",
        "surname": "O",
        "unavailable": []
    },
    {
        "id": 26,
        "forename": "Sunday",
        "surname": "O",
        "unavailable": []
    },
    {
        "id": 27,
        "forename": "Hoghei",
        "surname": "R",
        "unavailable": []
    },
    {
        "id": 28,
        "forename": "Mark",
        "surname": "R",
        "unavailable": []
    },
    {
        "id": 29,
        "forename": "Meg",
        "surname": "R",
        "unavailable": []
    },
    {
        "id": 30,
        "forename": "Annette",
        "surname": "R",
        "unavailable": []
    },
    {
        "id": 31,
        "forename": "Les",
        "surname": "R",
        "unavailable": []
    },
    {
        "id": 32,
        "forename": "Morag",
        "surname": "T",
        "unavailable": []
    },
    {
        "id": 33,
        "forename": "Delvin",
        "surname": "V",
        "unavailable": []
    },
    {
        "id": 34,
        "forename": "Emily",
        "surname": "V",
        "unavailable": []
    },
    {
        "id": 35,
        "forename": "Belinda",
        "surname": "W",
        "unavailable": []
    },
    {
        "id": 36,
        "forename": "Carol",
        "surname": "Y",
        "unavailable": []
    },
    {
        "id": 37,
        "forename": "Terry",
        "surname": "Y",
        "unavailable": []
    },
    {
        "id": 38,
        "forename": "Albert",
        "surname": " ",
        "unavailable": []
    },
    {
        "id": 39,
        "forename": "Merv",
        "surname": " ",
        "unavailable": []
    }
];

// List of Roles in the organisation
const roles = [
    {
      "id": 1,
      "task-name": "Audio",
      "numbers": 1
    },
    {
      "id": 2,
      "task-name": "Visual",
      "numbers": 1
    },
    {
      "id": 3,
      "task-name": "Musicians",
      "numbers": 2
    },
    {
      "id": 4,
      "task-name": "Reading",
      "numbers": 1
    },
    {
      "id": 5,
      "task-name": "Speaker",
      "numbers": 1
    },
    {
      "id": 6,
      "task-name": "Communion Helpers",
      "numbers": 4
    },
    {
      "id": 7,
      "task-name": "Communion Message",
      "numbers": 1
    },
    {
      "id": 8,
      "task-name": "Communion Setup",
      "numbers": 2
    },
    {
      "id": 9,
      "task-name": "Communion Washup",
      "numbers": 1
    },
    {
      "id": 10,
      "task-name": "Counters",
      "numbers": 2
    },
    {
      "id": 11,
      "task-name": "Kids Min",
      "numbers": 1
    },
    {
      "id": 12,
      "task-name": "Morning Tea",
      "numbers": 4
    },
    {
      "id": 13,
      "task-name": "Welcome",
      "numbers": 1
    }
   ];

/* Matching roles against volunteers 
For each role(id): who (volunteer id) can do it, and which occasions [] they have a preference
*/
const capabilities = {
    1: [
        {"id": 1, "preference": [2,4]}, 
        {"id": 4, "preference": [1]},
        {"id": 6, "preference": [2,4]}
    ],
    2: [
        {"id": 1, "preference": [2,4]}, 
        {"id": 4, "preference": [1,3]},
        {"id": 6, "preference": [2,4]}
    ],
};

// Setting role constraints - what roles cannot be done simultaneously with another role?
// roleId: [roleId, roleId]
const exclusiveRoles = {
    1: [5,6],
    2: [],
    3: [],
    4: [],
    5: [1],
    6: [1],
    7: [],
    8: [],
    9: [],
    10: [],
    11: [],
    12: [],
    13: []
}

/* What restrictions apply to certain roles
NoOtherTasks = dont put me on another task that same occassion
NoConsecutiveWeeks = dont put me on back to back weeks for this role (as its a heavy role) */
const restrictionsOnRoles = {
    1: {"isNoOtherTasks": false,"isNoConsecutiveWeeks": true}, 
    2 : {"isNoOtherTasks": false,"isNoConsecutiveWeeks": true},
    3 : {"isNoOtherTasks": false,"isNoConsecutiveWeeks": true},
    4 : {"isNoOtherTasks": false,"isNoConsecutiveWeeks": true},
    5 : {"isNoOtherTasks": false,"isNoConsecutiveWeeks": true},
    6 : {"isNoOtherTasks": false,"isNoConsecutiveWeeks": true},
    7 : {"isNoOtherTasks": false,"isNoConsecutiveWeeks": true},
    8 : {"isNoOtherTasks": false,"isNoConsecutiveWeeks": true},
    9 : {"isNoOtherTasks": false,"isNoConsecutiveWeeks": true},
    10 : {"isNoOtherTasks": false,"isNoConsecutiveWeeks": true},
    11 : {"isNoOtherTasks": false,"isNoConsecutiveWeeks": true},
    12 : {"isNoOtherTasks": false,"isNoConsecutiveWeeks": true},
    13 : {"isNoOtherTasks": false,"isNoConsecutiveWeeks": true}
};

export default {
    getVolunteers(){
        return volunteers;
    },
    getRoles(){
        return roles;
    },
    getCapabilities(){
        return capabilities;
    },
    getExclusiveRoles(){
        return exclusiveRoles;
    },
    getRestrictionsOnRoles(){
        return restrictionsOnRoles;
    },
    getNumOccasions(){
        return occasions;
    },
    isWeeklySchedule(){
        return weeklySchedule;
    },
    getOrgName(){
        return orgName;
    }
    
}