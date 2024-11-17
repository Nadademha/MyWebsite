document.addEventListener('DOMContentLoaded', () => {
    const wordList = document.getElementById('word-list');
    const searchBar = document.getElementById('search-bar');

    // Centralized word list
    const words = [
        {
            english: "Abandon",
            maay: ["ku tabow", "gooyow"],
            phonetics: ["koo-tah-boh", "goh-yoh"],
            description: "To leave behind or forsake."
        },
        {
            english: "Ability",
            maay: ["karti", "awood"],
            phonetics: ["kar-tee", "a-wood"],
            description: "The power or skill to do something."
        },
        {
            english: "Above",
            maay: ["kor", "eleeng"],
            phonetics: ["kor", "eh-leh-eng"],
            description: "In a higher place or position."
        }
        // Add more words as needed
    ];

    // Display words dynamically
    function displayWords(data) {
        wordList.innerHTML = ''; // Clear current list
        data.forEach(word => {
            const wordEntry = document.createElement('div');
            wordEntry.classList.add('word-entry');
            wordEntry.innerHTML = `
                <h3>${word.english}</h3>
                <div class="word-details" style="display: none;">
                    <p><strong>Maay Words:</strong> ${word.maay.join(', ')}</p>
                    <p><strong>Phonetics:</strong> ${word.phonetics.join(', ')}</p>
                    <p><strong>Description:</strong> ${word.description}</p>
                </div>
            `;

            // Toggle details on click
            wordEntry.querySelector('h3').addEventListener('click', () => {
                const details = wordEntry.querySelector('.word-details');
                details.style.display = details.style.display === 'none' ? 'block' : 'none';
            });

            wordList.appendChild(wordEntry);
        });
    }

    // Filter words based on search query
    function filterWords() {
        const query = searchBar.value.toLowerCase();
        const filteredWords = words.filter(word =>
            word.english.toLowerCase().includes(query) ||
            word.maay.some(maayWord => maayWord.toLowerCase().includes(query))
        );
        displayWords(filteredWords);
    }

    searchBar.addEventListener('input', filterWords);

    // Display all words on page load
    displayWords(words);
});