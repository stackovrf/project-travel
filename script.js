// Dummy JS for Travel Nepal website

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for contacting us! (Dummy message)');
            form.reset();
        });
    }
});
