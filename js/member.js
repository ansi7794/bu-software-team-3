$(document).ready(function (){
   var SearchString = String(document.URL);
   var arr = SearchString.split('?');
   console.log(arr[1]);
   var data = "txn=5"+"&project_id="+ arr[1];
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
              var memberinfo = "<li>"+ memJSON.user_name+"<a href='javascript:deleteUser(\"" + arr[1] + "," + memJSON.user_name + "\");' id='delete_user'><em class='fa fa-trash'></em></a></li>";
              $(memberinfo).appendTo("#promembers");
          }
        },

        error: function (info) {
            console.log('An error occurred.');
            console.log(info);
        },
    });
});