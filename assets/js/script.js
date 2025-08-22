const contactBtn = document.getElementById('contactBtn');
const message = document.getElementById('message');

// action au clic
contactBtn.addEventListener('click', () => {
    message.textContent = "Merci de contacter, je vous réponds rapidement ! ";
    message.classList.remove('hidden');
})