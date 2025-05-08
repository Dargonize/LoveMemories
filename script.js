function togglePassword() {
    const passwordInput = document.getElementById('password');
    const icon = document.querySelector('.toggle-password i');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

function showRegister() {
    document.getElementById('registerModal').style.display = 'flex';
}

function showResetPassword() {
    document.getElementById('resetModal').style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function validateLogin(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simulação de validação (em um sistema real, isso seria feito no servidor)
    if (username && password) {
        // Redirecionamento para a página principal (para o protótipo)
        window.location.href = 'dashboard.html';
    } else {
        alert('Por favor, preencha todos os campos!');
    }
}

function validateRegister(event) {
    event.preventDefault();
    const password = document.getElementById('reg-password').value;
    const confirmPassword = document.getElementById('reg-confirm-password').value;
    
    if (password !== confirmPassword) {
        alert('As senhas não coincidem!');
        return;
    }
    
    // Simulação de registro (em um sistema real, isso seria feito no servidor)
    alert('Conta criada com sucesso! Agora você pode fazer login.');
    closeModal('registerModal');
}

function validateReset(event) {
    event.preventDefault();
    const email = document.getElementById('reset-email').value;
    
    // Simulação de envio de email (em um sistema real, isso seria feito no servidor)
    alert(`Um link de redefinição de senha foi enviado para ${email}`);
    closeModal('resetModal');
}