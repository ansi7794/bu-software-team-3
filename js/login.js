// Attach a submit handler to the form
$("#login_form").submit(function( e ) {
	
	var data;
    switch ($(e.target).attr('id')) {
        case 'login':
            data = "txn=1"+"&user_name="+ $('#login').val() +"&user_password=" + $('#password').val();
            break;
        case 'register':
            data = "txn=2"+"&user_name="+ $('#login').val() +"&user_password=" + $('#password').val();
            break;
    }
    // Stop form from submitting normally
    event.preventDefault();

    // Get some values from elements on the page:
    var $form = $( this );

    // We want to customize what we post, therefore we format our data
    
    // For debugging purposes... see your console:
    // Prints out for example: login=myLoginName&passwordHash=a011a78a0c8d9e4f0038a5032d7668ab
    console.log(data);

    // The actual from POST method
    $.ajax({
        type: $form.attr('method'),
        url:  $form.attr('action'),
        data: data,
        success: function (data) {
            console.log("Hey, we got reply form java side, with following data: ");
            console.log(data);
            // redirecting example..
            if(data === "SUCCESS") {
              window.location.replace("action");
            }
	    }
    });
});
