function calculatePrice(month, days) {
    let totalStudio = totalApartment = 0
    let apartmentPrice = 77
    let studioPrice = 76
    if (typeof month !== 'string') {
        console.log("Please enter a valid string for month");
        return false;
    }
    if (isNaN(days)) {
        console.log("Please enter a valid number for day(s)");
        return false;
    }
    let months = ['May', 'June', 'July', 'August', 'September', 'October']
    if (!months.includes(month)) {
        console.log("Please enter a valid string for month");
        return false;
    }
    if (month === 'May' || month === 'October') {
        studioPrice = 50;
        apartmentPrice = 65;
        totalStudio = (days > 7 && days <= 14) ? (studioPrice * days) - (studioPrice * days * .05)
                            : days > 14 ? (studioPrice * days) - (studioPrice * days * .3)
                            : studioPrice * days
        totalApartment = (days > 7 && days <= 14) ? apartmentPrice * days
                            : days > 14 ? (apartmentPrice * days) - (apartmentPrice * days * .1)
                            : apartmentPrice * days
    } else if (month === 'June' || month === 'September') {
        studioPrice = 75.20;
        apartmentPrice = 68.70;
        totalStudio =  days > 14 ? (studioPrice * days) - (studioPrice * days * .2)
                            : studioPrice * days
        totalApartment = days > 14 ? (apartmentPrice * days) - (apartmentPrice * days * .1)
                            : apartmentPrice * days
    } else {
        totalStudio = studioPrice * days
        totalApartment = days > 14 ? (apartmentPrice * days) - (apartmentPrice * days * .1)
        : apartmentPrice * days
    }

    return [totalStudio, totalApartment]
}

let [s,a] = [...calculatePrice('May', 15)];
let [s2,a2] = [...calculatePrice('June', 14)];
let [s3,a3] = [...calculatePrice('August', 20)];
console.log(`Apartment: ${a.toFixed(2)} \n Studio: ${s.toFixed(2)}`);
console.log(`Apartment: ${a2.toFixed(2)} \n Studio: ${s2.toFixed(2)}`);
console.log(`Apartment: ${a3.toFixed(2)} \n Studio: ${s3.toFixed(2)}`);