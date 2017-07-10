 $('#members-dropdown').on({
	"click":function(e){
	    alert("trying something else");

	    var data = "txn=24";
		$.ajax({
		    type: "GET",
		    url:  "http://ec2-34-201-82-113.compute-1.amazonaws.com/idea/IDEA.jsp?",
		    data: data,
		    success: function (info) {
		            console.log(info);
		            var userlist = JSON.parse(info);
		            console.log(userlist);
		          
		            console.log("inside ajax call");
		            //window.location.href=window.location.href;
		        },

		    error: function (info) {
		        console.log('An error occurred.');
		        console.log(info);
		    },
		});

	}
});
