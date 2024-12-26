const madeShotButton = document.getElementById('made-shot');
const missedShotButton = document.getElementById('missed-shot');
const courtContainer = document.getElementById('court-contain');
const pointsCounter = document.getElementById('points-counter');
const assistsCounter = document.getElementById('assists-counter');
const reboundsCounter = document.getElementById('rebounds-counter');
const stealsCounter = document.getElementById('steals-counter');
const blocksCounter = document.getElementById('blocks-counter');

let shotType = 'made';

function placeShot(event) {
    const rect = courtContainer.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (y > rect.height / 2) return;

    const shotMarker = document.createElement('div');
    shotMarker.classList.add('shot');
    shotMarker.style.left = `${x - 5}px`;
    shotMarker.style.top = `${y - 5}px`;

    if (shotType === 'made') {
        shotMarker.classList.add('made-shot');
    } else if (shotType === 'missed') {
        shotMarker.classList.add('missed-shot');
    }

    courtContainer.appendChild(shotMarker);
}

function updateCounter(counterElement) {
    counterElement.textContent = parseInt(counterElement.textContent) + 1;
}

madeShotButton.addEventListener('click', () => {
    shotType = 'made';
});

missedShotButton.addEventListener('click', () => {
    shotType = 'missed';
});

courtContainer.addEventListener('click', (event) => {
    if (shotType === 'made' || shotType === 'missed') {
        placeShot(event);
    }
});

document.querySelectorAll('.stats-table td').forEach(cell => {
    cell.addEventListener('click', () => {
        updateCounter(cell);
    });
});