// const isBooked = true;

// if (isBooked) {
//     console.log("Hall A is already booked.");
// } else {
//     console.log("Hall A is available for booking.");
// }
const hallName = "Hall A";
const hallNameB = "Hall B";
const hallNameC = "Hall C";

const isHallAAvailable = true;
const isHallBAvailable = false;
const isHallCAvailable = true;

// if (isHallAAvailable) {
//     console.log(`${hallName} is available for booking.`);
// } else {
//     console.log(`${hallName} is already booked.`);
// }

// if (isHallBAvailable) {
//     console.log(`${hallNameB} is available for booking.`);
// } else {
//     console.log(`${hallNameB} is already booked.`);
// }

// if (isHallCAvailable) {
//     console.log(`${hallNameC} is available for booking.`);
// } else {
//     console.log(`${hallNameC} is already booked.`);
// }

function showAvailability(name, available) {
    if (available) {
        console.log(`${name} is available for booking.`);
    } else {
        console.log(`${name} is already booked.`);
    }
}

showAvailability(hallName, isHallAAvailable);
showAvailability(hallNameB, isHallBAvailable);
showAvailability(hallNameC, isHallCAvailable);