let elModalWrapper = document.querySelector(".modal-wrapper")
let elModal = document.querySelector(".modal")
const elNavbar = document.querySelector(".navbar");
let elOpenModal = document.querySelector(".modal-btn")

function openModalClick(){
    elModalWrapper.classList.add("show-wrapper")
    elModal.classList.add("show-modal")
    elNavbar.classList.add("msBody")
    elNavbar.style.position = "static"
}
function closeModalClick(){
    elModalWrapper.classList.remove("show-wrapper")
    elModal.classList.remove("show-modal")
    elNavbar.style.position = "fixed"
    elNavbar.classList.remove("msBody")

;
document.head.appendChild(style);
}
elModalWrapper.addEventListener("click", function(evt){
    if(evt.target.id == "modal-wrapper" ){
        elModalWrapper.classList.remove("show-wrapper")
    elModal.classList.remove("show-modal")
    elNavbar.classList.remove("msBody")
    elOpenModal.style.display = "block"
    elNavbar.style.position = "fixed"

    }     
})


const toggleBtn = document.getElementById('toggleBtn');
const themeLink = document.getElementById('theme-link');


function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}


function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value}; ${expires}; path=/`;
}

function toggleDarkMode() {
   if(setCookie('darkMode', 'disabled', 7)){;
    themeLink.href = 'light-theme.css';
  } else {
    setCookie('darkMode', 'enabled', 7);
    themeLink.href = 'dark-theme.css';
  }
}


if (getCookie('darkMode') === 'enabled') {
  themeLink.href = 'dark-theme.css';
}

function applyTheme() {
  const userTheme = getCookie('darkMode'); 
  if (userTheme === 'enabled') {
    themeLink.href = 'dark-theme.css'; 
  } else if (userTheme === 'disabled') {
    themeLink.href = 'light-theme.css'; 
  } else {
    
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      themeLink.href = 'dark-theme.css'; 
    } else {
      themeLink.href = 'light-theme.css'; 
    }
  }
}

toggleBtn.addEventListener('click', toggleDarkMode);

applyTheme();