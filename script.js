
// Show current day  
$(document).ready(function () {
    //display current day & time.
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm a"));
    $(".saveBtn").on("click", function () {
        console.log(this);  
        // Have the save button console log the text value and hour
        const val = $(this).siblings("textarea").val(); 
        console.log(val); 
        const id = $(this).parent().attr("id");   
        console.log(id);
          
    })
})
// Put items in local storage  
let schedule = localStorage.getItem("storage");
localStorage.getItem("schedule", JSON.stringify(schedule));
    




// Color coordinate blocks for past,present, future 
// Save text in local storage
// Create a forloop to loop over object 
// When page is refreshed, text stays
// Create a button that saves the text 
