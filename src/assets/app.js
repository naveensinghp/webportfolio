const darkbtn = document.getElementById('dark');
const lightbtn = document.getElementById('light');
const body = document.body;

const theme = localStorage.getItem('theme');
if(theme){
  body.classList.add(theme);
}
darkMode = () => {
  body.classList.replace('light','dark');
  localStorage.setItem('theme','dark')

}

lightMode = () => {
  body.classList.replace('dark','light');
  localStorage.setItem('theme','light')


}
