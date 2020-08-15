
// Show current day  
$(document).ready(function () {
    //display current day & time.
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm a"));
    // Create a button that saves the text 
    $(".saveBtn").on("click", function () {
        console.log(this);
        // Create a variable for the text area and the id (hour and description)
        const val = $(this).siblings("textarea").val();
        console.log(val);
        const id = $(this).parent().attr("id");
        console.log(id);
        // Put id and value into local storage
        localStorage.setItem(id,val);

    })
})

// Retrieve data from local storage for each hour
let schedule = localStorage.getItem("storage");  
$("#hour-9 .description").val(localStorage.getItem("hour-9")) 
$("#hour-10 .description").val(localStorage.getItem("hour-10")) 
$("#hour-11 .description").val(localStorage.getItem("hour-11")) 
$("#hour-12 .description").val(localStorage.getItem("hour-12"))
$("#hour-13 .description").val(localStorage.getItem("hour-13"))  
$("#hour-14 .description").val(localStorage.getItem("hour-14")) 
$("#hour-15 .description").val(localStorage.getItem("hour-15")) 
$("#hour-16 .description").val(localStorage.getItem("hour-16")) 
$("#hour-17 .description").val(localStorage.getItem("hour-17"))


// Color coordinate blocks for past,present, future  
const currentHour = parseInt(moment().format("H"));  
// Loop over time blocks
$(".time-block").each(function(){ 
    const hour = parseInt($(this).attr("id").replace("hour-", "")); 
    //console.log(hour, currentHour);  
    // Check if we are in the past, present, or future
    if (hour < currentHour){ 
        // past 
        $(this).addClass("past");

    }else if (currentHour === hour) { 
      // present 
      $(this).addClass("present");
        
    }else {  
        // future
        $(this).addClass("future");

    }

})

