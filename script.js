const pets = [
  {"name": "Buddy", "type": "Dog", "age": 3, "img": "img/dogs/dog01.jpg"},
  {"name": "Max", "type": "Dog", "age": 3, "img": "img/dogs/dog02.jpg"},
  {"name": "Leo", "type": "Dog", "age": 2, "img": "img/dogs/dog03.jpg"},
  {"name": "Whiskers", "type": "Cat", "age": 2, "img": "img/cats/cat01.jpg"},
  {"name": "Mittens", "type": "Cat", "age": 2, "img": "img/cats/cat02.jpg"},
  {"name": "Chirpy", "type": "Bird", "age": 1, "img": "img/birds/bird01.jpg"},
  {"name": "Freddy", "type": "Bird", "age": 2, "img": "img/birds/bird02.jpg"},
  {"name": "Cappy", "type": "Capybara", "age": 4, "img": "img/capybaras/capybaras01.jpg"},
  {"name": "Piggi", "type": "Capybara", "age": 3, "img": "img/capybaras/capybaras02.jpg"},
];

function adoptPet() {
  alert("Thank you for choosing to adopt!");
}

function renderPets(filterTypes) {
  const ap = $("#all-pets");
  ap.empty();
  pets.forEach(pet => {
    if (filterTypes.includes(pet.type)) {
      ap.append(`
        <div class="pet">
          <img src="${pet.img}" alt="${pet.name}" width="150">
          <h3>${pet.name}</h3>
          <p>Type: ${pet.type}</p>
          <p>Age: ${pet.age} years</p>
          <button class="adopt-btn" onclick="adoptPet()">Adopt Now</button>
        </div>
      `);
    }
  });
}

$(document).ready(function() {
  $("a[href='#contact']").on('click', function(e) {
    e.preventDefault();
    $("#contact")[0].scrollIntoView({ behavior: 'smooth' });
  });

  if ("#all-pets") {
    renderPets(["Dog", "Cat", "Capybara", "Bird"]);

    $("input[name='pet-type']").on('change', function() {
      const selectedTypes = $("input[name='pet-type']:checked").map(function() {
        return this.value;
      }).get();
      renderPets(selectedTypes);
    });
  }
});

let currentIndex = 0;
const slideInterval = 3000;
let slideWidth = 0;
let totalSlides = 0;

function setupCarousel() {
  const $track = $('.carousel-track');
  const $slides = $track.children('img');

  slideWidth = $slides[0].clientWidth + 16;
  totalSlides = $slides.length;

  $slides.each(function () {
    $track.append($(this).clone());
  });

  setInterval(() => {
    currentIndex++;
    $track.css({
      transform: `translateX(${-currentIndex * slideWidth}px)`,
      transition: 'transform 0.6s ease-in-out'
    });
    if (currentIndex >= totalSlides) {
      setTimeout(() => {
        $track.css({
          transform: `translateX(0px)`,
          transition: 'none'
        });
        currentIndex = 0;
      }, 700);
    }
  }, slideInterval);
}

$(document).ready(function () {
  setupCarousel();
});


