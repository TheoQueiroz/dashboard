function updateDashboard() {
    var iframe = document.getElementById('dashboard-iframe');
    if (window.innerWidth <= 768) { // Tamanho típico de um dispositivo móvel
        iframe.src = 'https://lookerstudio.google.com/embed/reporting/9f6831cc-bcd9-42f0-832d-eabc8abcfef8/page/fslCF';
    } else {
        iframe.src = 'https://lookerstudio.google.com/embed/reporting/7c015a7a-5ca7-41c9-8616-eab20e920360/page/fslCF';
    }
}

// Atualiza o dashboard quando a página é carregada
updateDashboard();

// Atualiza o dashboard quando o tamanho da janela é redimensionado
window.addEventListener('resize', updateDashboard);

//https://lookerstudio.google.com/embed/reporting/1c710392-f367-4239-8298-23b5e4f8bb8e/page/BUF3D Antigo
