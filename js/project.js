$("#add-project").click(function( event ) {
  var SearchString = String(document.URL);
  var arr = SearchString.split('?');
  console.log(arr[1]);
  var res = String(arr[1]).replace(/%22/g, "\"");
  userJSON=JSON.parse(res);
  project_name = $('#project_name').val()
  project_creator = $('#project_creator').val();
  project_status = $('#project_status').val();
  project_description = $('#project_description').val();
  data = "txn=6&user_name="+userJSON.user_name+"&project_name="+project_name+"&project_status="+project_status+"&project_creator="+project_creator+"&project_description="+project_description;
  console.log(data);
  $.ajax({
    type: "POST",
    url:  "http://ec2-34-201-82-113.compute-1.amazonaws.com/idea/IDEA.jsp?",
    data: data,
    success: function (info) {
            window.location.href=window.location.href;
        },

    error: function (info) {
        console.log('An error occurred.');
        console.log(info);
    },
  });
});