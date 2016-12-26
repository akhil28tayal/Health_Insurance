import { Injectable } from '@angular/core' ;

import { User, FitBit } from './user';

const user : User[] = [{
        name: "Akhil Tayal",
        age: 22,
        gender: "Male",
        address: "Banglore",
        height: 183,
        weight: 73.4 , 
        bloodPressure: {
            systolic: 120,
            diastolic: 80
        },
        exercise: 150,
        BMI: 70
    },
        { 
        name: "Akhil",
        age: 22,
        gender: "Male",
        address: "Banglore",
        height: 183,
        weight: 73.4 , 
        bloodPressure: {
            systolic: 120,
            diastolic: 80
        },
        exercise: 150,
        BMI: 70  
    }
]

const fitbit : FitBit = {
    steps: 3852,
    distance: 5.6,
    calories: 2078,
    activity: {
        exercise: 125,
        sleep: 246,
        deepSleep: 190
    },
    exercise : [125, 145, 126, 171, 94, 166, 133]
}

@Injectable()
export class UserService {
    getUserDetails(){
        return new Promise<User[]>(resolve => {
            setTimeout(()=> { 
                resolve(user)
            },500);
        })
    }
    getFitbitDetails(){
        return new Promise<FitBit>(resolve => {
            setTimeout(()=> { 
                resolve(fitbit)
            },500);
        })
    }

}