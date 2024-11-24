document.addEventListener('DOMContentLoaded', () => {
    const wordList = document.getElementById('word-list');
    const searchBar = document.getElementById('search-bar');

    // Centralized word list with audio file paths
    const words = [
        {
            english: "Abandon",
            maay: ["ku tabow", "gooyow"],
            phonetics: ["koo-tah-boh", "goh-yoh"],
            description: "To leave behind or forsake.",
            audio: "audio/abandon_combined.mp3" // Single audio file for combined playback
        },
        {
            english: "Ability",
            maay: ["karti", "awood"],
            phonetics: ["kar-tee", "a-wood"],
            description: "The power or skill to do something.",
            audio: "audio/ability_combined.mp3"
        },
        {
            english: "Above",
            maay: ["kor", "eleeng"],
            phonetics: ["kor", "eh-leh-eng"],
            description: "In a higher place or position.",
            audio: "audio/above_combined.mp3"
        }
    ];

    // Display words dynamically
    function displayWords(data) {
        wordList.innerHTML = ''; // Clear current list
        data.forEach(word => {
            const wordEntry = document.createElement('div');
            wordEntry.classList.add('word-entry');
            wordEntry.innerHTML = `
                <h3>${word.english}</h3>
                <div class="word-details">
                    <p><strong>Maay Words:</strong> ${word.maay.join(', ')}</p>
                    <p><strong>Phonetics:</strong> ${word.phonetics.join(', ')}</p>
                    <p><strong>Description:</strong> ${word.description}</p>
                    <button class="audio-button" data-audio="${word.audio}">
                        Play Pronunciation & Meaning
                    </button>
                </div>
            `;

            // Add event listener for the audio button
            wordEntry.querySelector('.audio-button').addEventListener('click', () => {
                const audioPath = word.audio;
                playAudio(audioPath);
            });

            wordList.appendChild(wordEntry);
        });
    }

    // Play audio function
    function playAudio(audioPath) {
        const audio = new Audio(audioPath);
        audio.play().catch(error => console.error("Audio playback error:", error));
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