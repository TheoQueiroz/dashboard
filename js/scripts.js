function updateDashboard() {
    var iframe = document.getElementById('dashboard-iframe');
    if (window.innerWidth <= 768) { // Tamanho típico de um dispositivo móvel
        iframe.src = 'https://lookerstudio.google.com/embed/reporting/f9cc18f8-c1a0-4cdf-8f07-3f3c316b7741/page/BUF3D';
    } else {
        iframe.src = 'https://lookerstudio.google.com/embed/reporting/1c710392-f367-4239-8298-23b5e4f8bb8e/page/BUF3D';
    }
}

// Atualiza o dashboard quando a página é carregada
updateDashboard();

// Atualiza o dashboard quando o tamanho da janela é redimensionado
window.addEventListener('resize', updateDashboard);
