$("#add-requirement2").click(function( event ) {
    var SearchString = String(document.URL);
    var arr = SearchString.split('?');
    console.log(arr[1]);
    var idset = arr[1].split('&&&');
    // var requirement_id = idset[1];
    var project_id = idset[0];
    requirement_name = $('#add_requirement_name').val();
    requirement_status = $("#add_requirement_status").val();
    requirement_description = $('#add_requirement_description').val();
    user_name = $('#add_requirement_creator').val();
    var data = "txn=11"
        + "&requirement_name=" + requirement_name
        + "&requirement_status=" + requirement_status
        + "&requirement_description=" + requirement_description
        + "&user_name=" + user_name
        + "&project_id=" + project_id;
    console.log(data);
    $.ajax({
        type: "GET",
        url:  "http://ec2-34-201-82-113.compute-1.amazonaws.com/idea/IDEA.jsp?",
        data: data,
        success: function (info) {
            console.log("Add req info = " + info);
            window.location.href=window.location.href;
        },

        error: function (info) {
            console.log('An error occurred.');
            console.log(info);
        },
    });
});