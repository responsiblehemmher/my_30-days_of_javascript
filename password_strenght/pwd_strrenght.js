
let pass = document.getElementById('password');
let msg = document.getElementById('message');
let str = document.getElementById('strenght');
let togglePassword = document.getElementById('togglePassword');
let eyeIcon = document.getElementById('eyeIcon');

pass.addEventListener('input', () => {
    if (pass.value.length > 0) {
        msg.style.display = 'block';
    } else {
        msg.style.display = 'none';
        pass.style.borderColor = ''; // Reset to default
        msg.style.color = ''; // Reset to default
        str.innerHTML = ''; // Clear strength message
    }

    if (pass.value.length > 0) {
        if (pass.value.length < 4) {
            str.innerHTML = 'weak';
            pass.style.borderColor = '#ff5925';
            msg.style.color = '#ff5925';
        } 
        else if (pass.value.length >= 4 && pass.value.length < 8) {
            str.innerHTML = 'medium';
            pass.style.borderColor = 'yellow';
            msg.style.color = 'yellow';
        } 
        else if (pass.value.length >= 8) {
            str.innerHTML = 'strong';
            pass.style.borderColor = '#26d730';
            msg.style.color = '#26d730';
        }
    }
});


togglePassword.addEventListener('click', () => {
    if (pass.type === 'password') {
        pass.type = 'text';
        eyeIcon.src = '/password_strength/image_pwd/eye-off-icon.png'; // Change to eye-off icon
        eyeIcon.alt = 'eye-off-icon';
    } else {
        pass.type = 'password';
        eyeIcon.src = '/password_strength/image_pwd/eye-icon.png'; // Change back to eye icon
        eyeIcon.alt = 'eye-icon';
    }
});

// Modify it using Ternary Operator

/* let pass = document.getElementById('password');
let msg = document.getElementById('message');
let str = document.getElementById('strenght');

pass.addEventListener('input', () => {
    if (pass.value.length > 0) {
        msg.style.display = 'block';
        
        let strength = pass.value.length < 4 ? 'weak' : (pass.value.length >= 4 && pass.value.length < 8 ? 'medium' : 'strong');
        let color = pass.value.length < 4 ? '#ff5925' : (pass.value.length >= 4 && pass.value.length < 8 ? 'yellow' : '#26d730');

        str.innerHTML = strength;
        pass.style.borderColor = color;
        msg.style.color = color;
    } else {
        msg.style.display = 'none';
        pass.style.borderColor = ''; // Reset to default border color
    }
}); */

