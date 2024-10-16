document.getElementById('dice-icon').addEventListener('click', fetchAdvice);

function fetchAdvice() {
    document.getElementById('advice-text').textContent = 'Loading advice...';
    
    document.body.style.backgroundColor = getRandomColor();

    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            const adviceText = data.slip.advice;
            document.getElementById('advice-text').textContent = adviceText;
        })
        .catch(error => {
            console.log('Error fetching advice:', error);
            document.getElementById('advice-text').textContent = 'Failed to load advice.';
        });
}

function getRandomColor() {
    const colors = ['#A2D2DF', '#32CD32', '#FFD700', '#00BFFF', '#FF69B4', '#8A2BE2', '#00FF9C'];
    return colors[Math.floor(Math.random() * colors.length)];
}
