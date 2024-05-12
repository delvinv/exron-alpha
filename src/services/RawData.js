// Name of organisation
const orgName = 'DCOC'
// Number of occasions for which to generate a roster
const occasions = 4
// Suited for organisations that schedule for weekly occurrences (i.e. each occasion = one week)
const weeklySchedule = true

// List of volunteers in the organisation
const volunteers = [
  {
    id: 1,
    forename: 'Alan',
    surname: 'B',
    unavailable: [1],
    capabilities: [
      { roleId: 6, preferences: [] },
      { roleId: 7, preferences: [2, 4] },
      { roleId: 8, preferences: [2, 4] },
      { roleId: 12, preferences: [] },
      { roleId: 13, preferences: [] }
    ]
  },
  {
    id: 2,
    forename: 'Bev',
    surname: 'B',
    unavailable: [1],
    capabilities: [
      { roleId: 7, preferences: [2, 4] },
      { roleId: 8, preferences: [2, 4] },
      { roleId: 12, preferences: [] },
      { roleId: 13, preferences: [] }
    ]
  },
  {
    id: 3,
    forename: 'Paul',
    surname: 'B',
    unavailable: [2],
    capabilities: [
      { roleId: 1, preferences: [] },
      { roleId: 4, preferences: [] },
      { roleId: 10, preferences: [] }
    ]
  },
  {
    id: 4,
    forename: 'Andy',
    surname: 'C',
    unavailable: [],
    capabilities: [{ roleId: 12, preferences: [] }]
  },
  {
    id: 5,
    forename: 'Mitch',
    surname: 'C',
    unavailable: [],
    capabilities: [
      { roleId: 12, preferences: [] },
      { roleId: 6, preferences: [] }
    ]
  },
  {
    id: 6,
    forename: 'Nora',
    surname: 'C',
    unavailable: [],
    capabilities: [
      { roleId: 12, preferences: [] },
      { roleId: 6, preferences: [] },
      { roleId: 3, preferences: [] }
    ]
  },
  {
    id: 7,
    forename: 'Barbara',
    surname: 'E',
    unavailable: [],
    capabilities: [{ roleId: 13, preferences: [] }]
  },
  {
    id: 8,
    forename: 'Jack',
    surname: 'E',
    unavailable: [],
    capabilities: [{ roleId: 13, preferences: [] }]
  },
  {
    id: 9,
    forename: 'Clive',
    surname: 'G',
    unavailable: [],
    capabilities: [
      { roleId: 4, preferences: [] },
      { roleId: 10, preferences: [] },
      { roleId: 13, preferences: [] }
    ]
  },
  {
    id: 10,
    forename: 'Jenny',
    surname: 'G',
    unavailable: [],
    capabilities: [{ roleId: 7, preferences: [] }]
  },
  {
    id: 11,
    forename: 'Arthur',
    surname: 'H',
    unavailable: [],
    capabilities: [
      { roleId: 1, preferences: [] },
      { roleId: 4, preferences: [] }
    ]
  },
  {
    id: 12,
    forename: 'Catherine',
    surname: 'H',
    unavailable: [],
    capabilities: [{ roleId: 11, preferences: [] }]
  },
  {
    id: 13,
    forename: 'Gabriel',
    surname: 'H',
    unavailable: [],
    capabilities: [
      { roleId: 3, preferences: [] },
      { roleId: 5, preferences: [] }
    ]
  },
  {
    id: 14,
    forename: 'Nathanael',
    surname: 'H',
    unavailable: [],
    capabilities: [{ roleId: 2, preferences: [] }]
  },
  {
    id: 15,
    forename: 'Dorothy',
    surname: 'H',
    unavailable: [],
    capabilities: [{ roleId: 12, preferences: [] }]
  },
  {
    id: 16,
    forename: 'Boutros',
    surname: 'J',
    unavailable: [],
    capabilities: [{ roleId: 4, preferences: [] }]
  },
  {
    id: 17,
    forename: 'Glenda',
    surname: 'J',
    unavailable: [],
    capabilities: [{ roleId: 13, preferences: [] }]
  },
  {
    id: 18,
    forename: 'Michelle',
    surname: 'J',
    unavailable: [],
    capabilities: [
      { roleId: 3, preferences: [] },
      { roleId: 6, preferences: [] }
    ]
  },
  {
    id: 19,
    forename: 'Don',
    surname: 'K',
    unavailable: [],
    capabilities: [
      { roleId: 8, preferences: [] },
      { roleId: 9, preferences: [] },
      { roleId: 12, preferences: [] }
    ]
  },
  {
    id: 20,
    forename: 'Val',
    surname: 'K',
    unavailable: [],
    capabilities: [
      { roleId: 8, preferences: [] },
      { roleId: 9, preferences: [] },
      { roleId: 12, preferences: [] }
    ]
  },
  {
    id: 21,
    forename: 'Abin',
    surname: 'M',
    unavailable: [],
    capabilities: [{ roleId: 1, preferences: [] }]
  },
  {
    id: 22,
    forename: 'Tesia',
    surname: 'M',
    unavailable: [],
    capabilities: [{ roleId: 2, preferences: [] }]
  },
  {
    id: 23,
    forename: 'Tina',
    surname: 'M',
    unavailable: [],
    capabilities: [{ roleId: 6, preferences: [] }]
  },
  {
    id: 24,
    forename: 'Vinod',
    surname: 'M',
    unavailable: [],
    capabilities: [
      { roleId: 6, preferences: [] },
      { roleId: 10, preferences: [] }
    ]
  },
  {
    id: 25,
    forename: 'Gora',
    surname: 'O',
    unavailable: [],
    capabilities: [{ roleId: 12, preferences: [] }]
  },
  {
    id: 26,
    forename: 'Sunday',
    surname: 'O',
    unavailable: [],
    capabilities: [{ roleId: 12, preferences: [] }]
  },
  {
    id: 27,
    forename: 'Hoghei',
    surname: 'R',
    unavailable: [],
    capabilities: [{ roleId: 3, preferences: [] }]
  },
  {
    id: 28,
    forename: 'Mark',
    surname: 'R',
    unavailable: [],
    capabilities: [
      { roleId: 3, preferences: [] },
      { roleId: 1, preferences: [] }
    ]
  },
  {
    id: 29,
    forename: 'Meg',
    surname: 'R',
    unavailable: [],
    capabilities: [
      { roleId: 6, preferences: [] },
      { roleId: 12, preferences: [] }
    ]
  },
  {
    id: 30,
    forename: 'Annette',
    surname: 'R',
    unavailable: [],
    capabilities: [
      { roleId: 8, preferences: [1, 3] },
      { roleId: 9, preferences: [1, 3] },
      { roleId: 6, preferences: [1, 3] }
    ]
  },
  {
    id: 31,
    forename: 'Les',
    surname: 'R',
    unavailable: [],
    capabilities: [
      { roleId: 8, preferences: [1, 3] },
      { roleId: 9, preferences: [1, 3] },
      { roleId: 6, preferences: [1, 3] },
      { roleId: 5, preferences: [] },
      { roleId: 7, preferences: [] },
      { roleId: 10, preferences: [] }
    ]
  },
  {
    id: 32,
    forename: 'Morag',
    surname: 'T',
    unavailable: [],
    capabilities: [
      { roleId: 3, preferences: [] },
      { roleId: 4, preferences: [] },
      { roleId: 5, preferences: [] },
      { roleId: 7, preferences: [] }
    ]
  },
  {
    id: 33,
    forename: 'Delvin',
    surname: 'V',
    unavailable: [],
    capabilities: [
      { roleId: 1, preferences: [] },
      { roleId: 2, preferences: [] },
      { roleId: 3, preferences: [] }
    ]
  },
  {
    id: 34,
    forename: 'Emily',
    surname: 'V',
    unavailable: [],
    capabilities: [{ roleId: 13, preferences: [] }]
  },
  {
    id: 35,
    forename: 'Belinda',
    surname: 'W',
    unavailable: [],
    capabilities: [
      { roleId: 3, preferences: [] },
      { roleId: 7, preferences: [] }
    ]
  },
  {
    id: 36,
    forename: 'Carol',
    surname: 'Y',
    unavailable: [],
    capabilities: [
      { roleId: 6, preferences: [] },
      { roleId: 8, preferences: [] },
      { roleId: 9, preferences: [] },
      { roleId: 12, preferences: [] }
    ]
  },
  {
    id: 37,
    forename: 'Terry',
    surname: 'Y',
    unavailable: [],
    capabilities: [
      { roleId: 6, preferences: [] },
      { roleId: 8, preferences: [] },
      { roleId: 9, preferences: [] },
      { roleId: 10, preferences: [] }
    ]
  },
  {
    id: 38,
    forename: 'Albert',
    surname: ' ',
    unavailable: [],
    capabilities: [{ roleId: 10, preferences: [] }]
  },
  {
    id: 39,
    forename: 'Merv',
    surname: ' ',
    unavailable: [],
    capabilities: [{ roleId: 9, preferences: [] }]
  },
  {
    id: 40,
    forename: 'Praveen',
    surname: 'E',
    unavailable: [],
    capabilities: [{ roleId: 2, preferences: [] }]
  },
  {
    id: 41,
    forename: 'Marg',
    surname: 'J',
    unavailable: [],
    capabilities: [{ roleId: 10, preferences: [] }]
  }
]

// List of Roles in the organisation
/* What restrictions apply to certain roles
NoOtherTasks = dont put me on another task that same occassion
NoConsecutiveWeeks = dont put me on back to back weeks for this role (as its a heavy role) 
roleClashes = Setting role constraints - what roles cannot be done simultaneously with another role?
// roleId: [roleId, roleId]
*/
const roles = [
  {
    id: 1,
    name: 'Audio',
    numbers: 1,
    isNoOtherTasks: true,
    isNoConsecutiveWeeks: true,
    roleClashes: [5, 6]
  },
  {
    id: 2,
    name: 'Visual',
    numbers: 1,
    isNoOtherTasks: true,
    isNoConsecutiveWeeks: true,
    roleClashes: []
  },
  {
    id: 14,
    name: 'Music Lead',
    numbers: 1,
    isNoOtherTasks: true,
    isNoConsecutiveWeeks: true,
    roleClashes: []
  },
  {
    id: 3,
    name: 'Musicians',
    numbers: 2,
    isNoOtherTasks: true,
    isNoConsecutiveWeeks: true,
    roleClashes: []
  },
  {
    id: 4,
    name: 'Reading',
    numbers: 1,
    isNoOtherTasks: false,
    isNoConsecutiveWeeks: true,
    roleClashes: []
  },
  {
    id: 5,
    name: 'Speaker',
    numbers: 1,
    isNoOtherTasks: true,
    isNoConsecutiveWeeks: true,
    roleClashes: [1]
  },
  {
    id: 6,
    name: 'Comm Helpers',
    numbers: 4,
    isNoOtherTasks: false,
    isNoConsecutiveWeeks: false,
    roleClashes: [1]
  },
  {
    id: 7,
    name: 'Comm Message',
    numbers: 1,
    isNoOtherTasks: true,
    isNoConsecutiveWeeks: true,
    roleClashes: []
  },
  {
    id: 8,
    name: 'Comm Setup',
    numbers: 2,
    isNoOtherTasks: false,
    isNoConsecutiveWeeks: false,
    roleClashes: []
  },
  {
    id: 9,
    name: 'Comm Washup',
    numbers: 1,
    isNoOtherTasks: false,
    isNoConsecutiveWeeks: false,
    roleClashes: []
  },
  {
    id: 10,
    name: 'Counters',
    numbers: 2,
    isNoOtherTasks: false,
    isNoConsecutiveWeeks: false,
    roleClashes: []
  },
  {
    id: 11,
    name: 'Kids Min',
    numbers: 1,
    isNoOtherTasks: false,
    isNoConsecutiveWeeks: false,
    roleClashes: []
  },
  {
    id: 12,
    name: 'Morning Tea',
    numbers: 4,
    isNoOtherTasks: false,
    isNoConsecutiveWeeks: false,
    roleClashes: []
  },
  {
    id: 13,
    name: 'Welcome',
    numbers: 1,
    isNoOtherTasks: false,
    isNoConsecutiveWeeks: false,
    roleClashes: []
  }
]

/* Matching roles against volunteers 
For each role(id): who (volunteer id) can do it, and which occasions [] they have a preference
*/
const capabilities = [
  {
    roleId: 1,
    trainedVols: [
      { volunteerId: 11, preferences: [] },
      // { volunteerId: 3, preferences: [] },
      // { volunteerId: 16, preferences: [] },
      // { volunteerId: 33, preferences: [] },
      { volunteerId: 21, preferences: [] }
    ]
  },
  {
    roleId: 2,
    trainedVols: [
      { volunteerId: 40, preferences: [] },
      { volunteerId: 14, preferences: [] },
      // { volunteerId: 33, preferences: [] },
      // { volunteerId: 16, preferences: [] },
      { volunteerId: 22, preferences: [] }
    ]
  },
  {
    roleId: 14,
    trainedVols: [
      { volunteerId: 13, preferences: [] },
      { volunteerId: 28, preferences: [] },
      { volunteerId: 33, preferences: [] },
      { volunteerId: 35, preferences: [] }
    ]
  },
  {
    roleId: 3,
    trainedVols: [
      { volunteerId: 6, preferences: [] },
      { volunteerId: 18, preferences: [] },
      { volunteerId: 27, preferences: [] },
      { volunteerId: 32, preferences: [] }
    ]
  },
  {
    roleId: 4,
    trainedVols: [
      { volunteerId: 3, preferences: [] },
      { volunteerId: 9, preferences: [] },
      { volunteerId: 11, preferences: [] },
      { volunteerId: 16, preferences: [] },
      { volunteerId: 4, preferences: [] }
    ]
  },
  {
    roleId: 5,
    trainedVols: [
      { volunteerId: 13, preferences: [] },
      { volunteerId: 31, preferences: [] },
      { volunteerId: 32, preferences: [] }
    ]
  },
  {
    roleId: 6,
    trainedVols: [
      { volunteerId: 5, preferences: [] },
      { volunteerId: 6, preferences: [] },
      { volunteerId: 1, preferences: [] },
      { volunteerId: 18, preferences: [] },
      { volunteerId: 23, preferences: [] },
      { volunteerId: 24, preferences: [] },
      { volunteerId: 29, preferences: [] },
      { volunteerId: 30, preferences: [1, 3] },
      { volunteerId: 31, preferences: [1, 3] },
      { volunteerId: 36, preferences: [] },
      { volunteerId: 37, preferences: [] }
    ]
  },
  {
    roleId: 7,
    trainedVols: [
      { volunteerId: 10, preferences: [] },
      { volunteerId: 28, preferences: [] },
      { volunteerId: 31, preferences: [] },
      { volunteerId: 32, preferences: [] },
      { volunteerId: 35, preferences: [] }
    ]
  },
  {
    roleId: 8,
    trainedVols: [
      { volunteerId: 1, preferences: [2, 4] },
      { volunteerId: 2, preferences: [2, 4] },
      { volunteerId: 19, preferences: [] },
      { volunteerId: 20, preferences: [] },
      { volunteerId: 30, preferences: [1, 3] },
      { volunteerId: 31, preferences: [1, 3] },
      { volunteerId: 36, preferences: [] },
      { volunteerId: 37, preferences: [] }
    ]
  },
  {
    roleId: 9,
    trainedVols: [
      { volunteerId: 1, preferences: [2, 4] },
      { volunteerId: 2, preferences: [2, 4] },
      { volunteerId: 19, preferences: [] },
      { volunteerId: 20, preferences: [] },
      { volunteerId: 30, preferences: [1, 3] },
      { volunteerId: 31, preferences: [1, 3] },
      { volunteerId: 36, preferences: [] },
      { volunteerId: 36, preferences: [] },
      { volunteerId: 39, preferences: [] }
    ]
  },
  {
    roleId: 10,
    trainedVols: [
      { volunteerId: 3, preferences: [] },
      { volunteerId: 9, preferences: [] },
      { volunteerId: 24, preferences: [] },
      { volunteerId: 31, preferences: [] },
      { volunteerId: 37, preferences: [] },
      { volunteerId: 38, preferences: [] },
      { volunteerId: 41, preferences: [] }
    ]
  },
  {
    roleId: 11,
    trainedVols: [{ volunteerId: 12, preferences: [] }]
  },
  {
    roleId: 12,
    trainedVols: [
      { volunteerId: 1, preferences: [] },
      { volunteerId: 2, preferences: [] },
      { volunteerId: 4, preferences: [] },
      { volunteerId: 5, preferences: [] },
      { volunteerId: 6, preferences: [] },
      { volunteerId: 15, preferences: [] },
      { volunteerId: 19, preferences: [] },
      { volunteerId: 20, preferences: [] },
      { volunteerId: 25, preferences: [] },
      { volunteerId: 26, preferences: [] },
      { volunteerId: 29, preferences: [] },
      { volunteerId: 36, preferences: [] }
    ]
  },
  {
    roleId: 13,
    trainedVols: [
      { volunteerId: 1, preferences: [] },
      { volunteerId: 2, preferences: [] },
      { volunteerId: 7, preferences: [] },
      { volunteerId: 8, preferences: [] },
      { volunteerId: 9, preferences: [] },
      { volunteerId: 17, preferences: [] },
      { volunteerId: 34, preferences: [] }
    ]
  }
]

const rosters = [
  {
    rosterId: 100,
    date: '2023-12-10',
    roster: [
      {
        roleId: 1,
        occasions: [10, 20, 30, 39]
      },
      {
        roleId: 2,
        occasions: [5, 6, 7, 8]
      },
      {
        roleId: 3,
        occasions: [9, 12, 12, 21]
      },
      {
        roleId: 4,
        occasions: [11, 12, 23, 27]
      },
      {
        roleId: 5,
        occasions: [1, 2, 2, 2]
      },
      {
        roleId: 6,
        occasions: [1, 2, 2, 2]
      }
    ]
  },
  {
    rosterId: 200,
    date: '2023-11-10',
    roster: [
      {
        roleId: 1,
        occasions: [1, 2, 3, 4]
      },
      {
        roleId: 2,
        occasions: [5, 6, 7, 8]
      },
      {
        roleId: 3,
        occasions: [9, 12, 12, 21]
      },
      {
        roleId: 4,
        occasions: [11, 12, 23, 27]
      },
      {
        roleId: 5,
        occasions: [1, 2, 2, 2]
      },
      {
        roleId: 6,
        occasions: [1, 2, 2, 2]
      }
    ]
  },
  {
    rosterId: 300,
    date: '2023-11-10',
    roster: [
      {
        roleId: 1,
        occasions: [1, 2, 3, 4]
      },
      {
        roleId: 2,
        occasions: [5, 6, 7, 8]
      }
    ]
  }
]

export default {
  getVolunteers() {
    return volunteers
  },
  getRoles() {
    return roles
  },
  getCapabilities() {
    return capabilities
  },
  getNumOccasions() {
    return occasions
  },
  isWeeklySchedule() {
    return weeklySchedule
  },
  getOrgName() {
    return orgName
  },
  getRosters() {
    return rosters
  }
}
