function GetUrlValue(VarSearch){
  var SearchString = String(document.URL);
  var arr = SearchString.split('?');
  console.log(arr[1]);
  var data = "txn=5"+"&project_id="+ arr[1];
  $.ajax({
    type: "GET",
    url:  "http://ec2-34-201-82-113.compute-1.amazonaws.com/idea/IDEA.jsp?",
    data: data,
    success: function (info) {
        alert("hi");
        console.log("yeah");
        console.log(info);
        var projects = info.replace(/\n/gm,"");
        var detailsJSON = JSON.parse(projects);
        console.log(detailsJSON);
        var projectinfo = "<h1>"+detailsJSON.project_name+"</h1><div class=\"table-responsive\"><table class=\"table table-striped\"><tbody><tr><td>Project ID</td><td>"+detailsJSON.project_id+"</td></tr><tr><td>Project Creator</td><td>"+detailsJSON.project_creator+"</td></tr><tr><td>Project Status</td><td>"+detailsJSON.project_status+"</td></tr><tr><td>Project description</td><td>"+detailsJSON.project_description+"</td></tr></tbody></table></div></br></br>"+taskbutton+tasklist+"</br></br></br>"+issuebutton+issuelist;
        return projectinfo;
        //"project_description":"Project management application for software engineering class","project_creator":"Jim","project_id":"id1234","project_status":"on track ","project_name":"id1234"
    },

    error: function (info) {
        console.log('An error occurred.');
        console.log(info);
    },
  });
}