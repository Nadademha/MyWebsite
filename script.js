document.addEventListener('DOMContentLoaded', () => {
    const wordList = document.getElementById('word-list');
    const searchBar = document.getElementById('search-bar');
    const searchButton = document.getElementById('search-button');

    // Updated word list including the new words
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
        },
        {
            english: "Abroad",
            maay: ["dibadda", "qurba"],
            phonetics: ["di-bad-da", "qur-ba"],
            description: "In or to a foreign country."
        },
        {
            english: "Absorb",
            maay: ["dhuughow", "nuughow"],
            phonetics: ["dhoo-go-how", "noo-go-how"],
            description: "To soak up or take in."
        },
        {
            english: "Adapt",
            maay: ["la qabsow", "habey"],
            phonetics: ["la-qab-soh", "ha-bey"],
            description: "To adjust or change to suit a condition or environment."
        },
        {
            english: "Ambition",
            maay: ["hammuun", "riyo fog"],
            phonetics: ["ham-moon", "ree-yo-fog"],
            description: "A strong desire to achieve something."
        },
        {
            english: "Anger",
            maay: ["xanaaq", "caro"],
            phonetics: ["xa-naaq", "ca-ro"],
            description: "A strong feeling of annoyance or hostility."
        },
        {
            english: "Analyze",
            maay: ["falanqee", "baadhitaan samee"],
            phonetics: ["fa-lan-qee", "baa-dhi-taan-sa-mee"],
            description: "To examine or study something carefully."
        },
        {
            english: "Ancient",
            maay: ["hore", "waqti dheer kahor"],
            phonetics: ["ho-re", "waq-ti-dheer-ka-hor"],
            description: "Belonging to a very distant past."
        },
        {
            english: "Avoid",
            maay: ["iska ilaali", "ka fogow"],
            phonetics: ["is-ka-i-laa-li", "ka-fo-go-w"],
            description: "To stay away from something."
        },
        {
            english: "Brave",
            maay: ["geesi", "halyeey"],
            phonetics: ["gee-see", "hal-yee-y"],
            description: "Showing courage or facing danger without fear."
        },
        {
            english: "Bright",
            maay: ["iftiin leh", "dhallaalaya"],
            phonetics: ["if-teen-leh", "dha-laa-la-ya"],
            description: "Giving off a lot of light or intelligent."
        },
        {
            english: "Build",
            maay: ["dhisow", "samee"],
            phonetics: ["dhi-soh", "sa-mee"],
            description: "To construct or assemble something."
        },
        {
            english: "Celebrate",
            maay: ["dabaaldeg", "farxad samee"],
            phonetics: ["da-baal-deg", "far-xad-sa-mee"],
            description: "To mark a special occasion with activities or festivities."
        },
        {
            english: "Change",
            maay: ["bedel", "isku bedel"],
            phonetics: ["be-del", "is-ku-be-del"],
            description: "To make something different or become different."
        },
        {
            english: "Cheer",
            maay: ["farxad gelin", "dhacdhac"],
            phonetics: ["far-xad-ge-lin", "dhaq-dhaq"],
            description: "To shout for joy or encouragement."
        },
        {
            english: "Clear",
            maay: ["cad", "daahfuran"],
            phonetics: ["cad", "daa-fu-ran"],
            description: "Easy to understand or transparent."
        },
        {
            english: "Cloud",
            maay: ["daruur", "hoos u muuqasho"],
            phonetics: ["da-ruur", "hoos-u-muu-qa-sho"],
            description: "A visible mass of condensed water vapor in the sky."
        }
        // Add more words here as needed
    ];

    // Function to display words
    function displayWords(data) {
        wordList.innerHTML = ''; // Clear existing content
        data.forEach(entry => {
            const wordDiv = document.createElement('div');
            wordDiv.classList.add('word-entry');

            const wordHeader = document.createElement('h3');
            wordHeader.textContent = entry.english;
            wordDiv.appendChild(wordHeader);

            const wordDetails = document.createElement('div');
            wordDetails.classList.add('word-details');
            wordDetails.innerHTML = `
                <p><strong>Maay Words:</strong> ${entry.maay.join(', ')}</p>
                <p><strong>Phonetics:</strong> ${entry.phonetics.join(', ')}</p>
                <p><strong>Description:</strong> ${entry.description}</p>
                <button class="audio-button">Play Audio</button>
            `;

            // Add audio functionality
            const audioButton = wordDetails.querySelector('.audio-button');
            audioButton.addEventListener('click', () => {
                const msg = new SpeechSynthesisUtterance(
                    `${entry.english}. Maay Words: ${entry.maay.join(', ')}. Phonetics: ${entry.phonetics.join(', ')}. Description: ${entry.description}`
                );
                window.speechSynthesis.speak(msg);
            });

            wordDiv.appendChild(wordDetails);
            wordList.appendChild(wordDiv);
        });
    }

    // Search functionality
    function searchWords() {
        const query = searchBar.value.toLowerCase();
        const filteredWords = words.filter(
            word =>
                word.english.toLowerCase().includes(query) ||
                word.maay.some(m => m.toLowerCase().includes(query))
        );
        displayWords(filteredWords);
    }

    searchButton.addEventListener('click', searchWords);
    searchBar.addEventListener('input', searchWords);

    // Display all words initially
    displayWords(words);
});
