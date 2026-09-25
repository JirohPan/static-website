/* =====================================================
   1. LIVE DIGITAL CLOCK
===================================================== */

function updateClock() {

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Determine AM or PM
    const ampm = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    hours = hours % 12;

    if (hours === 0) {
        hours = 12;
    }

    // Add leading zeros
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    const currentTime =
        `${hours}:${minutes}:${seconds} ${ampm}`;

    document.getElementById("clock").textContent =
        currentTime;
}


// Run immediately
updateClock();

// Update every second
setInterval(updateClock, 1000);



/* =====================================================
   2. BIRTHDAY COUNTDOWN
===================================================== */

/*
    CHANGE THESE TWO VALUES.

    January  = 0
    February = 1
    March    = 2
    April    = 3
    May      = 4
    June     = 5
    July     = 6
    August   = 7
    September = 8
    October  = 9
    November = 10
    December = 11

    Example:

    Birthday: December 25

    BIRTHDAY_MONTH = 11
    BIRTHDAY_DAY = 25
*/

const BIRTHDAY_MONTH = 1;
const BIRTHDAY_DAY = 1;



function getNextBirthday() {

    const now = new Date();

    let birthday = new Date(
        now.getFullYear(),
        BIRTHDAY_MONTH,
        BIRTHDAY_DAY,
        0,
        0,
        0
    );


    /*
        If this year's birthday has already passed,
        use next year's birthday.
    */

    if (birthday < now) {

        birthday = new Date(
            now.getFullYear() + 1,
            BIRTHDAY_MONTH,
            BIRTHDAY_DAY,
            0,
            0,
            0
        );

    }

    return birthday;
}



function updateBirthdayCountdown() {

    const now = new Date();

    const nextBirthday = getNextBirthday();

    const difference =
        nextBirthday.getTime() -
        now.getTime();


    // Calculate time units

    const days =
        Math.floor(
            difference /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (difference /
            (1000 * 60 * 60)) % 24
        );


    const minutes =
        Math.floor(
            (difference /
            (1000 * 60)) % 60
        );


    const seconds =
        Math.floor(
            (difference / 1000) % 60
        );


    // Display values

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");


    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");


    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");


    // Update birthday message

    const birthdayYear =
        nextBirthday.getFullYear();


    document.getElementById("birthdayMessage").textContent =
        `My next birthday is on ${BIRTHDAY_DAY}/${BIRTHDAY_MONTH + 1}/${birthdayYear}!`;
}


// Run immediately
updateBirthdayCountdown();

// Update every second
setInterval(updateBirthdayCountdown, 1000);



/* =====================================================
   3. INTERACTIVE "TELL ME MORE" BUTTON
===================================================== */

const aboutButton =
    document.getElementById("aboutButton");


const aboutMessage =
    document.getElementById("aboutMessage");



aboutButton.addEventListener(
    "click",
    function () {

        /*
            If the message is currently hidden,
            show it.
        */

        if (
            !aboutMessage.classList.contains("show")
        ) {

            aboutMessage.textContent =
                "I'm currently interested in making more friends " +
                "You could hit me up if you want to, " +
                "just make sure to introduce yourself when you add me! " +
                "That's all for me, have a nice day!";

            aboutMessage.classList.add("show");

            aboutButton.textContent =
                "Hide Information";

        }

        /*
            If the message is already visible,
            hide it.
        */

        else {

            aboutMessage.classList.remove("show");

            aboutButton.textContent =
                "Tell Me More";

        }

    }
);