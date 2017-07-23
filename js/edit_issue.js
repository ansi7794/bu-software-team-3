$("#edit-issue").click(function (event) {
    console.log("inside edit js");
    var project_id = $('#edit_issue_projid').val();
    var issue_id = $('#edit_issue_id').val();
    var issue_name = $('#edit_issue_name').val();
    var issue_type = $('#edit_issue_type').val();
    var issue_priority = $('#edit_issue_priority').val();
    var issue_severity = $('#edit_issue_severity').val();
    var issue_found_date = $('#edit_issue_founddate').val();
    var issue_description = $('#edit_issue_description').val();

    var data =
        "txn=22" +
        "&project_id=" + project_id +
        "&issue_name=" + issue_name +
        "&issue_id=" + issue_id +
        "&issue_type=" + issue_type +
        "&issue_priority=" + issue_priority +
        "&issue_severity=" + issue_severity +
        "&issue_date_found=" + issue_found_date +
        "&issue_description=" + issue_description;

    console.log(data);
    $.ajax({
        type:"GET",
        url:"http://ec2-34-201-82-113.compute-1.amazonaws.com/idea/IDEA.jsp?",
        data: data,
        success: function(info){
            console.log("function call");
            GetIssuesByProj(project_id);
        },
        error: function(info){
            console.log('An error occurred in ADD TASK!');
            console.log(info);
        }
    });
});/**
 * Created by Bella on 7/22/17.
 */