var frmvalidator = new Validator("contact form");
frmvalidator.addValidation("name", "req", "Please provide your name");
frmvalidator.addValidation("email", "req", "Please provide your email address");
frmvalidator.addValidation("email", "email", "Please enter a valid email address");