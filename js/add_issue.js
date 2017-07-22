$("#add-issue").click(function (event) {
    // project_id = $('#issue_proj_id').val();
    issue_name = $('#add_issue_name').val();
    issue_severity = $('#add_issue_severity').val();
    issue_priority = $('#add_issue_priority').val();
    issue_type = $('#add_issue_type').val();
    issue_description = $('#add_issue_description').val();
    issue_found_date = $('#add_issue_founddate').val();
    project_id = $('#add_issue_projid').val();

    var data = "txn=27" +
        "&project_id=" + project_id +
        "&issue_name=" + issue_name +
        "&issue_type=" + issue_type +
        "&issue_priority=" + issue_priority +
        "&issue_severity=" + issue_severity +
        "&issue_date_found=" + issue_found_date +
        "&issue_description=" + issue_found_date;
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



