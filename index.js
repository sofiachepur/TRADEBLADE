async function loadCards() {
    try {

        const response = await fetch("data.json");
        const cards = await response.json();

        const container = document.getElementById("cards");
        container.innerHTML = ""; //


        cards.forEach(item => {
            const card = document.createElement("div");
            card.className = "card";
            card.innerHTML = `
        <div class="card-body">
          
  
       <img src="Group%2038.png" alt="Лого компанії" class="card-image" />
          <div class="t1_tt">
          <h3 class="card-title">${item.card_title}</h3>
           <p class="card_t1">${item.card_t1}</p>
          </div>
          
        <div class="t2_t3">
          <p class="card_t2">${item.card_t2}</p>
          <p class="card_t3">${item.card_t3}</p>
      </div>
          
       <div class="t4_t5">
          <p class="card_t4">${item.card_t4}</p>
          <p class="card_t5">${item.card_t5}</p>
          
          </div>
          
        </div>
      `;
            container.appendChild(card);
        });

    } catch (err) {
        console.error("Помилка завантаження:", err);
    }
}

loadCards();
document.addEventListener('DOMContentLoaded', () => {
    const prices = {
        2: { price: 234, discount: '-35%' },
        5: { price: 450, discount: '-20%' },
        12: { price: 999, discount: '-50%' }
    };


    const priceLabel = document.querySelector('.price');
    const monthSelect = document.getElementById('month');

    function updatePrice() {
        const selectedMonth = monthSelect.value;
        const data = prices[selectedMonth];
        if (data) {
            priceLabel.innerHTML = `$${data.price}<sup>${data.discount}</sup>`;
        } else {
            priceLabel.textContent = '—';
        }
    }

    updatePrice();

    monthSelect.addEventListener('change', updatePrice);
});

document.addEventListener('DOMContentLoaded', () => {
    const prices = {
        2: { price: 2340, discount: '-30%' },
        5: { price: 4550, discount: '-15%' },
        12: { price: 9939, discount: '-55%' }
    };

    const priceLabel = document.getElementById('price2');
    const monthSelect = document.getElementById('month2');

    function updatePrice() {
        const selected = monthSelect.value;
        const data = prices[selected] || { price: '—', discount: '' };
        priceLabel.innerHTML = `$${data.price}<sup>${data.discount}</sup>`;
    }

    updatePrice();

    monthSelect.addEventListener('change', updatePrice);
});

document.addEventListener('DOMContentLoaded', () => {
    const reviewsContainer = document.getElementById('reviews');
    const showAllBtn = document.getElementById('showall');
    const closeAllBtn = document.getElementById('closeall');
    const initialCount = 4;
    let reviewsData = [];

    closeAllBtn.style.display = 'none';

    async function loadReviews() {
        try {
            const response = await fetch('review.json');
            reviewsData = await response.json();
            renderReviews(initialCount);
        } catch (error) {
            console.error('Помилка завантаження відгуків:', error);
            reviewsContainer.innerHTML = '<p>Не вдалося завантажити відгуки</p>';
        }
    }

    function createReviewCard(review) {
        const card = document.createElement('div');
        card.className = 'review-card';
        card.dataset.id = review.id;
        card.innerHTML = `
 
      <div class="review-content">
       <img src="${review.photo}" alt="Фото ${review.name}" class="review-photo" />
       
        <div class="review-info">
        <div class="review-name">${review.name}</div>
        <div class="review-number">${review.number}</div>
        <div class="review-text">${review.review}</div>
        </div>
        
      </div>
    `;
        return card;
    }

    function renderReviews(visibleCount) {
        reviewsContainer.innerHTML = '';
        reviewsData.forEach((review, index) => {
            if (index < visibleCount) {
                const card = createReviewCard(review);
                reviewsContainer.appendChild(card);
            }
        });
    }

    showAllBtn.addEventListener('click', () => {
        renderReviews(reviewsData.length);
        showAllBtn.style.display = 'none';
        closeAllBtn.style.display = 'inline-block';
    });


    closeAllBtn.addEventListener('click', () => {
        renderReviews(initialCount);
        closeAllBtn.style.display = 'none';
        showAllBtn.style.display = 'inline-block';
    });

    loadReviews();
});


document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;

            document.querySelectorAll('.accordion-item').forEach(el => {
                if (el !== item) el.classList.remove('active');
            });

            item.classList.toggle('active');
        });
    });
});


const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        item.classList.toggle('active');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const plansDom = document.getElementById('plans-dom');
    const spotBtn = plansDom.querySelector('#spot');
    const fBtn = plansDom.querySelector('#f');
    const plansContainer = plansDom.querySelector('.plans-container');

    plansContainer.classList.remove('hidden');
    spotBtn.classList.add('active');

    spotBtn.addEventListener('click', () => {
        plansContainer.classList.remove('hidden');
        spotBtn.classList.add('active');
        fBtn.classList.remove('active');
    });

    fBtn.addEventListener('click', () => {
        plansContainer.classList.add('hidden');
        fBtn.classList.add('active');
        spotBtn.classList.remove('active');
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');

    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    sidebar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            sidebar.classList.remove('active');
        });
    });
});
