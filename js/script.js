const counters = document.querySelectorAll('.counter');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const target = +counter.getAttribute('data-target');
      let count = 0;
      const increment = target > 5 ? Math.ceil(target / 100) : 0.1;

      const update = () => {
        count += increment;
        if (count >= target) {
          counter.innerText = target;
        } else {
          counter.innerText = Math.round(count * 10) / 10;
          requestAnimationFrame(update);
        }
      };
      update();
      observer.unobserve(counter);
    }
  });
}, {
  threshold: 0.6
});

counters.forEach(counter => observer.observe(counter));
