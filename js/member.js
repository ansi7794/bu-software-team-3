$("#add-member").click(function( event ) {
  var SearchString = String(document.URL);
  var arr = SearchString.split('?');
  console.log(arr[1]);
  user_name = $('#user_name').val();
  data = "txn=7&project_id="+arr[1]+"&user_name="+user_name;
  console.log(data);
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