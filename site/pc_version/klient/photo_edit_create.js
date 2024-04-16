const svg = document.getElementById('svg');
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('close');

svg.addEventListener('click', function() {
    overlay.style.display = 'block';
    popup.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    overlay.style.display = 'none';
    popup.style.display = 'none';
});

overlay.addEventListener('click', function(event) {
    // Проверяем, что клик был на самом оверлее, а не на всплывающем окне
    if (event.target === overlay) {
        overlay.style.display = 'none';
        popup.style.display = 'none';
    }
});
