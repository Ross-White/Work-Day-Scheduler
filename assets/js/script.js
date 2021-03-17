// On page load, date element text content is populated with current date
// On page load, time blocks are generated
    // Time block elements are checked against current time.
        // If time block < current hour then class = past 
        // If time block = current hour then class = present
        // If time block > current hour then class = future
    // Time block text content is populated with any available data from local storage
// Each time block has a save button.
    // On click event saves data to local storage

var timeBlocksArr = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

//Display date function
function displayDate() {
    var date = moment().format('dddd MMMM Do ');
    $('#currentDay').text(date);
}
displayDate ();

//Creates time block elements
for (var i = 0; i < timeBlocksArr.length; i++) {
    var newTimeBlockEL = $('<form class="time-block">');
    newTimeBlockEL.attr("id", timeBlocksArr[i]);
    newTimeBlockDiv = $('<div class="row">');
    newHour = $('<p class="hour col-2"></p>');
    newHour.text(timeBlocksArr[i]);
    newText = $('<textarea class="col-8 jobs" id="inline-form-input"></textarea>')
    newBtn = $('<button class="col-2 saveBtn">Save</button>');
    newHour.appendTo(newTimeBlockDiv);
    newText.appendTo(newTimeBlockDiv);
    newBtn.appendTo(newTimeBlockDiv);
    newTimeBlockDiv.appendTo(newTimeBlockEL);
    newTimeBlockEL.appendTo(".container");
}; 

//Populates timeblocks with data from local storage
function displayJobs() {
    var savedJobs = localStorage.getItem("localJobs");
    var locationArr = [];
    if (savedJobs === null || savedJobs === "") {
        savedJobs = [];
    } else 
    savedJobs = JSON.parse(savedJobs);
    for (i = 0; i < savedJobs.length; i++) {
        locationArr.push(savedJobs[i].time);
    }
    for (let i=0; i < locationArr.length; i++) {
        var timeBlockid = "#" + locationArr[i];
        $(timeBlockid).children(".row").children("textarea").val(savedJobs[i].job);
    }
}
displayJobs ();

//Saves input to local storage
for (var i = 0; i < timeBlocksArr.length; i++) {
    var jobList = JSON.parse(window.localStorage.getItem("localJobs")) || [];
    $("button").eq(i).on( "click", { value: i }, function(event) {
        event.preventDefault();
        var savedJob = {
        time: $(this).siblings("p").text(),
        job: $(this).siblings("textarea").val()
        };
    jobList.push(savedJob);
    localStorage.setItem("localJobs", JSON.stringify(jobList));
    });
  }

//Colour code timeblocks based on current time
for ( var i = 0; i < timeBlocksArr.length; i++ ) {
    var currentTime = moment().format('ha');
    var timeBlocks = $(".time-block");
    var currentBlock = $(timeBlocks[i]);
    var blockId = currentBlock.attr("id");
    console.log(blockId);
    if (blockId === currentTime) {
        currentBlock.children(".row").children("textarea").addClass("present");
    } else if (moment(blockId, "ha").isBefore()) {
        currentBlock.children(".row").children("textarea").addClass("past");
    } else if (moment(blockId, "ha").isAfter()) {
        currentBlock.children(".row").children("textarea").addClass("future");
    }
}
