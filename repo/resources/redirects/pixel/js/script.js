$(document).ready(function() {
	// ToolTip
	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	})

	// Initializing Board
	var count = 0;
	for (var i = 1; i <= 20; i++) {
		$('#board').append('<div class="row">');
		for (var j = 1; j <= 20; j++) {
			count+=1;
			$('#board').append('<div id="cell'+count+'" class="cell"></div>')
		}
		$('#board').append('</div>');
	}

	// INITIALIZING PIXEL
	var css_val = new Array();
	var css_temp = "";
	var color = "rgb(0,0,0)";
	var pixel = 10;
	var flag = "draw";
	$('#css-val').html("NO CSS GENERATED");
	console.log("READY!!!");
	console.log("MODE >> "+flag.toUpperCase());
	console.log("COLOR >> "+color);
	console.log("PIXEL SIZE >> "+pixel+"PX");

	$('.cell').click(function(){
		var off_top = Math.ceil(($(this).offset().top-$('#board').offset().top)/25)+1;
		var off_left = Math.ceil(($(this).offset().left-$('#board').offset().left)/25)+1;
		console.log(off_left+" "+off_top);
		console.log("CURRENT COLOR >> "+color);
		css_temp=off_left*pixel+"px "+off_top*pixel+"px 0 "+color;
		
		if (flag == "erase") {
			var cell_col = $(this).css("backgroundColor");
			var temp=off_left*pixel+"px "+off_top*pixel+"px 0 "+cell_col;
			var index = css_val.indexOf(temp);
			console.log("INDEX OF "+temp+" >> "+index);
			if(index > -1){
				$(this).removeClass('selected');
				css_val.splice(index, 1);
				$(this).css('backgroundColor',"#333");
			}
		} else if(flag == "draw"){
			if(css_val.indexOf(css_temp) == -1){
				if($(this).hasClass('selected'))
					css_val.splice(css_val.indexOf(off_left*pixel+"px "+off_top*pixel+"px 0 "+$(this).css("backgroundColor")), 1);
				$(this).addClass('selected');
				$(this).css('backgroundColor',color);
				css_val.push(css_temp);
			}
		}
		else if(flag == "fill"){
			var cell_col = $(this).css("backgroundColor");
			// DO SOMETHING
		}
		
		console.log("CURRENT CSS VALUES >>");
		console.log(css_val);
		console.log();
	});

	$('#clear').click(function(){
		console.log("CLEARING...");
		$('#board .cell').css('background-color','#333');
		$('#css-val').html("NO CSS GENERATED");
		css_val = [];
	});

	$('#generate').click(function(){
		console.log("GENERATING CSS");
		$('#css-val').html(".pixel-css {<br>&nbsp;&nbsp;&nbsp;box-shadow: "+css_val.join()+";<br/>&nbsp;&nbsp;&nbsp;height:\
		 "+pixel+"px;<br/>&nbsp;&nbsp;&nbsp;width: "+pixel+"px;<br/>}");
	});

	$('.col-sq').click(function() {
		color = $(this).css("backgroundColor");
		console.log("COLOR CHANGED TO >> "+color);
	});

	$('#draw').click(function() {
		flag = "draw";
		console.log("MODE CHANGE >> "+flag.toUpperCase());
	});

	$('#erase').click(function() {
		flag = "erase";
		console.log("MODE CHANGE >> "+flag.toUpperCase());
	});

	$('#fill').click(function() {
		flag = "fill";
		console.log("MODE CHANGE >> "+flag.toUpperCase());
	});

	$('#pixel').change(function() {
		pixel = $(this).val();
		console.log("NEW PIXEL SIZE >> "+pixel+"PX");
	});
});