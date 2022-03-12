// connecting moment.js for day/hour
var currentDate = moment().format('dddd') + " " + moment().format("MMMM Do YYYY");
var currentHour = moment().format('h:mm:ss a');

// time variables for text
var nineAm = $("#9am");
var tenAm = $("10am");
var elevenAm = $("11am");
var tewlvePm = $("12pm");
var onePm = $("1pm");
var twoPm = $("2pm");
var threePm = $("3pm");
var fourPm = $("4pm");
var fivePm = $("5pm");

var hour = moment().hours();
var userInput;
var hourSpan;

// date and hour 
var interval = setInterval(function() {
    var momentNow = moment();
    $('#currentDay').html(momentNow.format('YYYY MMMM DD') + ' ' + momentNow.format('dddd').substring(0,3).toUpperCase());

    $('#currentDay').html(currentDate + " " + momentNow.format('h:mm:ss A'));
}, 100);

function initPage() {
    
    console.log("Current Hour " + hour);
    // variables in the page to comapare time from moment to the time intervales in the page 
    var init9 = JSON.parse(localStorage.getItem("9am"));
    nineAm.val(init9);
    var init10 = JSON.parse(localStorage.getItem("10am"));
    nineAm.val(init10);
    var init11 = JSON.parse(localStorage.getItem("11am"));
    nineAm.val(init11);
    var init12 = JSON.parse(localStorage.getItem("12pm"));
    nineAm.val(init12);
    // had to be set into a 24hr clock because if you start at 1-10 it will be all am times
    var init13 = JSON.parse(localStorage.getItem("13pm"));
    nineAm.val(init13);
    var init14 = JSON.parse(localStorage.getItem("14pm"));
    nineAm.val(init14);
    var init15 = JSON.parse(localStorage.getItem("15pm"));
    nineAm.val(init15);
    var init16 = JSON.parse(localStorage.getItem("16pm"));
    nineAm.val(init16);
    var init17 = JSON.parse(localStorage.getItem("17pm"));
    nineAm.val(init17);
}

function background () {
    
    $(".form-control").each(function () {
        var timeTest = parseInt($(this).attr("id"));
        hour = parseInt(hour);
        
        // if loop to see where the time classes and the current time comapare to create new classes 
        if (hour > timeTest) {
            $(this).addClass("past");
        } else if (hour < timeTest) {
            $(this).addClass("future");
        } else {
            $(this).addClass("present");
        }
    });
}

//document.ready to do callbacks and start the page functions
$(document).ready(function() {
    initPage()
    background()

    // buttons to save to the local storage
    $(".saveBtn").on("click",function() {
        userInput = $(this).siblings("form-control").val().trim();
        console.log(userInput)
        hourSpan = $(this).siblings(".input-group-prepend").text().trim();
        console.log(hourSpan);
        localStorage.setItem(hourSpan, Json.strigify(userInput));
    })

});