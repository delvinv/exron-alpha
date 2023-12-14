// 4x weeks worth of rosters!
export const OptimizedRoster = {
    getData() {
        return [
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