var repository = [];

var name = ['Weight', 'Height', 'Blood Pressure', 'Exercise', 'Calories Burnt']
var count = 1;
for (var i = 0; i < name.length; i++) {

    var flag = 1;
    var start_date = new Date().setFullYear(new Date().getUTCFullYear() - 1);
    var end_date = new Date();
    while (start_date < end_date) {
        var data = {};
        var value;
        switch (i) {
            case 0:
                value = 65 + Math.random() * flag * 5;
                break;
            case 1:
                value = 180 + Math.random() * 5;
                break;
            case 2:
                value = 110 + Math.random() * flag * 10;
                break;
            case 3:
                value = 2 + Math.random() * flag * 1;
                break;
            case 4:
                value = 2000 + Math.random() * flag * 500;
                break;
        }

        flag = flag * (-1);
        value = Math.round(value * 100) / 100;
        data.id = count;
        data.type = "point";
        data.start = new Date(start_date).getUTCFullYear() + '-' + (new Date(start_date).getUTCMonth() + 1) + '-' + new Date(start_date).getUTCDate();
        console.log(data);
        repository.push(data);
        count++;
        start_date = new Date(start_date).setDate(new Date(start_date).getUTCDate() + 1);
    }
    count++;
}

//console.log(repository);

var fs = require('fs');

fs.writeFile('data.json', JSON.stringify(repository), function(err) {
    if (err)
        console.log("error writing into the file");
})