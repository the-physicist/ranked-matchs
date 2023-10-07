function calculateRank() {
    const wins = parseInt(document.getElementById('wins').value);
    const losses = parseInt(document.getElementById('losses').value);

    const balance = wins - losses;
    let level = '';

    if (wins < 10) {
        level = 'Ferro';
    } else if (wins >= 11 && wins <= 20) {
        level = 'Bronze';
    } else if (wins >= 21 && wins <= 50) {
        level = 'Prata';
    } else if (wins >= 51 && wins <= 80) {
        level = 'Ouro';
    } else if (wins >= 81 && wins <= 90) {
        level = 'Diamante';
    } else if (wins >= 91 && wins <= 100) {
        level = 'Lendário';
    } else {
        level = 'Imortal';
    }

    const resultElement = document.getElementById('result');
    const balanceElement = document.getElementById('ranked-balance');
    const levelElement = document.getElementById('ranked-level');

    balanceElement.textContent = balance;
    levelElement.textContent = level;
    resultElement.classList.remove('hidden');
}
