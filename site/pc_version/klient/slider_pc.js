const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const thumbnails = document.querySelectorAll('.thumbnail');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let slideIndex = 0;

// Функция для отображения нужного слайда
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
}

// Функция для активации нужной миниатюры
function activateThumbnail(index) {
  thumbnails.forEach((thumbnail, i) => {
    thumbnail.classList.toggle('active', i === index);
  });
}

// Нажатие на кнопку "Previous"
prevBtn.addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
  activateThumbnail(slideIndex);
});

// Нажатие на кнопку "Next"
nextBtn.addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
  activateThumbnail(slideIndex);
});

// Переключение слайда при клике на миниатюру
thumbnails.forEach((thumbnail, i) => {
  thumbnail.addEventListener('click', () => {
    slideIndex = i;
    showSlide(slideIndex);
    activateThumbnail(slideIndex);
  });
});

// Показ первого слайда и активация первой миниатюры при загрузке страницы
showSlide(slideIndex);
activateThumbnail(slideIndex);

function changeReviews() {
  var revData1 = document.querySelector('.rev_data_1');
  var revData2 = document.querySelector('.rev_data_2');
  
  // Показываем второй отзыв и скрываем первый
  revData1.style.display = 'none';
  revData2.style.display = 'block';
  
  // Через 20 секунд возвращаем обратно
  setTimeout(function() {
      revData1.style.display = 'block';
      revData2.style.display = 'none';
  }, 20000);
}