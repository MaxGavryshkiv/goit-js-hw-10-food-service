export default 'theme';

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
const bodyRef = document.body
const switchInputRef = document.querySelector('.theme-switch__toggle')
const STORAGE_KEY = 'checkboxValue';


switchInputRef.addEventListener('click', checked)
themeSettings()


function checked(e){
    const checkboxValue = switchInputRef.checked;
    const stringifyValue = JSON.stringify(checkboxValue);


    localStorage.setItem(STORAGE_KEY, stringifyValue)
    themeSettings()
};
function themeSettings(){
    const savedCheckboxValue = localStorage.getItem(STORAGE_KEY);
    const parceValue = JSON.parse(savedCheckboxValue);


    if(parceValue){
        // console.log('true')
        bodyRef.classList.remove(Theme.LIGHT)
        bodyRef.classList.add(Theme.DARK)
        switchInputRef.checked = true;
    }else{
        // console.log('false')
        bodyRef.classList.remove(Theme.DARK)
        bodyRef.classList.add(Theme.LIGHT)
    }
}




// function lightSetting(){
//     bodyRef.classList.add('light-theme')
//     };
// function darkSetting(){
//     bodyRef.classList.remove('light-theme').add('dark-theme')
// }

//     function changingTheme(){
//     if(swichInputRef.checked){
//         darkSetting()
//     }else(
//         lightSetting()
//     );
// };