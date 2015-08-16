function redirect(){
	console.log("works");
	var u=document.getElementById("uname").value;
	var p=document.getElementById("passwd").value;
	var user="dipika";
	var pass="chettri";
	if (u==user && p==pass) {
		window.location="site.html";
		return false;
	}
}