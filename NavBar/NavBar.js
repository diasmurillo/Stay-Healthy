const toggle = document.getElementById("menuToggle")
const navLinks = document.getElementById("navLinks")
 // deve mostrar <div id="menuToggle">...</div>


toggle.addEventListener('click', () => {
    navLinks.classList.toggle('open')
    toggle.classList.toggle('active')
})