$(function() {

	// Get the form.
	var form = $('#contact-form');

	// Get the messages div.
	var formMessages = $('.ajax-response');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Показуємо pop-up модальне вікно замість текстового повідомлення
		showSuccessModal();

		// Clear the form.
		$('#contact-form input,#contact-form textarea').val('');
	});

	// Newsletter forms
	$('form.newslater').submit(function(e) {
		e.preventDefault();
		
		// Показуємо повідомлення про успішну підписку
		var button = $(this).find('button[type="submit"]');
		var originalText = button.text();
		
		button.text('Успішно!').prop('disabled', true);
		
		// Повертаємо оригінальний текст через 3 секунди
		setTimeout(function() {
			button.text(originalText).prop('disabled', false);
		}, 3000);
		
		// Очищуємо форму
		$(this).find('input[type="text"], input[type="email"]').val('');
	});

});

// Функція для показу модального вікна
function showSuccessModal() {
	$('#successModal').fadeIn(300);
}

// Функція для закриття модального вікна
function closeSuccessModal() {
	$('#successModal').fadeOut(300);
}

// Закриття модального вікна при кліку на фон
$(document).on('click', '#successModal', function(e) {
	if (e.target === this) {
		closeSuccessModal();
	}
});

// Закриття модального вікна при натисканні клавіші Escape
$(document).keydown(function(e) {
	if (e.keyCode === 27) { // Escape key
		closeSuccessModal();
	}
});
