const quotes = [
    {
      "quote": "Sometimes good things fall apart so better things can fall together.",
      "author": "Marilyn Monroe",  
    },
    {
        "quote": "Courage is more exhilarating than fear.",
        "author": "Eleanor Roosevelt",
    },
    {
        "quote": "I like bread, pate, sausage more than speed limits.",
        "author": "Jacques Chirac",
    },
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
        "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall",
        "author": "Nelson Mandela"
    },
    {
        "quote": "Everyone you will ever meet knows something you don't.",
        "author": "Bill Nye"
    },
    {
        "quote": "Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma, which is living with the results of other people’s thinking.",
        "author": "Steve Jobs"
    },
    {
        "quote": "Nothing is really work unless you would rather be doing something else.",
        "author": "J.M. Barrie"
    },
    {
        "quote": "Be patient with yourself. Self-growth is tender; it's holy ground. There's no greater investment.",
        "author": "Stephen Covey"
    },
    {
        "quote": "Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose. You are already naked. There is no reason not to follow your heart.",
        "author": "Steve Jobs"
    },
    {
        "quote": "You are not here merely to make a living. You are here in order to enable the world to live more amply, with greater vision, with a finer spirit of hope and achievement. You are here to enrich the world, and you impoverish yourself if you forget the errand.",
        "author": "Woodrow Wilson"
    },
    {
        "quote": "Evil is always possible. And goodness is eternally difficult.",
        "author": "Anne Rice"
    },
    {
        "quote": "Whatever you are, be a good one.",
        "author": "Abraham Lincoln"
    },
    {
        "quote": "You are braver than you believe, stronger than you seem and smarter than you think.",
        "author": "Christopher Robin Milne",
    },
    {
        "quote": "I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times.",
        "author": "Bruce Lee",
    },
    {
        "quote": "Attitude is a little thing that makes a big difference.",
        "author": "Winston Churchill"
    },
    {
        "quote": "True genius resides in the capacity for evaluation of uncertain, hazardous, and conflicting information.",
        "author": "Winston Churchill"
    },
    {
        "quote": "Out of suffering have emerged the strongest souls; the most massive characters are seared with scars.",
        "author": "Khalil Gibran"
    },
    {
        "quote": "Every great dream begins with a dreamer. Always remember, you have within you the strength, the patience, and the passion to reach for the stars to change the world.",
        "author": "Harriet Tubman"
    },
    {
        "quote": "You have enemies? Good. That means you've stood up for something, sometime in your life.",
        "author": "Winston Churchill"
    },
    {
        "quote": "As long as you're learning, you're not failing.",
        "author": "Bob Ross"
    },
    {
        "quote": "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        "author": "Winston Churchill"
    },
    {
        "quote": "Be formless, shapeless, like water.",
        "author": "Bruce Lee"
    },
    {
        "quote": "Success is a lousy teacher. It seduces smart people into thinking they can't lose.",
        "author": "Bill Gates"
    },
    {
        "quote": "Be yourself; everyone else is already taken.",
        "author": "Oscar Wilde"
    },
    {
        "quote": "If you can't explain it simply, you don't understand it well enough.",
        "author": "Albert Einstein"
    },
    {
        "quote": "People often say that motivation doesn't last. Well, neither does bathing--that's why we recommend it daily.",
        "author": "Zig Ziglar"
    },
    {
        "quote": "It is not enough to do your best; you must know what to do, and then do your best.",
        "author": "W. Edwards Deming"
    },
    {
        "quote": "Hard work beats talent when talent fails to work hard.",
        "author": "Tim Notke"
    },
    {
        "quote": "To live is the rarest thing in the world. Most people exist, that is all.",
        "author": "Oscar Wilde"
    },
    {
        "quote": "The imagination is truly the enemy of bigotry and dogma.",
        "author": "Ursula K. Le Guin"
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
    },
    {
        "quote": "I wake up every morning believing today is going to be better than yesterday.",
        "author": "Will Smith"
    },
    {
        "quote": "The first step is you have to say that you can.",
        "author": "Will Smith"
    },
    {
        "quote": "Life isn’t how many breaths you take, but it’s the moments that take your breath away.",
        "author": "Will Smith"
    },
    {
        "quote": "Greatness is not this wonderful, esoteric, elusive, god-like feature that only the special among us will ever taste, it’s something that truly exists in all of us.",
        "author": "Will Smith"
    },
    {
        "quote": "The way to get started is to quit talking and begin doing.",
        "author": "Walt Disney"
    },
    {
        "quote": "If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.",
        "author": "Steve Jobs"
    },
    {
        "quote": "You miss 100% of the shots you don't take.",
        "author": "Wayne Gretzky"
    },
    {
        "quote": "Maybe life is random, but I doubt it.",
        "author": "Steven Tyler"
    },
    {
        "quote": "Arise,awake and do not stop until the goal is reached.",
        "author": "Swami Vivekananda"
    },
    {
        "quote": "No real change in history has ever been achieved by discussions.",
        "author": "Subhash Chandra Bose"
    },
    {
        "quote": "So plant your own gardens and decorate your own soul, instead of waiting for someone to bring you flowers.",
        "author": "Jorge Luis Borges"
    },
    {
        "quote": "Practice isn't the thing you do once you're good. It's the thing you do that makes you good.",
        "author": "Malcolm Gladwell"
    },
    {
        "quote": "Together we can change the world, just one random act of kindness at a time.",
        "author": "Ron Hall"
    },
    {
      "quote": "Practice isn't the thing you do once you're good. It's the thing you do that makes you good.",
      "author": "Malcolm Gladwell"
    },
    {
        "quote": "I have no special talent. I am only passionately curious.",
        "author": "Albert Einstein"
    },
    {
        "quote" : "God helps those that help themselves.",
        "author" : "Benjamin Franklin"
    },
    {
      "quote": "Celebrate who you are in your deepest heart. Love yourself and the world will love you.",
      "author": "Amy Leigh Mercree"
    },
    {
      "quote": "If you can't sleep, then get up and do something instead of lying there and worrying. It's the worry that gets you, not the loss of sleep.",
      "author": "Dale Carnegie"
    },
    {
        "quote": "Everyone is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid.",
        "author": "Albert Einstein"
    },
    {
      "quote": "Make your life a masterpiece, imagine no limitations on what you can be, have or do",
      "author": "Brian Tracy"
    },
    {
        "quote": "Struggle and criticisms are prerequisites for greatness. That is the law of this universe and no one escapes it. Because pain is life but you can choose what type? Either the pain on the road to success or the pain of being haunted with regret.",
        "author": "Prince Ea"
    },
    {
        "quote": "Life beings where fear ends.",
        "author": "Osho"
    },
	{
        "quote": "Optimism is the faith that leads to achievement.",
        "author": "Helen Keller"
    },
    {
        "quote": "Knowing what must be done does away with fear.",
        "author": "Rosa Parks"
    },
    {
        "quote": "What Doesn’t Kill You Makes You Stronger.",
        "author": "Friedrich Nietzsche"
    },
    {
        "quote": "And if you gaze long enough into an abyss, the abyss will gaze back into you.",
        "author": "Friedrich Nietzsche"
    },
    {
        "quote": "Better to die on one's feet than live on one's knees.",
        "author": "Dolores Ibárruri (La Pasionaria)"
    },
    {
        "quote": "Fear cuts deeper than swords.",
        "author": "George R.R. Martin(A Game of Thrones)"
    },
    {
        "quote": "Give me honorable enemies rather than ambitious ones, and I'll sleep more easily by night.",
        "author": "George R.R. Martin(A Game of Thrones)"
    },
    {
        "quote": "Hell is empty and all the devils are here.",
        "author": "William Shakespeare"
    },
    {
        "quote": "Life's A Garden, Dig It!",
        "author": "Joe Dirt"
    },
    {
        "quote": "Nobody cares how much you know, until they know how much you care.",
        "author": "Theodore Roosevelt"	    
    },
    {
        "quote": "Somebody may beat me, but they are going to have to bleed to do it.",
        "author": "Steve Prefontaine"
    },
    {
        "quote": "Love is too young to know what conscience is.",
        "author": "William Shakespeare"
    },
    {
        "quote": "Where the spirit does not work with the hand, there is no art.",
        "author": "Leonardo Da Vinci"
    },
   {
        "quote": "Somebody may beat me, but they are going to have to bleed to do it.",
        "author": "Steve Prefontaine"
    },
    {
        "quote": "Are you not entertained?",
        "author": "Maximus, Gladiator"
    },
   {
        "quote": "Fall seven times, stand up eight.",
        "author": "Japanese proverb"
    }
];

function randomQuotesGenerator() {
    let getRandomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    let getQuoteElement = document.getElementById("quote-holder");
    let getOwnerElement = document.getElementById("owner");

    getQuoteElement.innerHTML = getRandomQuote.quote;
    getOwnerElement.innerHTML = getRandomQuote.author;
}
