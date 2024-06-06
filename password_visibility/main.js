
document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const toggleButton = document.getElementById('togglePassword');

    toggleButton.addEventListener('click', () => {
        if (passwordInput.getAttribute('type') === 'password') {
            passwordInput.setAttribute('type', 'text');
            toggleButton.textContent = 'Hide';
        } else {
            passwordInput.setAttribute('type', 'password');
            toggleButton.textContent = 'Show';
        }
    });
});




/* ocument.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const toggleButton = document.getElementById('togglePassword');

    toggleButton.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);

        toggleButton.textContent = type === 'password' ? 'Show' : 'Hide';
    });
}); */
