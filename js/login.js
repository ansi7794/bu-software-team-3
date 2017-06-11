// Attach a submit handler to the form
$("#login_form").submit(function( event ) {
    var data;
    var myJSON = {"user_name" : $('#username').val(), "user_password" :  $('#password').val()}

    data = "txn=1"+"&user_name="+ $('#username').val() +"&user_password=" + $('#password').val();
    // Stop form from submitting normally
    event.preventDefault();

    // Get some values from elements on the page:
    var $form = $( this );  

    // We want to customize what we post, therefore we format our data
    
    // For debugging purposes... see your console:
    // Prints out for example: login=myLoginName&passwordHash=a011a78a0c8d9e4f0038a5032d7668ab
    console.log(myJSON);
    console.log(data);
    // The actual from POST method
    $.ajax({
        type: $form.attr('method'),
        url:  $form.attr('action'),
        //dataType: "jsonp",
        //data: myJSON,
        success: function (data) {
            console.log("Hey, we got reply form java side, with following data: ");
            console.log(data);
            // redirecting example..
            if(data === "SUCCESS") {
              window.location.replace("action");
            }
        },

        error: function (data) {
                console.log('An error occurred.');
                console.log(data);
            },
    });
});