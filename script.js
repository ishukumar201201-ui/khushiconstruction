document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. CONTACT FORM LOGIC ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const nameInput = this.querySelector('input[type="text"]');
            const emailInput = this.querySelector('input[type="email"]');
            const submitBtn = this.querySelector('.submit-btn');
            
            if(!nameInput || !emailInput) return; // Error handling

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const originalBtnText = submitBtn.innerText;

            if (name === "" || email === "") {
                alert("Please fill in all required fields.");
                return;
            }

            // Loading State
            submitBtn.innerText = "Processing...";
            submitBtn.disabled = true;
            submitBtn.style.opacity = "0.7";

            setTimeout(() => {
                alert("Thank you " + name + "! Your message has been sent.");
                this.reset();
                submitBtn.innerText = originalBtnText;
                submitBtn.disabled = false;
                submitBtn.style.opacity = "1";
            }, 1500);
        });
    }

    // --- 2. SMOOTH SCROLL ---
    const ctaBtn = document.querySelector('.cta-btn');
    if (ctaBtn) {
        ctaBtn.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if(targetId.startsWith("#")) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    }

    // --- 3. PREMIUM DARK MODE SWITCH (FIXED) ---
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
    const currentTheme = localStorage.getItem('theme');

    // Saved preference check karein
    if (currentTheme === 'dark-mode') {
        document.body.classList.add('dark-mode');
        if (toggleSwitch) toggleSwitch.checked = true;
    }

    if (toggleSwitch) {
        toggleSwitch.addEventListener('change', function(e) {
            if (e.target.checked) {
                document.body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark-mode'); // Save preference
            } else {
                document.body.classList.remove('dark-mode');
                localStorage.setItem('theme', 'light-mode'); // Save preference
            }
        });
    }

    // --- 4. PASSWORD SHOW/HIDE (EYE ICON) ---
    const togglePassword = document.querySelector('#togglePassword');
    const passwordField = document.querySelector('#password');

    if (togglePassword && passwordField) {
        togglePassword.addEventListener('click', function () {
            const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordField.setAttribute('type', type);
            this.classList.toggle('fa-eye-slash'); // Icon change
        });
    }
});