// Initialize the LivePerson SDK with your credentials
lpTag.agentSDK.init({
    //notificationCallback: notificationHandler
    //accountId: 'your-account-id', // Replace with your LivePerson account ID
    //accessToken: 'your-access-token' // Replace with your LivePerson access token
});


// Set min and max for preferred date input
const today = new Date();
const maxDate = new Date();
maxDate.setDate(today.getDate() + 10);

document.getElementById('preferredDate').min = today.toISOString().split('T')[0];
document.getElementById('preferredDate').max = maxDate.toISOString().split('T')[0];

document.getElementById('generateButton').addEventListener('click', function () {
    const numQuickReplies = document.getElementById('numQuickReplies').value;
    const quickRepliesContainer = document.getElementById('quickRepliesContainer');
    quickRepliesContainer.innerHTML = ''; // Clear previous inputs

    console.log(numQuickReplies);
    console.log(typeof numQuickReplies);

    for (let i = 1; i <= numQuickReplies; i++) {
        const label = document.createElement('label');
        label.innerText = `Quick Reply ${i}:`;
        quickRepliesContainer.appendChild(label);

        const input = document.createElement('input');
        input.type = 'text';
        input.id = `quickReply${i}`;
        input.placeholder = `Enter Option ${i}`;
        quickRepliesContainer.appendChild(input);
    }
	
    document.getElementById('sendButton').style.display = 'block';
});

document.getElementById('sendButton').addEventListener('click', function () {
    const numQuickReplies = document.getElementById('numQuickReplies').value;
    const quickReplies = [];

    for (let i = 1; i <= numQuickReplies; i++) {
        const text = document.getElementById(`quickReply${i}`).value.trim(); // Use trim to remove whitespace
        if (text) {
            quickReplies.push({ title: text, payload: `quick_reply_${i}` });
        } else {
            alert(`Please enter a value for Quick Reply ${i}.`); // Alert the user for blank input
            return; // Exit the function to prevent sending empty replies
        }
    }

    if (quickReplies.length > 0) {
        sendQuickReplies(quickReplies);
    }
    else {
        alert('Please enter at least one quick reply.');
    }
    // Show additional fields after sending quick replies
    document.getElementById('additionalFields').style.display = 'block';

});

function sendQuickReplies(quickReplies) {
      var notifyWhenDone = function (err) {
            if (err) {
                // Do something with the error
            }
            // called when the command is completed successfully,
            // or when the action terminated with an error.
        };
        const numQuickReplies = document.getElementById('numQuickReplies').value;
        console.log("Number of Quick replies selected=" + numQuickReplies);
        
	const preferredDateInput = document.getElementById('preferredDate').value;
    //console.log("preferredDateInput : " + preferredDateInput);

if (preferredDateInput) {
    // Split the date input assuming it's in the format "yyyy-mm-dd"
    const [year, month, day] = preferredDateInput.split('-');

    // Create a Date object (subtract 1 from month because months are 0-indexed in JavaScript)
    const date = new Date(year, month - 1, day);
    console.log("Date : " + date);

    // Check if the date is valid
    if (!isNaN(date.getTime())) {
        // Array of day and month names
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        // Format the date as "Day, Month Day" (e.g., "Thursday, September 4")
        var formattedDate = `${dayNames[date.getDay()]}, ${monthNames[date.getMonth()]} ${day}`;

        console.log("formattedDate :" + formattedDate); // Example: "Thursday, September 4"
    } else {
        alert("Invalid date. Please enter a valid date.");
    }
} else {
    alert("Please enter a preferred date.");
}

	    
        if (numQuickReplies == "2") {
            var cmdName = lpTag.agentSDK.cmdNames.writeSC;
            var quickReply1 = document.getElementById('quickReply1').value;
            var quickReply2 = document.getElementById('quickReply2').value;
            var text1=`Please select Preferrable Time Slot for ${formattedDate}`

            var data = {
                json:{
                    "type": "vertical",
                    "tag": "generic",
                    "elements": [{
                        "type": "text",
                        "text": text1,
                        "tag": "title"
                      },
                      {
                        "type": "button",
                        "title": quickReply1,
                        "click": {
                          "actions": [
                            {
                              "type": "publishText",
                              "text": `${quickReply1} ${formattedDate}`
                            }
                          ]
                        }
                      },
                      {
                        "type": "button",
                        "title": quickReply2,
                        "click": {
                          "actions": [
                            {
                              "type": "publishText",
                              "text": `${quickReply2} ${formattedDate}`
                            }
                          ]
                        }
                      }

                    ]
            }};
           lpTag.agentSDK.command(cmdName, data, notifyWhenDone);
        }

        if (numQuickReplies == "3") {
            var cmdName = lpTag.agentSDK.cmdNames.writeSC;
            var quickReply1 = document.getElementById('quickReply1').value;
            var quickReply2 = document.getElementById('quickReply2').value;
            var quickReply3 = document.getElementById('quickReply3').value;

            var text1=`Please select Preferrable Time Slot for ${formattedDate}`

            var data = {
                json:{
                    "type": "vertical",
                    "tag": "generic",
                    "elements": [{
                        "type": "text",
                        "text": text1,
                        "tag": "title"
                      },
                      {
                        "type": "button",
                        "title": quickReply1,
                        "click": {
                          "actions": [
                            {
                              "type": "publishText",
                              "text": `${quickReply1} ${formattedDate}`
                            }
                          ]
                        }
                      },
                      {
                        "type": "button",
                        "title": quickReply2,
                        "click": {
                          "actions": [
                            {
                              "type": "publishText",
                              "text": `${quickReply2} ${formattedDate}`
                            }
                          ]
                        }
                      },
                      {
                        "type": "button",
                        "title": quickReply3,
                        "click": {
                          "actions": [
                            {
                              "type": "publishText",
                              "text": `${quickReply3} ${formattedDate}`
                            }
                          ]
                        }
                      }

                    ]
            }};
            lpTag.agentSDK.command(cmdName, data, notifyWhenDone);
        }

        if (numQuickReplies == "4") {
            var cmdName = lpTag.agentSDK.cmdNames.writeSC;
            var quickReply1 = document.getElementById('quickReply1').value;
            var quickReply2 = document.getElementById('quickReply2').value;
            var quickReply3 = document.getElementById('quickReply3').value;
            var quickReply4 = document.getElementById('quickReply4').value;

            var text1=`Please select Preferrable Time Slot for ${formattedDate}`

            var data = {
                json:{
                    "type": "vertical",
                    "tag": "generic",
                    "elements": [{
                        "type": "text",
                        "text": text1,
                        "tag": "title"
                      },
                      {
                        "type": "button",
                        "title": quickReply1,
                        "click": {
                          "actions": [
                            {
                              "type": "publishText",
                              "text": `${quickReply1} ${formattedDate}`
                            }
                          ]
                        }
                      },
                      {
                        "type": "button",
                        "title": quickReply2,
                        "click": {
                          "actions": [
                            {
                              "type": "publishText",
                              "text": `${quickReply2} ${formattedDate}`
                            }
                          ]
                        }
                      },
                      {
                        "type": "button",
                        "title": quickReply3,
                        "click": {
                          "actions": [
                            {
                              "type": "publishText",
                              "text": `${quickReply3} ${formattedDate}`
                            }
                          ]
                        }
                      },
                      {
                        "type": "button",
                        "title": quickReply4,
                        "click": {
                          "actions": [
                            {
                              "type": "publishText",
                              "text": `${quickReply4} ${formattedDate}`
                            }
                          ]
                        }
                      }

                    ]
            }
        };

            lpTag.agentSDK.command(cmdName, data, notifyWhenDone);
        }

        if (numQuickReplies == "5") {
            var cmdName = lpTag.agentSDK.cmdNames.writeSC;
            var quickReply1 = document.getElementById('quickReply1').value;
            var quickReply2 = document.getElementById('quickReply2').value;
            var quickReply3 = document.getElementById('quickReply3').value;
            var quickReply4 = document.getElementById('quickReply4').value;
            var quickReply5 = document.getElementById('quickReply5').value;

            var text1=`Please select Preferrable Time Slot for ${formattedDate}`

            var data = {
                json:{
                    "type": "vertical",
                    "tag": "generic",
                    "elements": [{
                        "type": "text",
                        "text": text1,
                        "tag": "title"
                      },
                      {
                        "type": "button",
                        "title": quickReply1,
                        "click": {
                          "actions": [
                            {
                              "type": "publishText",
                              "text": `${quickReply1} ${formattedDate}`
                            }
                          ]
                        }
                      },
                      {
                        "type": "button",
                        "title": quickReply2,
                        "click": {
                          "actions": [
                            {
                              "type": "publishText",
                              "text": `${quickReply2} ${formattedDate}`
                            }
                          ]
                        }
                      },
                      {
                        "type": "button",
                        "title": quickReply3,
                        "click": {
                          "actions": [
                            {
                              "type": "publishText",
                              "text": `${quickReply3} ${formattedDate}`
                            }
                          ]
                        }
                      },
                      {
                        "type": "button",
                        "title": quickReply4,
                        "click": {
                          "actions": [
                            {
                              "type": "publishText",
                              "text": `${quickReply4} ${formattedDate}`
                            }
                          ]
                        }
                      },
                      {
                        "type": "button",
                        "title": quickReply5,
                        "click": {
                          "actions": [
                            {
                              "type": "publishText",
                              "text": `${quickReply5} ${formattedDate}`
                            }
                          ]
                        }
                      }

                    ]
            }
        };
            lpTag.agentSDK.command(cmdName, data, notifyWhenDone);
        }

	    
// Send Add to Calendar
document.getElementById('sendAddToCalendarButton').addEventListener('click', function () {
    const eventLocation = document.getElementById('eventLocation').value.trim();
    const startDate = document.getElementById('startDate').value;
    const duration = parseInt(document.getElementById('duration').value); // Get the selected duration from slot

    if (!eventLocation || !startDate || !duration) {
        alert("Please fill in all event details.");
        return;
    }

    // Calculate the end date and time based on the start time and duration
    const endDate = calculateEndTime(startDate, duration);

    // Format the dates for the calendar links
    const formattedStartDate = formatDateForCalendar(startDate);
    const formattedEndDate = formatDateForCalendar(endDate);

    // Google Calendar URL
    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=Health+Care+Appointment&dates=${formattedStartDate}/${formattedEndDate}&location=${encodeURIComponent(eventLocation)}`;

    // Apple Calendar (.ics) URL encoded
    const appleCalendarUrl = `data:text/calendar;charset=utf8,` + encodeURIComponent(`
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:Health Care Appointment
LOCATION:${eventLocation}
DTSTART:${formattedStartDate}
DTEND:${formattedEndDate}
END:VEVENT
END:VCALENDAR
    `.trim());

    // Outlook Calendar URL
    const outlookCalendarUrl = `https://outlook.live.com/owa/?path=/calendar/action/compose&subject=Health+Care+Appointment&startdt=${formattedStartDate}&enddt=${formattedEndDate}&location=${encodeURIComponent(eventLocation)}`;

    // Send structured content with three buttons (Google, Apple, and Outlook Calendar)
    var notifyWhenDone = function (err) {
        if (err) {
            console.error('Error sending Add to Calendar:', err);
        }
    };

    var cmdName = lpTag.agentSDK.cmdNames.writeSC;
    var data = {
        json: {
            "type": "vertical",
            "tag": "generic",
            "elements": [
                {
                    "type": "text",
                    "text": "Click the buttons below to add the appointment to your calendar."
                },
                {
                    "type": "button",
                    "title": "Add to Google Calendar",
                    "click": {
                        "actions": [{
                            "type": "link",
                            "uri": googleCalendarUrl
                        }]
                    }
                },
                {
                    "type": "button",
                    "title": "Add to Apple Calendar",
                    "click": {
                        "actions": [{
                            "type": "link",
                            "uri": appleCalendarUrl
                        }]
                    }
                },
                {
                    "type": "button",
                    "title": "Add to Outlook Calendar",
                    "click": {
                        "actions": [{
                            "type": "link",
                            "uri": outlookCalendarUrl
                        }]
                    }
                }
            ]
        }
    };

    lpTag.agentSDK.command(cmdName, data, notifyWhenDone);
});

// Helper function to format dates for calendar links
function formatDateForCalendar(dateStr) {
    const date = new Date(dateStr);
    return date.toISOString().replace(/[-:]/g, '').split('.')[0];
}

// Helper function to calculate end time based on duration (in minutes)
function calculateEndTime(startDateStr, duration) {
    const startDate = new Date(startDateStr);
    startDate.setMinutes(startDate.getMinutes() + duration);
    return startDate;
}

    
}