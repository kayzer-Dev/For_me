// Sélectionne les boutons
const btnLike = document.querySelector('.btn-1');
const btnDislike = document.querySelector('.btn-2');
const messageContainer = document.getElementById('message-container');
const voteMessage = document.getElementById('vote-message');

// Fonction pour afficher le message
function showMessage(message, color) {
    voteMessage.textContent = message; // Met à jour le texte du message
    voteMessage.style.color = color;   // Change la couleur du texte
    messageContainer.hidden = false;   // Affiche le conteneur du message
}

// Fonction pour gérer l'état actif des boutons
function setActiveButton(clickedButton) {
    // Retire la classe 'active' des deux boutons
    btnLike.classList.remove('active');
    btnDislike.classList.remove('active');

    // Ajoute la classe 'active' au bouton cliqué
    clickedButton.classList.add('active');
}

// Écouteur d'événement pour le bouton "Like"
btnLike.addEventListener('click', () => {
    showMessage('Merci pour le like 👍', 'green');
    setActiveButton(btnLike); // Applique la classe active au bouton Like
});

// Écouteur d'événement pour le bouton "Dislike"
btnDislike.addEventListener('click', () => {
    showMessage('Dommage ! 👎', 'red');
    setActiveButton(btnDislike); // Applique la classe active au bouton Dislike
});

