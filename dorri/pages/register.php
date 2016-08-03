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
		<link rel="stylesheet" type="text/css" href="../css/register.css">
		<script type="text/javascript" src="../js/script.js"></script>
	</head>
	<body>
		<div class="container-fluid">
			
			<div id="topbar">
				<p>Dorri</p>
			</div>
			

			<div id="main" class="row-fluid">
				<p>Registration</p>
				<form>
					<table>
						<tr>
							<td><label for="name">Name : </label></td>
							<td><input type="text" name="name" id="name"></td>
						</tr>
						<tr>
							<td><label for="email">Email : </label></td>
							<td><input type="email" name="email" id="email"></td>
						</tr>
						<tr>
							<td><label for="pass1">Password : </label></td>
							<td><input type="password" name="pass1" id="pass1"></td>
						</tr>
						<tr>
							<td><label for="pass2">Confirm Password : </label></td>
							<td><input type="password" name="pass2" id="pass2"></td>
						</tr>
						<tr>
							<td><br></td>
							<td></td>
						</tr>
						<tr>
							<td><label for="sex">Sex : </label></td>
							<td>
								<span id="sex">
									<span><input type="radio" name="sex" value="male"></span>
									<span> Male</span>
									<span><input type="radio" name="sex" value="female"></span>
									<span> Female</span>
								</span>
							</td>
						</tr>
						<tr>
							<td><label for="dob">Date of Birth : </label></td>
							<td><input type="date" name="dob" id="dob"></td>
						</tr>
						<tr>
							<td><label for="doa">Date of Anniversary : </label></td>
							<td><input type="date" name="doa" id="doa"></td>
						</tr>
						<tr>
							<td><label for="phone">Phone Number : </label></td>
							<td><input type="text" name="phone" id="phone"></td>
						</tr>
						<tr>
							<td><label for="street">Street Address : </label></td>
							<td><textarea id="street" name="street"></textarea></td>
						</tr>
						<tr>
							<td><label for="city">City : </label></td>
							<td><input type="text" name="city" id="city"></td>
						</tr>
						<tr>
							<td><label for="state">State : </label></td>
							<td><input type="text" name="state" id="state"></td>
						</tr>
						<tr>
							<td><label for="country">Country : </label></td>
							<td>
								<select id="country" name="country">
							      	<option value="default">Select Country</option>
							      	<option value="india">India</option>
							    </select>
							</td>
						</tr>
						<tr>
							<td><label for="pin">Pin Code : </label></td>
					    	<td><input type="text" name="pin" id="pin"></td>
						</tr>
				    </table>
				    <center>
				    	<input type="submit" name="submit" value="Submit">
				    	<p>Not New? <a href="#" data-toggle="modal" data-target="#loginModal">Login</a></p>
				    </center>
				</form>
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
						<a href="#"><p>Contact Us</p></a>
					</div>
					<div class="col-md-3 col-sm-6 col-xs-6">
						<p>Let Us Help You</p>
						<a href="./account.php"><p>Your Account</p></a>
						<a href="./return.php"><p>Returns</p></a>
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
		        		<a href="./pages/register.php" title="">New to this Site?</a>
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