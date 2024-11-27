// Centralized word list
const words = [
  {
    "english": "Abandon",
    "maay": ["ku tabow", "gooyow"],
    "phonetics": ["koo-ta-boh", "goh-yoh"],
    "description": "To leave behind or forsake."
  },
  {
    "english": "Ability",
    "maay": ["karti", "awood"],
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
    "maay": ["badnaan", "awood badan"],
    "phonetics": ["bad-naan", "a-wood-ba-dan"],
    "description": "Existing in large quantities or more than enough."
  },
  {
    "english": "Accept",
    "maay": ["agbalow", "oggolaathow"],
    "phonetics": ["ag-ba-low", "og-go-la-thow"],
    "description": "To agree to take or approve."
  },
  {
    "english": "Accident",
    "maay": ["shil", "musiibo"],
    "phonetics": ["shil", "mu-see-bo"],
    "description": "An unplanned or unexpected event."
  },
  {
    "english": "Activity",
    "maay": ["ficil", "dhaqdhaqaaq"],
    "phonetics": ["fi-cil", "dhaq-dha-qaaq"],
    "description": "Something that is done for enjoyment or work."
  },
  {
    "english": "Add",
    "maay": ["ku dar", "isku darid"],
    "phonetics": ["ku-dar", "is-ku-da-rid"],
    "description": "To combine or include something."
  },
  {
    "english": "Adventure",
    "maay": ["halis", "safar xiise leh"],
    "phonetics": ["ha-lis", "sa-far-khee-se-leh"],
    "description": "An exciting or daring experience."
  },
  {
    "english": "Affection",
    "maay": ["jeelang", "ing roonang"],
    "phonetics": ["jee-lang", "ing-roo-nang"],
    "description": "A feeling of love or fondness."
  },
  {
    "english": "Afternoon",
    "maay": ["galab", "galabtii"],
    "phonetics": ["ga-lab", "ga-lab-tee"],
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
    "maay": ["tufaax", "miraha cas"],
    "phonetics": ["tu-faax", "mi-ra-ha-cas"],
    "description": "A round fruit with red, green, or yellow skin."
  },
  {
    "english": "Art",
    "maay": ["farshaxan", "fanka"],
    "phonetics": ["far-sha-xan", "fan-ka"],
    "description": "Creative work in painting, music, literature, etc."
  },
  {
    "english": "Ask",
    "maay": ["weydii", "su’aal bixi"],
    "phonetics": ["wey-dhee", "su-aa-bih-shee"],
    "description": "To inquire or request information."
  },
  {
    "english": "Assist",
    "maay": ["caawi", "gargaar"],
    "phonetics": ["caa-wee", "gar-gaar"],
    "description": "To help or aid someone."
  },
  {
    "english": "Assume",
    "maay": ["malayac", "qaadan"],
    "phonetics": ["ma-la-yac", "qaa-dan"],
    "description": "To suppose something to be true without proof."
  },
  {
    "english": "Attack",
    "maay": ["weerar", "soo weerar"],
    "phonetics": ["wee-rar", "soo-wee-rar"],
    "description": "To take aggressive action against someone or something."
  },
  {
    "english": "Attention",
    "maay": ["fiiro gaar ah", "xiiso"],
    "phonetics": ["fii-ro-gar-ah", "xi-so"],
    "description": "Focusing awareness on something."
  },
  {
    "english": "Authority",
    "maay": ["awood", "xukun"],
    "phonetics": ["a-wood", "xu-kun"],
    "description": "The power or right to give orders or make decisions."
  },
  {
    "english": "Available",
    "maay": ["diyaar", "muuruxsan"],
    "phonetics": ["di-yaar", "moo-ru-hsan"],
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
    "maay": ["dhabar", "dib"],
    "phonetics": ["dha-bar", "dib"],
    "description": "The rear part of the body or something at the rear."
  },
  {
    "english": "Bad",
    "maay": ["hun", "khaldan"],
    "phonetics": ["xun", "khal-dan"],
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
    "maay": ["dub", "samee keeg"],
    "phonetics": ["dub", "sa-mee-keeg"],
    "description": "To cook in an oven."
  },
  {
    "english": "Balance",
    "maay": ["isku dheeli tirid", "miisaaman"],
    "phonetics": ["is-ku-dhee-li-ti-rid", "mii-saa-man"],
    "description": "A state where different elements are equal or in proportion."
  },
  {
    "english": "Ball",
    "maay": ["kubad", "baloon"],
    "phonetics": ["ku-bad", "bah-loan"],
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
