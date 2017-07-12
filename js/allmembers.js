$('#memreq-dropdown').on({
  "click":function(e){
    var SearchString = String(document.URL);
    var arr = SearchString.split('?');
    var ids = arr[1].split('//');
    console.log(ids[0]);
    var data = "txn=5"+"&project_id="+ ids[0];
    $.ajax({
        type: "GET",
        url:  "http://ec2-34-201-82-113.compute-1.amazonaws.com/idea/IDEA.jsp?",
        data: data,
        success: function (info) {
          console.log(info);
          members = info.replace(/\n/gm," ").split(" ");
          memberlist = members.filter(function(v){if(v.startsWith("{")) {return v.endsWith("}")} else{return false}});
          console.log("testing success");
          listlen = memberlist.length;
          console.log(listlen);
          console.log(memberlist);
          $("#memreq-dropdown-options").empty();
          for (var i = 0; i < listlen; i++) {
            memJSON = JSON.parse(memberlist[i]);
            var meminfo = "<li id=\""+ memJSON.user_name +"\"><a href='#'>"+ memJSON.user_name +"</a></li>"
            $("#memreq-dropdown-options").append(meminfo);
          }
        },

        error: function (info) {
            console.log('An error occurred.');
            console.log(info);
        },
    });
  }
});