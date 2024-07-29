document.addEventListener('DOMContentLoaded', () => {
    const languageButton = document.getElementById('language-button');
    const popup = document.getElementById('language-popup');
    const closeButton = document.querySelector('.close-button');

    languageButton.addEventListener('click', () => {
        popup.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });

    // Infinite scroll
    let page = 1;
    const contentContainer = document.getElementById('content-container');
    const loadingSpinner = document.getElementById('loading-spinner');

    const loadMoreContent = () => {
        loadingSpinner.style.display = 'block';
        // Simulate fetching new content
        setTimeout(() => {
            const newSection = document.createElement('div');
            newSection.className = 'section';
            newSection.innerHTML = `
                <h2>New Section ${page}</h2>
                <p>This is the newly loaded content for page ${page}.</p>
            `;
            contentContainer.appendChild(newSection);
            loadingSpinner.style.display = 'none';
            page++;
        }, 1000);
    };

    window.addEventListener('scroll', () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            loadMoreContent();
        }
    });
});
