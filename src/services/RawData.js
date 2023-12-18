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
        "unavailable": ["2024-01-07","2024-01-14"],
        "capabilities": [
            {roleId: 1, preferences: [2,4]},
            {roleId: 2, preferences: [1,3]},
            {roleId: 3, preferences: [2,4]}
        ]
    },
    {
        "id": 2,
        "forename": "Bev",
        "surname": "B",
        "unavailable": ["2024-01-07"],
        "capabilities": [
            {roleId: 4, preferences: [2,4]}
        ]
    },
    {
        "id": 3,
        "forename": "Paul",
        "surname": "B",
        "unavailable": ["2023-12-31"],
        "capabilities": [
            {roleId: 4, preferences: [2,4]}
        ]
    },
    {
        "id": 4,
        "forename": "Andy",
        "surname": "C",
        "unavailable": [],
        "capabilities": [
            {roleId: 4, preferences: [2,4]}
        ]
    },
    {
        "id": 5,
        "forename": "Mitch",
        "surname": "C",
        "unavailable": [],
        "capabilities": [
            {roleId: 4, preferences: [2,4]}
        ]
    },
    {
        "id": 6,
        "forename": "Nora",
        "surname": "C",
        "unavailable": [],
        "capabilities": [
            {roleId: 4, preferences: [2,4]}
        ]
    },
    {
        "id": 7,
        "forename": "Barbara",
        "surname": "E",
        "unavailable": [],
        "capabilities": [
            {roleId: 4, preferences: [2,4]}
        ]
    },
    {
        "id": 8,
        "forename": "Jack",
        "surname": "E",
        "unavailable": [],
        "capabilities": [
            {roleId: 4, preferences: [2,4]}
        ]
    },
    {
        "id": 9,
        "forename": "Clive",
        "surname": "G",
        "unavailable": [],
        "capabilities": [
            {roleId: 4, preferences: [2,4]}
        ]
    },
    {
        "id": 10,
        "forename": "Jenny",
        "surname": "G",
        "unavailable": [],
        "capabilities": [
            {roleId: 4, preferences: [2,4]}
        ]
    },
    {
        "id": 11,
        "forename": "Arthur",
        "surname": "H",
        "unavailable": [],
        "capabilities": [
            {roleId: 4, preferences: [2,4]}
        ]
    },
    {
        "id": 12,
        "forename": "Catherine",
        "surname": "H",
        "unavailable": [],
        "capabilities": [
            {roleId: 4, preferences: [2,4]}
        ]
    },
    {
        "id": 13,
        "forename": "Gabriel",
        "surname": "H",
        "unavailable": [],
        "capabilities": [
            {roleId: 4, preferences: [2,4]}
        ]
    },
    {
        "id": 14,
        "forename": "Nathanael",
        "surname": "H",
        "unavailable": [],
        "capabilities": [
            {roleId: 4, preferences: [2,4]}
        ]
    },
    {
        "id": 15,
        "forename": "Dorothy",
        "surname": "H",
        "unavailable": [],
        "capabilities": [
            {roleId: 4, preferences: [2,4]}
        ]
    },
    {
        "id": 16,
        "forename": "Boutros",
        "surname": "J",
        "unavailable": [],
        "capabilities": [
            {roleId: 4, preferences: [2,4]}
        ]
    },
    {
        "id": 17,
        "forename": "Glenda",
        "surname": "J",
        "unavailable": [],
        "capabilities": [
            {roleId: 4, preferences: [2,4]}
        ]
    },
    {
        "id": 18,
        "forename": "Michelle",
        "surname": "J",
        "unavailable": [],
        "capabilities": [
            {roleId: 4, preferences: [2,4]}
        ]
    },
    {
        "id": 19,
        "forename": "Don",
        "surname": "K",
        "unavailable": [],
        "capabilities": [
            {roleId: 4, preferences: [2,4]}
        ]
    },
    {
        "id": 20,
        "forename": "Val",
        "surname": "K",
        "unavailable": [],
        "capabilities": [
            {roleId: 4, preferences: [2,4]}
        ]
    },
    {
        "id": 21,
        "forename": "Abin",
        "surname": "M",
        "unavailable": [],
        "capabilities": [
            {roleId: 4, preferences: [2,4]}
        ]
    },
    {
        "id": 22,
        "forename": "Tesia",
        "surname": "M",
        "unavailable": [],
        "capabilities": [
            {roleId: 4, preferences: [2,4]}
        ]
    },
    {
        "id": 23,
        "forename": "Tina",
        "surname": "M",
        "unavailable": [],
        "capabilities": [
            {roleId: 4, preferences: [2,4]}
        ]
    },
    {
        "id": 24,
        "forename": "Vinod",
        "surname": "M",
        "unavailable": [],
        "capabilities": [
            {roleId: 4, preferences: [2,4]}
        ]
    },
    {
        "id": 25,
        "forename": "Gora",
        "surname": "O",
        "unavailable": [],
        "capabilities": [
            {roleId: 4, preferences: [2,4]}
        ]
    },
    {
        "id": 26,
        "forename": "Sunday",
        "surname": "O",
        "unavailable": [],
        "capabilities": [
            {roleId: 4, preferences: [2,4]}
        ]
    },
    {
        "id": 27,
        "forename": "Hoghei",
        "surname": "R",
        "unavailable": [],
        "capabilities": [
            {roleId: 4, preferences: [2,4]}
        ]
    },
    {
        "id": 28,
        "forename": "Mark",
        "surname": "R",
        "unavailable": [],
        "capabilities": [
            {roleId: 4, preferences: [2,4]}
        ]
    },
    {
        "id": 29,
        "forename": "Meg",
        "surname": "R",
        "unavailable": [],
        "capabilities": [
            {roleId: 4, preferences: [2,4]}
        ]
    },
    {
        "id": 30,
        "forename": "Annette",
        "surname": "R",
        "unavailable": [],
        "capabilities": [
            {roleId: 4, preferences: [2,4]}
        ]
    },
    {
        "id": 31,
        "forename": "Les",
        "surname": "R",
        "unavailable": [],
        "capabilities": [
            {roleId: 4, preferences: [2,4]}
        ]
    },
    {
        "id": 32,
        "forename": "Morag",
        "surname": "T",
        "unavailable": [],
        "capabilities": [
            {roleId: 4, preferences: [2,4]}
        ]
    },
    {
        "id": 33,
        "forename": "Delvin",
        "surname": "V",
        "unavailable": [],
        "capabilities": [
            {roleId: 4, preferences: [2,4]}
        ]
    },
    {
        "id": 34,
        "forename": "Emily",
        "surname": "V",
        "unavailable": [],
        "capabilities": [
            {roleId: 4, preferences: [2,4]}
        ]
    },
    {
        "id": 35,
        "forename": "Belinda",
        "surname": "W",
        "unavailable": [],
        "capabilities": [
            {roleId: 4, preferences: [2,4]}
        ]
    },
    {
        "id": 36,
        "forename": "Carol",
        "surname": "Y",
        "unavailable": [],
        "capabilities": [
            {roleId: 4, preferences: [2,4]}
        ]
    },
    {
        "id": 37,
        "forename": "Terry",
        "surname": "Y",
        "unavailable": [],
        "capabilities": [
            {roleId: 4, preferences: [2,4]}
        ]
    },
    {
        "id": 38,
        "forename": "Albert",
        "surname": " ",
        "unavailable": [],
        "capabilities": [
            {roleId: 4, preferences: [2,4]}
        ]
    },
    {
        "id": 39,
        "forename": "Merv",
        "surname": " ",
        "unavailable": [],
        "capabilities": [
            {roleId: 4, preferences: [2,4]}
        ]
    }
];

// List of Roles in the organisation
/* What restrictions apply to certain roles
NoOtherTasks = dont put me on another task that same occassion
NoConsecutiveWeeks = dont put me on back to back weeks for this role (as its a heavy role) 
roleClashes = Setting role constraints - what roles cannot be done simultaneously with another role?
// roleId: [roleId, roleId]
*/
const roles = [
    {
      "id": 1,
      "name": "Audio",
      "numbers": 1,
      "isNoOtherTasks": false,
      "isNoConsecutiveWeeks": true,
      "roleClashes": [5,6]
    },
    {
      "id": 2,
      "name": "Visual",
      "numbers": 1,
      "isNoOtherTasks": true,
      "isNoConsecutiveWeeks": true,
      "roleClashes": []
    },
    {
      "id": 3,
      "name": "Musicians",
      "numbers": 2,
      "isNoOtherTasks": false,
      "isNoConsecutiveWeeks": true,
      "roleClashes": []
    },
    {
      "id": 4,
      "name": "Reading",
      "numbers": 1,
      "isNoOtherTasks": false,
      "isNoConsecutiveWeeks": true,
      "roleClashes": []
    },
    {
      "id": 5,
      "name": "Speaker",
      "numbers": 1,
      "isNoOtherTasks": false,
      "isNoConsecutiveWeeks": true,
      "roleClashes": [1]
    },
    {
      "id": 6,
      "name": "Comm Helpers",
      "numbers": 4,
      "isNoOtherTasks": false,
      "isNoConsecutiveWeeks": true,
      "roleClashes": [1]
    },
    {
      "id": 7,
      "name": "Comm Message",
      "numbers": 1,
      "isNoOtherTasks": false,
      "isNoConsecutiveWeeks": true,
      "roleClashes": []
    },
    {
      "id": 8,
      "name": "Comm Setup",
      "numbers": 2,
      "isNoOtherTasks": false,
      "isNoConsecutiveWeeks": true,
      "roleClashes": []
    },
    {
      "id": 9,
      "name": "Comm Washup",
      "numbers": 1,
      "isNoOtherTasks": false,
      "isNoConsecutiveWeeks": true,
      "roleClashes": []
    },
    {
      "id": 10,
      "name": "Counters",
      "numbers": 2,
      "isNoOtherTasks": false,
      "isNoConsecutiveWeeks": true,
      "roleClashes": []
    },
    {
      "id": 11,
      "name": "Kids Min",
      "numbers": 1,
      "isNoOtherTasks": false,
      "isNoConsecutiveWeeks": true,
      "roleClashes": []
    },
    {
      "id": 12,
      "name": "Morning Tea",
      "numbers": 4,
      "isNoOtherTasks": false,
      "isNoConsecutiveWeeks": true,
      "roleClashes": []
    },
    {
      "id": 13,
      "name": "Welcome",
      "numbers": 1,
      "isNoOtherTasks": false,
      "isNoConsecutiveWeeks": false,
      "roleClashes": []
    }
   ];

/* Matching roles against volunteers 
For each role(id): who (volunteer id) can do it, and which occasions [] they have a preference
*/
const capabilities = [
    {
        roleId: 1,
        trainedVols: [
            {volunteerId: 9, preferences: [2,4]},
            {volunteerId: 8, preferences: [1]},
            {volunteerId: 7, preferences: [2,4]}
        ]
    },
    {
        roleId: 2,
        trainedVols: [
            {volunteerId: 1, preferences: [2,4]},
            {volunteerId: 4, preferences: [1,3]},
            {volunteerId: 6, preferences: [2,4]}
        ]
    }
];

const rosters = 
[
  {
    rosterId: 100,
    date: "2023-12-10",
    roster: [
      {
          roleId: 1,
          occasions: {
              instance1: 10,
              instance2: 20,
              instance3: 30,
              instance4: 39
          }
      },
      {
          roleId: 2,
          occasions: {
              instance1: 5,
              instance2: 6,
              instance3: 7,
              instance4: 8
          }
      },
      {
          roleId: 3,
          occasions: {
              instance1: 9,
              instance2: 12,
              instance3: 12,
              instance4: 21
          }
      },
      {
          roleId: 4,
          occasions: {
              instance1: 11,
              instance2: 12,
              instance3: 23,
              instance4: 27
          }
      },
      {
          roleId: 5,
          occasions: {
              instance1: 1,
              instance2: 2,
              instance3: 2,
              instance4: 2
          }
      },
      {
          roleId: 6,
          occasions: {
              instance1: 1,
              instance2: 2,
              instance3: 2,
              instance4: 2
          }
      },
    ]
  },
  {
    rosterId: 200,
    date: "2023-11-10",
    roster: [
      {
          roleId: 1,
          occasions: {
              instance1: 1,
              instance2: 2,
              instance3: 3,
              instance4: 4
          }
      },
      {
          roleId: 2,
          occasions: {
              instance1: 5,
              instance2: 6,
              instance3: 7,
              instance4: 8
          }
      },
      {
          roleId: 3,
          occasions: {
              instance1: 9,
              instance2: 12,
              instance3: 12,
              instance4: 21
          }
      },
      {
          roleId: 4,
          occasions: {
              instance1: 11,
              instance2: 12,
              instance3: 23,
              instance4: 27
          }
      },
      {
          roleId: 5,
          occasions: {
              instance1: 1,
              instance2: 2,
              instance3: 2,
              instance4: 2
          }
      },
      {
          roleId: 6,
          occasions: {
              instance1: 1,
              instance2: 2,
              instance3: 2,
              instance4: 2
          }
      },
    ]
  },
  {
    rosterId: 300,
    date: "2023-11-10",
    roster: [
      {
          roleId: 1,
          occasions: {
              instance1: 1,
              instance2: 2,
              instance3: 3,
              instance4: 4
          }
      },
      {
          roleId: 2,
          occasions: {
              instance1: 5,
              instance2: 6,
              instance3: 7,
              instance4: 8
          }
      }
    ]}
]

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
    getNumOccasions(){
        return occasions;
    },
    isWeeklySchedule(){
        return weeklySchedule;
    },
    getOrgName(){
        return orgName;
    }
    ,
    getRosters(){
        return rosters;
    }
    
}