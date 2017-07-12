$('#memtask-dropdown-options').on("click","li", function(event){
 	event.preventDefault();
 	var SearchString = String(document.URL);
    var arr = SearchString.split('?');
    var ids = arr[1].split('&&&');
    console.log(ids[1]);
    var user_name = $(this).attr('id');

    var data = "txn=14&task_id="+ ids[1] + "&user_name="+ user_name;
    console.log("DATA: " + data);
	$.ajax({
	    type: "GET",
	    url:  "http://ec2-34-201-82-113.compute-1.amazonaws.com/idea/IDEA.jsp?",
	    data: data,
	    success: function (info) {
	            console.log(info);
	            var requirement = info.replace(/\n/gm,"");
	            var detailsJSON = JSON.parse(requirement);
	            window.location.reload();
	            console.log("inside ajax call");
	        },

	    error: function (info) {
	        console.log('An error occurred.');
	        console.log(info);
	    },
	});
});