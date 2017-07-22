$("#add-task").click(function (event) {
    var SearchString = String(document.URL);
    var arr = SearchString.split('?');
   console.log("arr = " + arr);
   var idset = arr[1].split('&&&');
   var requirement_id = idset[0];
   task_name = $('#add_task_name').val();
   task_status = $('#add_task_status').val();
   task_description = $('#add_task_description').val();
   task_due = $('#add_task_due').val();

   var data = "txn=13" +
           "&task_name=" + task_name +
           "&task_status=" + task_status +
           "&task_description=" + task_description +
           "&requirement_id=" + requirement_id + "&task_due_date=" + task_due;
   console.log(data);
   $.ajax({
      type:"GET",
      url:"http://ec2-34-201-82-113.compute-1.amazonaws.com/idea/IDEA.jsp?",
      data: data,
      success: function(info){
        window.location.href = window.location.href;
      },
      error: function(info){
        console.log('An error occurred in ADD TASK!');
        console.log(info);
      }
   });
});



