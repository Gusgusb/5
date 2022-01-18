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
const telefono = '+524423628382';

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    buttonSubmit.disabled = true;
    setTimeout(() => {
        let nombre = document.querySelector('#nombre').value;
        let numero = document.querySelector('#numero').value;
        let mensaje = 'send?phone=' + telefono + '&text=Hola Adrián, ' + nombre + ' confirma asistencia a la Boda de Lily y Jorge con ' + numero + ' acompañante(s).';
        if(isMobile()) {
            window.open(urlMobile + mensaje, '_blank');
        }else{
            window.open(urlDesktop + mensaje, '_blank');
        }
        buttonSubmit.innerHTML = 'Atenderé'
        buttonSubmit.disabled = false
    }, 3000);
});