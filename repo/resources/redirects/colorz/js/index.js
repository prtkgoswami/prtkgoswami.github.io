// Function to reset fields
function reset(){
    document.getElementById('rgb').value="";
    document.getElementById('hex').value=""
}

// Function to convert to RGB
function convertToRGB(s){
    var hexref=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']; 
    var a=[],t=0,st="",c=0;
    for(var i=0;i<=6;i++){
        if(i%2==0 && i>0){
            a.push(s.slice(t,i));
            t=i;
        }
    }
    for(e in a){
        c++;
        var temp=hexref.indexOf(a[e].charAt(0).toLowerCase())*16+hexref.indexOf(a[e].charAt(1).toLowerCase());
        st+=String(temp);
        if(c<3)
            st+=",";
    }
    document.getElementById('rgb').value=st;
}

// Function to convert a number to hex
function hexify(n){
    //console.log(n);
    var hexref=['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
    var res=""
    while(n>1){
        res+=hexref[n%16];
        console.log(n+" "+hexref[n%16]);
        n=Math.floor(n/16);
    }
    if(res.length!=2)
        res="0"+res;
    return res;
}

// Function to convert to Hex
function convertToHex(s){
    s=s.split(",");
    var st=""
    for(i in s){
        st+=hexify(parseInt(s[i]));
    }
    document.getElementById('hex').value=st;
}

// Function to check whether given rgb is valid or not
function checkValid(s){
    var a=s,v=0;
    for(i in a){
        if(a[i]==',' || (parseInt(a[i])>=0 && parseInt(a[i])<=9)){
            v=1;
        }
    }
    if(v==1){
        a=a.split(',');
        if(a.length!==3)
            return 0;
        for(i in a){
            if(a[i]=="")
                v=0;
        }
    }
    return v; 
}

function checkHex(){
    var hex=document.getElementById('hex').value;
    var count=0;
    if(hex.length==6){
        convertToRGB(hex);
    }
}
function checkRGB(){
    var rgb=document.getElementById('rgb').value;
    var count=0,valid=0;
    if(rgb.length>=5 && rgb.length<=12){
        valid=checkValid(rgb);
        if(valid==1)
            convertToHex(rgb);
    }
}

window.onload=function(){
    document.getElementById('hex').value="";
    document.getElementById('rgb').value="";
}