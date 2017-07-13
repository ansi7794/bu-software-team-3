$("#edit-task").click(function (event) {
    console.log("inside edit js");
    var SearchString = String(document.URL);
    var arr = SearchString.split('?');
    console.log("arr = " + arr);
    var idset = arr[1].split('&&&');
    var requirement_id = idset[0];
    var task_id = $("#edit_task_id").val();
    task_name = $('#edit_task_name').val();
    task_status = $('#edit_task_status').val();
    task_description = $('#edit_task_description').val();
    task_creator = $('#edit_task_creator').val();
    task_due = $('#edit_task_due').val();

    var data =
        "txn=20" +
        "&task_name=" + task_name +
        "&task_status=" + task_status +
        "&task_description=" + task_description +
        "&task_creator=" + task_creator +
        "&requirement_id=" + requirement_id +
        "&task_due_date=" + task_due +
        "&task_id=" + task_id;

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