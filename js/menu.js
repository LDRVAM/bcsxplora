const destinations = [
    {
        name: 'Balandra',
        image: 'images/balandra-cover.jpg',
        link: 'balandra.html'
    },
    {
        name: 'Conchalito',
        image: 'images/conchalito-cover-menu.jpg',
        link: 'conchalito.html'
    },
    {
        name: 'Surgidero',
        image: 'images/surgidero-cover.jpg',
        link: 'surgidero.html'
    }
];

const backgroundVideo = document.getElementById('background-video');
const destinationGrid = document.getElementById('destination-grid');
const maxColumns = 3;

function setBackgroundVideo() {
    const defaultVideo = 'videos/test.mp4';
    backgroundVideo.src = defaultVideo;
    backgroundVideo.load();
    backgroundVideo.play().catch((error) => {
        console.log('No se pudo reproducir el video:', error);
    });
}

function renderDestinationGrid() {
    const columns = Math.min(maxColumns, destinations.length);
    destinationGrid.style.setProperty('--columns', columns);

    destinationGrid.innerHTML = destinations.map((destination, index) => `
        <button
            type="button"
            class="destination-card"
            data-index="${index}"
            aria-label="Ir a ${destination.name}"
        >
            <img src="${destination.image}" alt="${destination.name}">
            <span class="destination-card__name">${destination.name}</span>
        </button>
    `).join('');

    destinationGrid.querySelectorAll('.destination-card').forEach((card) => {
        card.addEventListener('click', () => {
            const index = Number(card.dataset.index);
            const destination = destinations[index];
            window.location.href = destination.link;
        });
    });
}

setBackgroundVideo();
renderDestinationGrid();