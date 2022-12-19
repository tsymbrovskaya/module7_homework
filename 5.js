class Device {
    type = 'electric';

    constructor(enabled) {
        this.enabled = enabled;
    }
}

class Computer extends Device {
    power = 75;
}

class Lamp extends Device {
    power = 15;
}


function countPower(arr) {
    let power = 0
    for (let i = 0; i < arr.length; i++) {
        let device = arr[i]
        if (device.enabled) {
            power = power + device.power
        }
    }

    console.log(power)

}

const comp1 = new Computer(true)
const comp2 = new Computer(false)

const lamp1 = new Lamp(true)
const lamp2 = new Lamp(false)
const lamp3 = new Lamp(true)

const arr = [comp1, comp2, lamp1, lamp2, lamp3]

countPower(arr)