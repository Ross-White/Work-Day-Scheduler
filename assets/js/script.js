//Display Time function
function displayDate () {
    let date = moment().format('MMMM Do YYYY');
    $('#currentDay').text(date);
}

setInterval(displayDate, 1000);