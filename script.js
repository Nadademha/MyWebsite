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
                    <button class="audio-button">
                        Play Pronunciation & Meaning
                    </button>
                </div>
            `;

            // Add event listener for Text-to-Speech button
            wordEntry.querySelector('.audio-button').addEventListener('click', () => {
                readText(word);
            });

            wordList.appendChild(wordEntry);
        });
    }

    // Text-to-Speech function
    function readText(word) {
        const synth = window.speechSynthesis;

        // Construct the text to be read
        const textToRead = `
            The English word is ${word.english}.
            The Maay translation is ${word.maay.join(', ')}.
            The phonetics are ${word.phonetics.join(', ')}.
            Description: ${word.description}.
        `;

        // Create a new speech synthesis utterance
        const utterance = new SpeechSynthesisUtterance(textToRead);
        utterance.lang = "en-US"; // Adjust language as needed
        utterance.rate = 0.9; // Adjust speaking speed
        utterance.pitch = 1; // Adjust pitch

        // Speak the text
        synth.speak(utterance);
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