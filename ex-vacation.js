function vacation(group, type, day) {
    let theTotal = 0;
    let thePrice = 0;
    switch (type) {
        case "Students":
            if (day == "Friday"){
                thePrice = 9.80
            } else {
                thePrice = 10.46
            }
            if (group >= 30) {
                thePrice *= .85;
            }
            break;
        case "Business":
            if (day == "Friday") {
                thePrice = 10.90
            } else if (day == "Saturday") {
                thePrice = 15.60
            } else {
                thePrice = 16
            }
            if (group >= 100) {
                group -= 10;
            }
            break;
        case "Regular":
            if (day == "Friday") {
                thePrice = 15
            } else if (day == "Saturday") {
                thePrice = 20
            } else {
                thePrice = 22.5
            }
            if (group >= 10 || group <= 20) {
                thePrice *= .95;
            }
            break;
        default:
            break;
    }
    console.log(`Total Price: ${thePrice * group}`)
}

vacation(30, "Students", "Sunday");
vacation(110, "Business", "Friday");
vacation(40, "Regular", "Saturday");
vacation(20, "Regular", "Sunday");