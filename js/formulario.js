function isMobile() {
    if (sessionStorage.desktop)
        return false;
    else if (localStorage.mobile)
        return true;
    var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
    for (var i in mobile)
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
    return false;
}

const formulario = document.querySelector('#formulario');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const telefono = '+529993605483';

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    buttonSubmit.disabled = true;
    setTimeout(() => {
        let nombre = document.querySelector('#nombre').value;
        let mensaje = 'send?phone=' + telefono + '&text=Hola Rossana, ' + nombre + ' a través de este mensaje confirmo asistencia a la Boda de Rossana y Gustavo este 21 de Agosto.';
        if(isMobile()) {
            window.open(urlMobile + mensaje, '_blank');
        }else{
            window.open(urlDesktop + mensaje, '_blank');
        }
        buttonSubmit.innerHTML = 'Asistiré'
        buttonSubmit.disabled = false
    }, 3000);
});