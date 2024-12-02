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
    "maay": ["bathan", "awood bathan"],
    "phonetics": ["bah-zun, "a-wood-bah-zun"],
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
    "english": "Activity",
    "maay": ["ficil", "dhaqdhagaaq"],
    "phonetics": ["fih-il", "dhaq-dha-gaaq"],
    "description": "Something that is done for enjoyment or work."
  },
  {
    "english": "Add",
    "maay": ["ka dar", "iska dar"],
    "phonetics": ["ka-dar", "is-ka-dar"],
    "description": "To combine or include something."
  },
  {
    "english": "Adventure",
    "maay": ["halis", "safar"],
    "phonetics": ["ha-lis", "sa-far"],
    "description": "An exciting or daring experience."
  },
  {
    "english": "Affection",
    "maay": ["jeelang", "ing runey"],
    "phonetics": ["jee-lang", "ing-ru-ney"],
    "description": "A feeling of love or fondness."
  },
  {
    "english": "Afternoon",
    "maay": ["galab"],
    "phonetics": ["ga-lab"],
    "description": "The time between noon and evening."
  },
  {
    "english": "Animal",
    "maay": ["xayawaan", "noolaha"],
    "phonetics": ["ha-ya-wa-an", "noo-la-ha"],
    "description": "A living creature other than a human."
  },
  {
    "english": "Apple",
    "maay": ["tufa"],
    "phonetics": ["tu-fa"],
    "description": "A round fruit with red, green, or yellow skin."
  },
  {
    "english": "Art",
    "maay": ["farshahan", "choor"],
    "phonetics": ["far-sha-han", "choor"],
    "description": "Creative work in painting, music, literature, etc."
  },
  {
    "english": "Ask",
    "maay": ["weydii", "su’aal bihi"],
    "phonetics": ["wey-dhee", "su-aal-bih-hee"],
    "description": "To inquire or request information."
  },
  {
    "english": "Assist",
    "maay": ["aawi", "gargaar"],
    "phonetics": ["aa-wee", "gar-gaar"],
    "description": "To help or aid someone."
  },
  {
    "english": "Assume",
    "maay": ["maleey", "qaadan"],
    "phonetics": ["ma-lehy", "qaa-dan"],
    "description": "To suppose something to be true without proof."
  },
  {
    "english": "Attack",
    "maay": ["weerar", "sa tung"],
    "phonetics": ["wee-rar", "sa-tung"],
    "description": "To take aggressive action against someone or something."
  },
  {
    "english": "Attention",
    "maay": ["firi", "hiiso"],
    "phonetics": ["fii-ri", "hi-so"],
    "description": "Focusing awareness on something."
  },
  {
    "english": "Authority",
    "maay": ["awood", "hukun"],
    "phonetics": ["a-wood", "hu-kun"],
    "description": "The power or right to give orders or make decisions."
  },
  {
    "english": "Available",
    "maay": ["diyaar", "banaas ley"],
    "phonetics": ["di-yaar", "bah-naas-leh"],
    "description": "Ready for use or at hand."
  },
  {
    "english": "Baby",
    "maay": ["unug", "dhinaang"],
    "phonetics": ["uu-nuug", "dhih-naang"],
    "description": "A very young child."
  },
  {
    "english": "Back",
    "maay": ["dhabar", "dhoong"],
    "phonetics": ["dha-bar", "dhoong"],
    "description": "The rear part of the body or something at the rear."
  },
  {
    "english": "Bad",
    "maay": ["hun", "qaldam"],
    "phonetics": ["hun", "qal-dam"],
    "description": "Not good in quality, condition, or behavior."
  },
  {
    "english": "Bag",
    "maay": ["shandad", "boorso"],
    "phonetics": ["shan-dad", "boor-so"],
    "description": "A container for carrying things."
  },
  {
    "english": "Bake",
    "maay": ["dub"],
    "phonetics": ["dub"],
    "description": "To cook in an oven."
  },
  {
    "english": "Balance",
    "maay": ["mizameey"],
    "phonetics": ["mii-za-meey"],
    "description": "A state where different elements are equal or in proportion."
  },
  {
    "english": "Ball",
    "maay":"baloon"],
    "phonetics": "bah-lown"],
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
    wordEntry.innerHTML = `
      <h3>${word.english}</h3>
      <div class="word-details">
        <p><strong>Maay Words:</strong> ${word.maay.join(', ')}</p>
        <p><strong>Phonetics:</strong> ${word.phonetics.join(', ')}</p>
        <p><strong>Description:</strong> ${word.description}</p>
        <button class="audio-button">Play Pronunciation & Meaning</button>
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
  const textToRead = `
    The English word is ${word.english}.
    The Maay translation is ${word.maay.join(', ')}.
    The phonetics are ${word.phonetics.join(', ')}.
    Description: ${word.description}.
  `;
  
  // Create a new speech synthesis utterance
  const utterance = new SpeechSynthesisUtterance(textToRead);
  utterance.lang = "en-US";  // Adjust language as needed
  utterance.rate = 0.9;      // Adjust speaking speed
  utterance.pitch = 1;       // Adjust pitch
  
  // Speak the text
  synth.speak(utterance);
}

// Filter words based on search query
const searchBar = document.getElementById('search-bar');
searchBar.addEventListener('input', function() {
  const searchQuery = searchBar.value.toLowerCase();
  const filteredWords = words.filter(word => {
    return word.english.toLowerCase().includes(searchQuery) ||
           word.maay.some(maayWord => maayWord.toLowerCase().includes(searchQuery));
  });
  displayWords(filteredWords);
});

// Initialize with all words
displayWords(words);
