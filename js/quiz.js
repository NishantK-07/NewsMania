const questions = [
    {
        question: "As of July 2024, which country recently achieved the milestone of hosting the first ever 'Mars Colony Mission'?",
        options: ["China", "United States", "Russia", "India"],
        answer: "United States"
    },
    {
        question: "In June 2024, which major tech company unveiled a groundbreaking AI that can write and perform original music compositions?",
        options: ["Apple", "Google", "Microsoft", "Meta"],
        answer: "Google"
    },
    {
        question: "Which country has recently enacted a new climate policy that aims to reduce carbon emissions by 50% by 2030?",
        options: ["Germany", "Japan", "Brazil", "Canada"],
        answer: "Canada"
    },
    {
        question: "In the 2024 Summer Olympics, which athlete won gold in the men's 100-meter sprint, setting a new world record?",
        options: ["Usain Bolt", "Christian Coleman", "Noah Lyles", "Andre De Grasse"],
        answer: "Noah Lyles"
    },
    {
        question: "What recent breakthrough was announced in medical research regarding Alzheimer's disease in July 2024?",
        options: ["A new vaccine", "A gene-editing therapy", "A promising drug treatment", "A novel diagnostic tool"],
        answer: "A promising drug treatment"
    },
    {
        question: "As of mid-2024, which film won the Academy Award for Best Picture at the Oscars?",
        options: ["The Marvels", "Dune: Part Two", "Oppenheimer", "Killers of the Flower Moon"],
        answer: "Oppenheimer"
    },
    {
        question: "Which new global environmental agreement was signed in 2024 to protect the world’s oceans?",
        options: ["The Paris Accord", "The Blue Ocean Treaty", "The Green Deal", "The Ocean Conservation Pact"],
        answer: "The Blue Ocean Treaty"
    },
    {
        question: "What significant space mission did NASA launch in early 2024 to study an asteroid?",
        options: ["Artemis I", "OSIRIS-REx II", "Lucy", "Psyche"],
        answer: "OSIRIS-REx II"
    },
    {
        question: "Which company recently made headlines for its breakthrough in quantum computing in July 2024?",
        options: ["IBM", "Google", "Intel", "Amazon"],
        answer: "Google"
    },
    {
        question: "In the realm of international politics, which leader was recently elected as the new Prime Minister of the United Kingdom in 2024?",
        options: ["Rishi Sunak", "Keir Starmer", "Liz Truss", "Boris Johnson"],
        answer: "Keir Starmer"
    }
];

let qindex = 0;
let score = 0;

const questioncon = document.querySelector('.questioncon');
const optioncon = document.querySelector('.optionscon');
const nextbtn = document.querySelector('.next-button');
const scorecon = document.querySelector('.scorecon');

function loadQuestion() {
    const currentQuestion = questions[qindex];
    
    questioncon.textContent = currentQuestion.question;
    
    optioncon.innerHTML = '';
    currentQuestion.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(option));
        optioncon.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[qindex].answer;
    if (selectedOption === correctAnswer) {
        score++;
    }
    qindex++;
    if (qindex < questions.length) {
        loadQuestion();
    } else {
        showScore();
    }
}
const quizcon=document.querySelector(".quizcon");
const playagainbtn= document.createElement("button");
playagainbtn.classList.add("playagainbtn")
playagainbtn.textContent="Play Again";
playagainbtn.addEventListener("click",()=>{
   
    qindex=0;
    score=0;
    loadQuestion();
    quizcon.insertBefore(nextbtn, scorecon);
   scorecon.innerHTML='';
 
})
function showScore() {
    questioncon.textContent = '';
    optioncon.innerHTML = '';
    scorecon.textContent = `Your score: ${score}/${questions.length}`;
    scorecon.appendChild(playagainbtn);
    nextbtn.remove();
}

nextbtn.addEventListener('click', () => {
    if (qindex < questions.length) {
        loadQuestion();
    }
});


loadQuestion();

//fun fact
const funsec=document.querySelector(".funsec")
const addoverlay=document.querySelector("#addfactoverlay");

function getRandomFact() {
    const funFacts = [
        "Did you know? The longest-running TV news show is 'Meet the Press,' which has been airing since 1947. It is still on the air today, making it one of the oldest TV programs in history.",
        "Did you know? The term 'news' is an acronym derived from the four cardinal directions: North, East, West, and South. This reflects the idea that news comes from all around the world.",
        "Did you know? The first newspaper ever printed was the 'Relation aller Fürnemmen und gedenckwürdigen Historien,' published in 1605 in Strasbourg, Germany. It is considered the world's first newspaper.",
        "Did you know? The White House press briefing room is known as the James S. Brady Press Briefing Room, named after James Brady, who was press secretary during the Reagan administration and was injured in an assassination attempt on the President.",
        "Did you know? The BBC (British Broadcasting Corporation) is one of the oldest and most well-known news organizations globally. It was founded in 1922 and remains a leading source of news around the world.",
        "Did you know? The Pulitzer Prize for Journalism is named after Joseph Pulitzer, a newspaper publisher who established the awards in 1917 to honor excellence in journalism and the arts.",
        "Did you know? The first live broadcast of a news event was the 1936 Olympics in Berlin. This was the first time people around the world could watch live news coverage of a major event.",
        "Did you know? The Associated Press (AP) was founded in 1846 by five New York newspapers to pool resources and share news coverage of the Mexican-American War. Today, the AP is one of the largest and most trusted news agencies in the world.",
        "Did you know? In 1963, the assassination of President John F. Kennedy was the first major news event to be covered live on television, with millions of people around the world watching the events unfold in real-time.",
        "Did you know? The 'news ticker' on television screens was first used by CNN in 1980. It became a significant innovation, providing continuous updates and headlines during news broadcasts."
    ];
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    return funFacts[randomIndex];
}
function off() {
    document.getElementById("addfactoverlay").style.display = "none";
  }

addoverlay.style.display="none";
document.getElementById('fun-fact').textContent = getRandomFact();
funsec.addEventListener("click", () => {
    if (addoverlay.style.display === "none" ) {
        
        addoverlay.style.display = "block";
        
        
    } else {
        addoverlay.style.display = "none";
       
    }
});


