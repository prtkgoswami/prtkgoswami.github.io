var	res=0,
	string="",
	count=0,
	flag=1,
	tog_c=0;
//Enter Operator
function enterval(val){
	document.getElementById("disp").value+=val;
}
//Enter Number
function enternum(val){
	document.getElementById("disp").value+=val;
}
//Evaluate Query
function eval(){ 
	document.getElementById('countcalc').innerHTML=++count;
	string=document.getElementById("disp").value;
	res=math.eval(document.getElementById("disp").value)
	document.getElementById("disp").value=res;
	console.log(string);
	if(typeof(Storage) !== "undefined") {
		if(flag==1){
    		localStorage.setItem("query",string);
    		localStorage.setItem("result",res);
    		document.getElementById('panel_body').innerHTML+='<div class="row result" onclick="select(this)">'+localStorage.getItem("query")+"="+localStorage.getItem("result")+'</div>';
		}
	} 
	else {
	    alert("Sorry! No Web Storage support..");
	}
	res=0;
	string=""
} 
//Clear Display
function clean(){
	document.getElementById("disp").value='';
	num=0;
}

//Toggles History On And Off
function tog(){
	console.log(tog_c);
	tog_c++;
	if(tog_c%2==0){
		document.getElementById("hist_off").value="ON";
		flag=1;
	}
	else{
		document.getElementById("hist_off").value="OFF";
		flag=0;
	}
} 

//Select From History
function select(e){
	var string=e.innerHTML,
		str="";
	for(var i=string.length-1;string[i]!='=';i--)
		str+=string[i];
	str=str.split("").reverse().join("");
	document.getElementById('disp').value=str;
}

//Initializing Calculation Counter
window.onload=function(){
	document.getElementById('countcalc').innerHTML="0";
}
