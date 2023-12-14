// import { useRosterStore} from '@/stores/roster'
// const rosterStore = useRosterStore();

// const lastId = rosterStore.rosters[rosterStore.rosters.length-1].rosterId;
const lastId = 2000;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 4x weeks worth of rosters!
export const OptimizedRoster = {
    getData() {
        return {
            rosterId: lastId+1,
            date: "2021-12-10",
            roster: [
              {
                  roleId: 1,
                  occasions: {
                    instance1: getRandomInt(1,38),
                    instance2: getRandomInt(1,38),
                    instance3: getRandomInt(1,38),
                    instance4: getRandomInt(1,38)
                  }
              },
              {
                  roleId: 2,
                  occasions: {
                    instance1: getRandomInt(1,38),
                    instance2: getRandomInt(1,38),
                    instance3: getRandomInt(1,38),
                    instance4: getRandomInt(1,38)
                  }
              },
              {
                  roleId: 3,
                  occasions: {
                    instance1: getRandomInt(1,38),
                    instance2: getRandomInt(1,38),
                    instance3: getRandomInt(1,38),
                    instance4: getRandomInt(1,38)
                  }
              },
              {
                  roleId: 4,
                  occasions: {
                    instance1: getRandomInt(1,38),
                    instance2: getRandomInt(1,38),
                    instance3: getRandomInt(1,38),
                    instance4: getRandomInt(1,38)
                  }
              },
              {
                  roleId: 5,
                  occasions: {
                    instance1: getRandomInt(1,38),
                    instance2: getRandomInt(1,38),
                    instance3: getRandomInt(1,38),
                    instance4: getRandomInt(1,38)
                  }
              },
              {
                  roleId: 6,
                  occasions: {
                    instance1: getRandomInt(1,38),
                    instance2: getRandomInt(1,38),
                    instance3: getRandomInt(1,38),
                    instance4: getRandomInt(1,38)
                  }
              },
            ]
          }
    },
    getRosterSmall() {
        return Promise.resolve(this.getData().slice(0, 4));
    },
    
    getRosterMedium() {
        return Promise.resolve(this.getData().slice(0, 8));
    },
    
    getRosterLarge() {
        return Promise.resolve(this.getData().slice(0, 12));
    }
};