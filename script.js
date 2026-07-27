
const form = document.querySelector('form');

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
            showToast('Success! Your submission is complete.');
            form.reset();
        } else {
            showToast('Oops! There was a problem. Please try again.');
        }
    } catch (error) {
        showToast('Oops! There was a problem. Please try again.');
    }
});

function showToast(message) {
    const toastContainer = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.textContent = message;

    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('show');
    }, 10);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 500);
    }, 5000);
}