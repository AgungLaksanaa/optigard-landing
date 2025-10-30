let current = 0;
const track = document.getElementById("track");
const slides = document.querySelectorAll(".carousel-slide");
const total = slides.length;
const indicatorsDiv = document.getElementById("indicators");

// Create indicators
for (let i = 0; i < total; i++) {
  const dot = document.createElement("button");
  dot.classList.add("indicator-dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => goTo(i));
  indicatorsDiv.appendChild(dot);
}

const dots = document.querySelectorAll(".indicator-dot");

function update() {
  track.style.transform = `translateX(-${current * 100}%)`;
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === current);
  });
}

function goTo(index) {
  current = index;
  update();
}

function next() {
  current = (current + 1) % total;
  update();
}

// Auto play every 5 seconds
setInterval(next, 5000);

// owl carousel OUR PROJECT
$(".owl-carousel").owlCarousel({
  loop: false,
  center: false,
  margin: 10,
  URLhashListener: true,
  autoplayHoverPause: true,
  startPosition: "URLHash",
  responsive: {
    0: {
      items: 2,
      nav: true,
    },
    600: {
      items: 3,
      nav: false,
    },
    1000: {
      items: 4,
      nav: true,
      loop: false,
    },
  },
});
