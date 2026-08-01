
const form = document.querySelector('form');
const toastContainer = document.getElementById('toast-container');
const errorMessage = 'Oops! There was a promblem. Please try again';
const successMessage = 'Your submission is complete.';

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            showToast(successMessage);
            form.reset();
        } else {
            showToast(errorMessage);
        }
    } catch (error) {
        showToast(errorMessage);
    }
});

function showToast(message) {
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.textContent = message;

    toastContainer.appendChild(toast);

    requestAnimationFrame(() => toast.classList.add('show'));

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 500);
    }, 5000);
}