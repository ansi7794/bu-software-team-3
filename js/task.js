$("#add-task1").click(function (event) {
   var SearchString = String(document.URL);
   var arr = SearchString.split('?');
   console.log("add task = " + arr[1]);
   // var res = String(arr[1]).replace(/%22/g, "\"");
   // console.log("res = " + res);
   taskJSON = JSON.stringify(arr[1]);
   console.log(taskJSON);
   task_name = $('#add_task_name').val();
   console.log(task_name);
   task_status = $('#add_task_status').val();
   task_description = $('#add_task_description').val();
   user_name = $('#add_task_assignee').val();
   var data = "txn=13" +
           "&requirement_id=" + taskJSON.requirement_id +
           "&task_name=" + task_name +
           "&task_status=" + task_status +
           "&task_description=" + task_description +
           "&user_name=" + user_name;
   console.log(data);
   $.ajax({
      type:"POST",
      url:"http://ec2-34-201-82-113.compute-1.amazonaws.com/idea/IDEA.jsp?",
      data: data,
      success: function(info){
        alert(info);
        window.location.href = window.location.href;
      },
      error: function(info){
        console.log('An error occurred in ADD TASK!');
        console.log(info);
      }
   });
});