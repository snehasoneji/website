function toggleMenu() {
    var menu = document.getElementById("mobileMenu");
    menu.classList.toggle("show-menu");
}


const buttons = document.querySelectorAll('.slider-button');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('.scroll-box').forEach((box) => {
    let scrollStep = 1;
    let direction = 1;

    function autoScroll() {
      box.scrollTop += scrollStep * direction;

      if (box.scrollTop + box.clientHeight >= box.scrollHeight || box.scrollTop <= 0) {
        direction *= -1;
      }

      requestAnimationFrame(autoScroll);
    }

    autoScroll();
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const box = document.querySelector('.scroll-box-2');
  if (box && window.innerWidth <= 767) {
    let index = 0;
    const images = box.querySelectorAll('img');
    const total = images.length;

    setInterval(() => {
      index = (index + 1) % total;
      box.scrollTo({
        left: box.offsetWidth * index,
        behavior: 'smooth'
      });
    }, 3000); // Change every 3 sec
  }
});













