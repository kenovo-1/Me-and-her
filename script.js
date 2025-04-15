window.onload = function() {
    alert("Welcome to Our Love Website!");
    startCountdown();
};

// Countdown timers
function startCountdown() {
    const anniversaryDate = new Date("November 21, 2024 00:00:00");
    const birthdayDate = new Date("June 10, 2007 00:00:00");
    const theirBirthday = new Date("September 21, 2010 00:00:00");

    // Function to update countdown
    function updateCountdown() {
        const now = new Date();
        
        let anniversaryDiff = anniversaryDate - now;
        let birthdayDiff = birthdayDate - now;
        let theirBirthdayDiff = theirBirthday - now;

        const anniversaryDays = Math.floor(anniversaryDiff / (1000 * 60 * 60 * 24));
        const birthdayDays = Math.floor(birthdayDiff / (1000 * 60 * 60 * 24));
        const theirBirthdayDays = Math.floor(theirBirthdayDiff / (1000 * 60 * 60 * 24));

        document.getElementById('anniversaryCountdown').innerHTML = "Anniversary in: " + anniversaryDays + " days";
        document.getElementById('birthdayCountdown').innerHTML = "Your Birthday in: " + birthdayDays + " days";
        document.getElementById('theirBirthdayCountdown').innerHTML = "Their Birthday in: " + theirBirthdayDays + " days";
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Pickup line generator
const pickupLines = [
    "Are you a magician? Because whenever I look at you, everyone else disappears.",
    "Are you French? Because Eiffel for you.",
    "Do you have a Band-Aid? Because I just scraped my knee falling for you."
];

function generatePickupLine() {
    const randomLine = pickupLines[Math.floor(Math.random() * pickupLines.length)];
    document.getElementById('pickupLine').innerHTML = randomLine;
}

// Open calendar page
function openCalendar() {
    window.open("calendar.html", "_blank");
}

// Save a note
function saveNote() {
    const note = document.getElementById('noteInput').value;
    const savedNotes = document.getElementById('savedNotes');
    
    if (note) {
        const noteDiv = document.createElement('div');
        noteDiv.textContent = note;
        savedNotes.appendChild(noteDiv);
    }
    document.getElementById('noteInput').value = '';  // Clear input field
}

// Music search function
function searchSong() {
    const song = document.getElementById('songSearch').value;
    if (song) {
        window.open("https://www.youtube.com/results?search_query=" + song, "_blank");
    }
}

