$(document).ready(function(){
	console.log("ready");

	var xt="",h3OK=1

	// Bootstrap Tooltip
	$(function () {
  		$('[data-toggle="tooltip"]').tooltip()
	})

	// Redirect Functions
	$('#JSON_BTN').click(function(event) {
		window.location.href='index_json.html';
	});
	$('#XML_BTN').click(function(event) {
		window.location.href='index_xml.html';
	});
	$('#ABT_BTN').click(function(event) {
		window.location.href='about.html';
	});

	$('#CLR_BTN').click(function(event) {
		$('#ugly').val('');
	});

	$('#FORMAT_BTN').click(function(event) {
		/* Act on the event */
	});

	$('#VALIDATE_BTN').click(function(event) {
		console.log('Validate Button Clicked');
		$('#val_result').html('');
		$('#beauty').val('');
		var flag = $('#flag').html();
		console.log(flag);
		if (flag == '{ JSON }'){
			validateJSON();
		}
		else{
			validateXML();
		}
	});

	function validateJSON(){
		console.log('Validating JSON');
		var jsonStr = $('#ugly').val();
		if(jsonStr.trim().length==0){
			setMessage("error","Input text are in Empty");
			return false;
		}
		hideMessage();
		last_action="validateJSON";
		try{
			var jsonStr=editor.getText();
			var json=jsonlint.parse(jsonStr);
			setMessage("success","VALID JSON");
			editorOutput.setMode("text");
			editorOutput.setText("Valid JSON");
			return true;
		}
		catch(e){
			setMessage("error",e);
			editorOutput.setMode("text");
			editorOutput.setText(e.message);
			return false;
		}
	}

	function checkErrorXML(x){
		xt="";
		OK=1;
		checkXML(x);
	}

	function checkXML(n){
		var l,i,nam;
		nam=n.nodeName;
		if (nam=="h3"){
	 		if (OK==0)
	  			return;
	 		OK=0;
	 	}
		if (nam=="#text")
	 		xt=xt + n.nodeValue + "\n";

		l=n.childNodes.length;
		for (i=0;i<l;i++)
	 		checkXML(n.childNodes[i]);
	}

	function validateXML(){
		if (document.implementation.createDocument){
		  	try{
		  		var text=$('#ugly').val();
		  		var parser=new DOMParser();
		  		var xmlDoc=parser.parseFromString(text,"application/xml");
		  		var alert = '<div class="alert alert-success alert-dismissible fade show" role="alert">\
							<strong>No Validation Error Found</strong>\
  							<button type="button" class="close" data-dismiss="alert" aria-label="Close" style="margin: 0;">\
    							<span aria-hidden="true">&times;</span>\
 							</button>\
							</div>';
		   		$('#val_result').html(alert);
		  	}
		  	catch(err){
		  		alert(err.message)
		  		var temp = err.message;
		  		temp = temp.replace('<','&lt;').replace('>', '&gt;');
		  		$('#val_result').append("<p>Validation Error : "+temp+"</p>");
		  	}

			if (xmlDoc.getElementsByTagName("parsererror").length>0){
		   		checkErrorXML(xmlDoc.getElementsByTagName("parsererror")[0]);
		   		// xt = xt.replace('<','&lt;').replace('>', '&gt;').replace('\n','<br/>');
		   		var rep = xt.slice(xt.indexOf("Location:"),xt.indexOf("Line Number"));
		   		xt = xt.replace(rep, '');
		   		rep = xt.slice(xt.indexOf('-'));
		   		console.log(rep);
		   		xt.replace(rep, '');
		   		// alert(xt);
		   		console.log('XT : <br/>'+xt);

		   		var alert = '<div class="alert alert-danger alert-dismissible fade show" role="alert">\
							<strong>Validation Error!</strong>\
  							<button type="button" class="close" data-dismiss="alert" aria-label="Close" style="margin: 0;">\
    							<span aria-hidden="true">&times;</span>\
 							</button>\
							</div>';
		   		$('#val_result').html(alert);
		   		$('#beauty').val(xt);
		   	}
		 	else{
		   		// alert("No errors found");
		   		var alert = '<div class="alert alert-success alert-dismissible fade show" role="alert">\
							<strong>No Validation Error Found</strong>\
  							<button type="button" class="close" data-dismiss="alert" aria-label="Close" style="margin: 0;">\
    							<span aria-hidden="true">&times;</span>\
 							</button>\
							</div>';
		   		$('#val_result').html(alert);
		   	}
		}
		else{
		 	// alert('Your browser cannot handle XML validation');
		 	$('#val_result').html("<p>Your browser cannot handle XML validation</p>");
		}
	}

});
