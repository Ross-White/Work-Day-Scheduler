let timeBlocksArr = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];



//Display date function
function displayDate () {
    let date = moment().format('dddd MMMM Do ');
    $('#currentDay').text(date);
}

for (let i = 1; i < timeBlocksArr.length; i++) {
    let newTimeBlockEL= $("#9am").clone();
    newTimeBlockEL.attr("id", timeBlocksArr[i]); 
    newTimeBlockEL.children(".row").attr("style", "white-space: pre-Wrap"); 
    newTimeBlockEL.children(".row").children(".hour").text(timeBlocksArr[i]); 
    newTimeBlockEL.appendTo(".container"); 

}; 


setInterval(displayDate, 1000);