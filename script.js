document.addEventListener('DOMContentLoaded', () => {
    // Kanji animation code
    const kanjiChars = ['日', '月', '火', '水', '木', '金', '土', '山', '川', '田'];
    const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#FFFFFF'];

    const background = document.createElement('div');
    background.className = 'background';
    document.body.appendChild(background);

    function createKanji() {
        const kanji = document.createElement('div');
        kanji.className = 'kanji';
        kanji.textContent = kanjiChars[Math.floor(Math.random() * kanjiChars.length)];
        kanji.style.left = `${Math.random() * 100}%`;
        kanji.style.color = colors[Math.floor(Math.random() * colors.length)];
        kanji.style.animationDuration = `${5 + Math.random() * 10}s`;
        background.appendChild(kanji);

        kanji.addEventListener('animationend', () => {
            kanji.remove();
        });
    }

    setInterval(createKanji, 100);
});
