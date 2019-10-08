const quotes = [
    {
        "quote": "Ideas are the beginning points of all fortunes.",
        "author": "Napoleon Hill",
    },
    {
        "quote": "Don’t read success stories, you will only get a message. Read failure stories, you will get some ideas to get success.",
        "author": "A. P. J. Abdul Kalam"
    },
    {
        "quote": "If your ship doesn’t come in, swim out to it.",
        "author": "Jonathan Winters"
    },
    {
        "quote": "Quitters never win. Winners never quit.",
        "author": "Dr. Irene C. Kassorla"
    },
    {
        "quote": "Sadness flies away on the wings of time.",
        "author": "Jean de la Fontaine"
    },
    {
        "quote": "The true way to render ourselves happy is to love our work and find in it our pleasure.",
        "author": "Francoise de Motteville"
    },
    {
        "quote": "Many of life's failures are people who did not realize how close they were to success when they gave up.",
        "author": "Thomas Edison"
    },
    {
        "quote": "Patience is a virtue but you will never ever accomplish anything if you don't exercise action over patience.",
        "author": "Byron Pulsifer"
    },
    {
        "quote": "Kind words will unlock an iron door.",
        "author": "Turkish proverb"
    },
    {
        "quote": "I believe that every person is born with talent.",
        "author": "Maya Angelou"
    },
    {
        "quote": "Strength does not come from physical capacity. It comes from an indomitable will.",
        "author": "Mahatma Gandhi"
    },
    {
        "quote": "The mediocre teacher tells. The good teacher explains. The superior teacher demonstrates. The great teacher inspires.",
        "author": "William Arthur Ward"
    },
    {
        "quote": "Do. Or do not. There is no try.",
        "author": "Yoda"
    },
    {
        "quote": "Every champion was once a contender who refused to give up.",
        "author": "Rocky Balboa"
    },
    {
        "quote":"The greatest glory in living lies not in never falling, but in rising every time we fall",
        "author": "Nelson Mandela"
    },
    {
        "quote": "Sometimes enemies are our best teachers, people can learn from their mistakes, destruction sometimes means rebirth.",
        "author": "Keanu Reeves"
    },
    {
        "quote": "The simple act of paying attention can take you a long way.",
        "author": "Keanu Reeves"
    },
    {
        "quote": "Every struggle in your life has shaped you into the person you are today. Be thankful for the hard times, they can only make you stronger.",
        "author": "Keanu Reeves"
    },
    {
        "quote": "If you have been brutally broken but still have the courage to be gentle to other living beings, then you’re a badass with a heart of an angel.",
        "author": "Keanu Reeves"
    }
];

function randomQuotesGenerator(){
    let getRandomQuote = quotes[ Math.floor( Math.random()*quotes.length ) ];
    let getQuoteElement = document.getElementById("quote-holder");
    let getOwnerElement = document.getElementById("owner");

    getQuoteElement.innerHTML = getRandomQuote.quote;
    getOwnerElement.innerHTML = getRandomQuote.author;
}
