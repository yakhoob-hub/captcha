function generateCaptcha() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
        captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById('captcha').innerText = captcha;
}

function verifyCaptcha() {
    const input = document.getElementById('captchaInput').value;
    const captcha = document.getElementById('captcha').innerText;
    const popup = document.getElementById('popup');

    if (input === captcha) {
        popup.innerText = 'CAPTCHA Verified Successfully!';
        popup.style.backgroundColor = '#4CAF50';
    } else {
        popup.innerText = 'CAPTCHA Verification Failed. Please try again.';
        popup.style.backgroundColor = '#f44336';
    }

    popup.style.display = 'block';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 3000);
}


generateCaptcha();
