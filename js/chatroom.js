$('#chatroom').on({
	"click":function(e){
            var SearchString = String(document.URL);
            var arr = SearchString.split('?');
            console.log("PROJECT ID: " + arr[1]);
            var link = "https://ec2-54-175-113-241.compute-1.amazonaws.com/" + arr[1];
            console.log("link: " + link);
            console.log("inside open window");
            window.open(link);//, “Mattermost”, “top=0,left=0,width=400,height=600,status=no,toolbar=no,location=no,menubar=no,titlebar=no”);
	}
});