$(function() {

	
	var form = $('#contact-form');

	var formMessages = $('.ajax-response');

	$(form).submit(function(e) {
		e.preventDefault();

		showSuccessModal();

		$('#contact-form input,#contact-form textarea').val('');
	});

	$('form.newslater').submit(function(e) {
		e.preventDefault();
		
		var button = $(this).find('button[type="submit"]');
		var originalText = button.text();
		
		button.text('Успішно!').prop('disabled', true);
		
		setTimeout(function() {
			button.text(originalText).prop('disabled', false);
		}, 3000);
		
		$(this).find('input[type="text"], input[type="email"]').val('');
	});

});


function showSuccessModal() {
	$('#successModal').fadeIn(300);
}


function closeSuccessModal() {
	$('#successModal').fadeOut(300);
}


$(document).on('click', '#successModal', function(e) {
	if (e.target === this) {
		closeSuccessModal();
	}
});


$(document).keydown(function(e) {
	if (e.keyCode === 27) {
		closeSuccessModal();
	}
});
