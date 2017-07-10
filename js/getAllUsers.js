 $('#members-dropdown').on({
	"click":function(e){
	    var data = "txn=24";
		$.ajax({
		    type: "GET",
		    url:  "http://ec2-34-201-82-113.compute-1.amazonaws.com/idea/IDEA.jsp?",
		    data: data,
		    success: function (info) {
		            members = info.replace(/\n/gm," ").split(" ");
	                memberlist = members.filter(function(v){if(v.startsWith("{")) {return v.endsWith("}")} else{return false}});
	                console.log("testing success");
	                listlen = memberlist.length;
	                console.log(listlen);
	                console.log(memberlist);
	                $("#member-dropdown-options").empty();
	                for (var i = 0; i < listlen; i++) {
	                    memJSON = JSON.parse(memberlist[i]);
	                    var meminfo = "<li id=\""+ memJSON.user_name +"\"><a href='#'>"+ memJSON.user_name +"</a></li>"
	                    $("#member-dropdown-options").append(meminfo);

	                }
		            //window.location.href=window.location.href;
		        },

		    error: function (info) {
		        console.log('An error occurred.');
		        console.log(info);
		    },
		});

	}
});
