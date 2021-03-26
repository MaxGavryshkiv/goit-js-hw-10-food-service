export default 'theme';

const bodyRef = document.body
const swichInputRef = document.querySelector('.theme-switch__toggle')


lightSetting()

swichInputRef.addEventListener('click', changingTheme)

function lightSetting(){
    bodyRef.classList.add('light-theme');
    localStorage.setItem('theme', 'light-theme')
    };
function changingTheme(){

    lightSetting()

    if(swichInputRef.checked){
        console.log('yes')
        bodyRef.classList.replace('light-theme', 'dark-theme')
        localStorage.setItem('theme', 'dark-theme')
    }else(
        bodyRef.classList.remove('dark-theme')
    );
};