$(document).ready(function(){
	//	INITIAL
	var bkmrks=0;
	document.getElementById('bkmrk_cnt').innerHTML="Marked : "+bkmrks;
	$.getJSON( "https://capillary.0x10.info/api/books?type=json&query=list_books", function(json){
		var img_cont=document.getElementById('bk_img');
		img_cont.innerHTML='';
		var image=document.createElement('img');
		image.src=json.books[0].image;
		image.className="image";
		img_cont.appendChild(image);
		document.getElementById('author').innerHTML="<strong>Author</strong> : "+json.books[0].author;
		document.getElementById('publisher').innerHTML="<strong>Publisher</strong> : "+json.books[0].details.Publisher;
		document.getElementById('isbn').innerHTML="<strong>ISBN</strong> : "+json.books[0].details.ISBN;
		document.getElementById('binding').innerHTML="<strong>Binding</strong> : "+json.books[0].details.Binding;
		document.getElementById('rating').innerHTML="<strong>Rating</strong> : "+json.books[0].rating;
		document.getElementById('bk_desc').innerHTML="<strong>Description</strong> :<br/>"+json.books[0].description;
	});

	// GENERATE LIST
	var frag=document.createDocumentFragment();
	$.getJSON( "https://capillary.0x10.info/api/books?type=json&query=list_books", function(json){
		var list=document.getElementById('bk_list');
		var numberOfBooks=document.getElementById('bk_cnt');
		numberOfBooks.innerHTML+=json.books.length;
		for(var i=0;i<json.books.length;i++){
			var cont=document.createElement('div');
			cont.className="container-fluid";
			var pill=document.createElement('div');
			pill.id=json.books[i].id;
			pill.className="bk_pill col-md-12";
			pill.innerHTML='<span class="glyphicon glyphicon-book"></span>&nbsp;&nbsp;';
			var name=document.createElement('span');
			name.className="bk_title";
			name.textContent=json.books[i].name;
			pill.appendChild(name);
			var cost=document.createElement('span');
			cost.className="bk_cost";
			cost.textContent=json.books[i].price;
			pill.appendChild(cost);
			cont.appendChild(pill);
			list.appendChild(cont);
		}
	});

	// LOAD BOOK DETAILS
	$(document).on('click', ".bk_pill", function() {
		var id=this.id;
		this.backgroundColor='#d5d5d5';
		$.getJSON( "https://capillary.0x10.info/api/books?type=json&query=list_books", function(json){
			var img_cont=document.getElementById('bk_img');
			img_cont.innerHTML='';
			var image=document.createElement('img');
			image.src=json.books[id-1].image;
			image.className="image";
			img_cont.appendChild(image);
			document.getElementById('author').innerHTML="<strong>Author</strong> : "+json.books[id-1].author;
			document.getElementById('publisher').innerHTML="<strong>Publisher</strong> : "+json.books[id-1].details.Publisher;
			document.getElementById('isbn').innerHTML="<strong>ISBN</strong> : "+json.books[id-1].details.ISBN;
			document.getElementById('binding').innerHTML="<strong>Binding</strong> : "+json.books[id-1].details.Binding;
			document.getElementById('rating').innerHTML="<strong>Rating</strong> : "+json.books[id-1].rating;
			document.getElementById('bk_desc').innerHTML="<strong>Description</strong> :<br/>"+json.books[id-1].description;

		});

		// BOOKMARK FUNCTION CALL
		$(document).on('click','#bkmrk_btn',function(){
			mark(id);
		});

		// DISPLAY BOOKMARK FUCNTION CALL
		$(document).on('click','#disp_bkmrk',function(){
			disp_bookmarks();
		});
	});

});
var bkmrks=0;
var marked=[];
var pill=document.getElementsByClassName('bk_pill');
// BOOKMARK FUNCTION
function mark(id){
	if(marked.indexOf(id-1)==-1){
		marked.push(id-1);
		bkmrks+=1;
		document.getElementById('bkmrk_cnt').innerHTML="Marked : "+bkmrks;
		if(typeof(Storage) !== "undefined") {
			localStorage.bookId = id-1;
			var b=document.getElementsByClassName('bk_pill');
			b[id-1].borderColor='#ff6347';
		}
		else {
			alert("Sorry! No Web Storage support..");
		}
		pill[id].borderColor='red';
	}
}
// DISPLAY BOOKMARK
function disp_bookmarks(){
	$.getJSON( "https://capillary.0x10.info/api/books?type=json&query=list_books", function(json){
		var marks=localStorage.getItem('bookId');
		var list=document.getElementById('bk_list');
		list.innerHTML='';
		for(var i=0;i<marked.length;i++){
			var cont=document.createElement('div');
			cont.className="container-fluid";
			var pill=document.createElement('div');
			pill.id=json.books[marked[i]].id;
			pill.className="bk_pill col-md-12";
			pill.innerHTML='<span class="glyphicon glyphicon-book"></span>&nbsp;&nbsp;';
			var name=document.createElement('span');
			name.className="bk_title";
			name.textContent=json.books[marked[i]].name;
			pill.appendChild(name);
			var cost=document.createElement('span');
			cost.className="bk_cost";
			cost.textContent=json.books[marked[i]].price;
			pill.appendChild(cost);
			cont.appendChild(pill);
			list.appendChild(cont);
		}
	});
}
