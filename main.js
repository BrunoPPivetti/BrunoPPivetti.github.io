//botão para ver perfil de cliente
document.addEventListener('DOMContentLoaded', function () {
    var navbarTogglerBtn = document.getElementById('navbarTogglerBtn');
    var navbarSupportedContent = document.getElementById('navbarSupportedContent');

    navbarTogglerBtn.addEventListener('click', function () {
        navbarSupportedContent.classList.toggle('show');
    });
});