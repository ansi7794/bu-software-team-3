$("#edit-requirement").click(function (event) {
    var SearchString = String(document.URL);
    var arr = SearchString.split('?');
    console.log("EDIT REQ ID SET = " + arr);
    var idset = arr[1].split('&&&');
    var requirement_id = $('#edit_requirement_id').val();;
    requirement_name = $('#edit_requirement_name').val();
    requirement_status = $('#edit_requirement_status').val();
    requirement_description = $('#edit_requirement_description').val();
    requirement_creator = $('#edit_requirement_creator').val();

    var data =
        "txn=18" +
        "&requirement_name=" + requirement_name +
        "&requirement_status=" + requirement_status +
        "&requirement_description=" + requirement_description +
        "&requirement_creator=" + requirement_creator +
        "&requirement_id=" + requirement_id;

    console.log(data);
    $.ajax({
        type:"GET",
        url:"http://ec2-34-201-82-113.compute-1.amazonaws.com/idea/IDEA.jsp?",
        data: data,
        success: function(info){
            window.location.href = window.location.href;
        },
        error: function(info){
            console.log('An error occurred in UPDATE Req!');
            console.log(info);
        }
    });
});