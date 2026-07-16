document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname.replace(/\/index\.html$/, '/')
  document.querySelectorAll('.nav-links a').forEach((link) => {
    const href = link.getAttribute('href')
    if (href === path || (href === '/' && (path === '/' || path === ''))) {
      link.classList.add('active')
    }
  })

  const yearEl = document.getElementById('year')
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear()
  }
})
