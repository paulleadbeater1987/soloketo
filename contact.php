
<?php require_once 'components/header/header.php'; ?>
<?php require_once 'functions/send_email.php'; ?>

	<div id="div_Contact" class="content_wrap">
		
		<form id="contact_form" method="post">

			<h2 id="h2Contact">Contact</h2>

			<div class="form_row row">
				<div class="form_column col-sm-6">
					<input id="contact_name" type="text" name="name" placeholder="Your Name"  value="<?php echo isset($_POST['name']) ? $name : ''; ?>" />
				</div>

				<div class="form_column col-sm-6">
					<input id="contact_email" type="email" name="email" placeholder="Email Address"  value="<?php echo isset($_POST['email']) ? $email : ''; ?>" />
				</div>
			</div>

			<div id="divTextArea" class="form_row row">
				<textarea id="contact_message" name="message" placeholder="Insert your message" rows="5"><?php echo isset($_POST['message']) ? $message : ''; ?></textarea>
			</div>
		
			<?php if ($msg != ''): ?>
				<div class="alert <?php echo $msgClass; ?>">
					<?php echo $msg; ?>
				</div>
			<?php endif; ?>

			<div class="form_row">
				<input id="contactSubmit" value="Submit" type="submit" name="submit" />
			</div>

		</form>

	</div>

<?php require_once 'components/footer/footer.php'; ?>