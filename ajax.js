$(function() {
  $("#submit").click(function(e) {
    e.preventDefault();
    $(this).attr('disabled','disabled'); // Switch to default grey
    $(this).html("Sending"); // Change text of button
    $.ajax({
      async: true,
      type: 'POST',
      url: "http://putsreq.com/6bX9Dru8CIT2HEsSaHPV",
      data: $('#row').serialize(),
      dataType: 'text',
      crossDomain: true,
      complete: function() {
        $("#submit").removeAttr('disabled'); // Change back text of button
      },
      error: function(request, errorType, errorMessage) {
        $("#formStatus").text("Comment failed. Error: " + errorType + " " + errorMessage);
      },
      success: function(response) {
        $("#formStatus").text("Form sent successfully.");
        $('#submit').html("Submit Form");
      }
    });
  });
});