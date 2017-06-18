$("#add-project").click(function( event ) {
  project_name = document.getElementById('project_name');
  project_creator = document.getElementById('project_creator');
  project_status = document.getElementById('project_status');
  project_description = document.getElementById('project_description');
  data = "txn=6&project_name="+project_name+"&project_creator="+project_creator+"&project_status="+project_status+"&project_description="+project_description;
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