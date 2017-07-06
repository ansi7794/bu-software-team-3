$("#add-requirement2").click(function( event ) {
  var SearchString = String(document.URL);
  var arr = SearchString.split('?');
  console.log(arr[1]);
  console.log("new2");
  requirement_name = $('#requirements_title').val();
  requirement_status = $("#requirements_status").val();
  requirement_description = $('#requirements_description').val();
  user_name = $('#requirements_assignee').val();
  project_id = arr[1];
  var data = "txn=11&requirement_name="+requirement_name+"&requirement_status="+requirement_status+"&requirement_description="+requirement_description+"&user_name="+user_name+"&project_id="+project_id;
  console.log(data);
  $.ajax({
    type: "GET",
    url:  "http://ec2-34-201-82-113.compute-1.amazonaws.com/idea/IDEA.jsp?",
    data: data,
    success: function (info) {
            console.log(info);
            var requirement = info.replace(/\n/gm,"");
            var detailsJSON = JSON.parse(requirement);
            window.location.href=window.location.href;
        },

    error: function (info) {
        console.log('An error occurred.');
        console.log(info);
    },
  });
});