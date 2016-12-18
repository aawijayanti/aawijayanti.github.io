/* Comment like this */
// Or comment like this

function askQuestions() {

	var firstName = prompt('What is your first name?');
	var lastName = prompt('What is your last name?');
	var fullName = firstName + ' ' + lastName;
	console.log('User is named ' + fullName);

	if (firstName.toLowerCase().trim() == 'general' && lastName.toLowerCase().trim() != 'assembly') {
		console.log(window.alert('Hello General!'));
	}


	var age = prompt('How old are you?');
	age = parseInt(age);

	if (age >= 18) {
		console.log('User is an adult');
	} else if (age >= 13) {
		console.log('User is a teenager');
	} else {
		console.log('User is a child');
	}


	var faveColour = prompt('What is your favourite colour?');
	faveColour = faveColour.toLowerCase().trim();

	if (faveColour == 'red' ||
		faveColour == 'green' ||
		faveColour == 'blue' ||
		faveColour == 'yellow') {
			$('h1').css('color', faveColour);
	}

}



// When page has loaded
$(function() {
	
	//When user clicks image, interrogate!
	$('img').on('click', askQuestions);

	// When the user clicks h3
	$('h3').on('click', function() {
	
		// Hide next element 
		$(this).next().slideToggle(1000);

	});
});