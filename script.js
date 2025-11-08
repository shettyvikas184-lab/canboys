const movieData = {
  trending: [
    {
      title: 'KANTARA Chapter 1',
      img: 'kantara.jpg',
      description:
        'Kantara Chapter 1 narrates a mesmerizing story full of folklore and drama in a rural Indian setting.Kantara: A Legend - Chapter 1 is a 2025 Indian Kannada film that serves as a prequel to the 2022 movie Kantara. Directed by Rishab Shetty, the film is set in pre-colonial coastal Karnataka and explores the ancient roots of the Buta Kola ritual and the conflict between local tribes and a king. It was released on October 2, 2025, and has a runtime of 2 hours and 45 minutes Kantara Chapter 1 is set in pre-colonial coastal Karnataka and revolves around a young boy named Berme, found abandoned in a sacred well and raised by a tribal woman. As Berme grows, he discovers the exploitation of his tribes precious forest spices by the ruling Bangra kingdom. Defying the authorities, Berme supports his people by cultivating and trading spices independently. Conflict escalates when King Kulashekhara invades Kantara, attacking the village and killing Bermes foster mother. Empowered by the spirit Gulika, Berme fights back, defeating Kulashekhara and protecting his tribe. The story intertwines tribal folklore, betrayal, and divine powers amidst battles for justice and survival._____________Dhanvith k poojary',
    },
    {
      title: 'DUDE',
      img: 'dude.png',
      description:
        'DUDE is a coming-of-age story that dives into friendship and self-discovery.After its blockbuster theatrical run, Dude, starring Pradeep Ranganathan and Mamitha Baiju, is now gearing up for its OTT premiere. Reportedly, the romantic comedy is expected to begin streaming around November 14, 2025, according to industry',
    },
    {
      title: 'Demonslayer',
      img: 'demonpos.png',
      description:
        'Demon Slayer follows Tanjiro journey to protect his sister and fight demons. The Demon Slayer Corps are drawn into the Infinity Castle, where Tanjiro and the Hashira face terrifying Upper Rank demons in a desperate fight as the final battle against Muzan Kibutsuji begins.',
    },
    {
      title: 'jjk',
      img: 'jjk1.png',
      description: 'Jujutsu Kaisen (jjk) is a popular dark fantasy anime with thrilling battles. A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself. He enters a shamans school to be able to locate the demon,s other body parts and thus exorcise himself.',
    },
    {
      title: 'stree2',
      img: 'strrr.png',
      description:
        'Stree 2 is a horror-comedy sequel with mystery and laughs. After the events of Stree, the town of Chanderi is being haunted again. This time, women are mysteriously abducted by a terrifying headless entity. Once again, its up to Vicky and his friends to save their town and loved ones.',
    },
  ],
  'top-rated': [
    {
      title: 'Kantara',
      img: 'kantara.jpg',
      description:
        'Kantara is a critically acclaimed film blending mythology and human emotion. Kantara: A Legend - Chapter 1 is a 2025 Indian Kannada film that serves as a prequel to the 2022 movie Kantara. Directed by Rishab Shetty, the film is set in pre-colonial coastal Karnataka and explores the ancient roots of the Buta Kola ritual and the conflict between local tribes and a king. It was released on October 2, 2025, and has a runtime of 2 hours and 45 minutes',
    },
    {
      title: 'theconjuring',
      img: 'conjur.png',
      description:
        'The Conjuring is a supernatural horror film based on true events. The Conjuring: Last Rites stars Patrick Wilson and Vera Farmiga reprising their roles as real-life paranormal investigators Ed and Lorraine Warren. Directed by Michael Chaves, the film is based on the real-life Smurl haunting case. It is intended to be the final chapter in the main Conjuring storyline, concluding the Warrens arc for the franchises "phase one"',
    },
    {
      title: 'stree2',
      img: 'strrr.png',
      description:
        'Stree 2 combines horror and comedy to give a unique experience.After the events of Stree, the town of Chanderi is being haunted again. This time, women are mysteriously abducted by a terrifying headless entity. Once again, its up to Vicky and his friends to save their town and loved ones.',
    },
  ],
  comedy: [
    {
      title: 'demonslayer',
      img: 'demonpos.png',
      description:
        'Demon Slayer is an anime series about demon hunting siblings.The Demon Slayer Corps are drawn into the Infinity Castle, where Tanjiro and the Hashira face terrifying Upper Rank demons in a desperate fight as the final battle against Muzan Kibutsuji begins.',
    },
    {
      title: 'jjk',
      img: 'jjk1.png',
      description: 'Jujutsu Kaisen is a hit anime with intense supernatural action. A boy swallows a cursed talisman - the finger of a demon - and becomes cursed himself. He enters a shamans school to be able to locate the demons other body parts and thus exorcise himself.',
    },
  ],
};

const developers = [
  {
    name: 'VIKAS R SHETTY',
    details: 'Lead Developer Web developer',
    img: 'vikas.enc',
  },
  {
    name: 'DHANVITH K POOJARY',
    details: 'Content and web designer',
    img: 'dh.enc',
  },
  {
    name: 'SUMITH ACHARYA',
    details: 'Poster and Video editor.',
    img: 'sneha.jpg',
  },
];

const movieRow = document.getElementById('movie-row');
const navTabs = document.getElementById('nav-tabs');
const sectionTitle = document.querySelector('.section h2');
const movieDescription = document.getElementById('movie-description');

const playBtn = document.getElementById('playBtn');
const videoModal = document.getElementById('videoModal');
const closeBtn = document.getElementById('closeBtn');
const popupVideo = document.getElementById('popupVideo');

// Load movies or About Us based on category
function loadMovies(category) {
  movieRow.innerHTML = '';
  movieDescription.innerHTML = '';

  if (category === 'about') {
    sectionTitle.textContent = 'About Us';
    let aboutHTML = '<div class="about-container">';

    developers.forEach((dev) => {
      aboutHTML += `
        <div class="developer-card">
          <img src="${dev.img}" alt="${dev.name}" class="developer-img" />
          <h3>${dev.name}</h3>
          <p>${dev.details}</p>
        </div>
      `;
    });

    aboutHTML += '</div>';
    movieRow.innerHTML = aboutHTML;
    return;
  }

  sectionTitle.textContent =
    category.replace('-', ' ').replace(/\b\w/g, (l) => l.toUpperCase()) + ' Now';

  movieData[category]?.forEach((movie) => {
    const card = document.createElement('div');
    card.classList.add('movie-card');
    card.title = movie.title;
    card.innerHTML = `<img src="${movie.img}" alt="${movie.title}" />`;
    // Add click event to show description below
    card.addEventListener('click', () => {
      movieDescription.textContent = movie.description;
      movieDescription.scrollIntoView({ behavior: 'smooth' });
    });
    movieRow.appendChild(card);
  });
}

// Navigation tab click event
navTabs.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    [...navTabs.children].forEach((tab) => tab.classList.remove('active'));
    e.target.classList.add('active');
    loadMovies(e.target.dataset.section);
  }
});

// Play button click shows modal video
playBtn.addEventListener('click', () => {
  videoModal.style.display = 'block';
  popupVideo.play();
});

// Close modal on close button click
closeBtn.addEventListener('click', () => {
  videoModal.style.display = 'none';
  popupVideo.pause();
  popupVideo.currentTime = 0;
});

// Close modal on clicking outside content
window.addEventListener('click', (event) => {
  if (event.target === videoModal) {
    videoModal.style.display = 'none';
    popupVideo.pause();
    popupVideo.currentTime = 0;
  }
});

// Load trending movies initially
loadMovies('trending');