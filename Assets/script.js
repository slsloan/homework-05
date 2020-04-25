$(document).ready(function () {
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));

    // Save the information from the text area to the local storage
    $(".saveBtn").on("click", function () {
        var hour = $(this).parent().attr("id");
        var text = $(this).siblings("textarea").val();

        localStorage.setItem(hour, text);
    });

    // Load in the saved data from the local storage

    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    function hourColor() {
        // Create a variable for the current hour
        var currentHour = moment().hour();

        // Create a loop of each time block to find the hour block
        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);

            // Check the current hour to the block hour to see what color to code the block
            if (blockHour > currentHour) {
                $(this).addClass("future");
                $(this).removeClass("present");
                $(this).removeClass("past");
            } else if (blockHour === currentHour) {
                $(this).removeClass("future");
                $(this).addClass("present");
                $(this).removeClass("past");
            }
            else {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
        });
    }
    hourColor();
});