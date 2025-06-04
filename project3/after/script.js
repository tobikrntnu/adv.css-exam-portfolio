document.addEventListener("DOMContentLoaded", () => {
  const sprouts = document.querySelectorAll('.farming__sprout');
  const options = { threshold: 0.3 };

  const farmingObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sprout = entry.target;
        sprout.classList.add('active');
        farmingObserver.unobserve(sprout);
      }
    });
  }, options);

  sprouts.forEach(s => farmingObserver.observe(s));

  const vehicles = document.querySelectorAll('.transport__vehicle');
  const infoBox = document.querySelector('.transport__info');

  const infoTexts = [
    'Ships have some of the lowest emissions compared to other methods!',
    'Trucks have 6 times the emissions of boats, but is better than planes!',
    'Airplanes has up to 66 times more emission than boat and 11 more than trucks!',
  ];

  let current = 0;
  let infoVisible = false;

  function showVehicle(index) {
    vehicles.forEach((v, i) => {
      v.classList.toggle('active', i === index);
    });
    infoBox.textContent = '';
    infoVisible = false;
    current = index;
  }

  function toggleInfo() {
    if (!infoVisible) {
      infoBox.textContent = infoTexts[current];
      infoVisible = true;
    } else {
      let next = (current + 1) % vehicles.length;
      showVehicle(next);
    }
  }

  setTimeout(() => showVehicle(0), 100);

  vehicles.forEach(vehicle => {
    vehicle.addEventListener('click', () => {
      toggleInfo();
    });
  });

  const items = document.querySelectorAll('.retail__item');
  const selectedColorSpan = document.getElementById('selected-color');

  items.forEach(item => {
    item.addEventListener('click', () => {
      items.forEach(i => i.classList.remove('selected'));
      item.classList.add('selected');
      const color = item.getAttribute('data-color');
      selectedColorSpan.textContent = color.charAt(0).toUpperCase() + color.slice(1);
    });
  });

  const tshirt = document.querySelector('.retail__tshirt');
  const colorButtons = document.querySelectorAll('.color-btn');
  const selectedColorText = document.getElementById('selected-color');

  colorButtons.forEach(button => {
    button.addEventListener('click', () => {
      colorButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const color = button.getAttribute('data-color');
      tshirt.style.backgroundColor = color;
      selectedColorText.textContent = color;
    });
  });

  const buyBtn = document.querySelector('.retail__button');
  const thankYouMsg = document.querySelector('.retail__message');
  const colorBtns = document.querySelectorAll('.color-btn');

  let selectedColorName = '';

  colorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      selectedColorName = btn.getAttribute('aria-label');
    });
  });

  buyBtn.addEventListener('click', () => {
    if (!selectedColorName) {
      alert('Please choose a color first!');
      return;
    }

    thankYouMsg.textContent = `Thanks for the purchase of a ${selectedColorName.toLowerCase()} shirt.`;
    thankYouMsg.classList.remove('hidden');
    buyBtn.disabled = true;
    buyBtn.textContent = 'Added!';

    setTimeout(() => {
      thankYouMsg.classList.add('hidden');
      buyBtn.disabled = false;
      buyBtn.textContent = 'Buy this';
    }, 3000);
  });

  const infoSection = document.querySelector('.info-section');

  if (infoSection) {
    const infoObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          infoSection.classList.add('visible');
          observer.unobserve(entry.target); 
        }
      });
    }, {
      threshold: 0.2
    });

    infoObserver.observe(infoSection);
  }
});


