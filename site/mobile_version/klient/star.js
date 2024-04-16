function toggleStar(num) {
    var stars = document.querySelectorAll('.star_new_reviews');
    for (var i = 0; i < stars.length; i++) {
        if (i < num) {
            stars[i].classList.add('yellow');
        } else {
            stars[i].classList.remove('yellow');
        }
    }
}