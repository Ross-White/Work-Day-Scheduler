// On page load, date element text content is populated with current date
// On page load, time blocks are generated
    // Time block elements are checked against current time.
        // If time block < current hour then class = past 
        // If time block = current hour then class = present
        // If time block > current hour then class = future
    // Time block text content is populated with any available data from local storage
// Each time block has a save button.
    // On click event saves data to local storage

var timeBlocksArr = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

//Display date function
function displayDate () {
    var date = moment().format('dddd MMMM Do ');
    $('#currentDay').text(date);
}

//Creates time block elements
for (var i = 0; i < timeBlocksArr.length; i++) {
    var newTimeBlockEL = $('<form class="time-block">');
    // console.log(timeBlocksArr[i]);
    newTimeBlockEL.attr("id", timeBlocksArr[i]);
    newTimeBlockDiv = $('<div class="row">');
    newHour = $('<p class="hour col-2"></p>');
    newHour.text(timeBlocksArr[i]);
    newText = $('<textarea class="col-8 jobs" id="inline-form-input"></textarea>')
    newBtn = $('<button type="submit" data-event="none" class="col-2 saveBtn"><i class="far fa-save"></i></button>');
    newHour.appendTo(newTimeBlockDiv);
    newText.appendTo(newTimeBlockDiv);
    newBtn.appendTo(newTimeBlockDiv);
    newTimeBlockDiv.appendTo(newTimeBlockEL);
    newTimeBlockEL.appendTo(".container");     
}; 

setInterval(displayDate, 1000);