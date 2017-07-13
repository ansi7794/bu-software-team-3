$("#edit-project").click(function (event) {
    console.log("inside edit js");
    var SearchString = String(document.URL);
    var arr = SearchString.split('?');
    project_id = arr[1];
    project_name = $('#edit_project_name').val();
    project_status = $('#edit_project_status').val();
    project_description = $('#edit_project_description').val();
    project_creator = $('#edit_project_creator').val();

    var data =
        "txn=16" +
        "&project_name=" + project_name +
        "&project_status=" + project_status +
        "&project_description=" + project_description +
        "&project_creator=" + project_creator +
        "&project_id=" + project_id;

    console.log(data);
    $.ajax({
        type:"GET",
        url:"http://ec2-34-201-82-113.compute-1.amazonaws.com/idea/IDEA.jsp?",
        data: data,
        success: function(info){
            window.location.href = window.location.href;
        },
        error: function(info){
            console.log('An error occurred in ADD project!');
            console.log(info);
        }
    });
});