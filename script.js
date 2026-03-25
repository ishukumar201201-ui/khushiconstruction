document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('checkbox');
    
    // Theme Loader
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        if(checkbox) checkbox.checked = true;
    }

    if (checkbox) {
        checkbox.addEventListener('change', () => {
            document.body.classList.toggle('dark-mode');
            localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
        });
    }

    // Password Toggle Logic
    const togglePassword = document.querySelector('#togglePassword');
    const passwordField = document.querySelector('#password');
    if (togglePassword) {
        togglePassword.addEventListener('click', function() {
            const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordField.setAttribute('type', type);
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    }
});