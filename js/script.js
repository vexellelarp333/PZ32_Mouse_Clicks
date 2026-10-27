let points = 0;
const scoreButton = document.querySelector('.score-button');
const scoreDisplay = document.querySelector('.score');
const doubleCard = document.querySelector('.double-card');
const hoverZone = document.querySelector('.hover-zone');
const statusDisplay = document.querySelector('.status');
if (scoreButton) {
  scoreButton.addEventListener('click', () => {
    points += 1;
    if (scoreDisplay) {
      scoreDisplay.textContent = points;
    }
    
    if (statusDisplay) {
      statusDisplay.textContent = `Очки увеличены! Текущий счет: ${points}`;
    }
  });
}
if (doubleCard) {
  doubleCard.addEventListener('dblclick', () => {
    doubleCard.classList.toggle('is-selected');
    
    if (statusDisplay) {
      if (doubleCard.classList.contains('is-selected')) {
        statusDisplay.textContent = 'Карточка успешно выбрана (двойной клик)';
      } else {
        statusDisplay.textContent = 'Выделение с карточки снято';
      }
    }
  });
}
if (hoverZone) {
  hoverZone.addEventListener('mouseenter', () => {
    hoverZone.classList.add('is-hovered');
    if (statusDisplay) {
      statusDisplay.textContent = 'Курсор вошел в зону наведения';
    }
  });
  hoverZone.addEventListener('mouseleave', () => {
    hoverZone.classList.remove('is-hovered');
    if (statusDisplay) {
      statusDisplay.textContent = 'Курсор покинул зону наведения';
    }
  });
}
