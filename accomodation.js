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
        if (days > 31) {
            console.log("Please enter a valid number of days not greater than 31");
            return false;
        }
        studioPrice = 50;
        apartmentPrice = 65;
        totalStudio = (days > 7 && days <= 14) ? (studioPrice * days) - (studioPrice * days * .05)
                            : days > 14 ? (studioPrice * days) - (studioPrice * days * .3)
                            : studioPrice * days
        totalApartment = (days > 7 && days <= 14) ? apartmentPrice * days
                            : days > 14 ? (apartmentPrice * days) - (apartmentPrice * days * .1)
                            : apartmentPrice * days
    } else if (month === 'June' || month === 'September') {
        if (days > 30) {
            console.log("Please enter a valid number of days not greater than 30");
            return false;
        }
        studioPrice = 75.20;
        apartmentPrice = 68.70;
        totalStudio =  days > 14 ? (studioPrice * days) - (studioPrice * days * .2)
                            : studioPrice * days
        totalApartment = days > 14 ? (apartmentPrice * days) - (apartmentPrice * days * .1)
                            : apartmentPrice * days
    } else {
        if (days > 31) {
            console.log("Please enter a valid number of days not greater than 31");
            return false;
        }
        totalStudio = studioPrice * days
        totalApartment = days > 14 ? (apartmentPrice * days) - (apartmentPrice * days * .1)
        : apartmentPrice * days
    }

    console.log(`Apartment: ${totalApartment.toFixed(2)} NGN`);
    console.log(`Studio: ${totalStudio.toFixed(2)} NGN`);
}

calculatePrice('May', 30)
calculatePrice('June', 31);
calculatePrice('August', 20)



