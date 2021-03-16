// On page load, date element text content is populated with current date
// On page load, time blocks are generated
    // Time block elements are checked against current time.
        // If time block < current hour then class = past 
        // If time block = current hour then class = present
        // If time block > current hour then class = future
    // Time block text content is populated with any available data from local storage
// Each time block has a save button
    // On click event saves data to local storage

var timeBlocksArr = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

//Display date function
function displayDate () {
    var date = moment().format('dddd MMMM Do ');
    $('#currentDay').text(date);
}

//Creates time block elements
for (var i = 0; i < timeBlocksArr.length; i++) {
    var newTimeBlockEL = $('<form class="time-block">');
    console.log(timeBlocksArr[i]);
    newTimeBlockEL.attr("id", timeBlocksArr[i]);
    newTimeBlockDiv = $('<div class="row">');
    newTimeBlockDiv.append(
        '<p class="hour col-2"></p>',
        '<textarea class="col-8 jobs" id="inline-form-input"></textarea>',
        '<button type="submit" data-event="none" class="col-2 saveBtn"><i class="far fa-save"></i></button>'
        );
    $('.row').children('p').text(timeBlocksArr[i]); 
    newTimeBlockDiv.appendTo(newTimeBlockEL);
    newTimeBlockEL.appendTo(".container");     
}; 


    
    //Assigns colour class based on time
    // var allBlocks = $(".time-block");
    // // console.log(allBlocks);
    // var currentHour = moment().format('ha');



setInterval(displayDate, 1000);