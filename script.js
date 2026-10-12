// Function to go from Envelope screen to Password screen
function goToStage2() {
    const envelopeScreen = document.getElementById('envelope-screen');
    const passwordScreen = document.getElementById('password-screen');
    
    envelopeScreen.classList.add('hidden');
    passwordScreen.classList.remove('hidden');
}

// Function to toggle password visibility
function togglePassword() {
    const passwordInput = document.getElementById('passwordInput');
    const toggleIcon = document.getElementById('toggleIcon');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
}

// Function to check password and unlock site
function checkPassword() {
    const passwordInput = document.getElementById('passwordInput');
    const errorMessage = document.getElementById('errorMessage');
    const passwordScreen = document.getElementById('password-screen');
    const mainContent = document.getElementById('main-content');
    
    if (passwordInput.value === 'Salma') {
        passwordScreen.classList.add('hidden');
        mainContent.classList.remove('hidden');
        initAgeCounter();
    } else {
        errorMessage.classList.remove('hidden');
        passwordInput.classList.add('border-red-500');
    }
}

// Function to toggle Image Flip
function flipCard(card) {
    card.classList.toggle('flipped');
}

// Live Age Counter Function starting from Oct 12, 2007 00:00:00
function initAgeCounter() {
    const birthDate = new Date('2007-10-12T00:00:00');
    
    function updateCounter() {
        const now = new Date();
        
        let years = now.getFullYear() - birthDate.getFullYear();
        let months = now.getMonth() - birthDate.getMonth();
        let days = now.getDate() - birthDate.getDate();
        let hours = now.getHours() - birthDate.getHours();
        let minutes = now.getMinutes() - birthDate.getMinutes();
        let seconds = now.getSeconds() - birthDate.getSeconds();
        
        if (seconds < 0) {
            seconds += 60;
            minutes--;
        }
        if (minutes < 0) {
            minutes += 60;
            hours--;
        }
        if (hours < 0) {
            hours += 24;
            days--;
        }
        if (days < 0) {
            const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
            days += previousMonth.getDate();
            months--;
        }
        if (months < 0) {
            months += 12;
            years--;
        }
        
        document.getElementById('years').innerText = years;
        document.getElementById('months').innerText = months;
        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;
    }
    
    updateCounter();
    setInterval(updateCounter, 1000);
}