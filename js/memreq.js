$(document).ready(function (){
   var SearchString = String(document.URL);
   var arr = SearchString.split('?');
   var ids = arr[1].split('&&&');
   console.log(ids);
   var data = "txn=25"+"&requirement_id="+ ids[1];
   var memlist;
   var listlen;
    $.ajax({
        type: "GET",
        url:  "http://ec2-34-201-82-113.compute-1.amazonaws.com/idea/IDEA.jsp?",
        data: data,
        success: function (info) {
          console.log("yeah");
          console.log(info);
          members = info.replace(/\n/gm," ").split(" ");
          memlist = members.filter(function(v){return v.startsWith("{")});
          listlen = memlist.length;
          for (var i = 0; i < listlen; i++) {
              console.log(i);
              memJSON = JSON.parse(memlist[i]);
              var memberinfo = "<li>"+ memJSON.user_name+"</li>";
              $(memberinfo).appendTo("#promemreq");
          }
        },

        error: function (info) {
            console.log('An error occurred.');
            console.log(info);
        },
    });
});