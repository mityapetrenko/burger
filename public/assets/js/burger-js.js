$(function() {
    $(".devour-burger").on("click", function(event) {
      var id = $(this).data("id");
      var devoured = $(this).data("devoured");
  
      var newDevourState = {
        devoured: true
      };
        console.log(newDevourState);

      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          console.log("changed devour state to", newDevourState);
          // Reload the page to get the updated list
          location.reload();
          
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();

      console.log("Submit!");
  
      var newBurger = {
        name: $("#burger").val().trim(),
        devoured: false
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  