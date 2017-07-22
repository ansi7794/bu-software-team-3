// Attach a submit handler to the form
$("#recover_pass").click(function( event ) {
    console.log("in recover.js");
    var data = "txn=35"+"&user_name="+ $('#rec_user_name').val() +"&user_recovery_word=" + $('#user_recovery_word').val();
    // Stop form from submitting normally
    event.preventDefault();

    // Get some values from elements on the page:
    var $form = $( this );  
    // We want to customize what we post, therefore we format our data
    
    // For debugging purposes... see your console:
    // Prints out for example: login=myLoginName&passwordHash=a011a78a0c8d9e4f0038a5032d7668ab
    console.log(data);

    // The actual form GET method
    $.ajax({
        type: "GET",
        url: "http://ec2-34-201-82-113.compute-1.amazonaws.com/idea/IDEA.jsp?",
        data: data,
        success: function (info) {
            console.log("Hey, we got reply form java side, with following data: ");
            console.log(info);
            myJSON = JSON.parse(info);
            console.log("testing success");
            // redirecting example..
            if(myJSON.user_password == "Invalid") {
                alert("Hi "+ $('#rec_user_name').val()+" Answer of your security question is wrong");
            }
            else {
                alert("Hi "+ $('#rec_user_name').val()+" Your Password is:"+myJSON.user_password);
            }
        },

        error: function (info) {
            console.log('An error occurred.');
            console.log(info);
        },
	});
});
