// Centralized word list
const words = [
  {
    "english": "Abandon",
    "maay": ["katag", "dhaaf"],
    "phonetics": ["kah-tag", "dhaaf"],
    "description": "To leave behind or forsake."
  },
  {
    "english": "Ability",
    "maay": ["kart", "awood"],
    "phonetics": ["kar-tee", "a-wood"],
    "description": "The power or skill to do something."
  },
  {
    "english": "Above",
    "maay": ["kor", "eleeng"],
    "phonetics": ["kor", "eh-leh-eng"],
    "description": "In a higher place or position."
  },
  {
    "english": "Abundant",
    "maay": ["bathan"],
    "phonetics": ["bah-zun"],
    "description": "Existing in large quantities or more than enough."
  },
  {
    "english": "Accept",
    "maay": ["akbal", "ogolaath"],
    "phonetics": ["ak-bal", "oh-go-laath"],
    "description": "To agree to take or approve."
  },
  {
    "english": "Accident",
    "maay": ["shil", "musiibo", "qarash"],
    "phonetics": ["shil", "mu-see-bo"],
    "description": "An unplanned or unexpected event."
  },
  {
    "english": "Ball",
    "maay": ["baloon"],
    "phonetics": ["bah-lown"],
    "description": "A round object used in sports or play."
  },
  {
    "english": "Banana",
    "maay": ["moos"],
    "phonetics": ["moh-uus"],
    "description": "A long, curved fruit with a yellow skin."
  }
];

// Display words dynamically
function displayWords(data) {
  const wordList = document.getElementById('word-list');
  wordList.innerHTML = ''; // Clear current list

  data.forEach(word => {
    const wordEntry = document.createElement('div');
    wordEntry.classList.add('word-entry');

    // Build inner HTML for word entry
    wordEntry.innerHTML = `
      <h3>${word.english}</h3>
      <div class="word-details">
        <p><strong>Maay Words:</strong> ${word.maay ? word.maay.join(', ') : 'N/A'}</p>
        <p><strong>Phonetics:</strong> ${word.phonetics ? word.phonetics.join(', ') : 'N/A'}</p>
        <p><strong>Description:</strong> ${word.description || 'N/A'}</p>
        <button class="audio-button">Play Pronunciation & Meaning</button>
      </div>
    `;

    // Add event listener for Text-to-Speech button
    wordEntry.querySelector('.audio-button').addEventListener('click', () => {
      readText(word);
    });

    // Append word entry to the word list
    wordList.appendChild(wordEntry);
  });
}

// Text-to-Speech function
function readText(word) {
  const synth = window.speechSynthesis;

  // Prepare text to be read
  const textToRead = `
    The English word is ${word.english}.
    The Maay translation is ${word.maay ? word.maay.join(', ') : 'N/A'}.
    The phonetics are ${word.phonetics ? word.phonetics.join(', ') : 'N/A'}.
    Description: ${word.description || 'N/A'}.
  `;

  // Create a new speech synthesis utterance
  const utterance = new SpeechSynthesisUtterance(textToRead);
  utterance.lang = "en-US"; // Adjust language as needed
  utterance.rate = 0.9;     // Adjust speaking speed
  utterance.pitch = 1;      // Adjust pitch

  // Speak the text
  synth.speak(utterance);
}

// Filter words based on search query
const searchBar = document.getElementById('search-bar');
searchBar.addEventListener('input', function () {
  const searchQuery = searchBar.value.toLowerCase();

  // Filter words matching the query
  const filteredWords = words.filter(word => {
    return word.english.toLowerCase().includes(searchQuery) ||
           word.maay.some(maayWord => maayWord.toLowerCase().includes(searchQuery));
  });

  // Update displayed words
  displayWords(filteredWords);
});

// Initialize with all words
displayWords(words);
