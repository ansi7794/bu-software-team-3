$("#add-requirement").click(function( event ) {
  var SearchString = String(document.URL);
  var arr = SearchString.split('?');
  console.log(arr[1]);
  var res = String(arr[1]).replace(/%22/g, "\"");
  console.log(res);
  requirementJSON=JSON.parse(res);
  requirement_name = $('#requirement_title').val();
  requirement_status = $("#requirement_status").val();
  requirement_description = $('#requirements_description').val();
  user_name = $('#requirements_assignee').val();
  project_id = $('#project_id').val();
  data = "txn=11&requirement_name="+requirement_name+"&requirement_status="+requirement_status+"&requirement_description="+requirement_description+"&user_name="+user_name+"&project_id="+project_id;
  console.log(data);
  $.ajax({
    type: "POST",
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