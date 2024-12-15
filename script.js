// Centralized word list
const words = [
{
  "english": "Abandon",
  "maay": ["katag", "dhaaf"],
  "phonetics": ["ka-tag", "dhaaf"],
  "description": "To leave something or someone behind completely."
},
{
  "english": "Abase",
  "maay": ["hoos saar", "hoos dhig"],
  "phonetics": ["hoos-saar", "hoos-dhig"],
  "description": "To lower in rank, office, prestige, or esteem."
},
{
  "english": "Abate",
  "maay": ["dhegsithi", "yarathi", "gaawithi"],
  "phonetics": ["dheeg-see-thee", "yaa-raa-thee", "gaa-wee-thee"],
  "description": "To reduce in intensity, degree, or severity."
},
{
  "english": "Abdomen",
  "maay": ["uurka", "uuska"],
  "phonetics": ["uur-ka", "uus-ka"],
  "description": "The part of the body containing the digestive organs."
},
{
  "english": "Abduct",
  "maay": ["afduub", "qawath", "qaadmaan"],
  "phonetics": ["aaf-duub", "qaa-waath", "qaad-maan"],
  "description": "To take someone away illegally by force."
},
{
  "english": "Abhor",
  "maay": ["nee'ee", "ash'ashi"],
  "phonetics": ["nee-ee", "aash-aashee"],
  "description": "To regard with disgust and hatred."
},
{
  "english": "Abide",
  "maay": ["raac", "sugid", "adkayso"],
  "phonetics": ["raa-c", "su-gid", "ad-kay-so"],
  "description": "To accept or act in accordance with a rule or decision."
},
{
  "english": "Ability",
  "maay": ["kart", "awood", "farsamo"],
  "phonetics": ["kar-tee", "a-wood", "far-sa-mo"],
  "description": "The skill or power to do something."
},
{
  "english": "Able",
  "maay": ["kara", "awood leh", "wax qaban kara"],
  "phonetics": ["ka-ra", "a-wood leh", "wax qa-ban ka-ra"],
  "description": "Having the power or capacity to do something."
},
{
  "english": "Abnormal",
  "maay": ["aan caadi ahayn", "khaldan", "caadi la'aan"],
  "phonetics": ["aan caa-di a-hayn", "khal-dan", "caa-di la-aan"],
  "description": "Deviating from what is normal or usual."
},
{
  "english": "Abolish",
  "maay": ["tirtir", "baabi'i", "joojin"],
  "phonetics": ["tir-tir", "baa-bi-i", "joo-jin"],
  "description": "To formally put an end to a system, practice, or institution."
},
{
  "english": "Abound",
  "maay": ["badnaado", "xad dhaaf", "buuxdhaaf"],
  "phonetics": ["bad-naa-do", "xad-dhaaf", "buux-dhaaf"],
  "description": "To exist in large numbers or amounts."
},
{
  "english": "About",
  "maay": ["ku saabsan", "dhawr", "ku wareegsan"],
  "phonetics": ["ku saab-san", "dha-wr", "ku wa-reeg-san"],
  "description": "On the subject of; regarding."
},
{
  "english": "Above",
  "maay": ["kor", "eleeng", "sare"],
  "phonetics": ["kor", "eh-leh-eng", "sa-re"],
  "description": "At a higher position or place."
},
{
  "english": "Absolve",
  "maay": ["cafis", "denbi dhaaf", "xallin"],
  "phonetics": ["ca-fis", "den-bi dhaaf", "xal-lin"],
  "description": "To free from guilt, responsibility, or punishment."
},
{
  "english": "Absorb",
  "maay": ["nuugo", "qaado", "dhexgalo"],
  "phonetics": ["nuu-go", "qaa-do", "dhex-ga-lo"],
  "description": "To soak up or take in a liquid, information, or energy."
},
{
  "english": "Abstract",
  "maay": ["fikrad guud", "qayb gooni ah", "kala saarid"],
  "phonetics": ["fik-rad guud", "qayb goo-ni ah", "ka-la saa-rid"],
  "description": "Existing in thought or as an idea but not having a physical existence."
},
{
  "english": "Abundance",
  "maay": ["badnaan", "ku filan", "buux dhaaf"],
  "phonetics": ["bad-naan", "ku fi-lan", "buux dhaaf"],
  "description": "A very large quantity of something."
},
{
  "english": "Abuse",
  "maay": ["xadgudub", "dhaawac", "kufsasho"],
  "phonetics": ["xad-gu-dub", "dhaa-wac", "kuf-sa-sho"],
  "description": "To use something or someone wrongly or improperly."
},
{
  "english": "Accept",
  "maay": ["aqbal", "ogolaath", "qaadasho"],
  "phonetics": ["aq-bal", "oh-go-laath", "qaa-da-sho"],
  "description": "To agree to take or approve something offered."
},
{
  "english": "Access",
  "maay": ["gaarid", "galitaan", "heli"],
  "phonetics": ["gaa-rid", "ga-li-taan", "he-li"],
  "description": "The ability to approach or enter a place."
},
{
  "english": "Accident",
  "maay": ["shil", "musiibo", "qarash"],
  "phonetics": ["shil", "mu-see-bo", "qa-rash"],
  "description": "An unexpected event causing harm or damage."
},
{
  "english": "Accompany",
  "maay": ["raac", "weheli", "socodsiin"],
  "phonetics": ["raa-c", "we-he-li", "so-cod-si-in"],
  "description": "To go somewhere with someone."
},
{
  "english": "Accomplish",
  "maay": ["dhameystir", "qabso", "guuleyso"],
  "phonetics": ["dha-mey-stir", "qab-so", "guu-ley-so"],
  "description": "To achieve or complete a task successfully."
},
{
  "english": "Account",
  "maay": ["xisaab", "koonto", "warbixin"],
  "phonetics": ["xi-saab", "koon-to", "war-bi-xin"],
  "description": "A record of financial transactions or information."
},
{
  "english": "Accurate",
  "maay": ["sax ah", "dhab ah", "khalad la'aan"],
  "phonetics": ["sax ah", "dhab ah", "kha-lad la-aan"],
  "description": "Free from errors; exact and precise."
},
{
  "english": "Accuse",
  "maay": ["eede", "tuhun", "cabasho"],
  "phonetics": ["ee-de", "tu-hun", "ca-ba-sho"],
  "description": "To charge someone with wrongdoing."
},
{
  "english": "Achieve",
  "maay": ["guuleyso", "hirgal", "hel"],
  "phonetics": ["guu-ley-so", "hir-gal", "hel"],
  "description": "To successfully reach a desired goal or result."
},
{
  "english": "Acid",
  "maay": ["aashito", "dhanbo", "walax qaraar"],
  "phonetics": ["aa-shi-to", "dhan-bo", "wa-lax qa-raar"],
  "description": "A chemical substance with a sour taste."
},
{
  "english": "Acknowledge",
  "maay": ["aqoonsi", "ogolaansho", "tixgalin"],
  "phonetics": ["aq-oon-si", "o-go-laan-sho", "tix-ga-lin"],
  "description": "To admit or recognize something as true or valid."
},
{
  "english": "Acquaintance",
  "maay": ["saaxiib", "aqoon yahan", "garasho"],
  "phonetics": ["saa-xiib", "aq-oon ya-han", "ga-ra-sho"],
  "description": "A person one knows slightly, not a close friend."
},
{
  "english": "Acquire",
  "maay": ["helid", "kasbasho", "barasho"],
  "phonetics": ["he-lid", "kas-ba-sho", "ba-ra-sho"],
  "description": "To gain or obtain something."
},
{
  "english": "Act",
  "maay": ["ficil", "dhaqan", "fal"],
  "phonetics": ["fi-cil", "dha-qan", "fal"],
  "description": "To take action or do something."
},
{
  "english": "Action",
  "maay": ["dhaqdhaqaaq", "ficil", "hawl"],
  "phonetics": ["dhaq-dha-qaaq", "fi-cil", "hawl"],
  "description": "The process of doing something to achieve an aim."
},
{
  "english": "Active",
  "maay": ["firfircoon", "dhaqdhaqaaq leh", "socodka"],
  "phonetics": ["fir-fir-coon", "dhaq-dha-qaaq leh", "so-cod-ka"],
  "description": "Engaged in physical or energetic activity."
},
{
  "english": "Activity",
  "maay": ["howl", "dhaqdhaqaaq", "ficil"],
  "phonetics": ["howl", "dhaq-dha-qaaq", "fi-cil"],
  "description": "A thing that a person does for enjoyment or work."
},
{
  "english": "Actor",
  "maay": ["jilaa", "ruug caddaa", "ficil sameeye"],
  "phonetics": ["ji-laa", "ruug cad-daa", "fi-cil sa-mee-ye"],
  "description": "A person who performs in plays or movies."
},
{
  "english": "Actual",
  "maay": ["dhab ah", "runta ah", "xaqiiq"],
  "phonetics": ["dhab ah", "run-ta ah", "xa-qiiq"],
  "description": "Existing in fact, not just in appearance or imagination."
},
{
  "english": "Adapt",
  "maay": ["laqabsasho", "wax ka bedelid", "isbedel"],
  "phonetics": ["la-qab-sa-sho", "wax ka be-de-lid", "is-be-del"],
  "description": "To adjust to new conditions or situations."
},
{
  "english": "Add",
  "maay": ["ka dar", "iska dar", "kusii kordhi"],
  "phonetics": ["ka-dar", "is-ka-dar", "ku-sii kor-dhi"],
  "description": "To combine or include something as a part of a whole."
},
{
  "english": "Address",
  "maay": ["cinwaan", "qoraalka goobta", "meel gaar ah"],
  "phonetics": ["cin-waan", "qo-raal-ka goob-ta", "meel gaar ah"],
  "description": "The particulars of a place where someone lives or works."
},
{
  "english": "Adhere",
  "maay": ["ku dheganaansho", "raacitaan", "iska xirid"],
  "phonetics": ["ku dhe-ga-naan-sho", "raa-ci-taan", "is-ka xi-rid"],
  "description": "To stick firmly to something or to follow closely."
},
{
  "english": "Adjust",
  "maay": ["la qabsasho", "ku habeyn", "dhex dhexaadso"],
  "phonetics": ["la qab-sa-sho", "ku ha-beyn", "dhex dhe-xaad-so"],
  "description": "To alter or move something slightly to achieve the desired result."
},
{
  "english": "Admire",
  "maay": ["amaano", "jeclaansho", "qadarin"],
  "phonetics": ["a-maa-no", "jec-laan-sho", "qa-da-rin"],
  "description": "To regard something or someone with respect and approval."
},
{
  "english": "Admission",
  "maay": ["gelitaan", "ogolaansho", "ixtiraam"],
  "phonetics": ["ge-li-taan", "o-go-laan-sho", "ix-ti-raam"],
  "description": "Permission to enter or a statement acknowledging truth."
},
{
  "english": "Adopt",
  "maay": ["koriyo", "aqbalid", "qaadan"],
  "phonetics": ["ko-ri-yo", "aq-ba-lid", "qaa-dan"],
  "description": "To take up or follow an idea, method, or child as one's own."
},
{
  "english": "Adore",
  "maay": ["jecel", "caashaq", "u bogi"],
  "phonetics": ["je-cel", "caa-shaq", "u bo-gi"],
  "description": "To love and respect someone deeply."
},
{
  "english": "Advance",
  "maay": ["horumar", "kor u qaadid", "guul gaarid"],
  "phonetics": ["ho-ru-mar", "kor u qaa-did", "guul gaa-rid"],
  "description": "To move forward or make progress."
},
{
  "english": "Advantage",
  "maay": ["faa’iido", "ka faa’ideysi", "horumar"],
  "phonetics": ["faa-i-do", "ka faa-i-dey-si", "ho-ru-mar"],
  "description": "A condition that puts one in a favorable or superior position."
},
{
  "english": "Advice",
  "maay": ["talo", "fikir", "hanuunin"],
  "phonetics": ["ta-lo", "fi-kir", "ha-nuu-nin"],
  "description": "Guidance or recommendations offered about actions or decisions."
},
{
  "english": "Advocate",
  "maay": ["u dooday", " taageerid", "caawimaad"],
  "phonetics": ["u doo-day", "taa-gee-rid", "caa-wi-maad"],
  "description": "A person who supports or argues for a cause or policy."
},
{
  "english": "Affect",
  "maay": ["saameyn", "wax ka bedel", "ku dhacid"],
  "phonetics": ["saa-meyn", "wax ka be-del", "ku dha-cid"],
  "description": "To influence or make a difference to."
},
{
  "english": "Affection",
  "maay": ["jeelka", "u bogid", "naxariis"],
  "phonetics": ["jee-lka", "u bo-gid", "nax-a-riis"],
  "description": "A gentle feeling of fondness or liking."
},
{
  "english": "Affirm",
  "maay": ["cadeyn", "aqoonsi", "sugid"],
  "phonetics": ["ca-deyn", "aq-oon-si", "su-gid"],
  "description": "To state a fact strongly or publicly."
},
{
  "english": "Afford",
  "maay": ["u awoodid", "iibsasho", "la heli karo"],
  "phonetics": ["u a-woo-did", "iib-sa-sho", "la he-li ka-ro"],
  "description": "To be able to pay for or do something."
},
{
  "english": "After",
  "maay": ["kadib", "daba socda", "markaas ka dib"],
  "phonetics": ["ka-dib", "da-ba so-cda", "mar-kaas ka dib"],
  "description": "In the time following an event or action."
},
{
  "english": "Against",
  "maay": ["ka soo horjeeda", "lid ku ah", "dagaal ka dhan ah"],
  "phonetics": ["ka soo hor-jee-da", "lid ku ah", "da-gaal ka dhan ah"],
  "description": "In opposition to."
},
{
  "english": "Agree",
  "maay": ["heshiis", "aqbalid", "waafaqid"],
  "phonetics": ["he-shiis", "aq-ba-lid", "waa-faa-qid"],
  "description": "To have the same opinion or to consent to something."
},
{
  "english": "Aid",
  "maay": ["caawimaad", "gargaar", "taageero"],
  "phonetics": ["caa-wi-maad", "gar-gaar", "taa-gee-ro"],
  "description": "Help, typically of a practical nature."
},
{
  "english": "Aim",
  "maay": ["ujeedo", "bartilmaameed", "yool"],
  "phonetics": ["u-jee-do", "bar-til-maa-meed", "yool"],
  "description": "A goal or purpose toward which one directs effort."
},
{
  "english": "Air",
  "maay": ["hawo", "neef", "cir"],
  "phonetics": ["ha-wo", "neef", "cir"],
  "description": "The invisible gas surrounding the earth, essential for breathing."
},
{
  "english": "Alarm",
  "maay": ["digniin", "kala kicis", "siiye"],
  "phonetics": ["dig-niin", "ka-la ki-cis", "sii-ye"],
  "description": "A warning signal or device."
},
{
  "english": "Allow",
  "maay": ["ogolaansho", "fasax", "u ogolow"],
  "phonetics": ["o-go-laan-sho", "fa-sax", "u o-go-low"],
  "description": "To permit someone to do something."
},
{
  "english": "Almost",
  "maay": ["ku dhawaad", "u dhow", "qarka u saaran"],
  "phonetics": ["ku dha-waa-d", "u dho-w", "qar-ka u saa-ran"],
  "description": "Not quite; very nearly."
},
{
  "english": "Alone",
  "maay": ["keligiis", "kalidaa", "cidlo"],
  "phonetics": ["ke-li-giis", "ka-li-daa", "cid-lo"],
  "description": "Having no one else present."
},
{
  "english": "Already",
  "maay": ["horayba", "horey u dhacay", "durba"],
  "phonetics": ["ho-ray-ba", "ho-rey u dha-cay", "dur-ba"],
  "description": "Before or by now or the time in question."
},
{
  "english": "Also",
  "maay": ["sidoo kale", "oo kale", "waliba"],
  "phonetics": ["si-doo ka-le", "oo ka-le", "wa-li-ba"],
  "description": "In addition; too."
},
{
  "english": "Always",
  "maay": ["waligeed", "mar walba", "dhab ahaan"],
  "phonetics": ["wa-li-geed", "mar wal-ba", "dhab aha-an"],
  "description": "At all times; forever."
},
{
  "english": "Amend",
  "maay": ["hagaaji", "bedel wanaagsan", "saxid"],
  "phonetics": ["ha-gaa-ji", "be-del wa-naag-san", "sa-xid"],
  "description": "To make changes to improve or correct something."
},
{
  "english": "Amount",
  "maay": ["qaddar", "xaddiga", "tira"],
  "phonetics": ["qad-dar", "xad-di-ga", "ti-ra"],
  "description": "A quantity of something."
},
{
  "english": "Amuse",
  "maay": ["madadaaliyo", "farxad geli", "la qosli"],
  "phonetics": ["ma-da-daa-li-yo", "far-xad ge-li", "la qos-li"],
  "description": "To entertain or make someone laugh."
},
{
  "english": "Ancestor",
  "maay": ["aabbihii hore", "waalidka hore", "abtirsiin"],
  "phonetics": ["aab-bi-hi hore", "waa-lid-ka hore", "ab-tir-siin"],
  "description": "A person from whom one is descended."
},
{
  "english": "Anger",
  "maay": ["cadho", "caro", "qiiro"],
  "phonetics": ["cad-ho", "ca-ro", "qii-ro"],
  "description": "A strong feeling of annoyance or displeasure."
},
{
  "english": "Animal",
  "maay": ["xayawaan", "noolaha", "duurjoog"],
  "phonetics": ["xa-ya-waan", "noo-la-ha", "duur-joo-g"],
  "description": "A living organism other than a human."
},
{
  "english": "Announce",
  "maay": ["shaaciso", "ku dhawaaqid", "warbixin"],
  "phonetics": ["shaa-ci-so", "ku dha-waa-qid", "war-bi-xin"],
  "description": "To make a formal or public statement."
},
{
  "english": "Answer",
  "maay": ["jawaab", "ka jawaabid", "warcelin"],
  "phonetics": ["ja-waab", "ka ja-waa-bid", "war-ce-lin"],
  "description": "A response to a question or statement."
},
{
  "english": "Anxiety",
  "maay": ["welwel", "walbahaar", "cabsi"],
  "phonetics": ["wel-wel", "wal-ba-haar", "cab-si"],
  "description": "A feeling of worry or unease."
},
{
  "english": "Apologize",
  "maay": ["raali gelin", "ka cudur daarid", "ka xumayn"],
  "phonetics": ["raa-li ge-lin", "ka cu-dur daa-rid", "ka xu-mayn"],
  "description": "To express regret for something done wrong."
},
{
  "english": "Appear",
  "maay": ["muuqan", "soo bax", "ka soo muuqo"],
  "phonetics": ["muu-qan", "soo bax", "ka soo muu-qo"],
  "description": "To become visible or come into view."
},
{
  "english": "Appoint",
  "maay": ["magacaabid", "u xil saarid", "doorid"],
  "phonetics": ["ma-ga-caa-bid", "u xil saa-rid", "doo-rid"],
  "description": "To assign a job or role to someone."
},
{
  "english": "Appreciate",
  "maay": ["qadarin", "fahmid qiimaha", "amaano"],
  "phonetics": ["qa-da-rin", "fah-mid qii-ma-ha", "a-maa-no"],
  "description": "To recognize the value or importance of something."
},
{
  "english": "Approach",
  "maay": ["soo dhawaansho", "ku dhowaansho", "wajaho"],
  "phonetics": ["soo dha-waa-nsho", "ku dho-waa-nsho", "wa-ja-ho"],
  "description": "To come nearer in distance or time."
},
{
  "english": "Appropriate",
  "maay": ["ku habboon", "sax ah", "ku habeyn"],
  "phonetics": ["ku hab-boon", "sax ah", "ku ha-beyn"],
  "description": "Suitable or proper in a particular situation."
},
{
  "english": "Approval",
  "maay": ["ogolaansho", "aqbalaad", "taageero"],
  "phonetics": ["o-go-laan-sho", "aq-ba-laad", "taa-gee-ro"],
  "description": "The action of officially agreeing to something."
},
{
  "english": "Argue",
  "maay": ["dood", "muran", "ka hadlid"],
  "phonetics": ["dood", "mu-ran", "ka had-lid"],
  "description": "To give reasons or evidence to support an idea or opinion."
},
{
  "english": "Arrangement",
  "maay": ["qabyo tir", "isku habeyn", "dowladayn"],
  "phonetics": ["qa-byo tir", "is-ku ha-beyn", "dow-la-dayn"],
  "description": "A plan or preparation for an event or activity."
},
{
  "english": "Arrive",
  "maay": ["imaasho", "soo gaadhid", "soo noqod"],
  "phonetics": ["i-maa-sho", "soo gaa-dhid", "soo no-qod"],
  "description": "To reach a destination."
},
{
  "english": "Art",
  "maay": ["farshaxan", "choor", "hal-abuur"],
  "phonetics": ["far-sha-xan", "choor", "hal-a-buur"],
  "description": "Creative work in painting, music, literature, etc."
},
{
  "english": "Article",
  "maay": ["maqaal", "qoraal", "shay"],
  "phonetics": ["ma-qaal", "qo-raal", "shay"],
  "description": "A written composition or an item or object."
},
{
  "english": "Ask",
  "maay": ["weydii", "su’aal bihi", "dalbasho"],
  "phonetics": ["wey-dhee", "su-aal bih-hee", "dal-ba-sho"],
  "description": "To inquire or request information."
},
{
  "english": "Aspect",
  "maay": ["qodob", "aragtida", "wejiga"],
  "phonetics": ["qo-dob", "a-rag-ti-da", "we-ji-ga"],
  "description": "A particular part or feature of something."
},
{
  "english": "Assume",
  "maay": ["maleey", "qaadan", "ku fikirid"],
  "phonetics": ["ma-leey", "qaa-dan", "ku fi-ki-rid"],
  "description": "To suppose something to be true without proof."
},
{
  "english": "Assistance",
  "maay": ["caawimaad", "gargaar", "taageero"],
  "phonetics": ["caa-wi-maad", "gar-gaar", "taa-gee-ro"],
  "description": "The action of helping or supporting someone."
},
{
  "english": "Attention",
  "maay": ["firi", "dhegaysi", "hiiso"],
  "phonetics": ["fii-ri", "dhe-gay-si", "hii-so"],
  "description": "Focusing awareness on something."
},
{
  "english": "Attract",
  "maay": ["soo jiido", "ka helid", "indho qabsi"],
  "phonetics": ["soo jii-do", "ka he-lid", "ind-ho qab-si"],
  "description": "To draw interest or appeal to someone or something."
},
{
  "english": "Available",
  "maay": ["diyaar", "banaas ley", "lagu heli karo"],
  "phonetics": ["di-yaar", "ba-naas ley", "la-gu he-li ka-ro"],
  "description": "Ready for use or accessible."
},
{
  "english": "Avoid",
  "maay": ["iska ilaali", "ka fogow", "diidid"],
  "phonetics": ["is-ka i-laa-li", "ka fo-gow", "dii-did"],
  "description": "To keep away from or stop oneself from doing something."
},
{
  "english": "Awake",
  "maay": ["tooso", "soo jeedid", "naaxsanaan"],
  "phonetics": ["too-so", "soo jee-did", "naax-sa-naan"],
  "description": "To stop sleeping or become alert."
},
{
  "english": "Aware",
  "maay": ["fahamsan", "ka warqabid", "soo jeed"],
  "phonetics": ["fa-ham-san", "ka war-qa-bid", "soo jeed"],
  "description": "Having knowledge or understanding of something."
},
{
  "english": "Awesome",
  "maay": ["cajiib", "layaab leh", "weyn"],
  "phonetics": ["ca-jiib", "la-yaab leh", "weyn"],
  "description": "Extremely impressive or inspiring awe."
},
{
  "english": "Awful",
  "maay": ["xun", "aad u xun", "naxdin leh"],
  "phonetics": ["xun", "aad u xun", "nax-din leh"],
  "description": "Very bad or unpleasant."
},
{
  "english": "Baby",
  "maay": ["cunug", "dhallaanka", "ilmo yar"],
  "phonetics": ["cu-nug", "dhal-laan-ka", "il-mo yar"],
  "description": "A very young child."
},
{
  "english": "Back",
  "maay": ["dhabar", "dhoong", "gadaal"],
  "phonetics": ["dha-bar", "dhoong", "ga-daal"],
  "description": "The rear part of the body or something at the rear."
},
{
  "english": "Bad",
  "maay": ["xun", "qaldam", "aan wanaagsaneyn"],
  "phonetics": ["xun", "qal-dam", "aan wa-naag-sa-neyn"],
  "description": "Not good in quality, condition, or behavior."
},
{
  "english": "Bag",
  "maay": ["shandad", "boorso", "jawaan"],
  "phonetics": ["shan-dad", "boor-so", "ja-waan"],
  "description": "A container for carrying things."
},
{
  "english": "Bake",
  "maay": ["dub", "cunto dubid", "karin"],
  "phonetics": ["dub", "cun-to du-bid", "ka-rin"],
  "description": "To cook food in an oven using dry heat."
},
{
  "english": "Balance",
  "maay": ["isu dheelitir", "miisaam", "joojinta"],
  "phonetics": ["i-su dhee-li-tir", "mii-saam", "joo-jin-ta"],
  "description": "A state where different elements are equal or in proportion."
},
{
  "english": "Ball",
  "maay": ["kubad", "baloon", "sharado"],
  "phonetics": ["ku-bad", "ba-loon", "sha-ra-do"],
  "description": "A round object used in sports or play."
},
{
  "english": "Banana",
  "maay": ["moos", "kaara", "midho"],
  "phonetics": ["moos", "kaa-ra", "mi-dho"],
  "description": "A long, curved fruit with a yellow skin."
},
{
  "english": "Band",
  "maay": ["koox", "xadhig", "uraan"],
  "phonetics": ["koo-x", "xa-dhig", "u-raan"],
  "description": "A group of musicians or a loop of material."
},
{
  "english": "Bank",
  "maay": ["bangi", "xisaab meeleyn", "hay'ad dhaqaale"],
  "phonetics": ["ban-gi", "xi-saab mee-leyn", "hay-ad dha-qaa-le"],
  "description": "An institution where money is kept, lent, or exchanged."
},
{
  "english": "Bar",
  "maay": ["baar", "qaac", "meel cabitaan"],
  "phonetics": ["baar", "qaac", "meel ca-bi-taan"],
  "description": "A counter where drinks are served or a rod of metal or wood."
},
{
  "english": "Base",
  "maay": ["asal", "sal", "hoosaad"],
  "phonetics": ["a-sal", "sal", "hoo-saad"],
  "description": "The bottom or foundation of something."
},
{
  "english": "Basic",
  "maay": ["asaasi", "muhiimad yar", "asal ahaan"],
  "phonetics": ["a-saa-si", "mu-hiim-ad yar", "a-sal aha-an"],
  "description": "Fundamental or simple; essential."
},
{
  "english": "Basket",
  "maay": ["dambiil", "weel", "shandad yar"],
  "phonetics": ["dam-biil", "weel", "shan-dad yar"],
  "description": "A container made of flexible materials used to carry items."
},
{
  "english": "Bath",
  "maay": ["qubays", "maydhis", "biyo mayd"],
  "phonetics": ["qu-bays", "may-dhis", "bi-yo mayd"],
  "description": "The act of washing oneself or soaking in water."
},
{
  "english": "Battle",
  "maay": ["dagaal", "colaad", "isku dhac"],
  "phonetics": ["da-gaal", "co-laad", "is-ku dhac"],
  "description": "A fight between opposing forces or individuals."
},
{
  "english": "Beach",
  "maay": ["xeebta", "bada hareeraheeda", "ciid xeebeed"],
  "phonetics": ["xee-bta", "ba-da ha-ree-ra-heeda", "ciid xee-beed"],
  "description": "A sandy or pebbly shore by a body of water."
},
{
  "english": "Beautiful",
  "maay": ["qurux badan", "soo jiidasho leh", "waa wanaagsan"],
  "phonetics": ["qu-rux ba-dan", "soo jii-da-sho leh", "waa wa-naag-san"],
  "description": "Pleasing to the senses or the mind."
},
{
  "english": "Because",
  "maay": ["sababta ah", "maxaa yeelay", "taasi waa"],
  "phonetics": ["sa-bab-ta ah", "ma-xaa yeel-ay", "taa-si waa"],
  "description": "For the reason that; since."
},
{
  "english": "Bed",
  "maay": ["sariir", "jiif", "meel hurdo"],
  "phonetics": ["sa-riir", "jiif", "meel hur-do"],
  "description": "A piece of furniture for sleeping on."
},
{
  "english": "Bee",
  "maay": ["shinida", "diqsan", "midho urursade"],
  "phonetics": ["shi-ni-da", "diq-san", "mi-dho u-rur-sa-de"],
  "description": "A flying insect known for producing honey."
},
{
  "english": "Before",
  "maay": ["kahor", "horay", "horteeda"],
  "phonetics": ["ka-hor", "ho-ray", "hor-tee-da"],
  "description": "At an earlier time; preceding."
},
{
  "english": "Begin",
  "maay": ["bilow", "ku dhaqaaq", "furitaanka"],
  "phonetics": ["bi-low", "ku dha-qaaq", "fu-ri-taan-ka"],
  "description": "To start doing something."
},
{
  "english": "Behavior",
  "maay": ["dhaqan", "dabeecad", "hab dhaqanka"],
  "phonetics": ["dha-qan", "da-bee-cad", "hab dha-qan-ka"],
  "description": "The way a person or animal acts or conducts themselves."
},
{
  "english": "Believe",
  "maay": ["aamin", "rumaysid", "ogolow"],
  "phonetics": ["aa-min", "ru-may-sid", "o-go-low"],
  "description": "To accept something as true."
},
{
  "english": "Bell",
  "maay": ["gambaleel", "cod dheer", "digniin"],
  "phonetics": ["gam-ba-leel", "cod dheer", "dig-niin"],
  "description": "A hollow instrument that makes a ringing sound."
},
{
  "english": "Belong",
  "maay": ["leeyahay", "ka tirsan yahay", "ku jira"],
  "phonetics": ["lee-ya-hay", "ka tir-san ya-hay", "ku ji-ra"],
  "description": "To be the property of or be part of something."
},
{
  "english": "Below",
  "maay": ["hoos", "ka hooseeya", "dusha hoose"],
  "phonetics": ["hoos", "ka hoo-se-ya", "du-sha hoo-se"],
  "description": "At a lower position or level."
},
{
  "english": "Bend",
  "maay": ["laabo", "qalloocin", "fidin"],
  "phonetics": ["laa-bo", "qal-loo-cin", "fi-din"],
  "description": "To curve or flex something into a different shape."
},
{
  "english": "Best",
  "maay": ["ugu fiican", "heersare", "sida ugu wanaagsan"],
  "phonetics": ["u-gu fi-i-caan", "heer-sa-re", "si-da u-gu wa-naag-san"],
  "description": "Of the highest quality or standard."
},
{
  "english": "Better",
  "maay": ["ka fiican", "horumarsan", "aad u wanaagsan"],
  "phonetics": ["ka fi-i-caan", "ho-ru-mar-san", "aad u wa-naag-san"],
  "description": "Of a more excellent or improved quality."
},
{
  "english": "Between",
  "maay": ["u dhexeeya", "ka dhexeeya", "dhexda"],
  "phonetics": ["u dhe-xe-e-ya", "ka dhe-xe-e-ya", "dhex-da"],
  "description": "In the space separating two points or objects."
},
{
  "english": "Beyond",
  "maay": ["ka baxsan", "ka dheer", "ka dambeeya"],
  "phonetics": ["ka bax-san", "ka dheer", "ka dam-bee-ya"],
  "description": "Farther away or more advanced than something."
},
{
  "english": "Big",
  "maay": ["weyn", "ballaaran", "aad u weyn"],
  "phonetics": ["weyn", "bal-laa-ran", "aad u weyn"],
  "description": "Of considerable size or extent."
},
{
  "english": "Bird",
  "maay": ["shimbir", "diig", "baalley"],
  "phonetics": ["shim-bir", "diig", "baal-ley"],
  "description": "A warm-blooded animal with feathers, wings, and a beak."
},
{
  "english": "Birth",
  "maay": ["dhalasho", "ilmo dhalid", "soo bixid"],
  "phonetics": ["dha-la-sho", "il-mo dha-lid", "soo bi-xid"],
  "description": "The emergence of a baby or offspring from its mother."
},
{
  "english": "Bite",
  "maay": ["qaniinyo", "cunid", "qabsasho"],
  "phonetics": ["qa-nii-nyo", "cu-nid", "qab-sa-sho"],
  "description": "To cut or grip something with teeth."
},
{
  "english": "Black",
  "maay": ["madow", "mugdi", "kaad madow"],
  "phonetics": ["ma-dow", "mug-di", "kaad ma-dow"],
  "description": "The darkest color, absorbing all light."
},
{
  "english": "Blind",
  "maay": ["indho la'aan", "araga xiran", "dhabarka xiran"],
  "phonetics": ["in-dho la-aan", "a-ra-ga xi-ran", "dha-bar-ka xi-ran"],
  "description": "Unable to see or lacking sight."
},
{
  "english": "Block",
  "maay": ["baloog", "xirid", "joojinta"],
  "phonetics": ["ba-loog", "xi-rid", "joo-jin-ta"],
  "description": "A solid piece of material or to obstruct."
},
{
  "english": "Blood",
  "maay": ["dhiig", "lax iyo dhiig", "hilib dhiig leh"],
  "phonetics": ["dhiig", "lax iyo dhiig", "hi-lib dhiig leh"],
  "description": "The red liquid that circulates in the veins and arteries of humans and animals."
},
{
  "english": "Blue",
  "maay": ["buluug", "caddaan buluug ah", "cirka midab leh"],
  "phonetics": ["bu-luug", "cad-daan bu-luug ah", "cir-ka mi-dab leh"],
  "description": "A color often associated with the sky and sea."
},
{
  "english": "Boat",
  "maay": ["doon", "biyo doon", "markab yar"],
  "phonetics": ["doon", "bi-yo doon", "mar-kab yar"],
  "description": "A small watercraft for travel or fishing."
},
{
  "english": "Body",
  "maay": ["jirka", "qaab dhismeed", "nafley"],
  "phonetics": ["jir-ka", "qaab dhis-meed", "naf-ley"],
  "description": "The physical structure of a person or animal."
},
{
  "english": "Bone",
  "maay": ["laf", "lafaha jirka", "lafweyn"],
  "phonetics": ["laf", "la-fa-ha jir-ka", "laf-weyn"],
  "description": "The hard, structural components of the body."
},
{
  "english": "Book",
  "maay": ["buug", "kutub", "qoraal buug ah"],
  "phonetics": ["buug", "ku-tub", "qo-raal buug ah"],
  "description": "A set of written, printed, or blank pages bound together."
},
{
  "english": "Born",
  "maay": ["dhashay", "dhalasho", "soo bixid"],
  "phonetics": ["dha-shay", "dha-la-sho", "soo bi-xid"],
  "description": "Brought into existence through birth."
},
{
  "english": "Borrow",
  "maay": ["amaahso", "qaadasho", "si ku meel gaar ah"],
  "phonetics": ["a-maa-hso", "qaa-da-sho", "si ku meel gaar ah"],
  "description": "To take something for temporary use with the intention of returning it."
},
{
  "english": "Both",
  "maay": ["labadaba", "dhammaan", "ka labaduba"],
  "phonetics": ["la-ba-da-ba", "dham-maan", "ka la-ba-du-ba"],
  "description": "Referring to two things or people together."
},
{
  "english": "Bottle",
  "maay": ["dhalo", "weyl biyood", "weel cabitaan"],
  "phonetics": ["dha-lo", "weyl bi-yood", "weel ca-bi-taan"],
  "description": "A container, typically made of glass or plastic, used for liquids."
},
{
  "english": "Bottom",
  "maay": ["hoos", "salka hoose", "dhabta"],
  "phonetics": ["hoos", "sal-ka hoo-se", "dhab-ta"],
  "description": "The lowest part of something."
},
{
  "english": "Box",
  "maay": ["sanduuq", "weel xiran", "gaar ah"],
  "phonetics": ["san-duuq", "weel xi-ran", "gaar ah"],
  "description": "A container with a flat base and sides, typically square or rectangular."
},
{
  "english": "Boy",
  "maay": ["wiil", "ilmo wiil ah", "dhaqasho wiil"],
  "phonetics": ["wiil", "il-mo wiil ah", "dha-qa-sho wiil"],
  "description": "A male child."
},
{
  "english": "Brain",
  "maay": ["maskax", "garaad", "xubinta maskaxda"],
  "phonetics": ["mas-kax", "ga-raad", "xu-bin-ta mas-kax-da"],
  "description": "The organ inside the skull responsible for thought, memory, and control."
},
{
  "english": "Bread",
  "maay": ["rooti", "cunto rooti ah", "karsan rooti"],
  "phonetics": ["roo-ti", "cun-to roo-ti ah", "kar-san roo-ti"],
  "description": "A staple food made from flour and water."
},
{
  "english": "Break",
  "maay": ["jebso", "nasasho", "jooji"],
  "phonetics": ["jeb-so", "na-sa-sho", "joo-ji"],
  "description": "To separate into pieces or to pause an activity."
},
{
  "english": "Bright",
  "maay": ["dhalaalaya", "cad", "naxariis leh"],
  "phonetics": ["dha-laa-la-ya", "cad", "nax-a-riis leh"],
  "description": "Giving off a lot of light; vivid or intelligent."
},
{
  "english": "Bring",
  "maay": ["keeno", "soo qaado", "geyn"],
  "phonetics": ["kee-no", "soo qaa-do", "geyn"],
  "description": "To take or carry something to a place or person."
},
{
  "english": "Build",
  "maay": ["dhis", "qorid", "kor u qaadid"],
  "phonetics": ["dhis", "qo-rid", "kor u qaa-did"],
  "description": "To construct something by putting parts together."
},
{
  "english": "Burn",
  "maay": ["gub", "dhalaalid", "holac"],
  "phonetics": ["gub", "dha-laa-lid", "ho-lac"],
  "description": "To destroy or be destroyed by fire."
},
{
  "english": "Busy",
  "maay": ["mashquul", "hawl badan", "wakhti buuxa"],
  "phonetics": ["mash-quul", "hawl ba-dan", "wakhti buu-xa"],
  "description": "Occupied or engaged in an activity."
},
{
  "english": "Buy",
  "maay": ["iibso", "gadan", "qaado lacag ku bixid"],
  "phonetics": ["iib-so", "ga-dan", "qaa-do la-cag ku bixid"],
  "description": "To purchase something in exchange for money."
},
{
  "english": "Call",
  "maay": ["wac", "ku dhawaaq", "weeydiin"],
  "phonetics": ["wac", "ku dha-waa-q", "wee-yii-diin"],
  "description": "To contact someone by phone or to shout to attract attention."
},
{
  "english": "Calm",
  "maay": ["deganaan", "dagan", "nabdoon"],
  "phonetics": ["de-ga-naan", "da-gan", "nab-doon"],
  "description": "Not showing or feeling nervousness or anger."
},
{
  "english": "Can",
  "maay": ["awoodid", "kartid", "karin"],
  "phonetics": ["a-woo-did", "kar-tid", "ka-rin"],
  "description": "To be able to do something."
},
{
  "english": "Care",
  "maay": ["daryeel", "dhowrid", "ilaalin"],
  "phonetics": ["da-ryeel", "dho-wrid", "i-laa-lin"],
  "description": "The process of protecting someone or something."
},
{
  "english": "Carry",
  "maay": ["qaado", "xambaarid", "raran"],
  "phonetics": ["qaa-do", "xam-baa-rid", "ra-ran"],
  "description": "To move something from one place to another."
},
{
  "english": "Cat",
  "maay": ["bisad", "nyawu", "mukulaal"],
  "phonetics": ["bi-sad", "nee-ya-woo", "moo-koo-laal"],
  "description": "A small domesticated mammal often kept as a pet."
},
{
  "english": "Catch",
  "maay": ["qabso", "soo qabasho", "heli"],
  "phonetics": ["qab-so", "soo qa-ba-sho", "he-li"],
  "description": "To capture or seize something."
},
{
  "english": "Cause",
  "maay": ["sabab", "keeno", "xaal"],
  "phonetics": ["sa-bab", "kee-no", "xaa-l"],
  "description": "The reason or motive behind an action or event."
},
{
  "english": "Ceiling",
  "maay": ["saqafka", "kor saqaf", "qol saqaf"],
  "phonetics": ["sa-qaf-ka", "kor sa-qaf", "qol sa-qaf"],
  "description": "The upper interior surface of a room."
},
{
  "english": "Celebrate",
  "maay": ["dabaaldeg", "xus", "ugu farxi"],
  "phonetics": ["da-baal-deg", "xus", "u-gu far-xi"],
  "description": "To mark an event or occasion with festivities or respect."
},
{
  "english": "Center",
  "maay": ["bartamaha", "dhexda", "xarunta"],
  "phonetics": ["bar-ta-ma-ha", "dhex-da", "xa-run-ta"],
  "description": "The middle point or part of something."
},
{
  "english": "Chair",
  "maay": ["kursi", "fadhi", "meel lagu fadhiisto"],
  "phonetics": ["kur-si", "fa-dhi", "meel la-gu fa-dhi-is-to"],
  "description": "A piece of furniture designed for one person to sit on."
},
{
  "english": "Change",
  "maay": ["isbeddel", "ka bedelid", "beddelid"],
  "phonetics": ["is-bed-del", "ka be-del-id", "bed-del-id"],
  "description": "To make or become different."
},
{
  "english": "Cheap",
  "maay": ["jaban", "qiimo hooseeya", "aan qaali ahayn"],
  "phonetics": ["ja-ban", "qii-mo hoo-se-ya", "aan qaa-li a-hayn"],
  "description": "Low in price or cost."
},
{
  "english": "Check",
  "maay": ["hubi", "fiiri", "kormeer"],
  "phonetics": ["hu-bi", "fii-ri", "kor-meer"],
  "description": "To examine or verify something."
},
{
  "english": "Child",
  "maay": ["cunug", "ilmo yar", "wiil ama gabadh yar"],
  "phonetics": ["cu-nug", "il-mo yar", "wiil a-ma ga-badh yar"],
  "description": "A young human being below the age of puberty."
},
{
  "english": "Choose",
  "maay": ["doorasho", "xulo", "qaadasho"],
  "phonetics": ["doo-ra-sho", "xu-lo", "qaa-da-sho"],
  "description": "To select from a number of possibilities."
},
{
  "english": "City",
  "maay": ["magaalo", "tuulo weyn", "xarun dad badan"],
  "phonetics": ["ma-gaa-lo", "tuu-lo weyn", "xa-run dad ba-dan"],
  "description": "A large town with many people and infrastructure."
},
{
  "english": "Clean",
  "maay": ["nadiif", "saafi", "qalalan"],
  "phonetics": ["na-diif", "saa-fi", "qa-la-lan"],
  "description": "Free from dirt, marks, or stains."
},
{
  "english": "Clear",
  "maay": ["cad", "nadiif ah", "oo muuqda"],
  "phonetics": ["cad", "na-diif ah", "oo muu-qda"],
  "description": "Easily understood or free from obstructions."
},
{
  "english": "Climb",
  "maay": ["kor u soco", "fuulid", "kor u bax"],
  "phonetics": ["kor u so-co", "fuul-id", "kor u bax"],
  "description": "To move upward, especially using hands and feet."
},
{
  "english": "Close",
  "maay": ["xir", "ku dhaw", "soo dhowow"],
  "phonetics": ["xir", "ku dhaw", "soo dho-wow"],
  "description": "To shut something or be near to something."
},
{
  "english": "Cloud",
  "maay": ["daruur", "cir daruuro leh", "meel qariyey"],
  "phonetics": ["da-ruur", "cir da-ruu-ro leh", "meel qa-ri-yey"],
  "description": "A visible mass of condensed water vapor in the atmosphere."
},
{
  "english": "Cold",
  "maay": ["qabow", "hawo qabow", "neef qabow"],
  "phonetics": ["qa-bow", "ha-wo qa-bow", "neef qa-bow"],
  "description": "Low temperature or a sensation of coolness."
},
{
  "english": "Color",
  "maay": ["midab", "qaab muuqaal ah", "aragti midab leh"],
  "phonetics": ["mi-dab", "qaab muu-qaal ah", "a-rag-ti mi-dab leh"],
  "description": "The characteristic of visual perception described by hue, saturation, and brightness."
},
{
  "english": "Come",
  "maay": ["imaanso", "soo gal", "soo socda"],
  "phonetics": ["i-maan-so", "soo gal", "soo soc-da"],
  "description": "To move or travel toward or into a place."
},
{
  "english": "Comfort",
  "maay": ["raaxo", "qabow", "dhegaysi wanaagsan"],
  "phonetics": ["raa-xo", "qa-bow", "dhe-gay-si wa-naag-san"],
  "description": "A state of physical ease and freedom from pain or worry."
},
{
  "english": "Common",
  "maay": ["caadi", "wada jir ah", "soo noqnoqonaya"],
  "phonetics": ["caa-di", "wa-da jir ah", "soo noq-no-qo-na-ya"],
  "description": "Occurring or done frequently; shared by many."
},
{
  "english": "Company",
  "maay": ["shirkad", "koox", "urur"],
  "phonetics": ["shir-kad", "koo-x", "u-rur"],
  "description": "A business organization or a group of people."
},
{
  "english": "Compare",
  "maay": ["barbardhig", "isku eegid", "iska soo hor dhig"],
  "phonetics": ["bar-bar-dhig", "is-ku ee-gid", "is-ka soo hor dhig"],
  "description": "To examine the similarities and differences between things."
},
{
  "english": "Complete",
  "maay": ["dhameystir", "buuxi", "dhammayn"],
  "phonetics": ["dha-mey-stir", "buu-xi", "dham-mayn"],
  "description": "To finish making or doing something."
},
{
  "english": "Condition",
  "maay": ["xaalad", "shuruud", "duruuf"],
  "phonetics": ["xaa-lad", "shu-ruud", "du-ruuf"],
  "description": "The state of something with regard to its appearance, quality, or working order."
},
{
  "english": "Connect",
  "maay": ["ku xidhid", "isku xidhid", "la xiriirid"],
  "phonetics": ["ku xi-dhid", "is-ku xi-dhid", "la xi-ri-rid"],
  "description": "To join two or more things together."
},
{
  "english": "Consider",
  "maay": ["ka fiirso", "qaddarin", "ka fikirid"],
  "phonetics": ["ka fii-rso", "qa-da-rin", "ka fi-ki-rid"],
  "description": "To think about something carefully."
},
{
  "english": "Control",
  "maay": ["xakameyn", "maamul", "hagaajin"],
  "phonetics": ["xa-ka-meyn", "maa-mul", "ha-gaa-jin"],
  "description": "To have power over or manage something."
},
{
  "english": "Cook",
  "maay": ["cunto karin", "dubid", "karsasho"],
  "phonetics": ["cun-to ka-rin", "du-bid", "kar-sa-sho"],
  "description": "To prepare food by applying heat."
},
{
  "english": "Copy",
  "maay": ["nuqul", "isla samayn", "soo qaadasho"],
  "phonetics": ["nu-qul", "is-la sa-mayn", "soo qaa-da-sho"],
  "description": "To make a duplicate of something."
},
{
  "english": "Corner",
  "maay": ["gees", "kaarka", "furin"],
  "phonetics": ["gees", "kaar-ka", "fu-rin"],
  "description": "The point or area where two edges or surfaces meet."
},
{
  "english": "Correct",
  "maay": ["sax", "hagaaji", "qalad saxid"],
  "phonetics": ["sax", "ha-gaa-ji", "qa-lad sa-xid"],
  "description": "Free from errors or to adjust something to make it right."
},
{
  "english": "Cost",
  "maay": ["qiimo", "lacag bixid", "kharash"],
  "phonetics": ["qii-mo", "la-cag bix-id", "kha-rash"],
  "description": "The amount of money required for something."
},
{
  "english": "Count",
  "maay": ["tirin", "xisaabin", "sheegid"],
  "phonetics": ["ti-rin", "xi-saa-bin", "shee-gid"],
  "description": "To determine the total number of something."
},
{
  "english": "Country",
  "maay": ["dal", "waddan", "qaran"],
  "phonetics": ["dal", "wad-dan", "qa-ran"],
  "description": "A nation with its own government and borders."
},
{
  "english": "Cover",
  "maay": ["dabool", "qari", "korkiisa saarin"],
  "phonetics": ["da-boo-l", "qa-ri", "kor-kii-sa saa-rin"],
  "description": "To place something over or conceal it."
},
{
  "english": "Cow",
  "maay": ["sac", "geel sac ah", "xoolo"],
  "phonetics": ["sac", "geel sac ah", "xo-olo"],
  "description": "A domesticated animal raised for milk, meat, or labor."
},
{
  "english": "Create",
  "maay": ["abuuro", "sameyn", "curin"],
  "phonetics": ["a-buu-ro", "sa-meyn", "cu-rin"],
  "description": "To bring something into existence."
},
{
  "english": "Cross",
  "maay": ["iska gudub", "ka tallaabso", "is dhexmar"],
  "phonetics": ["is-ka gu-dub", "ka tal-laab-so", "is dhe-xmar"],
  "description": "To move across from one side to another."
},
{
  "english": "Cry",
  "maay": ["oohid", "ilmo daadis", "dhib sheegasho"],
  "phonetics": ["oo-hid", "il-mo daa-dis", "dhib shee-ga-sho"],
  "description": "To shed tears due to pain, sadness, or emotion."
},
{
  "english": "Culture",
  "maay": ["dhaqan", "hiddo iyo dhaqan", "xigmad"],
  "phonetics": ["dha-qan", "hid-do iyo dha-qan", "xi-gmad"],
  "description": "The ideas, customs, and social behavior of a particular group or society."
},
{
  "english": "Cup",
  "maay": ["koob", "weel yar", "koob cabitaan"],
  "phonetics": ["koob", "weel yar", "koob ca-bi-taan"],
  "description": "A small container used for drinking."
},
{
  "english": "Cut",
  "maay": ["goyn", "jarid", "gooyid"],
  "phonetics": ["go-yn", "ja-rid", "goo-yid"],
  "description": "To divide something into parts using a sharp tool."
},
{
  "english": "Cycle",
  "maay": ["wareeg", "xilli wareeg", "marar soo noqnoqday"],
  "phonetics": ["wa-reeg", "xi-lli wa-reeg", "ma-rar soo noq-noq-day"],
  "description": "A series of events that happen repeatedly in the same order."
},
{
  "english": "Daily",
  "maay": ["maalin kasta", "joogta ah", "maalmeed"],
  "phonetics": ["maa-lin kas-ta", "joo-gta ah", "maal-meed"],
  "description": "Happening every day or on a daily basis."
},
{
  "english": "Dance",
  "maay": ["ciyaar", "ka boodboodid", "socod ciyaar ah"],
  "phonetics": ["ci-yaar", "ka bood-boo-did", "so-cod ci-yaar ah"],
  "description": "To move rhythmically to music."
},
{
  "english": "Dark",
  "maay": ["mugdi", "hoos", "aan iftiin lahayn"],
  "phonetics": ["mug-di", "hoos", "aan if-ti-in la-hayn"],
  "description": "Having little or no light."
},
{
  "english": "Date",
  "maay": ["taariikh", "maalin gaar ah", "xilligii la soo dhaafay"],
  "phonetics": ["taa-rii-kh", "maa-lin gaar ah", "xil-li-gii la soo dhaa-fay"],
  "description": "A specific day or a fruit from a palm tree."
},
{
  "english": "Day",
  "maay": ["maalin", "waqti maalin ah", "waaberiga"],
  "phonetics": ["maa-lin", "waq-ti maa-lin ah", "waa-be-ri-ga"],
  "description": "A period of 24 hours or the time between sunrise and sunset."
},
{
  "english": "Dead",
  "maay": ["dhintay", "dhammaad", "aan noolayn"],
  "phonetics": ["dhin-tay", "dham-maa-d", "aan noo-layn"],
  "description": "No longer alive or functioning."
},
{
  "english": "Dear",
  "maay": ["qaali ah", "jaceyl leh", "aad muhiim ah"],
  "phonetics": ["qaa-li ah", "ja-ceyl leh", "aad mu-hiim ah"],
  "description": "Regarded with deep affection or high price."
},
{
  "english": "Death",
  "maay": ["geeri", "dhimasho", "dhammaad nolosha"],
  "phonetics": ["gee-ri", "dhi-ma-sho", "dham-maa-d no-lo-sha"],
  "description": "The end of the life of a person or organism."
},
{
  "english": "Decide",
  "maay": ["go'aan qaado", "doorasho samee", "xulo"],
  "phonetics": ["go-aan qaa-do", "doo-ra-sho sa-mee", "xu-lo"],
  "description": "To make a choice or conclusion about something."
},
{
  "english": "Deep",
  "maay": ["qoto dheer", "hoos aad u hooseeya", "baaxad leh"],
  "phonetics": ["qo-to dheer", "hoos aad u hoo-see-ya", "baa-xad leh"],
  "description": "Extending far down from the top or surface."
},
{
  "english": "Develop",
  "maay": ["horumari", "korso", "dhisid"],
  "phonetics": ["ho-ru-ma-ri", "kor-so", "dhi-sid"],
  "description": "To grow or improve in skills, abilities, or structure."
},
{
  "english": "Dictionary",
  "maay": ["qaamuus", "buug erayo", "eray bixinta"],
  "phonetics": ["qaa-muus", "buug e-ra-yo", "e-ray bi-xin-ta"],
  "description": "A reference book that lists words and their meanings."
},
{
  "english": "Die",
  "maay": ["dhiman", "naftu tagtay", "geerida"],
  "phonetics": ["dhi-man", "naf-tu tag-tay", "gee-ri-da"],
  "description": "To stop living or cease to exist."
},
{
  "english": "Different",
  "maay": ["ka duwan", "aan la mid ahayn", "gaar ah"],
  "phonetics": ["ka du-wan", "aan la mid a-hayn", "gaar ah"],
  "description": "Not the same as another."
},
{
  "english": "Difficult",
  "maay": ["adkaan", "dhib badan", "fudud ma ahan"],
  "phonetics": ["ad-kaan", "dhib ba-dan", "fu-dud ma ahan"],
  "description": "Not easy to do, understand, or deal with."
},
{
  "english": "Dinner",
  "maay": ["casho", "cunto habeen ah", "qado dambe"],
  "phonetics": ["ca-sho", "cun-to ha-been ah", "qa-do dam-be"],
  "description": "The main meal of the evening."
},
{
  "english": "Direction",
  "maay": ["jihada", "hanuun", "hagid"],
  "phonetics": ["ji-ha-da", "ha-nuun", "ha-gid"],
  "description": "A course or path along which something moves."
},
{
  "english": "Disappear",
  "maay": ["iska ba'ay", "ka dhumid", "la waayay"],
  "phonetics": ["is-ka ba-ay", "ka dhu-mid", "la waa-yay"],
  "description": "To cease to be visible or present."
},
{
  "english": "Discover",
  "maay": ["heli", "soo ogaado", "bariidin"],
  "phonetics": ["he-li", "soo o-gaa-do", "ba-rii-din"],
  "description": "To find something or learn something previously unknown."
},
{
  "english": "Discuss",
  "maay": ["ka dood", "iska wada hadal", "war ka sii"],
  "phonetics": ["ka dood", "is-ka wa-da ha-dal", "war ka sii"],
  "description": "To talk about something with someone."
},
{
  "english": "Disease",
  "maay": ["cudur", "xanuun", "bukaan"],
  "phonetics": ["cu-dur", "xa-nuun", "bu-kaan"],
  "description": "A condition that impairs normal functioning of the body."
},
{
  "english": "Distance",
  "maay": ["masaafa", "fogaansho", "meel dheer"],
  "phonetics": ["ma-saa-fa", "fo-gaan-sho", "meel dheer"],
  "description": "The amount of space between two points."
},
{
  "english": "Divide",
  "maay": ["qeybi", "gooyn", "kala qaybin"],
  "phonetics": ["qey-bi", "goo-yn", "ka-la qay-bin"],
  "description": "To separate or split into parts."
},
{
  "english": "Door",
  "maay": ["albaab", "marin", "furitaanka"],
  "phonetics": ["al-baab", "ma-rin", "fu-ri-taan-ka"],
  "description": "A hinged or sliding barrier used to close off an entrance."
},
{
  "english": "Down",
  "maay": ["hoos", "dhinac hoose", "hoos u dhac"],
  "phonetics": ["hoos", "dhi-nac hoo-se", "hoos u dhac"],
  "description": "Toward a lower place or position."
},
{
  "english": "Draw",
  "maay": ["sawirid", "qorid", "jiidid"],
  "phonetics": ["sa-wi-rid", "qo-rid", "jii-did"],
  "description": "To produce a picture or diagram; to pull something."
},
{
  "english": "Dream",
  "maay": ["riyo", "hammiga", "rabitaan"],
  "phonetics": ["ri-yo", "ham-mi-ga", "ra-bi-taan"],
  "description": "Thoughts, images, and sensations during sleep, or aspirations."
},
{
  "english": "Drink",
  "maay": ["cabitaan", "cabbid", "ku cab"],
  "phonetics": ["ca-bi-taan", "cab-bid", "ku cab"],
  "description": "A liquid consumed or the act of consuming it."
},
{
  "english": "Drive",
  "maay": ["wadid", "kaxeyn", "gaari wadid"],
  "phonetics": ["wa-did", "ka-xeyn", "gaa-ri wa-did"],
  "description": "To operate and control the direction of a vehicle."
},
{
  "english": "Drop",
  "maay": ["daadin", "soo dhacid", "ku dhac"],
  "phonetics": ["daa-din", "soo dha-cid", "ku dhac"],
  "description": "To let something fall or fall to a lower place."
},
{
  "english": "Dry",
  "maay": ["qalalan", "engegan", "biyo la'aan"],
  "phonetics": ["qa-la-lan", "en-ge-gan", "bi-yo la-aan"],
  "description": "Free from moisture or liquid."
},
{
  "english": "Dust",
  "maay": ["boodh", "qashin yaryar", "hawo wasakh leh"],
  "phonetics": ["boo-dh", "qa-shin yar-yar", "ha-wo wa-sakh leh"],
  "description": "Fine particles of matter found on surfaces or in the air."
},
{
  "english": "Duty",
  "maay": ["waajibaad", "mas'uuliyad", "xil"],
  "phonetics": ["waa-ji-baad", "mas-uul-i-yad", "xil"],
  "description": "A moral or legal obligation or responsibility."
},
{
  "english": "Dwell",
  "maay": ["daggan", "ku noolaansho", "degid"],
  "phonetics": ["dag-gan", "ku noo-laan-sho", "de-gid"],
  "description": "To live in or at a specified place."
},
{
  "english": "Dye",
  "maay": ["midabeeyo", "rinji saar", "midab cusub"],
  "phonetics": ["mi-da-bee-yo", "rin-ji saar", "mi-dab cu-sub"],
  "description": "To color fabric or other material with dye."
},
{
  "english": "Dynamic",
  "maay": ["firfircoon", "dhaqdhaqaaq leh", "socodsan"],
  "phonetics": ["fir-fir-coon", "dhaq-dha-qaaq leh", "so-cod-san"],
  "description": "Characterized by constant change or activity."
},
{
  "english": "Early",
  "maay": ["hore", "waaberiga", "bilow ah"],
  "phonetics": ["ho-re", "waa-be-ri-ga", "bi-low ah"],
  "description": "Happening or done before the usual or expected time."
},
{
  "english": "Earth",
  "maay": ["dhulka", "ciida", "meeraha"],
  "phonetics": ["dhu-lka", "cii-da", "mee-ra-ha"],
  "description": "The planet we live on or the soil of the ground."
},
{
  "english": "Ease",
  "maay": ["fududeyn", "raaxo", "nasasho"],
  "phonetics": ["fu-du-deyn", "raa-xo", "na-sa-sho"],
  "description": "The state of being comfortable or free from difficulty."
},
{
  "english": "East",
  "maay": ["bari", "jiho bari", "qorrax ka soo bax"],
  "phonetics": ["ba-ri", "ji-ho ba-ri", "qor-rax ka soo bax"],
  "description": "The direction from which the sun rises."
},
{
  "english": "Eat",
  "maay": ["cun", "cunto qaado", "quudin"],
  "phonetics": ["cun", "cun-to qaa-do", "quu-din"],
  "description": "To put food into the mouth, chew, and swallow it."
},
{
  "english": "Edge",
  "maay": ["gees", "qarka", "xuduud"],
  "phonetics": ["gees", "qar-ka", "xu-duud"],
  "description": "The outer or furthest point of something."
},
{
  "english": "Educate",
  "maay": ["barbaarin", "wax barid", "aqoon kor u qaadid"],
  "phonetics": ["bar-baa-rin", "wax ba-rid", "aq-oon kor u qaa-did"],
  "description": "To provide knowledge, skills, or schooling."
},
{
  "english": "Effect",
  "maay": ["saameyn", "natiijo", "wax soo saar"],
  "phonetics": ["saa-meyn", "na-tii-jo", "wax soo saar"],
  "description": "A change that is a result of an action or cause."
},
{
  "english": "Effort",
  "maay": ["dadaal", "iskuday", "ku hawlan"],
  "phonetics": ["da-daal", "is-ku-day", "ku haw-lan"],
  "description": "A determined attempt to achieve something."
},
{
  "english": "Egg",
  "maay": ["ukun", "beed", "wax yar oo ubax ah"],
  "phonetics": ["u-kun", "beed", "wax yar oo ubax ah"],
  "description": "An oval or round object laid by birds and some other animals."
},
{
  "english": "Eight",
  "maay": ["siddeed", "tirada siddeeda", "ka siddeeda"],
  "phonetics": ["sid-deed", "ti-ra-da sid-dee-da", "ka sid-dee-da"],
  "description": "The number after seven and before nine."
},
{
  "english": "Either",
  "maay": ["midkood", "ama mid kale", "mid ama labada"],
  "phonetics": ["mid-kood", "a-ma mid ka-le", "mid a-ma la-ba-da"],
  "description": "One or the other of two things."
},
{
  "english": "Electric",
  "maay": ["koronto", "iftiin ku shaqeeya", "tamarta danab"],
  "phonetics": ["ko-ron-to", "if-tiin ku shaq-ee-ya", "ta-mar-ta da-nab"],
  "description": "Powered by electricity or related to electricity."
},
{
  "english": "Element",
  "maay": ["curin", "qayb", "asas"],
  "phonetics": ["cu-rin", "qayb", "a-sas"],
  "description": "A part or aspect of something, especially a fundamental one."
},
{
  "english": "Elephant",
  "maay": ["maroodi", "xayawaan weyn", "maroodi dhulka"],
  "phonetics": ["ma-roo-di", "xa-ya-waan weyn", "ma-roo-di dhu-lka"],
  "description": "A large mammal with a trunk, native to Africa and Asia."
},
{
  "english": "Elevate",
  "maay": ["kor u qaadid", "sare u qaadid", "horumarinta"],
  "phonetics": ["kor u qaa-did", "sa-re u qaa-did", "ho-ru-ma-rin-ta"],
  "description": "To raise or lift something to a higher position."
},
{
  "english": "Else",
  "maay": ["kale", "wax kale", "mid kale"],
  "phonetics": ["ka-le", "wax ka-le", "mid ka-le"],
  "description": "In addition to or instead of something."
},
{
  "english": "Empty",
  "maay": ["maran", "wax la'aan", "faaruq"],
  "phonetics": ["ma-ran", "wax la-aan", "faa-ruq"],
  "description": "Containing nothing; not filled or occupied."
},
{
  "english": "End",
  "maay": ["dhammaad", "gunaanad", "soojeedin"],
  "phonetics": ["dham-maa-d", "gu-naa-nad", "soo-jee-din"],
  "description": "The final part or conclusion of something."
},
{
  "english": "Energy",
  "maay": ["tamarta", "xoog", "awood"],
  "phonetics": ["ta-mar-ta", "xoog", "a-wood"],
  "description": "The strength and vitality required for physical or mental activity."
},
{
  "english": "Engine",
  "maay": ["matoor", "qalabka dhaqdhaqaaqa", "mashiin"],
  "phonetics": ["ma-toor", "qa-lab-ka dhaq-dha-qaa-qa", "ma-shiin"],
  "description": "A machine that converts energy into mechanical power."
},
{
  "english": "Enjoy",
  "maay": ["ku raaxayso", "jeclaansho", "farxad leh"],
  "phonetics": ["ku raa-xay-so", "jec-laan-sho", "far-xad leh"],
  "description": "To take delight or pleasure in something."
},
{
  "english": "Enough",
  "maay": ["ku filan", "wax ku filan", "dhamaystiran"],
  "phonetics": ["ku fi-lan", "wax ku fi-lan", "dha-may-sti-ran"],
  "description": "As much or as many as required."
},
{
  "english": "Enter",
  "maay": ["gal", "soo galid", "iska xaadir"],
  "phonetics": ["gal", "soo ga-lid", "is-ka xaa-dir"],
  "description": "To come or go into a place."
},
{
  "english": "Equal",
  "maay": ["sinnaan", "isku mid", "sidaas oo kale"],
  "phonetics": ["sin-naan", "is-ku mid", "si-daas oo ka-le"],
  "description": "Being the same in quantity, size, degree, or value."
},
{
  "english": "Escape",
  "maay": ["baxsasho", "ka carar", "ka fogaansho"],
  "phonetics": ["bax-sa-sho", "ka ca-rar", "ka fo-gaan-sho"],
  "description": "To break free from confinement or danger."
},
{
  "english": "Even",
  "maay": ["xitaa", "isku dheellitir", "sinnaan"],
  "phonetics": ["xi-taa", "is-ku dheel-li-tir", "sin-naan"],
  "description": "Flat and level or including."
},
{
  "english": "Event",
  "maay": ["dhacdo", "xaflad", "hawl gaar ah"],
  "phonetics": ["dha-cdo", "xaf-lad", "hawl gaar ah"],
  "description": "A thing that happens, especially of importance."
},
{
  "english": "Ever",
  "maay": ["mar walba", "marnaba", "waligaa"],
  "phonetics": ["mar wal-ba", "mar-na-ba", "wa-li-gaa"],
  "description": "At any time or always."
},
{
  "english": "Every",
  "maay": ["kasta", "mid walba", "dhammaan"],
  "phonetics": ["kas-ta", "mid wal-ba", "dham-maan"],
  "description": "All the individual members or parts without exception."
},
{
  "english": "Evidence",
  "maay": ["cadeyn", "markhaati", "tilmaamo"],
  "phonetics": ["ca-deyn", "mar-khaa-ti", "til-maa-mo"],
  "description": "The available facts or information indicating whether a belief is true."
},
{
  "english": "Example",
  "maay": ["tusaale", "muunad", "aragti"],
  "phonetics": ["tu-saa-le", "muun-ad", "a-rag-ti"],
  "description": "A representative form or instance serving as a model."
},
{
  "english": "Excellent",
  "maay": ["aad u fiican", "heer sare", "ugu wanaagsan"],
  "phonetics": ["aad u fi-i-caan", "heer sa-re", "u-gu wa-naag-san"],
  "description": "Extremely good or outstanding."
},
{
  "english": "Except",
  "maay": ["ma ahan", "ka reeban", "ka duwan"],
  "phonetics": ["ma a-han", "ka ree-ban", "ka du-wan"],
  "description": "Not including or other than."
},
{
  "english": "Exchange",
  "maay": ["is dhaafsi", "beddelasho", "isweydaarsi"],
  "phonetics": ["is dhaaf-si", "bed-de-la-sho", "is-wey-daar-si"],
  "description": "To give or receive something in return for something else."
},
{
  "english": "Excited",
  "maay": ["farxad leh", "dareen kacsan", "raynrayn leh"],
  "phonetics": ["far-xad leh", "da-reen kac-san", "rayn-rayn leh"],
  "description": "Very enthusiastic and eager."
},
{
  "english": "Exercise",
  "maay": ["jimicsi", "dhaqdhaqaaq", "tababar"],
  "phonetics": ["ji-mic-si", "dhaq-dha-qaaq", "ta-ba-bar"],
  "description": "Physical activity for health or fitness."
},
{
  "english": "Exist",
  "maay": ["jiraan", "noolow", "joogid"],
  "phonetics": ["ji-raan", "noo-low", "joo-gid"],
  "description": "To have actual being or reality."
},
{
  "english": "Expect",
  "maay": ["filo", "rajeyn", "sugan"],
  "phonetics": ["fi-lo", "ra-jeyn", "su-gan"],
  "description": "To look forward to something happening."
},
{
  "english": "Explain",
  "maay": ["sharax", "iyfahansi", "caddeyn"],
  "phonetics": ["sha-rax", "ee-fa-han-si", "cad-deyn"],
  "description": "To make something clear or understandable."
},
{
  "english": "Face",
  "maay": ["wajiga", "wejiga", "muuqaalka hore"],
  "phonetics": ["wa-ji-ga", "we-ji-ga", "muu-qaal-ka ho-re"],
  "description": "The front part of a person's head or the surface of an object."
},
{
  "english": "Fact",
  "maay": ["xaqiiq", "runta", "tilmaamo sax ah"],
  "phonetics": ["xa-qiiq", "run-ta", "til-maa-mo sax ah"],
  "description": "A thing that is known or proved to be true."
},
{
  "english": "Fail",
  "maay": ["ku guuldarreysto", "dhicisoobid", "iska bixin la'aan"],
  "phonetics": ["ku guul-dar-reys-to", "dhi-ci-soo-bid", "is-ka bix-in la-aan"],
  "description": "To be unsuccessful in achieving a goal."
},
{
  "english": "Fall",
  "maay": ["dhac", "soo dhacid", "hoos u dhac"],
  "phonetics": ["dhac", "soo dha-cid", "hoos u dhac"],
  "description": "To move downward, often rapidly and freely."
},
{
  "english": "Family",
  "maay": ["qoys", "reer", "ehel"],
  "phonetics": ["qoys", "reer", "e-hel"],
  "description": "A group of people related by blood, marriage, or adoption."
},
{
  "english": "Far",
  "maay": ["fog", "meel dheer", "ka fogaansho"],
  "phonetics": ["fog", "meel dheer", "ka fo-gaan-sho"],
  "description": "At, to, or by a great distance."
},
{
  "english": "Farm",
  "maay": ["beer", "xoolo dhaqato", "dhul beeraha ah"],
  "phonetics": ["beer", "xoo-lo dhaq-ato", "dhul bee-ra-ha ah"],
  "description": "An area of land used for growing crops or raising animals."
},
{
  "english": "Fast",
  "maay": ["dhakhso", "xawli sare leh", "soomid"],
  "phonetics": ["dha-khso", "xaw-li sa-re leh", "soo-mid"],
  "description": "Moving quickly or abstaining from food and drink."
},
{
  "english": "Father",
  "maay": ["aabbe", "aabaha", "waalidka lab ah"],
  "phonetics": ["aa-bbe", "aa-ba-ha", "waa-lid-ka lab ah"],
  "description": "A male parent."
},
{
  "english": "Fear",
  "maay": ["cabsi", "walbahaar", "qoomamo"],
  "phonetics": ["cab-si", "wal-ba-haar", "qoo-ma-mo"],
  "description": "An unpleasant emotion caused by the threat of danger."
},
{
  "english": "Feel",
  "maay": ["dareemid", "taabasho", "xanuunsan"],
  "phonetics": ["da-ree-mid", "taa-ba-sho", "xa-nuun-san"],
  "description": "To experience an emotion or physical sensation."
},
{
  "english": "Field",
  "maay": ["beer", "dhul bannaan", "garoon"],
  "phonetics": ["beer", "dhul ban-naan", "ga-roon"],
  "description": "An open area of land or a specific domain of work."
},
{
  "english": "Fight",
  "maay": ["dagaal", "iska caabin", "isku dhac"],
  "phonetics": ["da-gaal", "is-ka caa-bin", "is-ku dhac"],
  "description": "To engage in a struggle or physical combat."
},
{
  "english": "Figure",
  "maay": ["tusaale", "qaab", "tirada"],
  "phonetics": ["tu-saa-le", "qaab", "ti-ra-da"],
  "description": "A numerical value, a shape, or a person of significance."
},
{
  "english": "Fill",
  "maay": ["buuxi", "buuxinta", "ka buuxi"],
  "phonetics": ["buu-xi", "buu-xin-ta", "ka buu-xi"],
  "description": "To make something full or occupy it completely."
},
{
  "english": "Find",
  "maay": ["heli", "soo helid", "raadi oo hel"],
  "phonetics": ["he-li", "soo he-lid", "raa-di oo hel"],
  "description": "To discover or locate something."
},
{
  "english": "Finish",
  "maay": ["dhameystir", "soo afjarid", "gunaanad"],
  "phonetics": ["dha-mey-stir", "soo af-jar-id", "gu-naa-nad"],
  "description": "To bring something to completion."
},
{
  "english": "Fire",
  "maay": ["dab", "holac", "gubasho"],
  "phonetics": ["dab", "ho-lac", "gu-ba-sho"],
  "description": "Combustion or flames, often producing heat and light."
},
{
  "english": "First",
  "maay": ["ugu horreeya", "hore", "bilowga"],
  "phonetics": ["u-gu hor-ree-ya", "ho-re", "bi-low-ga"],
  "description": "Coming before all others in time or order."
},
{
  "english": "Fish",
  "maay": ["kalluun", "biyaha xayawaanka", "cunida kalluunka"],
  "phonetics": ["kal-luun", "bi-ya-ha xa-ya-waan-ka", "cu-ni-da kal-luun-ka"],
  "description": "A cold-blooded aquatic animal with gills and fins."
},
{
  "english": "Fit",
  "maay": ["ku habboon", "u fiican", "ku shaqeeya"],
  "phonetics": ["ku hab-boon", "u fi-i-caan", "ku shaq-ee-ya"],
  "description": "Being of suitable size, shape, or condition."
},
{
  "english": "Fix",
  "maay": ["dayactir", "hagaaji", "xallin"],
  "phonetics": ["da-yac-tir", "ha-gaa-ji", "xal-lin"],
  "description": "To repair or set something right."
},
{
  "english": "Fly",
  "maay": ["duulid", "sare u kac", "iska dhex socod"],
  "phonetics": ["duu-lid", "sa-re u kac", "is-ka dhex so-cod"],
  "description": "To move through the air using wings or other means."
},
{
  "english": "Follow",
  "maay": ["raac", "dabagal", "u hoggaansamid"],
  "phonetics": ["raa-c", "da-ba-gal", "u hog-gaan-sa-mid"],
  "description": "To come after something in sequence or to pursue."
},
{
  "english": "Food",
  "maay": ["cunto", "raashin", "quudin"],
  "phonetics": ["cun-to", "raa-shin", "quu-din"],
  "description": "Any nutritious substance consumed to sustain life."
},
{
  "english": "Foot",
  "maay": ["lugta hoose", "kabka", "xubin socodka"],
  "phonetics": ["lug-ta hoo-se", "kab-ka", "xu-bin so-cod-ka"],
  "description": "The lower extremity of the leg used for walking."
},
{
  "english": "Force",
  "maay": ["xoog", "awood", "qasab"],
  "phonetics": ["xoog", "a-wood", "qa-sab"],
  "description": "Strength or power used to move something."
},
{
  "english": "Forest",
  "maay": ["duro", "dhul geedo leh", "keyn"],
  "phonetics": ["doo,roh", "dhul gee-do leh", "keyn"],
  "description": "A large area covered chiefly with trees and undergrowth."
},
{
  "english": "Forget",
  "maay": ["hilmaam", "ka iloobid", "ka tagid"],
  "phonetics": ["hil-maam", "ka i-loo-bid", "ka ta-gid"],
  "description": "To fail to remember something."
},
{
  "english": "Forgive",
  "maay": ["cafis", "cafiyo", "dembi dhaaf"],
  "phonetics": ["ca-fis", "ca-fi-yo", "dem-bi dhaaf"],
  "description": "To stop feeling angry or resentful toward someone for an offense."
},
{
  "english": "Form",
  "maay": ["qaab", "sameynta", "habeyn"],
  "phonetics": ["qaab", "sa-meyn-ta", "ha-beyn"],
  "description": "The shape, structure, or arrangement of something."
},
{
  "english": "Forward",
  "maay": ["horay", "soo socda", "dhinaca hore"],
  "phonetics": ["ho-ray", "soo soc-da", "dhi-na-ca ho-re"],
  "description": "Toward the front or ahead."
},
{
  "english": "Free",
  "maay": ["xor", "aan lacag ahayn", "aan xadidnayn"],
  "phonetics": ["xor", "aan la-cag a-hayn", "aan xa-did-nayn"],
  "description": "Not under the control or in charge of another; costing nothing."
},
{
  "english": "Friend",
  "maay": ["saaxiib", "rafiiq", "asxaab"],
  "phonetics": ["saa-xiib", "ra-fiiq", "as-xaab"],
  "description": "A person whom one knows and has a bond of mutual affection."
},
{
  "english": "Front",
  "maay": ["horteeda", "dhinaca hore", "meel hore"],
  "phonetics": ["hor-tee-da", "dhi-na-ca ho-re", "meel ho-re"],
  "description": "The part of something that is forward or faces forward."
},
{
  "english": "Full",
  "maay": ["buuxa", "dhamaystiran", "kuma dhiman"],
  "phonetics": ["buu-xa", "dha-may-sti-ran", "ku-ma dhi-man"],
  "description": "Containing or holding as much as possible."
},
{
  "english": "Fun",
  "maay": ["madadaalo", "farxad", "ciyaar"],
  "phonetics": ["ma-da-daa-lo", "far-xad", "ci-yaar"],
  "description": "Enjoyment or amusement."
},
{
  "english": "Future",
  "maay": ["mustaqbal", "waqti soo socda", "dhawaan"],
  "phonetics": ["mus-taq-bal", "waq-ti soo soc-da", "dha-waan"],
  "description": "The time yet to come."
},
{
  "english": "Gain",
  "maay": ["kasbasho", "helid", "guul"],
  "phonetics": ["kas-ba-sho", "he-lid", "guul"],
  "description": "To obtain or achieve something."
},
{
  "english": "Game",
  "maay": ["ciyaar", "tartanka", "madadaalo"],
  "phonetics": ["ci-yaar", "tar-tan-ka", "ma-da-daa-lo"],
  "description": "An activity one engages in for amusement or competition."
},
{
  "english": "Garden",
  "maay": ["beero", "dhul ubax leh", "geedo lagu beero"],
  "phonetics": ["bee-ro", "dhul u-bax leh", "gee-do la-gu bee-ro"],
  "description": "A piece of ground for growing plants, flowers, or vegetables."
},
{
  "english": "Gate",
  "maay": ["albaabka bannaanka", "iridda", "marinka"],
  "phonetics": ["al-baa-bka ban-naan-ka", "i-rid-da", "ma-rin-ka"],
  "description": "A movable barrier used to close an opening in a wall or fence."
},
{
  "english": "Gather",
  "maay": ["isku keenid", "soo uruurin", "shir"],
  "phonetics": ["is-ku kee-nid", "soo u-ruu-rin", "shir"],
  "description": "To bring together or collect things."
},
{
  "english": "General",
  "maay": ["guud", "dhammaan", "mid caadi ah"],
  "phonetics": ["guud", "dham-maan", "mid caa-di ah"],
  "description": "Relating to all or most of something."
},
{
  "english": "Gentle",
  "maay": ["dabacsan", "qaboow", "aan xoog lahayn"],
  "phonetics": ["da-bac-san", "qa-boow", "aan xo-og la-hayn"],
  "description": "Mild in temperament or behavior."
},
{
  "english": "Gift",
  "maay": ["hadiyad", "aruuriye", "soo gudbin"],
  "phonetics": ["ha-diy-ad", "a-ruu-ri-ye", "soo gud-bin"],
  "description": "Something voluntarily given to someone without expecting payment."
},
{
  "english": "Give",
  "maay": ["sii", "bixid", "soo dhiibid"],
  "phonetics": ["sii", "bix-id", "soo dhi-ib-id"],
  "description": "To present something to someone."
},
{
  "english": "Glad",
  "maay": ["faraxsan", "farxad leh", "dareen wanaagsan"],
  "phonetics": ["fa-rax-san", "far-xad leh", "da-reen wa-naag-san"],
  "description": "Feeling pleasure or happiness."
},
{
  "english": "Glass",
  "maay": ["muraayad", "weel galaas ah", "shaashad"],
  "phonetics": ["mu-raa-yad", "weel ga-laas ah", "shaa-shad"],
  "description": "A hard, transparent material or a container made of it."
},
{
  "english": "Go",
  "maay": ["tag", "socod", "ka dhaqaaqid"],
  "phonetics": ["tag", "so-cod", "ka dha-qaa-qid"],
  "description": "To move or travel from one place to another."
},
{
  "english": "Goal",
  "maay": ["yool", "bartilmaameed", "ujeeddo"],
  "phonetics": ["yool", "bar-til-maa-meed", "u-jeed-do"],
  "description": "An aim or desired result."
},
{
  "english": "Good",
  "maay": ["fiican", "wanaagsan", "heer sare ah"],
  "phonetics": ["fi-i-can", "wa-naag-san", "heer sa-re ah"],
  "description": "To be desired or approved of."
},
{
  "english": "Government",
  "maay": ["dowlad", "maamul", "xukuumad"],
  "phonetics": ["dow-lad", "maa-mul", "xu-kuu-mad"],
  "description": "The group of people with the authority to govern a country or state."
},
{
  "english": "Grab",
  "maay": ["qabsasho", "soo qabasho", "si degdeg ah qaadasho"],
  "phonetics": ["qab-sa-sho", "soo qa-ba-sho", "si deg-deg ah qaa-da-sho"],
  "description": "To take hold of something suddenly and roughly."
},
{
  "english": "Grace",
  "maay": ["naxariis", "quman", "deeqsinimo"],
  "phonetics": ["nax-a-riis", "qu-man", "dee-qsi-ni-mo"],
  "description": "Simple elegance or courteous goodwill."
},
{
  "english": "Grand",
  "maay": ["weyn", "heer sare", "aad muhiim ah"],
  "phonetics": ["weyn", "heer sa-re", "aad mu-hiim ah"],
  "description": "Magnificent and imposing in appearance or style."
},
{
  "english": "Grass",
  "maay": ["caws", "dhulka cagaarka ah", "dhir yaryar"],
  "phonetics": ["caws", "dhu-lka ca-gaar-ka ah", "dhi-r yar-yar"],
  "description": "Short plants with long, narrow leaves, commonly found in lawns."
},
{
  "english": "Grateful",
  "maay": ["mahadsanid", "waayo aragnimo leh", "aad u faraxsan"],
  "phonetics": ["ma-had-sa-nid", "waa-yo a-rag-ni-mo leh", "aad u fa-rax-san"],
  "description": "Feeling or showing an appreciation of kindness."
},
{
  "english": "Great",
  "maay": ["weyn", "ugu fiican", "aad u wanaagsan"],
  "phonetics": ["weyn", "u-gu fi-i-can", "aad u wa-naag-san"],
  "description": "Of an extent, amount, or intensity considerably above the normal."
},
{
  "english": "Green",
  "maay": ["cagaar", "midab cagaaran", "dhir leh"],
  "phonetics": ["ca-gaar", "mi-dab ca-gaa-ran", "dhi-r leh"],
  "description": "The color between blue and yellow in the spectrum; the color of grass."
},
{
  "english": "Group",
  "maay": ["koox", "isku duuban", "dawladda hoose"],
  "phonetics": ["koo-x", "is-ku duu-ban", "daw-lad-da hoo-se"],
  "description": "A number of people or things that are located, gathered, or classed together."
},
{
  "english": "Grow",
  "maay": ["kori", "baryo", "ballaarin"],
  "phonetics": ["ko-ri", "ba-ryo", "bal-laa-rin"],
  "description": "To increase in size, amount, or degree."
},
{
  "english": "Guard",
  "maay": ["ilaali", "difaac", "kormeer"],
  "phonetics": ["i-laa-li", "di-faac", "kor-meer"],
  "description": "To watch over in order to protect or control."
},
{
  "english": "Guess",
  "maay": ["maleyn", "isku day", "qiyaas"],
  "phonetics": ["ma-leyn", "is-ku day", "qi-yaas"],
  "description": "To form an opinion or estimation without enough information."
},
{
  "english": "Guide",
  "maay": ["hanuuniye", "tilmaamid", "hagid"],
  "phonetics": ["ha-nuu-ni-ye", "til-maa-mid", "ha-gid"],
  "description": "To show or indicate the way to others."
},
{
  "english": "Guilty",
  "maay": ["denbi leh", "xaq u leh", "eeda leh"],
  "phonetics": ["den-bi leh", "xa-q u leh", "ee-da leh"],
  "description": "Responsible for a wrongdoing or crime."
},
{
  "english": "Habit",
  "maay": ["caado", "dhaqan", "wax soo noqnoqday"],
  "phonetics": ["caa-do", "dha-qan", "wax soo noq-noq-day"],
  "description": "A settled or regular tendency or practice."
},
{
  "english": "Hair",
  "maay": ["timaha", "timo", "xuub yar"],
  "phonetics": ["ti-ma-ha", "ti-mo", "xuub yar"],
  "description": "The strands growing from the skin of humans and other mammals."
},
{
  "english": "Half",
  "maay": ["badh", "kalabar", "qeyb"],
  "phonetics": ["badh", "ka-la-bar", "qeyb"],
  "description": "One of two equal parts of a whole."
},
{
  "english": "Hand",
  "maay": ["gacanta", "xubin gacanta ah", "qaadasho"],
  "phonetics": ["ga-can-ta", "xu-bin ga-can-ta ah", "qaa-da-sho"],
  "description": "The end part of a person's arm beyond the wrist."
},
{
  "english": "Happy",
  "maay": ["faraxsan", "farxad leh", "raynrayn leh"],
  "phonetics": ["fa-rax-san", "far-xad leh", "rayn-rayn leh"],
  "description": "Feeling or showing pleasure or contentment."
},
{
  "english": "Hard",
  "maay": ["adag", "dhib badan", "qalloocan"],
  "phonetics": ["a-dag", "dhib ba-dan", "qal-loo-can"],
  "description": "Solid, firm, or needing a lot of effort."
},
{
  "english": "Harm",
  "maay": ["waxyeelo", "dhibaato", "khasaaro"],
  "phonetics": ["wax-yee-lo", "dhi-baa-to", "kha-saa-ro"],
  "description": "Physical injury or damage."
},
{
  "english": "Hat",
  "maay": ["koofiyad", "huudhay", "daboolka madaxa"],
  "phonetics": ["koo-fi-yad", "huud-hay", "da-boo-lka ma-dax-a"],
  "description": "A covering for the head, often worn for warmth, fashion, or protection."
},
{
  "english": "Hate",
  "maay": ["nacayb", "karha", "diidmo"],
  "phonetics": ["na-cayb", "kar-ha", "dii-dmo"],
  "description": "Intense dislike or aversion for something or someone."
},
{
  "english": "Have",
  "maay": ["hayso", "leeyahay", "heysashada"],
  "phonetics": ["hay-so", "lee-ya-hay", "hey-sa-sha-da"],
  "description": "To possess, own, or hold something."
},
{
  "english": "Head",
  "maay": ["madaxa", "xubin sare", "hogaamiye"],
  "phonetics": ["ma-dax-a", "xu-bin sa-re", "ho-gaa-mi-ye"],
  "description": "The upper part of the body containing the brain, eyes, and mouth."
},
{
  "english": "Health",
  "maay": ["caafimaad", "nabadqabka", "firfircoonaan"],
  "phonetics": ["caa-fi-maad", "na-bad-qab-ka", "fir-fir-coo-naan"],
  "description": "The state of being free from illness or injury."
},
{
  "english": "Hear",
  "maay": ["maqal", "dhageysi", "soo dhawaansho"],
  "phonetics": ["ma-qal", "dha-gey-si", "soo dha-waa-nsho"],
  "description": "To perceive sound with the ears."
},
{
  "english": "Heart",
  "maay": ["wadnaha", "qalbiga", "dareenka"],
  "phonetics": ["wad-na-ha", "qal-bi-ga", "da-reen-ka"],
  "description": "The organ in the chest that pumps blood through the body or the emotional center."
},
{
  "english": "Heat",
  "maay": ["kulayl", "heerkul sare", "qandho"],
  "phonetics": ["ku-layl", "heer-kul sa-re", "qan-dho"],
  "description": "The quality of being hot or high temperature."
},
{
  "english": "Help",
  "maay": ["caawimaad", "gargaar", "daryeel"],
  "phonetics": ["caa-wi-maad", "gar-gaar", "da-ryeel"],
  "description": "To provide assistance or support."
},
{
  "english": "Here",
  "maay": ["halkan", "goobtan", "meeshaan"],
  "phonetics": ["hal-kan", "goob-tan", "mee-shaan"],
  "description": "In or at this place."
},
{
  "english": "Hide",
  "maay": ["qari", "isku dhuumaaleyso", "dhaqso"],
  "phonetics": ["qa-ri", "is-ku dhuu-maa-ley-so", "dhaq-so"],
  "description": "To put something out of sight or to conceal oneself."
},
{
  "english": "High",
  "maay": ["sare", "dheer", "kor u kaca"],
  "phonetics": ["sa-re", "dheer", "kor u ka-ca"],
  "description": "Great in amount, extent, or intensity."
},
{
  "english": "Hill",
  "maay": ["buur yar", "dhul kor u kacay", "qarka sare"],
  "phonetics": ["buur yar", "dhul kor u ka-cay", "qar-ka sa-re"],
  "description": "A naturally raised area of land."
},
{
  "english": "History",
  "maay": ["taariikh", "dhab iyo dhacdooyin", "waayihii hore"],
  "phonetics": ["taa-riikh", "dhab iyo dhac-doo-yin", "waa-yi-hii ho-re"],
  "description": "The study of past events."
},
{
  "english": "Hold",
  "maay": ["qabso", "hayso", "ku dhaji"],
  "phonetics": ["qab-so", "hay-so", "ku dha-ji"],
  "description": "To grasp or carry something."
},
{
  "english": "Home",
  "maay": ["guriga", "hooyga", "meel deggenaansho"],
  "phonetics": ["gu-ri-ga", "hoo-y-ga", "meel deg-ge-naan-sho"],
  "description": "The place where one lives permanently."
},
{
  "english": "Hope",
  "maay": ["rajayn", "filasho", "yididiilo"],
  "phonetics": ["ra-jayn", "fi-la-sho", "yi-di-dii-lo"],
  "description": "A feeling of expectation or desire for something."
},
{
  "english": "Horse",
  "maay": ["faras", "dhaan", "geed kacsan"],
  "phonetics": ["fa-ras", "dhaan", "geed kac-san"],
  "description": "A large domesticated animal used for riding or pulling loads."
},
{
  "english": "Hot",
  "maay": ["kulul", "kulayl badan", "gubanaya"],
  "phonetics": ["ku-lul", "ku-layl ba-dan", "gu-ba-na-ya"],
  "description": "Having a high temperature."
},
{
  "english": "House",
  "maay": ["guri", "meel deggan", "dhismo"],
  "phonetics": ["gu-ri", "meel deg-gan", "dhis-mo"],
  "description": "A building for people to live in."
},
{
  "english": "Hunger",
  "maay": ["gaajo", "cunto doonid", "gaajaysan"],
  "phonetics": ["gaa-jo", "cun-to doo-nid", "gaa-jay-san"],
  "description": "A feeling of discomfort caused by lack of food."
},
{
  "english": "Hurt",
  "maay": ["dhaawac", "xanuun", "waxyeelo"],
  "phonetics": ["dhaa-wac", "xa-nuun", "wax-yee-lo"],
  "description": "To cause pain or injury."
},
{
  "english": "Idea",
  "maay": ["fikrad", "aragtida", "talo"],
  "phonetics": ["fik-rad", "a-rag-ti-da", "ta-lo"],
  "description": "A thought or suggestion as to a possible course of action."
},
{
  "english": "Identify",
  "maay": ["aqoonsi", "garasho", "xog sheegid"],
  "phonetics": ["aq-oon-si", "ga-ra-sho", "xog shee-gid"],
  "description": "To establish or indicate who or what someone or something is."
},
{
  "english": "If",
  "maay": ["haddii", "shuruud", "markii"],
  "phonetics": ["had-dii", "shu-ruud", "mar-kii"],
  "description": "A conditional clause introducing a possibility."
},
{
  "english": "Image",
  "maay": ["sawir", "muuqaal", "tilmaan"],
  "phonetics": ["sa-wir", "muu-qaal", "til-maan"],
  "description": "A representation of the external form of a person or thing."
},
{
  "english": "Imagine",
  "maay": ["maleey", "ku fikir", "dareen ku sawir"],
  "phonetics": ["ma-leey", "ku fi-kir", "da-reen ku sa-wir"],
  "description": "To form a mental picture or idea of something."
},
{
  "english": "Important",
  "maay": ["muhiim", "aad muhiim u ah", "lagama maarmaan"],
  "phonetics": ["mu-hiim", "aad mu-hiim u ah", "la-ga-ma maar-maan"],
  "description": "Of great significance or value."
},
{
  "english": "Improve",
  "maay": ["horumar", "kor u qaadid", "hagaajin"],
  "phonetics": ["ho-ru-mar", "kor u qaa-did", "ha-gaa-jin"],
  "description": "To make or become better."
},
{
  "english": "Include",
  "maay": ["ku darid", "ka mid noqosho", "soo gelid"],
  "phonetics": ["ku da-rid", "ka mid no-qo-sho", "soo ge-lid"],
  "description": "To comprise or contain as part of a whole."
},
{
  "english": "Increase",
  "maay": ["kisiidar", "sii badan", "horumar"],
  "phonetics": ["kee-see-dar", "sii ba-dan", "ho-ru-mar"],
  "description": "To make or become greater in size, amount, or degree."
},
{
  "english": "Indicate",
  "maay": ["tilmaamid", "muujin", "farta ku fiiq"],
  "phonetics": ["til-maa-mid", "muu-jin", "far-ta ku fiiq"],
  "description": "To point out or show."
},
{
  "english": "Industry",
  "maay": ["warshadaha", "ganacsiga", "soo saarid"],
  "phonetics": ["war-sha-da-ha", "ga-nac-si-ga", "soo saa-rid"],
  "description": "Economic activity concerned with processing raw materials and manufacturing goods."
},
{
  "english": "Information",
  "maay": ["xog", "warbixin", "fahfaahin"],
  "phonetics": ["xog", "war-bi-xin", "fah-faah-in"],
  "description": "Facts or details about something or someone."
},
{
  "english": "Inside",
  "maay": ["gudaha", "meel hoose", "xuduuda gudaha"],
  "phonetics": ["gu-da-ha", "meel hoo-se", "xu-duu-da gu-da-ha"],
  "description": "The inner side or part of something."
},
{
  "english": "Interest",
  "maay": ["daneyn", "fiiro gaar ah", "rabitaan"],
  "phonetics": ["da-neyn", "fii-ro gaar ah", "ra-bi-taan"],
  "description": "The feeling of wanting to know or learn about something."
},
{
  "english": "International",
  "maay": ["caalami", "wadamo badan dhexmar", "heer caalami"],
  "phonetics": ["caa-la-mi", "wa-da-mo ba-dan dhex-mar", "heer caa-la-mi"],
  "description": "Existing or occurring between nations."
},
{
  "english": "Introduce",
  "maay": ["soo bandhigid", "barid", "sharaxaad"],
  "phonetics": ["soo ban-dhi-gid", "ba-rid", "sha-ra-xaad"],
  "description": "To present something or someone to others for the first time."
},
{
  "english": "Invent",
  "maay": ["ikhtiraac", "sameyn cusub", "soo saarid"],
  "phonetics": ["ikh-ti-raac", "sa-meyn cu-sub", "soo saa-rid"],
  "description": "To create or design something that did not exist before."
},
{
  "english": "Invite",
  "maay": ["casuumid", "soo dhawoow", "yeerid"],
  "phonetics": ["ca-suu-mid", "soo dha-woo", "yee-rid"],
  "description": "To ask someone to come to an event or gathering."
},
{
  "english": "Iron",
  "maay": ["bir", "qalab bir ah", "walax adag"],
  "phonetics": ["bir", "qa-lab bir ah", "wa-lax a-dag"],
  "description": "A strong, hard magnetic metal or a device for smoothing fabric."
},
{
  "english": "Island",
  "maay": ["jasiirad", "dhul biyo ku hareeraysan", "guri xeebeed"],
  "phonetics": ["ja-sii-rad", "dhul bi-yo ku ha-ree-ray-san", "gu-ri xee-beed"],
  "description": "A piece of land surrounded by water."
},
{
  "english": "Issue",
  "maay": ["arrin", "dhibaatada", "soo saarid"],
  "phonetics": ["ar-rin", "dhi-baa-ta-da", "soo saa-rid"],
  "description": "An important topic or problem for debate or discussion."
},
{
  "english": "Item",
  "maay": ["shay", "wax gaar ah", "qodob"],
  "phonetics": ["shay", "wax gaar ah", "qo-dob"],
  "description": "An individual article or unit."
},
{
  "english": "Job",
  "maay": ["shaqo", "howl", "hawlgal"],
  "phonetics": ["sha-qo", "howl", "hawl-gal"],
  "description": "A paid position of regular employment or a task to be completed."
},
{
  "english": "Join",
  "maay": ["ku biirid", "isku xidhid", "ka qaybqaadasho"],
  "phonetics": ["ku bii-rid", "is-ku xi-dhid", "ka qayb-qaad-asho"],
  "description": "To connect or bring together."
},
{
  "english": "Journey",
  "maay": ["safar", "socdaal", "musaafir"],
  "phonetics": ["sa-far", "soc-daal", "mu-saa-fir"],
  "description": "An act of traveling from one place to another."
},
{
  "english": "Joy",
  "maay": ["farxad", "raynrayn", "reebtid"],
  "phonetics": ["far-xad", "rayn-rayn", "reeb-tid"],
  "description": "A feeling of great pleasure and happiness."
},
{
  "english": "Judge",
  "maay": ["garsoore", "xukun", "qaddarin"],
  "phonetics": ["gar-soo-re", "xu-kun", "qad-da-rin"],
  "description": "A person who decides cases in a court or someone who evaluates."
},
{
  "english": "Jump",
  "maay": ["boodid", "ku bood", "ka boodid"],
  "phonetics": ["boo-did", "ku bood", "ka boo-did"],
  "description": "To push oneself off a surface into the air."
},
{
  "english": "Just",
  "maay": ["kaliya", "cadaalad", "waqti dhow"],
  "phonetics": ["ka-li-ya", "ca-daa-lad", "waq-ti dhow"],
  "description": "Exactly, only, or based on fairness and morality."
},
{
  "english": "Justice",
  "maay": ["cadaalad", "garsoor", "xaqsoor"],
  "phonetics": ["ca-daa-lad", "gar-soor", "xaq-soor"],
  "description": "Fair treatment or the quality of being just."
},
{
  "english": "Keep",
  "maay": ["hayso", "ilaali", "ku celceli"],
  "phonetics": ["hay-so", "i-laa-li", "ku cel-cel-i"],
  "description": "To retain possession of or to continue doing something."
},
{
  "english": "Key",
  "maay": ["furaha", "mid muhiim ah", "xalka"],
  "phonetics": ["fu-ra-ha", "mid mu-hiim ah", "xal-ka"],
  "description": "A small tool for locking or unlocking or something crucial."
},
{
  "english": "Kill",
  "maay": ["dilid", "dhamaystirid", "baabi'in"],
  "phonetics": ["di-lid", "dha-may-sti-rid", "baa-bi'in"],
  "description": "To cause the death of a living thing."
},
{
  "english": "Kind",
  "maay": ["naxariis leh", "mid wanaagsan", "nooca"],
  "phonetics": ["na-xa-riis leh", "mid wa-naag-san", "noo-ca"],
  "description": "Being nice or of a certain type."
},
{
  "english": "King",
  "maay": ["boqor", "hogaamiye sare", "madexweyne"],
  "phonetics": ["bo-qor", "ho-gaa-mi-ye sa-re", "ma-dex-we-yn-e"],
  "description": "A male ruler of a country or territory."
},
{
  "english": "Kiss",
  "maay": ["dhunkasho", "isku dhowaansho", "jacayl muujin"],
  "phonetics": ["dhu-nka-sho", "is-ku dho-waan-sho", "ja-cayl muu-jin"],
  "description": "To touch with the lips as a sign of love or affection."
},
{
  "english": "Kitchen",
  "maay": ["jiko", "meel wax lagu kariyo", "qolka cuntada"],
  "phonetics": ["ji-ko", "meel wax la-gu ka-ri-yo", "qol-ka cun-ta-da"],
  "description": "A room where food is prepared and cooked."
},
{
  "english": "Knife",
  "maay": ["mindi", "qalab goyn", "tool dheer"],
  "phonetics": ["min-di", "qa-lab go-yn", "tool dheer"],
  "description": "A sharp instrument used for cutting."
},
{
  "english": "Knowledge",
  "maay": ["aqoon", "waxbarasho", "faham"],
  "phonetics": ["aq-oon", "wax-ba-ra-sho", "fa-ham"],
  "description": "Information and skills acquired through experience or education."
},
{
  "english": "Knock",
  "maay": ["garaacid", "ku dhufasho", "iska sheegid"],
  "phonetics": ["ga-raa-cid", "ku dhu-fa-sho", "is-ka shee-gid"],
  "description": "To strike a surface noisily to attract attention."
},
{
  "english": "Know",
  "maay": ["ogow", "fahmid", "aqoon leh"],
  "phonetics": ["o-gow", "fah-mid", "aq-oon leh"],
  "description": "To be aware of something or have knowledge about it."
},
{
  "english": "Job",
  "maay": ["shaqo", "howl", "hawlgal"],
  "phonetics": ["sha-qo", "howl", "hawl-gal"],
  "description": "A paid position of regular employment or a task to be completed."
},
{
  "english": "Join",
  "maay": ["ku biirid", "isku xidhid", "ka qaybqaadasho"],
  "phonetics": ["ku bii-rid", "is-ku xi-dhid", "ka qayb-qaad-asho"],
  "description": "To connect or bring together."
},
{
  "english": "Journey",
  "maay": ["safar", "socdaal", "musaafir"],
  "phonetics": ["sa-far", "soc-daal", "mu-saa-fir"],
  "description": "An act of traveling from one place to another."
},
{
  "english": "Joy",
  "maay": ["farxad", "raynrayn", "reebtid"],
  "phonetics": ["far-xad", "rayn-rayn", "reeb-tid"],
  "description": "A feeling of great pleasure and happiness."
},
{
  "english": "Judge",
  "maay": ["garsoore", "xukun", "qaddarin"],
  "phonetics": ["gar-soo-re", "xu-kun", "qad-da-rin"],
  "description": "A person who decides cases in a court or someone who evaluates."
},
{
  "english": "Jump",
  "maay": ["boodid", "ku bood", "ka boodid"],
  "phonetics": ["boo-did", "ku bood", "ka boo-did"],
  "description": "To push oneself off a surface into the air."
},
{
  "english": "Just",
  "maay": ["kaliya", "cadaalad", "waqti dhow"],
  "phonetics": ["ka-li-ya", "ca-daa-lad", "waq-ti dhow"],
  "description": "Exactly, only, or based on fairness and morality."
},
{
  "english": "Justice",
  "maay": ["cadaalad", "garsoor", "xaqsoor"],
  "phonetics": ["ca-daa-lad", "gar-soor", "xaq-soor"],
  "description": "Fair treatment or the quality of being just."
},
{
  "english": "Keep",
  "maay": ["hayso", "ilaali", "ku celceli"],
  "phonetics": ["hay-so", "i-laa-li", "ku cel-cel-i"],
  "description": "To retain possession of or to continue doing something."
},
{
  "english": "Key",
  "maay": ["furaha", "mid muhiim ah", "xalka"],
  "phonetics": ["fu-ra-ha", "mid mu-hiim ah", "xal-ka"],
  "description": "A small tool for locking or unlocking or something crucial."
},
{
  "english": "Kill",
  "maay": ["dilid", "dhamaystirid", "baabi'in"],
  "phonetics": ["di-lid", "dha-may-sti-rid", "baa-bi'in"],
  "description": "To cause the death of a living thing."
},
{
  "english": "Kind",
  "maay": ["naxariis leh", "mid wanaagsan", "nooca"],
  "phonetics": ["na-xa-riis leh", "mid wa-naag-san", "noo-ca"],
  "description": "Being nice or of a certain type."
},
{
  "english": "King",
  "maay": ["boqor", "hogaamiye sare", "madexweyne"],
  "phonetics": ["bo-qor", "ho-gaa-mi-ye sa-re", "ma-dex-we-yn-e"],
  "description": "A male ruler of a country or territory."
},
{
  "english": "Kiss",
  "maay": ["dhunkasho", "isku dhowaansho", "jacayl muujin"],
  "phonetics": ["dhu-nka-sho", "is-ku dho-waan-sho", "ja-cayl muu-jin"],
  "description": "To touch with the lips as a sign of love or affection."
},
{
  "english": "Kitchen",
  "maay": ["jiko", "meel wax lagu kariyo", "qolka cuntada"],
  "phonetics": ["ji-ko", "meel wax la-gu ka-ri-yo", "qol-ka cun-ta-da"],
  "description": "A room where food is prepared and cooked."
},
{
  "english": "Knife",
  "maay": ["mindi", "qalab goyn", "tool dheer"],
  "phonetics": ["min-di", "qa-lab go-yn", "tool dheer"],
  "description": "A sharp instrument used for cutting."
},
{
  "english": "Knowledge",
  "maay": ["aqoon", "waxbarasho", "faham"],
  "phonetics": ["aq-oon", "wax-ba-ra-sho", "fa-ham"],
  "description": "Information and skills acquired through experience or education."
},
{
  "english": "Knock",
  "maay": ["garaacid", "ku dhufasho", "iska sheegid"],
  "phonetics": ["ga-raa-cid", "ku dhu-fa-sho", "is-ka shee-gid"],
  "description": "To strike a surface noisily to attract attention."
},
{
  "english": "Know",
  "maay": ["ogow", "fahmid", "aqoon leh"],
  "phonetics": ["o-gow", "fah-mid", "aq-oon leh"],
  "description": "To be aware of something or have knowledge about it."
},
{
  "english": "Land",
  "maay": ["dhul", "ciida", "beero"],
  "phonetics": ["dhul", "cii-da", "bee-ro"],
  "description": "The part of the Earth's surface that is not covered by water."
},
{
  "english": "Language",
  "maay": ["luqad", "af", "hadal"],
  "phonetics": ["lu-qad", "af", "ha-dal"],
  "description": "A system of communication used by a particular community or country."
},
{
  "english": "Large",
  "maay": ["weyn", "ballaaran", "aad u weyn"],
  "phonetics": ["weyn", "bal-laa-ran", "aad u weyn"],
  "description": "Of considerable or relatively great size, extent, or capacity."
},
{
  "english": "Last",
  "maay": ["ugu dambeyntii", "kii ugu dambeeyay", "dhamaadka"],
  "phonetics": ["u-gu dam-beyn-tii", "kii u-gu dam-bee-yay", "dha-maa-dka"],
  "description": "Coming after all others in time or order."
},
{
  "english": "Late",
  "maay": ["goor dambe", "ku dib dhac", "waqti dambe"],
  "phonetics": ["goor dam-be", "ku dib dhac", "waq-ti dam-be"],
  "description": "Happening or coming after the expected or usual time."
},
{
  "english": "Laugh",
  "maay": ["qosol", "farxad leh qosol", "qoslayaa"],
  "phonetics": ["qo-sol", "far-xad leh qo-sol", "qos-la-yaa"],
  "description": "To make sounds expressing amusement."
},
{
  "english": "Law",
  "maay": ["sharci", "xeer", "qaanuun"],
  "phonetics": ["shar-ci", "xeer", "qaa-nuun"],
  "description": "The system of rules that a particular country or community recognizes."
},
{
  "english": "Lay",
  "maay": ["dhigid", "jiifso", "meel dhig"],
  "phonetics": ["dhi-gid", "jiif-so", "meel dhig"],
  "description": "To put something down carefully in a flat position."
},
{
  "english": "Lead",
  "maay": ["hogaamin", "kexeey", "hogaamiye"],
  "phonetics": ["ho-gaa-min", "ke-xeey", "ho-gaa-mi-ye"],
  "description": "To guide or be in charge of a group or activity."
},
{
  "english": "Learn",
  "maay": ["baro", "aqoonso", "wax ka fahmid"],
  "phonetics": ["ba-ro", "aq-oon-so", "wax ka fah-mid"],
  "description": "To acquire knowledge or skills through study or experience."
},
{
  "english": "Leave",
  "maay": ["ka tag", "iska dhaqaaq", "ka bixi"],
  "phonetics": ["ka tag", "is-ka dha-qaaq", "ka bi-xi"],
  "description": "To go away from a place or a situation."
},
{
  "english": "Left",
  "maay": ["bidix", "dhinaca bidix", "ka tagay"],
  "phonetics": ["bi-dix", "dhi-na-ca bi-dix", "ka ta-gay"],
  "description": "On or toward the side of the human body that is to the west when facing north."
},
{
  "english": "Leg",
  "maay": ["lug", "xubin socodka", "dhinaca lugaha"],
  "phonetics": ["lug", "xu-bin so-cod-ka", "dhi-na-ca lu-ga-ha"],
  "description": "Each of the limbs on which a person or animal walks and stands."
},
{
  "english": "Less",
  "maay": ["yar", "ka yar", "kama badna"],
  "phonetics": ["yar", "ka yar", "ka-ma bad-na"],
  "description": "A smaller amount of; not as much."
},
{
  "english": "Letter",
  "maay": ["warqad", "xaraf", "farriin qoraal ah"],
  "phonetics": ["war-qad", "xa-raf", "far-riin qo-raal ah"],
  "description": "A written or printed communication or a character in the alphabet."
},
{
  "english": "Life",
  "maay": ["nolosha", "jirka nool", "waqti noolaan ah"],
  "phonetics": ["no-lo-sha", "jir-ka nool", "waq-ti noo-laan ah"],
  "description": "The existence of an individual human being or animal."
},
{
  "english": "Light",
  "maay": ["iftiin", "fudud", "tamarta iftiinka"],
  "phonetics": ["if-tiin", "fu-dud", "ta-mar-ta if-ti-in-ka"],
  "description": "The natural agent that stimulates sight and makes things visible."
},
{
  "english": "Like",
  "maay": ["jeclow", "u eg", "la mid ah"],
  "phonetics": ["jec-low", "u eg", "la mid ah"],
  "description": "To find agreeable or to be similar."
},
{
  "english": "Line",
  "maay": ["xariiq", "qayb toosan", "qadka"],
  "phonetics": ["xa-riiq", "qayb too-san", "qad-ka"],
  "description": "A long, narrow mark or band."
},
{
  "english": "Listen",
  "maay": ["dhageyso", "maqal", "soo dhawow"],
  "phonetics": ["dha-gey-so", "ma-qal", "soo dha-wow"],
  "description": "To give attention to sound or action."
},
{
  "english": "Little",
  "maay": ["yar", "aad u yar", "kooban"],
  "phonetics": ["yar", "aad u yar", "koo-ban"],
  "description": "Small in size, amount, or degree."
},
{
  "english": "Live",
  "maay": ["noolow", "ku noolaansho", "ka sii nool"],
  "phonetics": ["noo-low", "ku noo-laan-sho", "ka sii nool"],
  "description": "To be alive or to reside in a place."
},
{
  "english": "Long",
  "maay": ["dheer", "waqti dheer", "aad u fog"],
  "phonetics": ["dheer", "waq-ti dheer", "aad u fog"],
  "description": "Measuring a great distance or duration."
},
{
  "english": "Look",
  "maay": ["fiiri", "aragtid", "isku eegid"],
  "phonetics": ["fii-ri", "a-rag-tid", "is-ku ee-gid"],
  "description": "To direct one's gaze toward someone or something."
},
{
  "english": "Love",
  "maay": ["jacayl", "jeclow", "nafsad"],
  "phonetics": ["ja-cayl", "jec-low", "naf-sad"],
  "description": "An intense feeling of deep affection."
},
{
  "english": "Luck",
  "maay": ["nasiib", "fursad wanaagsan", "xirfad"],
  "phonetics": ["na-siib", "fur-sad wa-naag-san", "xir-fad"],
  "description": "Success or failure apparently brought by chance rather than through actions."
},
{
  "english": "Machine",
  "maay": ["mashiin", "qalab farsamo", "mooto"],
  "phonetics": ["ma-shiin", "qa-lab far-sa-mo", "moo-to"],
  "description": "An apparatus using mechanical power to perform a task."
},
{
  "english": "Make",
  "maay": ["samee", "soo saar", "curin"],
  "phonetics": ["sa-mee", "soo saar", "cu-rin"],
  "description": "To create, produce, or cause something to exist."
},
{
  "english": "Man",
  "maay": ["nin", "rag", "lab"],
  "phonetics": ["nin", "rag", "lab"],
  "description": "An adult male human being."
},
{
  "english": "Many",
  "maay": ["badan", "aad u badan", "tira badan"],
  "phonetics": ["ba-dan", "aad u ba-dan", "ti-ra ba-dan"],
  "description": "A large number of something."
},
{
  "english": "Map",
  "maay": ["khariidad", "qorshe meelaha", "sawirka dhulka"],
  "phonetics": ["kha-rii-dad", "qor-she mee-la-ha", "saw-ir-ka dhul-ka"],
  "description": "A representation of an area showing physical features, roads, etc."
},
{
  "english": "Mark",
  "maay": ["calaamad", "sumad", "tilmaan"],
  "phonetics": ["ca-laa-mad", "su-mad", "til-maan"],
  "description": "A small area on a surface having a different color or texture."
},
{
  "english": "Market",
  "maay": ["suq", "meel wax laga gato", "ganacsi"],
  "phonetics": ["suq", "meel wax la-ga ga-to", "ga-nac-si"],
  "description": "A place where goods are bought and sold."
},
{
  "english": "Match",
  "maay": ["isku aad", "u dhiganta", "ciyaar"],
  "phonetics": ["is-ku aad", "u dhi-gan-ta", "ci-yaar"],
  "description": "A contest between two individuals or teams, or something equal."
},
{
  "english": "Material",
  "maay": ["waxyaabaha", "agab", "maaddo"],
  "phonetics": ["wax-yaa-ba-ha", "a-gab", "ma-ad-do"],
  "description": "The matter from which a thing is made."
},
{
  "english": "Matter",
  "maay": ["arrin", "wax muhiim ah", "shay"],
  "phonetics": ["ar-rin", "wax mu-hiim ah", "shay"],
  "description": "A subject or situation under consideration or importance."
},
{
  "english": "Mean",
  "maay": ["macna", "ula jeedo", "fahmo"],
  "phonetics": ["mac-na", "u-la jee-do", "fah-mo"],
  "description": "To signify or intend something."
},
{
  "english": "Measure",
  "maay": ["qiyaas", "tijaabo", "cabir"],
  "phonetics": ["qi-yaas", "ti-jaa-bo", "ca-bir"],
  "description": "To determine the size, amount, or degree of something."
},
{
  "english": "Meet",
  "maay": ["la kulmid", "is arag", "kulmo"],
  "phonetics": ["la kul-mid", "is a-rag", "kul-mo"],
  "description": "To come into the presence or company of someone."
},
{
  "english": "Memory",
  "maay": ["xusuus", "qorista maskaxda", "walax la xusuusto"],
  "phonetics": ["xu-su-us", "qo-ris-ta mas-kax-da", "wa-lax la xu-su-us-to"],
  "description": "The faculty by which the mind stores and remembers information."
},
{
  "english": "Message",
  "maay": ["farriin", "warqad", "xog"],
  "phonetics": ["far-riin", "war-qad", "xog"],
  "description": "A piece of information or communication sent to someone."
},
{
  "english": "Method",
  "maay": ["hab", "qorshe", "nidaam"],
  "phonetics": ["hab", "qor-she", "ni-daam"],
  "description": "A systematic way of doing something."
},
{
  "english": "Middle",
  "maay": ["bartamaha", "dhexda", "meel dhexe"],
  "phonetics": ["bar-ta-ma-ha", "dhex-da", "meel dhe-xe"],
  "description": "The central point or position."
},
{
  "english": "Milk",
  "maay": ["caano", "sharaabka caanaha", "xoog"],
  "phonetics": ["caa-no", "sha-raab-ka caa-na-ha", "xoog"],
  "description": "A white liquid produced by mammals to feed their young."
},
{
  "english": "Minute",
  "maay": ["daqiiqo", "waqti yar", "qayb yar"],
  "phonetics": ["da-qii-qo", "waq-ti yar", "qayb yar"],
  "description": "A unit of time equal to sixty seconds."
},
{
  "english": "Miss",
  "maay": ["weyn", "ka maqnaan", "ku guuldarro"],
  "phonetics": ["weyn", "ka maq-naan", "ku guul-da-rro"],
  "description": "To fail to hit, reach, or encounter something."
},
{
  "english": "Money",
  "maay": ["lacag", "maal", "dahab"],
  "phonetics": ["la-cag", "maal", "da-hab"],
  "description": "A medium of exchange in the form of coins and banknotes."
},
{
  "english": "Month",
  "maay": ["bil", "waqti bil ah", "xilli"],
  "phonetics": ["bil", "waq-ti bil ah", "xil-li"],
  "description": "Each of the twelve named periods into which a year is divided."
},
{
  "english": "Moon",
  "maay": ["dayax", "ilays habeen", "meeraha dayaxa"],
  "phonetics": ["da-yax", "i-lays ha-been", "mee-ra-ha da-yax-a"],
  "description": "The natural satellite of the Earth, visible at night."
},
{
  "english": "More",
  "maay": ["dheeraad", "ka badan", "intaa ka sii badan"],
  "phonetics": ["dhee-raad", "ka ba-dan", "in-taa ka sii ba-dan"],
  "description": "A greater amount or number."
},
{
  "english": "Morning",
  "maay": ["waaberiga", "subax", "waqti hore"],
  "phonetics": ["waa-be-ri-ga", "su-bax", "waq-ti ho-re"],
  "description": "The time period from sunrise to noon."
},
{
  "english": "Mother",
  "maay": ["hooyo", "waalid dumar", "aabe dumar"],
  "phonetics": ["hoo-yo", "waa-lid du-mar", "aa-be du-mar"],
  "description": "A female parent."
},
{
  "english": "Mountain",
  "maay": ["buur", "dhul sare", "kor u qaad"],
  "phonetics": ["buur", "dhul sa-re", "kor u qaad"],
  "description": "A large natural elevation of the Earth's surface."
},
{
  "english": "Move",
  "maay": ["guur", "dhaqaaq", "socod"],
  "phonetics": ["guur", "dha-qaaq", "so-cod"],
  "description": "To change position or go from one place to another."
},
{
  "english": "Much",
  "maay": ["aad u badan", "kheyr badan", "tiro badan"],
  "phonetics": ["aad u ba-dan", "khey-r ba-dan", "ti-ro ba-dan"],
  "description": "A large amount or to a great extent."
},
{
  "english": "Music",
  "maay": ["muusig", "codka ciyaarta", "muusikada heesta"],
  "phonetics": ["mu-siig", "cod-ka ci-yaar-ta", "muusi-ka-da hees-ta"],
  "description": "Vocal or instrumental sounds combined to produce harmony."
},
{
  "english": "Must",
  "maay": ["waa in", "lama huraan", "shuruud"],
  "phonetics": ["waa in", "la-ma hu-raan", "shu-ruud"],
  "description": "To be obliged or required to do something because it is necessary or important."
},
{
  "english": "Name",
  "maay": ["magac", "laqab", "sumad"],
  "phonetics": ["ma-gac", "la-qab", "su-mad"],
  "description": "A word or set of words by which a person, animal, place, or thing is known."
},
{
  "english": "Nation",
  "maay": ["qaran", "wadan", "umad"],
  "phonetics": ["qa-ran", "wa-dan", "u-mad"],
  "description": "A large group of people united by common descent, culture, or language, inhabiting a particular country."
},
{
  "english": "Natural",
  "maay": ["dabiici", "ilaahey u sameeyay", "aan farsamo ahayn"],
  "phonetics": ["da-bi-i-ci", "i-laa-hey u sa-mee-yay", "aan far-sa-mo a-hayn"],
  "description": "Existing in or caused by nature; not made or caused by humankind."
},
{
  "english": "Near",
  "maay": ["ugu dhow", "ku dhow", "meel u dhow"],
  "phonetics": ["u-gu dhow", "ku dhow", "meel u dhow"],
  "description": "At a short distance away or close in proximity."
},
{
  "english": "Necessary",
  "maay": ["lama huraan", "muhiim", "lagama maarmaan"],
  "phonetics": ["la-ma hu-raan", "mu-hiim", "la-ga-ma maar-maan"],
  "description": "Required to be done, achieved, or present; essential."
},
{
  "english": "Need",
  "maay": ["baahi", "u baahan", "shuruud"],
  "phonetics": ["baa-hi", "u baa-han", "shu-ruud"],
  "description": "To require something because it is essential or important."
},
{
  "english": "Neighbor",
  "maay": ["deris", "qof ku dhow", "jaarka"],
  "phonetics": ["de-ris", "qof ku dhow", "jaa-rka"],
  "description": "A person living near or next to another."
},
{
  "english": "Never",
  "maay": ["marnaba", "abid", "weligaa ma jiro"],
  "phonetics": ["mar-na-ba", "a-bid", "we-li-gaa ma ji-ro"],
  "description": "At no time in the past or future; not ever."
},
{
  "english": "New",
  "maay": ["cusub", "dhawaan", "aan hore u jirin"],
  "phonetics": ["cu-sub", "dha-waan", "aan ho-re u ji-rin"],
  "description": "Not existing before; made, introduced, or discovered recently."
},
{
  "english": "Next",
  "maay": ["ku xiga", "kadib", "soo socda"],
  "phonetics": ["ku xi-ga", "ka-dib", "soo soc-da"],
  "description": "Coming immediately after the present one in time or order."
},
{
  "english": "Night",
  "maay": ["habeen", "waqti madow", "habeynkii"],
  "phonetics": ["ha-been", "waq-ti ma-dow", "ha-beyn-kii"],
  "description": "The time from sunset to sunrise when it is dark."
},
{
  "english": "Noise",
  "maay": ["buuq", "cod sare", "qeylo"],
  "phonetics": ["buu-q", "cod sa-re", "qey-lo"],
  "description": "A sound, especially one that is loud or unpleasant."
},
{
  "english": "North",
  "maay": ["waqooyi", "jiho waqooyi", "cirifka waqooyi"],
  "phonetics": ["wa-qoo-yi", "ji-ho wa-qoo-yi", "ci-rif-ka wa-qoo-yi"],
  "description": "The direction in which the compass needle points."
},
{
  "english": "Nothing",
  "maay": ["waxba ma jirto", "eber", "aysan jirin"],
  "phonetics": ["wax-ba ma jir-to", "e-ber", "ay-san ji-rin"],
  "description": "Not anything; no single thing."
},
{
  "english": "Notice",
  "maay": ["ogeysiis", "fiirso", "digniin"],
  "phonetics": ["o-gey-siis", "fii-rso", "dig-niin"],
  "description": "Attention given to something or someone; a formal announcement."
},
{
  "english": "Number",
  "maay": ["lambar", "tirada", "qaddar"],
  "phonetics": ["lam-bar", "ti-ra-da", "qad-dar"],
  "description": "An arithmetical value, used to count or measure."
},
{
  "english": "Nurse",
  "maay": ["kalkaaliye", "dhaqaale daryeel", "mid caafimaad"],
  "phonetics": ["kal-kaa-li-ye", "dha-qaa-le da-ryeel", "mid caa-fi-maad"],
  "description": "A person trained to care for the sick or infirm."
},
{
  "english": "Object",
  "maay": ["shay", "walax", "u-jeeddo"],
  "phonetics": ["shay", "wa-lax", "u-jeed-do"],
  "description": "A material thing that can be seen and touched or a goal."
},
{
  "english": "Observe",
  "maay": ["fiirso", "ilaali", "ogow"],
  "phonetics": ["fii-rso", "i-laa-li", "o-gow"],
  "description": "To notice or perceive something and register it as significant."
},
{
  "english": "Occur",
  "maay": ["dhac", "soo muuqasho", "dhaco"],
  "phonetics": ["dhac", "soo muu-qa-sho", "dha-co"],
  "description": "To happen or take place."
},
{
  "english": "Ocean",
  "maay": ["badweyn", "badda weyn", "dareenka biyaha"],
  "phonetics": ["bad-weyn", "bad-da weyn", "da-reen-ka bi-ya-ha"],
  "description": "A very large expanse of sea."
},
{
  "english": "Offer",
  "maay": ["soo bandhigid", "u soo jeedin", "bixin"],
  "phonetics": ["soo ban-dhi-gid", "u soo jee-din", "bi-xin"],
  "description": "To present or propose something for acceptance."
},
{
  "english": "Office",
  "maay": ["xafiis", "meel shaqo", "qolka maamulka"],
  "phonetics": ["xa-fiis", "meel sha-qo", "qol-ka maa-mul-ka"],
  "description": "A place where business or professional work is conducted."
},
{
  "english": "Often",
  "maay": ["marar badan", "sii joogto ah", "markasta"],
  "phonetics": ["ma-rar ba-dan", "sii joo-gto ah", "mar-kas-ta"],
  "description": "Frequently or many times."
},
{
  "english": "Oil",
  "maay": ["saliid", "shidaal", "dareer"],
  "phonetics": ["sa-liid", "shi-daal", "da-reer"],
  "description": "A liquid derived from petroleum or plants, used for fuel or cooking."
},
{
  "english": "Old",
  "maay": ["duq", "hore", "gaboobay"],
  "phonetics": ["duq", "ho-re", "ga-boo-bay"],
  "description": "Having lived for a long time or no longer new."
},
{
  "english": "On",
  "maay": ["kor", "saaraan", "dul saaran"],
  "phonetics": ["kor", "saa-raan", "dul saa-ran"],
  "description": "Physically in contact with and supported by a surface."
},
{
  "english": "Once",
  "maay": ["hal mar", "hore", "markii hore"],
  "phonetics": ["hal mar", "ho-re", "mar-kii ho-re"],
  "description": "On one occasion or at some time in the past."
},
{
  "english": "One",
  "maay": ["mid", "hal", "ugu horeeya"],
  "phonetics": ["mid", "hal", "u-gu ho-ree-ya"],
  "description": "The number equivalent to a single unit."
},
{
  "english": "Only",
  "maay": ["kaliya", "xadka", "qofka keli ah"],
  "phonetics": ["ka-li-ya", "xad-ka", "qof-ka ke-li ah"],
  "description": "No one or nothing more besides."
},
{
  "english": "Open",
  "maay": ["furid", "u furid", "aan xidhnayn"],
  "phonetics": ["fu-rid", "u fu-rid", "aan xidhnayn"],
  "description": "Allowing access, passage, or view; not closed."
},
{
  "english": "Opinion",
  "maay": ["aragtida", "fikrad", "ra’yi"],
  "phonetics": ["a-rag-ti-da", "fik-rad", "ra-yi"],
  "description": "A view or judgment formed about something."
},
{
  "english": "Opportunity",
  "maay": ["fursad", "kheyraad", "dhacdo wanaagsan"],
  "phonetics": ["fur-sad", "khey-raad", "dhac-do waa-naag-san"],
  "description": "A set of circumstances that makes something possible."
},
{
  "english": "Order",
  "maay": ["amar", "habeyn", "nidaam"],
  "phonetics": ["a-mar", "ha-beyn", "ni-daam"],
  "description": "An authoritative direction or arrangement."
},
{
  "english": "Organize",
  "maay": ["habee", "soo diyaarin", "qorshe"],
  "phonetics": ["ha-bee", "soo di-yaa-rin", "qor-she"],
  "description": "To arrange or put in order."
},
{
  "english": "Other",
  "maay": ["mid kale", "dhinac kale", "ka duwan"],
  "phonetics": ["mid ka-le", "dhi-nac ka-le", "ka du-wan"],
  "description": "A person or thing that is different or distinct."
},
{
  "english": "Out",
  "maay": ["dibadda", "ka bax", "bananka"],
  "phonetics": ["di-bad-da", "ka bax", "ba-nan-ka"],
  "description": "Moving or appearing beyond an enclosure or space."
},
{
  "english": "Over",
  "maay": ["kor u dhaaf", "ka badan", "dusha sare"],
  "phonetics": ["kor u dhaaf", "ka ba-dan", "du-sha sa-re"],
  "description": "Extending directly upward or covering above."
},
{
  "english": "Own",
  "maay": ["leeyahay", "isku leeyahay", "milki"],
  "phonetics": ["lee-ya-hay", "is-ku lee-ya-hay", "mil-ki"],
  "description": "Belonging to oneself or itself."
},
{
  "english": "Page",
  "maay": ["bog", "waraaq", "cutub"],
  "phonetics": ["bog", "wa-raaq", "cu-tub"],
  "description": "One side of a sheet of paper in a book, magazine, or notebook."
},
{
  "english": "Paint",
  "maay": ["rinji", "midabeeyn", "sawirid"],
  "phonetics": ["rin-ji", "mi-da-beeyn", "sa-wi-rid"],
  "description": "A colored substance spread over a surface for decoration or protection."
},
{
  "english": "Pair",
  "maay": ["labo", "isku mid ah", "lamaane"],
  "phonetics": ["la-bo", "is-ku mid ah", "la-maa-ne"],
  "description": "Two corresponding items designed to be used together."
},
{
  "english": "Paper",
  "maay": ["waraaq", "xaashi", "document"],
  "phonetics": ["wa-raaq", "xaa-shi", "docu-ment"],
  "description": "Thin sheets used for writing, printing, or packaging."
},
{
  "english": "Parent",
  "maay": ["waalid", "hooyo ama aabe", "korinta waalidka"],
  "phonetics": ["waa-lid", "hoo-yo a-ma aa-be", "ko-rin-ta waa-lid-ka"],
  "description": "A father or mother of a child."
},
{
  "english": "Part",
  "maay": ["qayb", "juz", "goob ka mid ah"],
  "phonetics": ["qayb", "juz", "goob ka mid ah"],
  "description": "A piece or portion of a whole."
},
{
  "english": "Pass",
  "maay": ["mari", "dhaafid", "gudbid"],
  "phonetics": ["ma-ri", "dhaa-fid", "gud-bid"],
  "description": "To move or travel from one place to another."
},
{
  "english": "Past",
  "maay": ["waqti hore", "sooyaal", "hore"],
  "phonetics": ["waq-ti ho-re", "soo-yaal", "ho-re"],
  "description": "The time or a period of time before the present."
},
{
  "english": "Path",
  "maay": ["jid", "wadada", "talaabooyin"],
  "phonetics": ["jid", "wa-da-da", "ta-laa-boo-yin"],
  "description": "A way or track laid down for walking or traveling."
},
{
  "english": "Pay",
  "maay": ["lacag bixid", "mushaar", "bixin"],
  "phonetics": ["la-cag bi-xid", "mu-shaar", "bi-xin"],
  "description": "To give money for work done or for something bought."
},
{
  "english": "Peace",
  "maay": ["nabadda", "degganaansho", "xasillooni"],
  "phonetics": ["na-bad-da", "deg-ga-naan-sho", "xa-sil-loo-ni"],
  "description": "Freedom from disturbance; tranquility."
},
{
  "english": "People",
  "maay": ["dad", "shacabka", "umad"],
  "phonetics": ["dad", "shac-ab-ka", "u-mad"],
  "description": "Human beings in general or a group of individuals."
},
{
  "english": "Perform",
  "maay": ["fulin", "sameyn", "bandhig"],
  "phonetics": ["fu-lin", "sa-meyn", "ban-dhig"],
  "description": "To carry out, accomplish, or produce a task or action."
},
{
  "english": "Person",
  "maay": ["qof", "shakhsi", "ruux"],
  "phonetics": ["qof", "shakh-si", "ruux"],
  "description": "An individual human being."
},
{
  "english": "Place",
  "maay": ["goob", "meel", "jid"],
  "phonetics": ["goob", "meel", "jid"],
  "description": "A particular position, point, or location."
},
{
  "english": "Plan",
  "maay": ["qorshe", "talaabooyin", "arjiga"],
  "phonetics": ["qor-she", "ta-laa-boo-yin", "ar-ji-ga"],
  "description": "A detailed proposal for achieving something."
},
{
  "english": "Plant",
  "maay": ["geed", "dhirtan", "dhaxdhaxaad"],
  "phonetics": ["geed", "dhir-tan", "dhax-dhax-aad"],
  "description": "A living organism that grows in the ground and typically produces leaves or flowers."
},
{
  "english": "Play",
  "maay": ["ciyaar", "madadaalo", "soo bandhigid"],
  "phonetics": ["ci-yaar", "ma-da-daa-lo", "soo ban-dhi-gid"],
  "description": "To engage in activity for enjoyment or recreation."
},
{
  "english": "Please",
  "maay": ["fadlan", "farxad geli", "codsasho"],
  "phonetics": ["fad-lan", "far-xad ge-li", "cod-sa-sho"],
  "description": "Used as a polite addition to requests or to make someone happy."
},
{
  "english": "Point",
  "maay": ["meel", "barta muhiimka ah", "tusmo"],
  "phonetics": ["meel", "bar-ta mu-hiim-ka ah", "tus-mo"],
  "description": "A specific spot or place; to indicate something with a gesture."
},
{
  "english": "Police",
  "maay": ["boolis", "ciidamada nabadgelyada", "ilaaliyaha sharciga"],
  "phonetics": ["boo-lis", "cii-da-ma-da na-bad-ge-ly-a-da", "i-laa-li-ya-ha shar-ci-ga"],
  "description": "The civil force responsible for maintaining public order and safety."
},
{
  "english": "Poor",
  "maay": ["fakir", "sabuul", "heer hoose"],
  "phonetics": ["fa-kir", "sa-buul", "heer hoo-se"],
  "description": "Lacking sufficient money or having a low standard of living."
},
{
  "english": "Popular",
  "maay": ["caan ah", "la jecel yahay", "dadka raacsan"],
  "phonetics": ["caan ah", "la je-cel ya-hay", "dad-ka raac-san"],
  "description": "Liked or admired by many people."
},
{
  "english": "Possible",
  "maay": ["suurtagal", "macquul ah", "uur ka furan"],
  "phonetics": ["suur-ta-gal", "mac-quul ah", "uur ka fu-ran"],
  "description": "Able to be done or achieved."
},
{
  "english": "Power",
  "maay": ["awood", "tamarta", "xoog"],
  "phonetics": ["a-wood", "ta-mar-ta", "xoog"],
  "description": "The ability or capacity to do something or act in a particular way."
},
{
  "english": "Practice",
  "maay": ["tababar", "ku celcelin", "iska baro"],
  "phonetics": ["ta-ba-bar", "ku cel-ce-lin", "is-ka ba-ro"],
  "description": "The repeated exercise of an activity to improve a skill."
},
{
  "english": "Prepare",
  "maay": ["diyaarso", "soo diyaarin", "u gogol xaarid"],
  "phonetics": ["di-yaa-rso", "soo di-yaa-rin", "u go-gol xaa-rid"],
  "description": "To make ready for use or consideration."
},
{
  "english": "Present",
  "maay": ["hadiyadda", "soo bandhigid", "joogitaanka"],
  "phonetics": ["ha-diy-ad-da", "soo ban-dhi-gid", "joo-gi-taan-ka"],
  "description": "Existing or happening now; a gift."
},
{
  "english": "Press",
  "maay": ["cadaadis", "riixid", "warbaahin"],
  "phonetics": ["ca-daa-dis", "rii-xid", "war-baa-hin"],
  "description": "To apply force to something; media organizations."
},
{
  "english": "Price",
  "maay": ["qiimo", "lacagta iibka", "kharash"],
  "phonetics": ["qii-mo", "la-cag-ta iib-ka", "kha-rash"],
  "description": "The amount of money expected, required, or given for something."
},
{
  "english": "Pride",
  "maay": ["faanka", "kibrid", "sharaf"],
  "phonetics": ["faan-ka", "ki-brid", "sha-raf"],
  "description": "A feeling of deep satisfaction derived from one's achievements."
},
{
  "english": "Private",
  "maay": ["qarsoodi", "gaarka ah", "shakhsi"],
  "phonetics": ["qar-soo-di", "gaar-ka ah", "shakh-si"],
  "description": "Belonging to or for the use of one particular person or group."
},
{
  "english": "Problem",
  "maay": ["dhibaatada", "arrin", "mushkilad"],
  "phonetics": ["dhi-baa-ta-da", "ar-rin", "mush-ki-lad"],
  "description": "A matter or situation regarded as unwelcome or harmful."
},
{
  "english": "Process",
  "maay": ["habsocod", "nidaam", "tallaabooyin"],
  "phonetics": ["hab-so-cod", "ni-daam", "tal-laa-boo-yin"],
  "description": "A series of actions taken to achieve a particular end."
},
{
  "english": "Produce",
  "maay": ["soo saar", "abuurid", "wax soo saar"],
  "phonetics": ["soo saar", "a-buu-rid", "wax soo saar"],
  "description": "To create or bring forth goods or results."
},
{
  "english": "Product",
  "maay": ["wax soo saar", "alaabta", "natiijo"],
  "phonetics": ["wax soo saar", "a-laab-ta", "na-tiijo"],
  "description": "An item that is manufactured or refined for sale."
},
{
  "english": "Protect",
  "maay": ["ilaali", "difaac", "badbaadi"],
  "phonetics": ["i-laa-li", "di-faac", "bad-baa-di"],
  "description": "To keep safe from harm or injury."
},
{
  "english": "Provide",
  "maay": ["bixi", "soo bandhigid", "u keenid"],
  "phonetics": ["bi-xi", "soo ban-dhi-gid", "u kee-nid"],
  "description": "To make available for use; supply."
},
{
  "english": "Public",
  "maay": ["dadweyne", "shacabka", "dadka oo dhan"],
  "phonetics": ["dad-wey-ne", "shac-ab-ka", "dad-ka oo dhan"],
  "description": "Relating to ordinary people or the community."
},
{
  "english": "Purpose",
  "maay": ["ujeeddo", "qorshaha", "bartilmaameed"],
  "phonetics": ["u-jeed-do", "qor-sha-ha", "bar-til-maa-meed"],
  "description": "The reason for which something is done or created."
},
{
  "english": "Push",
  "maay": ["riix", "tallaabo saar", "dhiirrigelin"],
  "phonetics": ["riix", "tal-laa-bo saar", "dhiir-ri-ge-lin"],
  "description": "To exert force on someone or something to move it forward."
},
{
  "english": "Quality",
  "maay": ["tayada", "heer sare", "sifada"],
  "phonetics": ["ta-ya-da", "heer sa-re", "si-fa-da"],
  "description": "The standard of something as measured against other things."
},
{
  "english": "Quantity",
  "maay": ["tirada", "qaddarka", "miisaanka"],
  "phonetics": ["ti-ra-da", "qad-dar-ka", "mii-saan-ka"],
  "description": "The amount or number of a material or thing."
},
{
  "english": "Question",
  "maay": ["su’aal", "weydiin", "xog doonid"],
  "phonetics": ["su-aal", "wey-diin", "xog doo-nid"],
  "description": "A sentence or phrase used to find out information."
},
{
  "english": "Quick",
  "maay": ["dhakhso", "degdeg ah", "soo dhaqsasho"],
  "phonetics": ["dha-khso", "deg-deg ah", "soo dhaq-sa-sho"],
  "description": "Moving fast or doing something in a short time."
},
{
  "english": "Quiet",
  "maay": ["aamusnaan", "deganaansho", "cod la’aan"],
  "phonetics": ["aa-mus-naan", "de-ga-naan-sho", "cod la-aan"],
  "description": "Making little or no noise."
},
{
  "english": "Race",
  "maay": ["tartanka", "qowmiyad", "dagaal orod"],
  "phonetics": ["tar-tan-ka", "qow-mi-yad", "da-gaal o-rod"],
  "description": "A competition of speed or a group of people sharing common ancestry."
},
{
  "english": "Rain",
  "maay": ["roob", "dabaylo roobaad", "biyaha cirka"],
  "phonetics": ["roob", "da-bay-lo roo-baad", "bi-ya-ha cir-ka"],
  "description": "Water that falls in drops from clouds in the sky."
},
{
  "english": "Raise",
  "maay": ["kor u qaadid", "soo jiid", "dhaqaajin"],
  "phonetics": ["kor u qaa-did", "soo jiid", "dha-qa-ajin"],
  "description": "To lift or move to a higher position or level."
},
{
  "english": "Reach",
  "maay": ["gaadhid", "soo gaarid", "taabsi"],
  "phonetics": ["gaa-dhid", "soo gaa-rid", "taa-bsi"],
  "description": "To arrive at or attain a goal or destination."
},
{
  "english": "Read",
  "maay": ["akhri", "waxbarasho", "qoraal fahmid"],
  "phonetics": ["akh-ri", "wax-ba-ra-sho", "qo-raal fah-mid"],
  "description": "To look at and comprehend the meaning of written or printed words."
},
{
  "english": "Ready",
  "maay": ["diyaar", "ku diyaarsan", "habeeyay"],
  "phonetics": ["di-yaar", "ku di-yaa-san", "ha-bee-yay"],
  "description": "Fully prepared or in a fit state for action."
},
{
  "english": "Real",
  "maay": ["runta", "xaqiiqo", "dhabta ah"],
  "phonetics": ["run-ta", "xa-qii-qo", "dhab-ta ah"],
  "description": "Actually existing as a thing or occurring in fact."
},
{
  "english": "Reason",
  "maay": ["sabab", "uleed", "tilmaamid"],
  "phonetics": ["sa-bab", "u-leed", "til-maa-mid"],
  "description": "A cause or explanation for an action or event."
},
{
  "english": "Receive",
  "maay": ["helid", "soo qaadid", "aqbalid"],
  "phonetics": ["he-lid", "soo qaa-did", "aq-ba-lid"],
  "description": "To be given, presented with, or paid something."
},
{
  "english": "Recent",
  "maay": ["dhowaan", "cusub", "waqti dhow"],
  "phonetics": ["dho-waan", "cu-sub", "waq-ti dhow"],
  "description": "Happening or coming not long ago."
},
{
  "english": "Recognize",
  "maay": ["aqoonsi", "garasho", "dareemo"],
  "phonetics": ["aq-oon-si", "ga-ra-sho", "da-ree-mo"],
  "description": "To identify someone or something from having encountered them before."
},
{
  "english": "Record",
  "maay": ["diwaan", "qoraal", "xusuus qorid"],
  "phonetics": ["di-waan", "qo-raal", "xu-su-us qo-rid"],
  "description": "A piece of evidence about the past, or the action of recording information."
},
{
  "english": "Reduce",
  "maay": ["yarayn", "dhimis", "hoos u dhigid"],
  "phonetics": ["ya-rayn", "dhi-mis", "hoos u dhi-gid"],
  "description": "To make smaller or less in amount, degree, or size."
},
{
  "english": "Reflect",
  "maay": ["ka fakarid", "muujin", "dib ugu milicsi"],
  "phonetics": ["ka fa-ka-rid", "muu-jin", "dib u-gu mi-lic-si"],
  "description": "To throw back light, heat, or sound; to think deeply."
},
{
  "english": "Refuse",
  "maay": ["diidmo", "ka hor istaagid", "iska caabin"],
  "phonetics": ["diid-mo", "ka hor is-taa-gid", "is-ka caa-bin"],
  "description": "To indicate or show that one is not willing to do something."
},
{
  "english": "Region",
  "maay": ["gobol", "aag", "deegaan"],
  "phonetics": ["go-bol", "aag", "dee-gaan"],
  "description": "An area of land or a part of the country or world."
},
{
  "english": "Relation",
  "maay": ["xiriir", "is dhexgal", "qoys wadaag"],
  "phonetics": ["xi-riir", "is dhex-gal", "qoys wa-daa-g"],
  "description": "The way in which two or more people or things are connected."
},
{
  "english": "Remain",
  "maay": ["iska joog", "sii ahaan", "meel ku sugnaansho"],
  "phonetics": ["is-ka joog", "sii a-haan", "meel ku sug-naan-sho"],
  "description": "To continue to exist or stay in the same place."
},
{
  "english": "Remove",
  "maay": ["ka saarid", "iska fogeeyn", "ka qaadid"],
  "phonetics": ["ka saa-rid", "is-ka fo-ge-eyn", "ka qaa-did"],
  "description": "To take away or eliminate something."
},
{
  "english": "Repair",
  "maay": ["dayactir", "hagaajin", "soo celin"],
  "phonetics": ["da-yac-tir", "ha-gaa-jin", "soo ce-lin"],
  "description": "To fix or restore something that is broken or damaged."
},
{
  "english": "Repeat",
  "maay": ["ku celcelin", "dib u sameyn", "ku sii wadid"],
  "phonetics": ["ku cel-ce-lin", "dib u sa-meyn", "ku sii wa-did"],
  "description": "To do or say something again."
},
{
  "english": "Replace",
  "maay": ["bedelid", "ku soo bedel", "meel kale dhig"],
  "phonetics": ["be-de-lid", "ku soo be-del", "meel ka-le dhig"],
  "description": "To take the place of something or to provide a substitute."
},
{
  "english": "Request",
  "maay": ["codsi", "weydiisasho", "dalab"],
  "phonetics": ["cod-si", "wey-dii-sa-sho", "da-lab"],
  "description": "An act of asking for something."
},
{
  "english": "Respect",
  "maay": ["ixtiraam", "qadarin", "xushmad"],
  "phonetics": ["ix-ti-raam", "qa-da-rin", "xush-mad"],
  "description": "A feeling of deep admiration for someone or something."
},
{
  "english": "Rest",
  "maay": ["nasasho", "isku deganaan", "hurdo yar"],
  "phonetics": ["na-sa-sho", "is-ku de-ga-naan", "hur-do yar"],
  "description": "To cease work or movement in order to relax or recover."
},
{
  "english": "Return",
  "maay": ["soo celid", "ku noqoshada", "soo laabasho"],
  "phonetics": ["soo ce-lid", "ku no-qo-sha-da", "soo laa-ba-sho"],
  "description": "To come or go back to a place or condition."
},
{
  "english": "Ride",
  "maay": ["kor fuulid", "raacis", "socod gaadiid"],
  "phonetics": ["kor fuu-lid", "raa-cis", "so-cod gaa-diid"],
  "description": "To travel on or in a vehicle or animal."
},
{
  "english": "Right",
  "maay": ["midig", "sax ah", "xaq"],
  "phonetics": ["mi-dig", "sax ah", "xaq"],
  "description": "Morally good, correct, or on the right-hand side."
},
{
  "english": "Ring",
  "maay": ["faruur", "giraanta", "wareeg"],
  "phonetics": ["fa-ruur", "gi-raan-ta", "wa-reeg"],
  "description": "A small circular band, typically of precious metal, worn on a finger or used for other purposes."
},
{
  "english": "Rise",
  "maay": ["kordhin", "soo kacid", "kor u qaadid"],
  "phonetics": ["kor-dhin", "soo ka-cid", "kor u qaa-did"],
  "description": "To move upward or increase in position or value."
},
{
  "english": "Risk",
  "maay": ["halis", "khatarta", "isku day halis ah"],
  "phonetics": ["ha-lis", "kha-tar-ta", "is-ku day ha-lis ah"],
  "description": "The possibility of something bad happening."
},
{
  "english": "Road",
  "maay": ["wadada", "jid", "jidadka"],
  "phonetics": ["wa-da-da", "jid", "ji-dad-ka"],
  "description": "A wide way leading from one place to another."
},
{
  "english": "Rock",
  "maay": ["dhagax", "dhul adag", "ciida adag"],
  "phonetics": ["dha-gax", "dhul a-dag", "cii-da a-dag"],
  "description": "A solid mineral material forming part of the Earth's surface."
},
{
  "english": "Roll",
  "maay": ["duubid", "isku wareejin", "socod wareegsan"],
  "phonetics": ["duu-bid", "is-ku wa-ree-jin", "so-cod wa-reeg-san"],
  "description": "To move or cause to move in a particular direction by turning over and over."
},
{
  "english": "Room",
  "maay": ["qolka", "meel gudaha ah", "dhisme gudaha ah"],
  "phonetics": ["qol-ka", "meel gu-da-ha ah", "dhis-me gu-da-ha ah"],
  "description": "A part of a building enclosed by walls, floor, and ceiling."
},
{
  "english": "Rule",
  "maay": ["sharci", "qaanuun", "nidaam"],
  "phonetics": ["shar-ci", "qaa-nuun", "ni-daam"],
  "description": "A set of explicit or understood regulations governing conduct."
},
{
  "english": "Run",
  "maay": ["orod", "socod degdeg ah", "ka carar"],
  "phonetics": ["o-rod", "so-cod deg-deg ah", "ka ca-rar"],
  "description": "To move at a speed faster than walking."
},
{
  "english": "Safe",
  "maay": ["nabadgelyo", "badbaado", "amaanka"],
  "phonetics": ["na-bad-ge-lyo", "bad-baa-do", "a-maan-ka"],
  "description": "Protected from or not exposed to danger or risk."
},
{
  "english": "Same",
  "maay": ["isku mid", "u dhiganta", "lamid ah"],
  "phonetics": ["is-ku mid", "u dhi-gan-ta", "la-mid ah"],
  "description": "Identical; not different."
},
{
  "english": "Save",
  "maay": ["badbaadi", "keydin", "ilaalin"],
  "phonetics": ["bad-baa-di", "key-din", "i-laa-lin"],
  "description": "To keep safe or rescue from harm or danger."
},
{
  "english": "Say",
  "maay": ["sheeg", "odhan", "hadal"],
  "phonetics": ["sheeg", "o-dhan", "ha-dal"],
  "description": "To express something in words."
},
{
  "english": "School",
  "maay": ["iskuul", "dugsiga", "waxbarasho"],
  "phonetics": ["is-kuul", "dug-si-ga", "wax-ba-ra-sho"],
  "description": "An institution for educating children or adults."
},
{
  "english": "Science",
  "maay": ["cilmi", "saynis", "aqoonta dabiiciga ah"],
  "phonetics": ["cil-mi", "say-nis", "aqoon-ta da-bi-i-ci-ga ah"],
  "description": "The study of the structure and behavior of the physical and natural world."
},
{
  "english": "Score",
  "maay": ["dhibcaha", "guul", "natiijo"],
  "phonetics": ["dhib-ca-ha", "guul", "na-ti-ijo"],
  "description": "The number of points achieved in a game or test."
},
{
  "english": "Sea",
  "maay": ["badda", "biyaha weyn", "badweyn"],
  "phonetics": ["bad-da", "bi-ya-ha weyn", "bad-weyn"],
  "description": "A large body of saltwater that covers much of the Earth's surface."
},
{
  "english": "Search",
  "maay": ["raadinta", "baaritaan", "soo helid"],
  "phonetics": ["raa-din-ta", "baa-ri-taan", "soo he-lid"],
  "description": "To try to find something by looking carefully."
},
{
  "english": "See",
  "maay": ["arkid", "fiirso", "soo eeg"],
  "phonetics": ["ar-kid", "fii-rso", "soo eeg"],
  "description": "To perceive with the eyes."
},
{
  "english": "Sell",
  "maay": ["iibin", "gadin", "ka iibinta"],
  "phonetics": ["ii-bin", "ga-din", "ka ii-bin-ta"],
  "description": "To exchange a product or service for money."
},
{
  "english": "Send",
  "maay": ["dirid", "soo gudbin", "u geeyid"],
  "phonetics": ["di-rid", "soo gud-bin", "u gee-yid"],
  "description": "To cause something to go from one place to another."
},
{
  "english": "Sense",
  "maay": ["dareen", "fahmid", "xog uruurin"],
  "phonetics": ["da-reen", "fah-mid", "xog u-ruu-rin"],
  "description": "A faculty by which the body perceives external stimuli."
},
{
  "english": "Serve",
  "maay": ["adeegid", "u adeegid", "soo gudbin"],
  "phonetics": ["a-dee-gid", "u a-dee-gid", "soo gud-bin"],
  "description": "To perform duties or services for another."
},
{
  "english": "Set",
  "maay": ["dejis", "soo dhig", "qaabeyn"],
  "phonetics": ["de-jis", "soo dhig", "qaa-beyn"],
  "description": "To put or place something in a particular position."
},
{
  "english": "Short",
  "maay": ["gaaban", "yar", "wakhti gaaban"],
  "phonetics": ["gaa-ban", "yar", "wak-ti gaa-ban"],
  "description": "Measuring a small distance or duration."
},
{
  "english": "Show",
  "maay": ["muujin", "soo bandhigid", "tusid"],
  "phonetics": ["muu-jin", "soo ban-dhi-gid", "tu-sid"],
  "description": "To allow something to be seen or demonstrated."
},
{
  "english": "Side",
  "maay": ["dhinac", "gees", "xaafad"],
  "phonetics": ["dhi-nac", "gees", "xaa-fad"],
  "description": "A position to the left or right of an object or person."
},
{
  "english": "Simple",
  "maay": ["fudud", "sahlan", "aan dhib lahayn"],
  "phonetics": ["fu-dud", "sah-lan", "aan dhib la-hayn"],
  "description": "Easily understood or done; not complicated."
},
{
  "english": "Sing",
  "maay": ["heesid", "cod soo saarid", "gabey"],
  "phonetics": ["hee-sid", "cod soo saa-rid", "ga-bey"],
  "description": "To produce musical sounds with the voice."
},
{
  "english": "Sister",
  "maay": ["walaashaa", "walaal dumar", "gabadh walaal ah"],
  "phonetics": ["wa-laash-aa", "wa-laal du-mar", "ga-badh wa-laal ah"],
  "description": "A female sibling."
},
{
  "english": "Sit",
  "maay": ["fadhiiso", "iska fariiso", "dhexdooda fadhiiso"],
  "phonetics": ["fa-dhi-i-so", "is-ka fa-ri-i-so", "dhex-doo-da fa-dhi-i-so"],
  "description": "To adopt a seated position."
},
{
  "english": "Sleep",
  "maay": ["seexasho", "hurdo", "nasasho"],
  "phonetics": ["see-xa-sho", "hur-do", "na-sa-sho"],
  "description": "A state of rest in which the body is inactive and the mind unconscious."
},
{
  "english": "Slow",
  "maay": ["gaabis", "tartiib", "aad u gaabis ah"],
  "phonetics": ["gaa-bis", "tar-tiib", "aad u gaa-bis ah"],
  "description": "Moving or operating at a low speed."
},
{
  "english": "Small",
  "maay": ["yar", "aad u yar", "cabbir yar"],
  "phonetics": ["yar", "aad u yar", "cab-bir yar"],
  "description": "Of a size that is less than normal or usual."
},
{
  "english": "Smile",
  "maay": ["dhoolacadeyn", "farxad muujin", "ilko muujin"],
  "phonetics": ["dhoo-la-ca-deyn", "far-xad muu-jin", "il-ko muu-jin"],
  "description": "A facial expression characterized by turning up the corners of the mouth."
},
{
  "english": "Snow",
  "maay": ["baraf", "quraarado baraf ah", "dhaxan"],
  "phonetics": ["ba-raf", "qu-raa-ra-do ba-raf ah", "dha-xan"],
  "description": "Frozen precipitation in the form of white flakes."
},
{
  "english": "Some",
  "maay": ["qaar", "waxoogaa", "badankood"],
  "phonetics": ["qaar", "wa-xoo-gaa", "ba-dan-kood"],
  "description": "An unspecified amount or number of something."
},
{
  "english": "Song",
  "maay": ["hees", "gabay", "dhigane hees ah"],
  "phonetics": ["hees", "ga-bay", "dhi-ga-ne hees ah"],
  "description": "A short piece of music with words."
},
{
  "english": "Speak",
  "maay": ["hadal", "la hadal", "ku sheegid"],
  "phonetics": ["ha-dal", "la ha-dal", "ku shee-gid"],
  "description": "To say words in order to convey information or express a feeling."
},
{
  "english": "Spend",
  "maay": ["ku bixi", "isticmaalid", "ku bixinta lacagta"],
  "phonetics": ["ku bi-xi", "is-tic-maa-lid", "ku bi-xin-ta la-cag-ta"],
  "description": "To pay out money or use time on a particular thing."
},
{
  "english": "Stand",
  "maay": ["istaag", "taagnaansho", "soo istaagid"],
  "phonetics": ["is-taag", "taag-naan-sho", "soo is-taa-gid"],
  "description": "To be in an upright position on the feet."
},
{
  "english": "Star",
  "maay": ["xiddig", "ilays cirka ah", "ubax cirka"],
  "phonetics": ["xid-dig", "i-lays cir-ka ah", "u-bax cir-ka"],
  "description": "A luminous point in the night sky that is a large, remote incandescent body like the sun."
},
{
  "english": "Start",
  "maay": ["bilow", "soo bilow", "qorshe ka billaabid"],
  "phonetics": ["bi-low", "soo bi-low", "qor-she ka bil-laa-bid"],
  "description": "To begin doing something."
},
{
  "english": "Stay",
  "maay": ["iska joog", "sii joogid", "ku sugnaansho"],
  "phonetics": ["is-ka joog", "sii joo-gid", "ku sug-naan-sho"],
  "description": "To remain in the same place or condition."
},
{
  "english": "Step",
  "maay": ["talaabo", "socod", "dhacdo talaabo ah"],
  "phonetics": ["ta-laa-bo", "so-cod", "dha-cdo ta-laa-bo ah"],
  "description": "An act of lifting and setting down the foot in walking or running."
},
{
  "english": "Stop",
  "maay": ["jooji", "iska jooji", "meesha ka joogso"],
  "phonetics": ["joo-ji", "is-ka joo-ji", "mee-sha ka joo-gso"],
  "description": "To cease motion, action, or operation."
},
{
  "english": "Story",
  "maay": ["sheeko", "qiso", "warbixin dheer"],
  "phonetics": ["shee-ko", "qi-so", "war-bix-in dheer"],
  "description": "A description of events, either true or fictional."
},
{
  "english": "Strong",
  "maay": ["xooggan", "daran", "aad u xoog badan"],
  "phonetics": ["xoog-gan", "da-ran", "aad u xoog ba-dan"],
  "description": "Having great physical power or showing resilience."
},
{
  "english": "Success",
  "maay": ["guul", "horumar", "natiijo wanaagsan"],
  "phonetics": ["guul", "ho-ru-mar", "na-ti-ijo waa-naag-san"],
  "description": "The accomplishment of an aim or purpose."
},
{
  "english": "Sugar",
  "maay": ["sonkor", "macaan", "biyaha sonkorta"],
  "phonetics": ["son-kor", "ma-caan", "bi-ya-ha son-kor-ta"],
  "description": "A sweet substance obtained from plants like sugarcane or sugar beet."
},
{
  "english": "Summer",
  "maay": ["xagaaga", "waqti kulul", "jiilaalka kuleylka"],
  "phonetics": ["xa-gaa-ga", "waq-ti ku-lul", "jii-laal-ka ku-leyl-ka"],
  "description": "The warmest season of the year."
},
{
  "english": "Sun",
  "maay": ["qorraxda", "ilayska weyn", "cirka sare ee iftiinka"],
  "phonetics": ["qor-rax-da", "i-lays-ka weyn", "cir-ka sa-re ee if-ti-in-ka"],
  "description": "The star around which the Earth orbits, providing light and warmth."
},
{
  "english": "Support",
  "maay": ["taageero", "caawin", "gargaarid"],
  "phonetics": ["taa-gee-ro", "caa-win", "gar-gaa-rid"],
  "description": "To bear all or part of the weight or provide assistance."
},
{
  "english": "Sure",
  "maay": ["hubanti", "kalsooni", "xaqiiqo"],
  "phonetics": ["hu-ban-ti", "kal-soo-ni", "xa-qii-qo"],
  "description": "Confident in what one thinks or knows; certain."
},
{
  "english": "Table",
  "maay": ["miis", "meesha cuntada", "dhisme miis ah"],
  "phonetics": ["miis", "mee-sha cun-ta-da", "dhis-me miis ah"],
  "description": "A piece of furniture with a flat top and one or more legs, providing a level surface for eating, working, or playing."
},
{
  "english": "Take",
  "maay": ["qaadid", "soo qaadid", "haysasho"],
  "phonetics": ["qaa-did", "soo qaa-did", "hay-sa-sho"],
  "description": "To get into one's possession or control."
},
{
  "english": "Talk",
  "maay": ["hadal", "sheekeysi", "warbixin"],
  "phonetics": ["ha-dal", "shee-key-si", "war-bix-in"],
  "description": "To communicate or exchange ideas through spoken words."
},
{
  "english": "Tall",
  "maay": ["dheer", "sare", "kor u kacsan"],
  "phonetics": ["dheer", "sa-re", "kor u kac-san"],
  "description": "Of greater than average height."
},
{
  "english": "Teach",
  "maay": ["barid", "waxbarasho", "cashar siin"],
  "phonetics": ["ba-rid", "wax-ba-ra-sho", "ca-shar siin"],
  "description": "To impart knowledge or instruct someone."
},
{
  "english": "Team",
  "maay": ["koox", "iskaashatada", "ciyaartooyda"],
  "phonetics": ["koox", "is-kaa-sha-ta-da", "ci-yaar-too-yda"],
  "description": "A group of people working together to achieve a goal."
},
{
  "english": "Tell",
  "maay": ["u sheegid", "ka warbixin", "cadeyn"],
  "phonetics": ["u shee-gid", "ka war-bi-xin", "ca-deyn"],
  "description": "To communicate information, facts, or news to someone."
},
{
  "english": "Thank",
  "maay": ["mahadsanid", "ugu mahadcelin", "ogolaansho mahad ah"],
  "phonetics": ["ma-had-sa-nid", "u-gu ma-had-ce-lin", "o-go-laan-sho ma-had ah"],
  "description": "To express gratitude to someone."
},
{
  "english": "Think",
  "maay": ["fikir", "ku fakarid", "aragti ku sameyn"],
  "phonetics": ["fi-kir", "ku fa-ka-rid", "a-rag-ti ku sa-meyn"],
  "description": "To have or form ideas in the mind."
},
{
  "english": "Throw",
  "maay": ["tuurid", "soo tuur", "iska tuur"],
  "phonetics": ["tuu-rid", "soo tuur", "is-ka tuur"],
  "description": "To propel something with force through the air by a movement of the arm."
},
{
  "english": "Time",
  "maay": ["waqti", "xilli", "saacad"],
  "phonetics": ["waq-ti", "xil-li", "saa-cad"],
  "description": "The indefinite continued progress of existence and events."
},
{
  "english": "Tired",
  "maay": ["daallan", "daal badan", "isku dulay"],
  "phonetics": ["daal-lan", "daal ba-dan", "is-ku du-lay"],
  "description": "In need of rest or sleep; fatigued."
},
{
  "english": "Today",
  "maay": ["maanta", "maalinta maanta", "xilliga hadda"],
  "phonetics": ["maan-ta", "maa-lin-ta maan-ta", "xil-li-ga had-da"],
  "description": "The present day."
},
{
  "english": "Together",
  "maay": ["isku wada", "wadajir", "midnimo"],
  "phonetics": ["is-ku wa-da", "wa-da-jir", "mid-ni-mo"],
  "description": "With or in proximity to another person or thing."
},
{
  "english": "Tomorrow",
  "maay": ["berri", "maalinta berri", "xilliga soo socda"],
  "phonetics": ["ber-ri", "maa-lin-ta ber-ri", "xil-li-ga soo soc-da"],
  "description": "The day after today."
},
{
  "english": "Top",
  "maay": ["sare", "kor", "meesha ugu saraysa"],
  "phonetics": ["sa-re", "kor", "mee-sha u-gu sa-ray-sa"],
  "description": "The highest or uppermost point, part, or surface."
},
{
  "english": "Touch",
  "maay": ["taabasho", "gacan saar", "dareen taabid"],
  "phonetics": ["taa-ba-sho", "ga-can saar", "da-reen taa-bid"],
  "description": "To come into physical contact with something."
},
{
  "english": "Town",
  "maay": ["magaalo", "tuulo", "aag degaan"],
  "phonetics": ["ma-gaa-lo", "tuu-lo", "aag de-gaan"],
  "description": "A built-up area that is larger than a village but smaller than a city."
},
{
  "english": "Travel",
  "maay": ["safar", "socdaal", "meerid"],
  "phonetics": ["sa-far", "soc-daal", "mee-rid"],
  "description": "To go from one place to another."
},
{
  "english": "Tree",
  "maay": ["geed", "dhir", "ubax geed ah"],
  "phonetics": ["geed", "dhir", "u-bax geed ah"],
  "description": "A perennial plant with a woody stem, leaves, and branches."
},
{
  "english": "True",
  "maay": ["run", "dhab ah", "xaqiiq"],
  "phonetics": ["run", "dhab ah", "xa-qiiq"],
  "description": "In accordance with fact or reality."
},
{
  "english": "Try",
  "maay": ["isku day", "ku dadaal", "tijaabi"],
  "phonetics": ["is-ku day", "ku da-daal", "ti-jaa-bi"],
  "description": "To make an attempt or effort to do something."
},
{
  "english": "Turn",
  "maay": ["leexasho", "wareejin", "bedelid"],
  "phonetics": ["lee-xa-sho", "wa-ree-jin", "be-de-lid"],
  "description": "To move in a circular direction around a point."
},
{
  "english": "Type",
  "maay": ["nooca", "qayb", "hab"],
  "phonetics": ["noo-ca", "qayb", "hab"],
  "description": "A category or group of things having common characteristics."
},
{
  "english": "Understand",
  "maay": ["fahmid", "garasho", "aqoonsi"],
  "phonetics": ["fah-mid", "ga-ra-sho", "aq-oon-si"],
  "description": "To comprehend or grasp the meaning of something."
},
{
  "english": "Use",
  "maay": ["isticmaalid", "adeegsasho", "ku shaqeyn"],
  "phonetics": ["is-tic-maa-lid", "a-deeg-sa-sho", "ku shaq-eyn"],
  "description": "To employ something for a particular purpose."
},
{
  "english": "Usual",
  "maay": ["caadi ah", "inta badan", "aan ka duwanayn"],
  "phonetics": ["caa-di ah", "in-ta ba-dan", "aan ka du-wa-nayn"],
  "description": "Happening or done most of the time; customary."
},
{
  "english": "Value",
  "maay": ["qiimo", "wax ku ool ah", "mudnaan"],
  "phonetics": ["qii-mo", "wax ku oo-l ah", "mud-naan"],
  "description": "The worth of something in terms of its importance or usefulness."
},
{
  "english": "Visit",
  "maay": ["soo booqasho", "booqo", "soo wacasho"],
  "phonetics": ["soo boo-qa-sho", "boo-qo", "soo wa-ca-sho"],
  "description": "To go to see a person or place for a particular purpose."
},
{
  "english": "Voice",
  "maay": ["codka", "hadal", "afka"],
  "phonetics": ["cod-ka", "ha-dal", "af-ka"],
  "description": "The sound produced by the vocal cords and used for speaking."
},
{
  "english": "Vote",
  "maay": ["cod bixid", "doorasho", "qoraal cod ah"],
  "phonetics": ["cod bix-id", "doo-ra-sho", "qo-raal cod ah"],
  "description": "A formal indication of a choice between options."
},
{
  "english": "Walk",
  "maay": ["socod", "lugayn", "talaabso"],
  "phonetics": ["so-cod", "lu-gayn", "ta-laab-so"],
  "description": "To move at a regular pace by lifting and setting down each foot in turn."
},
{
  "english": "Want",
  "maay": ["rabid", "jeclaan", "baahi"],
  "phonetics": ["ra-bid", "jec-laan", "baa-hi"],
  "description": "To have a desire for something."
},
{
  "english": "Warm",
  "maay": ["kulul", "diiran", "heerkul dhexdhexaad"],
  "phonetics": ["ku-lul", "dii-ran", "heer-kul dhex-dhex-aad"],
  "description": "Having a temperature that is comfortably high but not hot."
},
{
  "english": "Wash",
  "maay": ["mayrid", "nadiifin", "qubeyso"],
  "phonetics": ["may-rid", "na-dii-fin", "qu-bey-so"],
  "description": "To clean with water, often with soap or detergent."
},
{
  "english": "Watch",
  "maay": ["daawasho", "fiirso", "ilaalin"],
  "phonetics": ["daa-wa-sho", "fii-rso", "i-laa-lin"],
  "description": "To look at or observe attentively over a period of time."
},
{
  "english": "Water",
  "maay": ["biyo", "webiga", "dareer"],
  "phonetics": ["bi-yo", "we-bi-ga", "da-reer"],
  "description": "A clear liquid essential for most forms of life."
},
{
  "english": "Way",
  "maay": ["jid", "wadada", "hab"],
  "phonetics": ["jid", "wa-da-da", "hab"],
  "description": "A method, style, or manner of doing something."
},
{
  "english": "Weak",
  "maay": ["daciif", "xoog la’aan", "aadiifnimo"],
  "phonetics": ["da-ciif", "xoog la-aan", "aa-dii-fi-mo"],
  "description": "Lacking strength or energy."
},
{
  "english": "Wear",
  "maay": ["xirashada", "huurid", "dhar xidho"],
  "phonetics": ["xi-ra-sha-da", "huu-rid", "dhar xi-dho"],
  "description": "To have clothing, jewelry, or accessories on the body."
},
{
  "english": "Weather",
  "maay": ["cimilada", "heerkulka hawada", "roob iyo qorax"],
  "phonetics": ["ci-mi-la-da", "heer-kul-ka ha-wa-da", "roob iyo qo-rax"],
  "description": "The state of the atmosphere at a particular time and place."
},
{
  "english": "Week",
  "maay": ["usbuuc", "todobaad", "maalmo isku xiga"],
  "phonetics": ["us-buu-c", "to-do-baad", "maal-mo is-ku xi-ga"],
  "description": "A period of seven days."
},
{
  "english": "Well",
  "maay": ["fiican", "wanaagsan", "sax ah"],
  "phonetics": ["fii-can", "wa-naag-san", "sax ah"],
  "description": "In a good or satisfactory way."
},
{
  "english": "Win",
  "maay": ["guuleysi", "helid guul", "horumar"],
  "phonetics": ["guu-ley-si", "he-lid guul", "ho-ru-mar"],
  "description": "To achieve victory in a contest or conflict."
},
{
  "english": "Wind",
  "maay": ["dabayl", "hawada socota", "neecow"],
  "phonetics": ["da-bayl", "ha-wa-da so-co-ta", "nee-cow"],
  "description": "The movement of air, especially in the form of a current."
},
{
  "english": "Window",
  "maay": ["daaqad", "furitaanka gidaarka", "meel iftiin soo galaan"],
  "phonetics": ["daa-qad", "fu-ri-taan-ka gi-daar-ka", "meel if-ti-in soo ga-laan"],
  "description": "An opening in a wall or roof that allows light or air to enter."
},
{
  "english": "Winter",
  "maay": ["jiilaal", "xilliga qabowga", "waqti baraf"],
  "phonetics": ["jii-laal", "xil-li-ga qa-bow-ga", "waq-ti ba-raf"],
  "description": "The coldest season of the year."
},
{
  "english": "Wish",
  "maay": ["rabitaan", "jeclaan", "doonid"],
  "phonetics": ["ra-bi-taan", "jec-laan", "doo-nid"],
  "description": "A desire or hope for something to happen."
},
{
  "english": "Work",
  "maay": ["shaqo", "howl", "hawlgal"],
  "phonetics": ["sha-qo", "howl", "hawl-gal"],
  "description": "Activity involving mental or physical effort to achieve a result."
},
{
  "english": "World",
  "maay": ["adduunka", "dunida", "meeraha dhulka"],
  "phonetics": ["ad-duun-ka", "du-ni-da", "mee-ra-ha dhul-ka"],
  "description": "The earth and all its inhabitants and features."
},
{
  "english": "Write",
  "maay": ["qorid", "soo qor", "farid"],
  "phonetics": ["qo-rid", "soo qor", "fa-rid"],
  "description": "To mark letters, words, or symbols on a surface."
},
{
  "english": "X-ray",
  "maay": ["raajada", "sawir gudaha ah", "iftiinka raajada"],
  "phonetics": ["raa-ja-da", "sa-wir gu-da-ha ah", "if-tiin-ka raa-ja-da"],
  "description": "A type of radiation used to create images of the inside of the body."
},
{
  "english": "Year",
  "maay": ["sano", "xilli sanadeed", "waqti dheer"],
  "phonetics": ["sa-no", "xil-li sa-na-deed", "waq-ti dheer"],
  "description": "A period of 12 months."
},
{
  "english": "Yes",
  "maay": ["haa", "ogolow", "waaqici"],
  "phonetics": ["haa", "o-go-low", "waa-qi-ci"],
  "description": "Used to express affirmation or agreement."
},
{
  "english": "Yesterday",
  "maay": ["shalay", "maalintii hore", "waqti dhaw hore"],
  "phonetics": ["sha-lay", "maa-lin-tii ho-re", "waq-ti dhaw ho-re"],
  "description": "The day before today."
},
{
  "english": "Young",
  "maay": ["dhallinyaro", "yar", "curdin"],
  "phonetics": ["dhal-lin-ya-ro", "yar", "cur-din"],
  "description": "Having lived or existed for only a short time."
},
{
  "english": "You",
  "maay": ["adiga", "idinka", "waxaad"],
  "phonetics": ["a-di-ga", "i-din-ka", "wa-xaad"],
  "description": "The person or people being addressed."
},
{
  "english": "Zoo",
  "maay": ["beerta xayawaanka", "xero xayawaan", "meel xayawaan lagu hayo"],
  "phonetics": ["beer-ta xay-awa-an-ka", "xe-ro xay-a-waan", "meel xay-a-waan la-gu ha-yo"],
  "description": "A facility where animals are housed within enclosures for public display."
},
{
  "english": "Zero",
  "maay": ["eber", "waxba", "bilaa tiro"],
  "phonetics": ["e-ber", "wax-ba", "bi-laa ti-ro"],
  "description": "The numerical symbol that represents no quantity or value."
},
{
  "english": "Zebra",
  "maay": ["dameer fardo leh", "xayawaan la xarriiqay", "xayawaan duurjoog ah"],
  "phonetics": ["da-meer far-do leh", "xay-a-waan la xar-riiq-ay", "xay-a-waan du-ur-joog ah"],
  "description": "An African wild animal similar to a horse, with black-and-white stripes."
},
];

// Function to Display Words Dynamically
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

// Text-to-Speech Function
function readText(word) {
  const synth = window.speechSynthesis;

  // English Part (Set TTS Language to English)
  const englishText = `The English word is ${word.english}. Description: ${word.description || 'N/A'}.`;
  const englishUtterance = new SpeechSynthesisUtterance(englishText);
  englishUtterance.lang = "en-US"; // Use American English for the English parts
  englishUtterance.rate = 0.9;
  englishUtterance.pitch = 1;

  // Maay Part (Set TTS Language to Swahili for Maay Approximation)
  const maayText = `The Maay translation is ${word.maay ? word.maay.join(', ') : 'N/A'}. The phonetics are ${word.phonetics ? word.phonetics.join(', ') : 'N/A'}.`;
  const maayUtterance = new SpeechSynthesisUtterance(maayText);
  maayUtterance.lang = "sw-TZ"; // Swahili for approximating Maay
  maayUtterance.rate = 0.9;
  maayUtterance.pitch = 1;

  // Queue Utterances to Play in Order
  synth.speak(englishUtterance);
  synth.speak(maayUtterance);
}

// Filter Words Based on Search Query
const searchBar = document.getElementById('search-bar');
searchBar.addEventListener('input', function () {
  const searchQuery = searchBar.value.toLowerCase();

  // Filter Words Matching the Query
  const filteredWords = words.filter(word => {
    return word.english.toLowerCase().includes(searchQuery) ||
           word.maay.some(maayWord => maayWord.toLowerCase().includes(searchQuery));
  });

  // Update Displayed Words
  displayWords(filteredWords);
});

// Initialize with All Words
displayWords(words);
