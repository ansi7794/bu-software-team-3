$( document ).ready(function() {
		console.log("inside select-member");
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
	                $("#select-member").empty();
	                var Selectline ="<option value = \"novalue\">Select a member</option>";
	                $("#select-member").append(Selectline);
	                for (var i = 0; i < listlen; i++) {
	                    memJSON = JSON.parse(memberlist[i]);
	                    var meminfo = "<option value="+ memJSON.user_name + ">" +  memJSON.user_name + "</option>";//"<li id=\""+ memJSON.user_name +"\"><a href='#'>"+ memJSON.user_name +"</a></li>" //"<option value="+ memJSON.user_name + ">" +  memJSON.user_name + "</option>"//
	                    $("#select-member").append(meminfo);
	                }
		            //window.location.href=window.location.href;
		        },

		    error: function (info) {
		        console.log('An error occurred.');
		        console.log(info);
		    },
		});
});
