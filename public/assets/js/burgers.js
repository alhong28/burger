$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    var newSleep = $(this).data("newdevoured");

    var newDevoured = {
      devoured: newDevoured
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devoured
    }).then(
      function() {
        console.log("ate", newDevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#burg").val().trim(),
      devoured: $("[name=devoured]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("New Burger Added");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
