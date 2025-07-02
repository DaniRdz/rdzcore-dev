const toogleBtn = document.querySelector('.toggle-btn')
const toogleBtnIcon = document.querySelector('.toggle-btn i')
const dropDowMenu = document.querySelector('.dropdown-menu')
toogleBtn.onclick = function () {
    dropDowMenu.classList.toggle('open')
    const isOpen = dropDowMenu.classList.contains("open")

    toogleBtnIcon.classList = isOpen 
        ? "fa-solid fa-xmark"
        : "fa-solid fa-bars"
}

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll('.nav-link-wrapper').forEach(wrapper => {
  const link = wrapper.querySelector('a');
  const href = link.getAttribute('href');

  if (href === currentPage || (href === 'index.html' && currentPage === '')) {
    wrapper.classList.add('active-nav-link');
  }
});