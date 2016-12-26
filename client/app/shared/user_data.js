var Users = [];

for (var i = 0; i < 500; i++) {
    var user = {}
    var flag = Math.random();
    user.age = Math.round(Math.random() * 80);
    user.gender = (flag < 0.5) ? 'male' : 'female';
    user.bloodPressure = Math.round((Math.random() * 8) * 10 + 100);
    user.BMI = Math.round((((Math.random() + 1) * 4) - 3) * 10);
    if (user.gender == 'male') {
        user.calories = Math.round((((Math.random() + 1) * 2) * 1000));
    } else {
        user.calories = Math.round((((Math.random() + 1.5) * 10) - 2) * 100)
    }
    user.exercise = Math.round((((Math.random() + 1) * 4) - 3) * 10) / 10;
    user.bloodGlucose = Math.round(((Math.random() + 1) * 5) * 7) / 10;
    Users.push(user);
}

var fs = require('fs');
fs.writeFile('user_data.json', JSON.stringify(Users), function(err) {
    if (!err) {
        console.log('Data Written');
    }
})