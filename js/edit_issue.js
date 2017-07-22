$("#edit-issue").click(function (event) {
    console.log("inside edit js");
    var SearchString = String(document.URL);
    var arr = SearchString.split('?');
    console.log("arr = " + arr);
    var idset = arr[1].split('&&&');
    var project_id = $('#issue_proj_id').val();
    issue_name = $('#edit_issue_name').val();
    issue_type = $('#edit_issue_type').val();
    issue_priority = $('#edit_issue_priority').val();
    issue_severity = $('#edit_issue_severity').val();
    issue_found_date = $('#edit_issue_found_date').val();
    issue_description = $('#edit_issue_description').val();

    var data =
        "txn=22" +
        "&issue_id=" + task_name +
        "&project_id=" + task_status +
        "&issue_name=" + task_description +
        "&issue_type=" + task_creator +
        "&issue_priority=" + requirement_id +
        "&issue_severity=" + task_due +
        "&issue_date_found=" + task_id +
        "issue_description" + issue_description;

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
});/**
 * Created by Bella on 7/22/17.
 */
