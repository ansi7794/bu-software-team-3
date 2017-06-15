// Attach a submit handler to the form
$("#login_form").submit(function( event ) {
    var data = "txn=1"+"&user_name="+ $('#user_name').val() +"&user_password=" + $('#user_password').val();
    var tocheck = "\"user_name\":\"" + $('#user_name').val() + "\""
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
            myJSON = JSON.parse(info);
            console.log(myJSON);
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
});