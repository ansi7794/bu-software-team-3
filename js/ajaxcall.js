// The actual from GET method
    $.ajax({
        type: $form.attr('method'),
        url:  $form.attr('action'),
        //dataType: "jsonp",
        //data: myJSON,
        success: function (data) {
            console.log("Hey, we got reply form java side, with following data: ");
            console.log(data);
            console.log("testing");
            // redirecting example..
            if(data === "SUCCESS") {
              window.location.replace("action");
            }
        },

        error: function (data) {
                console.log('An error occurred.');
                console.log(data);
                console.log("testing");
            },
	    });