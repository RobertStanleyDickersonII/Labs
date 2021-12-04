function theatrePromo(typeOfDay, age) {
    //if age is 0 to 18

    if (typeOfDay == 'Weekday') {
        if (age > 0 && age <= 18) {
            console.log('12$');
        } else if (age > 18 && age <= 64) {
            console.log('18');
        } else if (age > 64 && age <= 122) {
            console.log('12%');
        }
        
    } else if (typeOfDay == 'Weekend') {
        if (age > 0 && age <= 18) {
            console.log('15$');
        } else if (age > 18 && age <= 64) {
            console.log('20$');
        } else if (age > 64 && age <= 122) {
            console.log('15%');
        } else {
            console.log('Error!')
        }
    } else {
        if (age > 0 && age <= 18) {
            console.log('5$');
        } else if (age > 18 && age <= 64) {
            console.log('12$');
        } else if (age > 64 && age <= 122) {
            console.log('10%');
        } else {
            console.log('Error');
        }
    }
}

theatrePromo('Weekday', 42);
theatrePromo('Holiday', -12);
theatrePromo('Holiday', 15);
