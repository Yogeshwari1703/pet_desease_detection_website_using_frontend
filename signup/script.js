// Initialize the page
document.addEventListener('DOMContentLoaded', function () {
    console.log("PetHealth Pro loaded successfully");

    // Set default tab to owner login
    switchTab('owner');
});

// Tab switching
function switchTab(tab) {
    // Update tab styling
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.form-container').forEach(f => f.classList.remove('active'));

    if (tab === 'owner') {
        document.querySelector('.tab:nth-child(1)').classList.add('active');
        document.getElementById('owner-login').classList.add('active');
    } else {
        document.querySelector('.tab:nth-child(2)').classList.add('active');
        document.getElementById('vet-login').classList.add('active');
    }

    // Hide other containers
    document.getElementById('signup-options').style.display = 'none';
    document.getElementById('otp-container').style.display = 'none';
}

// Show signup options
function showSignupOptions() {
    document.querySelectorAll('.form-container').forEach(f => f.style.display = 'none');
    document.getElementById('signup-options').style.display = 'block';
    document.getElementById('otp-container').style.display = 'none';
}

// Show specific signup form
function showSignupForm(type) {
    document.getElementById('signup-options').style.display = 'none';
    document.querySelectorAll('.form-container').forEach(f => f.style.display = 'none');

    if (type === 'owner') {
        document.getElementById('owner-signup').style.display = 'block';
    } else {
        document.getElementById('vet-signup').style.display = 'block';
    }
}

// Show login forms
function showLogin() {
    document.querySelectorAll('.form-container').forEach(f => f.style.display = 'none');
    document.getElementById('signup-options').style.display = 'none';
    document.getElementById('otp-container').style.display = 'none';

    // Show the active login form based on current tab
    const activeTab = document.querySelector('.tab.active');
    if (activeTab.textContent.includes('Pet Owner')) {
        document.getElementById('owner-login').style.display = 'block';
    } else {
        document.getElementById('vet-login').style.display = 'block';
    }
}

function login(type) {
    const email = document.getElementById(`${type}-email`).value;
    const password = document.getElementById(`${type}-password`).value;
    const errorElement = document.getElementById(`${type}-error`);
    const successElement = document.getElementById(`${type}-success`);

    // Clear previous messages
    errorElement.style.display = 'none';
    successElement.style.display = 'none';

    // Validate inputs
    if (!email) {
        errorElement.textContent = 'Please enter your email or phone number';
        errorElement.style.display = 'block';
        return;
    }

    if (!password) {
        errorElement.textContent = 'Please enter your password';
        errorElement.style.display = 'block';
        return;
    }

    // Simulate API call with loading state
    simulateAPICall(() => {
        // This is just for demo - in a real app you would verify credentials
        if (password.length < 6) {
            errorElement.textContent = 'Invalid credentials. Please try again.';
            errorElement.style.display = 'block';
        } else {
            successElement.textContent = 'Login successful! Redirecting...';
            successElement.style.display = 'block';

            // 🟨 NEW: Get user's name from the form
            let userName = "";
            if (type === 'owner') {
                userName = document.getElementById('owner-email').value.split('@')[0]; // OR use full name if you have
            } else {
                userName = document.getElementById('vet-email').value.split('@')[0]; // OR use full name
            }

            // ✅ Save it to localStorage
            localStorage.setItem("loggedInUser", "Yogeshwari");

            // Redirect to dashboard after 1 second
            setTimeout(() => {
                window.location.href = '../userinterface/index.html';
            }, 1000);
        }
    });
}

// Forgot password
function forgotPassword(type) {
    const email = document.getElementById(`${type}-email`).value;
    const errorElement = document.getElementById(`${type}-error`);

    // Clear previous messages
    errorElement.style.display = 'none';

    if (!email) {
        errorElement.textContent = 'Please enter your email or phone number';
        errorElement.style.display = 'block';
        return;
    }

    // Show OTP container
    document.querySelectorAll('.form-container').forEach(f => f.style.display = 'none');
    document.getElementById('otp-container').style.display = 'block';
    document.getElementById('otp-error').style.display = 'none';
    document.getElementById('otp').value = '';

    // Start OTP timer
    startOTPTimer();

    // Simulate sending OTP
    simulateAPICall(() => {
        console.log(`OTP sent to ${email}`);
    });
}

// OTP verification
function verifyOTP() {
    const otp = document.getElementById('otp').value;
    const errorElement = document.getElementById('otp-error');

    // Show loading spinner
    document.getElementById('otp-spinner').style.display = 'block';

    // Validate OTP
    if (!otp || otp.length !== 6) {
        errorElement.textContent = 'Please enter a valid 6-digit OTP';
        errorElement.style.display = 'block';
        document.getElementById('otp-spinner').style.display = 'none';
        return;
    }

    // Simulate API verification
    simulateAPICall(() => {
        document.getElementById('otp-spinner').style.display = 'none';

        // In a real app, you would verify the OTP with your backend
        // For demo, we'll assume any 6-digit OTP is valid
        alert('OTP verified! Please create a new password.');

        // Hide OTP container and show login again
        document.getElementById('otp-container').style.display = 'none';
        showLogin();
    });
}

// OTP timer
function startOTPTimer() {
    let timeLeft = 30;
    const timerElement = document.getElementById('otp-timer');

    // Clear any existing timer
    if (window.otpTimer) {
        clearInterval(window.otpTimer);
    }

    // Update timer every second
    window.otpTimer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time remaining: ${timeLeft} seconds`;

        if (timeLeft <= 0) {
            clearInterval(window.otpTimer);
            timerElement.textContent = 'OTP expired. Please request a new one.';
            document.getElementById('otp-error').textContent = 'OTP expired. Please request a new one.';
            document.getElementById('otp-error').style.display = 'block';
        }
    }, 1000);
}

// Signup function
function signup(type) {
    const errorElement = document.getElementById(`${type}-signup-error`);
    const spinner = document.getElementById(`${type}-spinner`);

    // Clear previous messages
    errorElement.style.display = 'none';
    spinner.style.display = 'block';

    // Validate fields based on user type
    if (type === 'owner') {
        const name = document.getElementById('owner-name').value;
        const phone = document.getElementById('owner-signup-phone').value;
        const email = document.getElementById('owner-signup-email').value;
        const address = document.getElementById('owner-signup-address').value;
        const password = document.getElementById('owner-signup-password').value;

        if (!name || !phone || !email || !address || !password) {
            errorElement.textContent = 'Please fill in all fields';
            errorElement.style.display = 'block';
            spinner.style.display = 'none';
            return;
        }

        if (password.length < 6) {
            errorElement.textContent = 'Password must be at least 6 characters';
            errorElement.style.display = 'block';
            spinner.style.display = 'none';
            return;
        }

        // Save user data to localStorage
        const userData = {
            name,
            phone,
            email,
            address,
            type: 'owner' // To distinguish between owner/vet
        };
        localStorage.setItem('currentUser', JSON.stringify(userData));

        // Simulate API call
        simulateAPICall(() => {
            spinner.style.display = 'none';
            alert('Account created successfully! You can now log in.');
            showLogin();
        });
    } else { // Veterinarian
        const name = document.getElementById('vet-name').value;
        const email = document.getElementById('vet-signup-email').value;
        const phone = document.getElementById('vet-signup-phone').value;
        const certificate = document.getElementById('vet-certificate').files[0];
        const location = document.getElementById('vet-location').value;
        const experience = parseInt(document.getElementById('vet-experience').value);
        const password = document.getElementById('vet-signup-password').value;

        if (!name || !email || !phone || !certificate || !location || !experience || !password) {
            errorElement.textContent = 'Please fill in all fields';
            errorElement.style.display = 'block';
            spinner.style.display = 'none';
            return;
        }

        if (experience < 1) {
            errorElement.textContent = 'You must have at least 1 year of experience';
            errorElement.style.display = 'block';
            spinner.style.display = 'none';
            return;
        }

        if (password.length < 6) {
            errorElement.textContent = 'Password must be at least 6 characters';
            errorElement.style.display = 'block';
            spinner.style.display = 'none';
            return;
        }

        // Save vet data to localStorage
        const userData = {
            name,
            email,
            phone,
            location,
            experience,
            type: 'vet' // To distinguish between owner/vet
        };
        localStorage.setItem('currentUser', JSON.stringify(userData));

        // Simulate API call
        simulateAPICall(() => {
            spinner.style.display = 'none';
            alert('Account created successfully! Your credentials will be verified and you will be notified.');
            showLogin();
        });
    }
}

// Simulate API call with delay
function simulateAPICall(callback) {
    setTimeout(callback, 1000); // 1 second delay to simulate network request
}
