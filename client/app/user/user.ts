export class User {
    name: string ;
    age: number ;
    gender: string ;
    address: string ;
    height: number ;
    weight: number ; 
    bloodPressure: {
        systolic: number ;
        diastolic: number ;
    };
    exercise: number ;
    BMI: number ;
}

export class FitBit {
    steps: number ;
    distance: number ;
    calories: number ;
    activity: {
        exercise: number ;
        sleep: number ;
        deepSleep: number ;
    }
    exercise: number[] ;
}