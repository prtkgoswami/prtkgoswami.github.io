<!DOCTYPE html>
<html>
	<head>
		<title>A Saga of Art</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="keywords" content=", Folk, Tradition, Shopping, E-shopping">
		<meta name="description" content="One Stop Destination for Everything Folk.">
		<meta name="author" content="PrTk">

		<!-- JQUERY -->
		<!-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.0.0/jquery.min.js"></script> -->
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
		
		<!-- BOOTSTRAP -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>

		<!-- FONT AWESOME -->
		<script src="https://use.fontawesome.com/f5cc5af207.js"></script>

		<!-- FONTS -->
		<link href="https://fonts.googleapis.com/css?family=Raleway:200,300,400|Great+Vibes" rel="stylesheet">

		<!-- CUSTOM -->
		<link rel="stylesheet" type="text/css" href="../css/style.css">
		<link rel="stylesheet" type="text/css" href="../css/contact.css">
		<script type="text/javascript" src="../js/script.js"></script>
	</head>
	<body>
		<div class="container-fluid">
			<nav class="navbar navbar-inverse navbar-fixed-top">
				<div class="container-fluid">
					<!-- Brand and toggle get grouped for better mobile display -->
					<div class="navbar-header">
						<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
						<a class="navbar-brand" href="#">Dorri</a>
					</div>

					<!-- Collect the nav links, forms, and other content for toggling -->
					<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<ul id="navigate" class="nav navbar-nav">
							<li><a href="../index.html">Home</a></li>
							<li class="dropdown">
								<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Category <span class="caret"></span></a>
								<ul class="dropdown-menu">
									<li>&nbsp;&nbsp;Home D&eacute;cor</li>
									<li><a href="#">Cushion Cover</a></li>
									<li><a href="#">Throw Cover</a></li>
									<li><a href="#">Table Runner</a></li>
									<li><a href="#">Table Cloth</a></li>
									<li><a href="#">Curtain</a></li>
									<li role="separator" class="divider"></li>
									<li>&nbsp;&nbsp;Fashion Accessory</li>
									<li><a href="#">Bags</a></li>
									<li><a href="#">Scarves</a></li>
									<li><a href="#">Handmade Jewellery</a></li>
								</ul>
							</li>
							<li><a href="./about.php">About</a></li>
							<li><a href="./contact.php">Contact</a></li>
						</ul>
						<ul class="nav navbar-nav navbar-right">
							<li><a href="#" data-toggle="modal" data-target="#loginModal">Register/Login</a></li>
							<li>
								<a href="#" data-toggle="modal" data-target="#cartModal">Cart <span class="glyphicon glyphicon-shopping-cart"></a>
							</li>
							<li><a href="#" id="searchbtn">
								<span class="glyphicon glyphicon-search"></span>
							</a></li>
						</ul>
					</div><!-- /.navbar-collapse -->
				</div><!-- /.container-fluid -->
			</nav>
			
			<div id="search-row" class="row" style="margin-top:50px;">
				<div>
					<form action="index_submit" method="" accept-charset="utf-8">
						<input type="text" name="search" id="search">
						<input type="submit" name="submit" value="Search">
					</form>
				</div>
			</div>

			<div id="main" class="row-fluid">
				<div id="about" class="container-fluid">
					<div class="col-lg-10 col-md-10 col-sm-10 col-lg-offset-1 col-md-offset-1 col-sm-offset-1">
						
					</div>
				</div>
			</div>
			
			<footer>
				<p class="footer-title">Thanks For Your Visit!</p>
				<p class="social-tag">Like What We Have, Please Share</p>
				<div id="social" class="col-md-6 col-sm-10 col-xs-10 col-md-offset-3 col-sm-offset-1 col-xs-offset-1">
					<div class="col-md-2 col-sm-2 col-xs-2"></div>
					<div class="col-md-2 col-sm-2 col-xs-2">
						<a href="#"><i class="fa fa-facebook" aria-hidden="true" style="color:#3b5998;"></i></a>
					</div>
					<div class="col-md-2 col-sm-2 col-xs-2">
						<a href="#"><i class="fa fa-google-plus" aria-hidden="true" style="color:#dd4b39;"></i></a>
					</div>
					<div class="col-md-2 col-sm-2 col-xs-2">
						<a href="#"><i class="fa fa-instagram" aria-hidden="true" style="color:#517fa4;"></i></a>
					</div>
					<div class="col-md-2 col-sm-2 col-xs-2">
						<a href="#"><i class="fa fa-twitter" aria-hidden="true" style="color:#00aced;"></i></a>
					</div>
				</div>
				<div class="clearfix"></div>
				<hr/>
				<div id="links" class="container col-md-8 col-sm-10 col-xs-10 col-md-offset-2 col-sm-offset-1 col-xs-offset-1">
					<div class="col-md-3 col-sm-6 col-xs-6">
						<p>Home D&eacute;cor</p>
						<a href=""><p>Cushion Covers</p></a>
						<a href=""><p>Throw Covers</p></a>
						<a href=""><p>Table Cloth</p></a>
						<a href=""><p>Table Runner</p></a>
						<a href=""><p>Curtain</p></a>
					</div>
					<div class="col-md-3 col-sm-6 col-xs-6">
						<p>Fashion Accessory</p>
						<a href=""><p>Bags</p></a>
						<a href=""><p>Scarves</p></a>
						<a href=""><p>Handmade Jewellery</p></a>
					</div>
					<div class="clearfix visible-sm-block visible-xs-block"></div>
					<div class="col-md-3 col-sm-6 col-xs-6">
						<p>Pages</p>
						<a href="../index.html"><p>Home</p></a>
						<a href="./about.php"><p>About Us</p></a>
						<a href="./contact.php"><p>Contact Us</p></a>
					</div>
					<div class="col-md-3 col-sm-6 col-xs-6">
						<p>Let Us Help You</p>
						<a href="#"><p>Your Account</p></a>
						<a href="./returns.php"><p>Returns</p></a>
						<a href="./help.php"><p>Help</p></a>
					</div>
				</div>
				<div class="clearfix"></div>
				<div id="copyright_statement" class="">
					<center><span class="glyphicon glyphicon-copyright-mark" style="color:#f5f5f5;"></span> 2016. Made with <span class="glyphicon glyphicon-heart-empty" style="color:#e53935;"></span> from India.</center>
				</div>
			</footer>

			
		</div>

		<!-- Login Modal -->
		<div id="loginModal" class="modal fade" tabindex="-1" role="dialog">
		  	<div class="modal-dialog">
		    	<div class="modal-content">
		      		<div class="modal-header">
		      			<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" style="color:white;">&times;</span></button>
		       	 		<p class="modal-title">Dorri</p>
		      		</div>
		      		<div class="modal-body">
		        		<p class="modal-heading">Login</p>
		        		<form>
		        			<input type="text" name="e" placeholder="Email"><br><br>
		        			<input type="password" name="p" placeholder="Password"><br><br>
		        			<input type="checkbox" name="remember"> Remember Me<br><br>
		        			<button type="submit" class="btn btn-success">Login</button>
		        		</form>
		        		<br/>
		        		<a href="./register.php" title="">New to this Site?</a>
		      		</div>
		    	</div>
		  	</div>
		</div>

		<!-- Cart Modal -->
		<div id="cartModal" class="modal fade" tabindex="-1" role="dialog">
		  	<div class="modal-dialog">
		    	<div class="modal-content">
		      		<div class="modal-header">
		      			<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true" style="color:white;">&times;</span></button>
		       	 		<p class="modal-title">Dorri</p>
		      		</div>
		      		<div class="modal-body">
		        		<p class="modal-heading">Cart</p>
		        		
		      		</div>
		      		<div class="modal-footer">
		      			<button type="button" class="btn btn-success">Checkout</button>
		      		</div>
		    	</div>
		  	</div>
		</div>
	</body>
</html>