// Attach a submit handler to the form
$("#register_form").submit(function( event ) {
    if ($('#user_password1').val() == $('#user_password2').val()) { 
        var data = "txn=2"+"&user_name="+ $('#user_name').val() +"&user_password=" + $('#user_password1').val()+"&user_email=" + $('#user_email').val()+"&user_fname=" + $('#user_fname').val()+"&user_lname=" + $('#user_lname').val();
        var user = $('#user_name').val();
        // Stop form from submitting normally
        event.preventDefault();

        // Get some values from elements on the page:
        var $form = $( this );  
        // We want to customize what we post, therefore we format our data
        
        // For debugging purposes... see your console:
        // Prints out for example: login=myLoginName&passwordHash=a011a78a0c8d9e4f0038a5032d7668ab
        console.log(data);
        console.log(user);

        // The actual form GET method
        $.ajax({
            type: $form.attr('method'),
            url:  $form.attr('action'),
            data: data,
            success: function (info) {
                console.log("Hey, we got reply form java side, with following data: ");
                console.log(info);
                myJSON = JSON.parse(info);
                strJSON = JSON.stringify(myJSON);
                console.log("testing success");
                // redirecting example..
                if(myJSON.user_name == user) {
                    window.location = "projectSample.html?"+strJSON;
                }
                else {
                    alert("User Already Present");
                }
            },

            error: function (info) {
                console.log('An error occurred.');
                console.log(info);
            },
        });
    }
    else {
        alert("Your password and confirmation password do not match.");
        $('#user_password2').focus();
        return false;
    }
});