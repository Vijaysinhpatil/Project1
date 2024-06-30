document.querySelectorAll('.story-btn').forEach((btn) => {
    btn.addEventListener('click',() => {
        // Add class in internal css
        btn.classList.toggle('change')
        btn.nextElementSibling.classList.toggle('change');
    })
})