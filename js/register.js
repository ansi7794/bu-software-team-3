// Attach a submit handler to the form
$("#register_form").submit(function( event ) {
    if ($('#user_password1').val() == $('#user_password2').val()) { 
        var data = "txn=1"+"&user_name="+ $('#user_name').val() +"&user_password=" + $('#user_password1').val();
        var tocheck = "{\"user_name\":\"" + $('#user_name').val() + "\"}"
        // Stop form from submitting normally
        event.preventDefault();

        // Get some values from elements on the page:
        var $form = $( this );  

        // We want to customize what we post, therefore we format our data
        
        // For debugging purposes... see your console:
        // Prints out for example: login=myLoginName&passwordHash=a011a78a0c8d9e4f0038a5032d7668ab
        console.log(data);
        console.log(tocheck)

        // The actual form GET method
        $.ajax({
            type: $form.attr('method'),
            url:  $form.attr('action'),
            data: data,
            success: function (info) {
                console.log("Hey, we got reply form java side, with following data: ");
                console.log(info);
                console.log("testing success");
                // redirecting example..
                if(info.indexOf(tocheck)>-1) {
                    window.location.replace("projectSample.html");
                }
                else {
                    alert("Invalid Username or Password");
                }
            },

            error: function (data) {
                    console.log('An error occurred.');
                    console.log(data);            },
        });
    }
    else {
        alert("Your password and confirmation password do not match.");
        $('#user_password2').focus();
        return false;
    }
});