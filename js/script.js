const headlinecontainer= document.querySelector(".headline");
const seprate= document.querySelector(".seprate");
// dark mode

const toggleBtn = document.getElementById('darkmd-toggle');
const body = document.body;
if (localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    toggleBtn.textContent = '🌞'; 
    
} else {
    body.classList.remove('dark-mode');
    toggleBtn.textContent = '🌙'; 
}

toggleBtn.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        toggleBtn.textContent = '🌙'; 
        localStorage.setItem('dark-mode', 'disabled');
    } else {
        body.classList.add('dark-mode');
        toggleBtn.textContent = '🌞'; 
        localStorage.setItem('dark-mode', 'enabled');
    }
});


//fetching news
fetchnews()
async function fetchnews(){
    const url=`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c9fac730ef284886a1be6dc1858033eb`;
    const response= await fetch(url);
            if(response.status==400){
                alert("location is invalid");
                
            }
            else if(response.status==200){
                const json=await response.json();
                // console.log(json);
               const articles= json.articles.slice(4,10);;
               const cards=document.createElement('div');
                cards.classList.add('cards');
               articles.forEach(article => {
                

                const card=document.createElement('div');
                card.classList.add('card');

                const imgElement = document.createElement('img');
                imgElement.width = "200";
                imgElement.height="200"
                imgElement.src = article.urlToImage;
                imgElement.alt = article.title; 

                const cardsetting=document.createElement('div');
                cardsetting.classList.add('textsetting');

                const headingElement = document.createElement('h1');
                headingElement.classList.add('headtxt');
                headingElement.textContent = article.title;

                const paraElement = document.createElement('p');
                paraElement.classList.add('headptxt');
                paraElement.textContent = article.description;

                cardsetting.appendChild(headingElement);
                cardsetting.appendChild(paraElement);

                card.appendChild(imgElement);
                card.appendChild(cardsetting);

                cards.appendChild(card);
                headlinecontainer.appendChild(cards);
               });
            }
}

//country wise news shoing
const indiacards= document.querySelector(".showindia");
const usacards= document.querySelector(".showusa");
const ukcards= document.querySelector(".showuk");
const indiabtn=document.querySelector(".india");
const usabtn=document.querySelector(".usa");
const ukbtn=document.querySelector(".uk");

// fetchnews countrywise
const mainclear=document.querySelector(".mainclear");
const authorImages = {
    'HT News Desk': 'images.png',
    'Business Standard': 'bs.png',
    'The Economic Times': 'economictimes.png',
    'The Times of India': 'toi.png',
    'toi tech desk':'toi.png',
    'NDTV': 'ndtv.png',
    'NDTV News':'ndtv.png',
    'NDTV Profit':'ndtv.png',
    'NDTV Sports':'ndtv.png',
    'Akash Podishetti':'toi.png',
    'TOI Etimes':'toi.png',
    'TOI Sports Desk':'toi.png',
    'ndtv sports':'ndtv.png',
    'Hindustan Times': 'images.png',
    'HT Entertainment Desk':'images.png',
    'The Washington Post':'wsp.png',
    'The New York Times':'nyk.jpg',
    'New York Post ':'nyp.png',
    'Page Six':'ps.png',
    'MarketWatch':'mw.png',
    'NPR':'npr.png',
    'The Associated Press':'ap.png',
    'Barak Ravid':'bk.png',
    'Saskya Vandoorne, Chris Liakos, Jessie Gretener, Issy Ronald':'bk.png',
    'News18':'nes18.png',
    'india today science desk':'inditod.png',
    'The Hindu':'thehindu.png',
    'India Today World Desk':'inditod.png',
    'null':'ndtv.png',
    'ETHealthWorld':'health.svg',
    'CNBCTV18':'cnbc.png',
    'The Guardian':'guard.png',
    'Sky Sports':'sky.png',
    'Birmingham Live':'birming.png',
    'Sky News':'sky.png',
    'The Race':'guard.png',
    'The Independent':'ind.png',
    'Daily Mail':'daily.png',
    'Dorth Wales live':'north.png',
    'Gizmodo':'giz.png',
    'Axios':'axis.png',
    'CNBC':'cnbc.png',
    'ESPN':'espn.png',
    'India Today':'indt.png',
    'Telecoms.com':'Telecom.png',
    'Bandai Namco':'bnd.png',
    'Gadgets 360':'',
    'Mint':'mint.png',
    'The Financial Express':'finex.png',
    'SamMobile - Samsung news':'sam.png',
    'Forbes':'forbes.png',
    'ABP Live':'apb.png',
    'Moneycontrol':'apb.png',
    '123telugu':'apb.png',
    'DNA India':'dna.webp',
    'Zoom':'zoom.png',
    'BusinessLine':'bline.jfif',
    'The Indian Express':'index.png',
    'Sportstar':'Big-Logo.png',
    'Firstpost':'Firstpost.com_Logo.png',
    'ICC':'ICC_International-Cricket-Council_logo.png',
    'Cricbuzz':'Cricbuzz_Logo.svg.png',
    'OneCricket':''
};

async function fetchnewscountry(country){
    
    const url=`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=c9fac730ef284886a1be6dc1858033eb`;
    const response= await fetch(url);
            if(response.status==400){
                alert("location is invalid");
                
            }
            else if(response.status==200){
                const json=await response.json();
                // console.log(json);
               const articles= json.articles.slice(1, 7);
               const cards=document.createElement('div');
                cards.classList.add('cards');
                mainclear.innerHTML='';
               articles.forEach((article,index) => {
                

                const cardsec=document.createElement('div');
                cardsec.classList.add('cardsec');
                const author = document.createElement('div');
                author.classList.add('author-info');
    
                
                const authorImage = document.createElement('img');
                authorImage.classList.add('author-image');
                if (article.author && authorImages[article.author]) {
                    authorImage.src = `/img/${authorImages[article.author]}`;
                    authorImage.alt = article.author;
                }
                else{
                    authorImage.src = `/img/inditod.png`;
                }
                author.appendChild(authorImage);
                

                const textsettinghindi=document.createElement('div');
                textsettinghindi.classList.add('textsettinghindi');

                const langhead = document.createElement('h1');
                langhead.classList.add('langhead');
                langhead.textContent = article.title;

                const urlcon=document.createElement('div');
                urlcon.classList.add('urlcon');

                const langp = document.createElement('a');
                langp.classList.add('langp');
                langp.href = article.url;
                langp.target = '_blank';
                langp.textContent = 'Read Full Article Here';

                //add note button
                const overlay = document.querySelector(".overlay");
                const addnote= document.createElement("button");
                addnote.classList.add('addnotebtn');
                addnote.textContent="MakeNote";

                const addoverlay=document.querySelector("#addoverlay");
                
                const addnoteele=document.querySelector(".addnote")
                const closebtn= document.querySelector(".close");
                closebtn.addEventListener('click',()=>{
                    if(addnoteele.style.display="block"){
                        addnoteele.style.display="none";
                        addoverlay.style.display = "none";
                    }
                })
                
                addnote.addEventListener('click',()=>{
                    if(addnoteele.style.display="none"){
                        addnoteele.style.display="block";
                        addoverlay.style.display = "block";
                    }
                   
                })
                
  
                textsettinghindi.appendChild(author);
                textsettinghindi.appendChild(langhead);
                urlcon.appendChild(langp);
                urlcon.appendChild(addnote);
                textsettinghindi.appendChild(urlcon);
                cardsec.appendChild(textsettinghindi);

                cards.appendChild(cardsec);
                mainclear.appendChild(cards);
               });
            }
}

indiabtn.addEventListener("click",()=>{
    // console.log("i was clicked india")
    if(indiacards.style.display=="block"){
        indiacards.style.display="none";
    }
    else{
        indiacards.style.display="block";
        usacards.style.display="none";
        ukcards.style.display="none";
        const country="in";
        fetchnewscountry(country);
    }
})

usabtn.addEventListener("click",()=>{
    // console.log("i was clicked usa")
    if(usacards.style.display=="block"){
        usacards.style.display="none";
    }
    else{
        usacards.style.display="block";
        indiacards.style.display="none";
        ukcards.style.display="none";
        const country="us";
        fetchnewscountry(country);
    }
})
ukbtn.addEventListener("click",()=>{
    // console.log("i was clicked usa")
    if(ukcards.style.display=="block"){
        ukcards.style.display="none";
    }
    else{
        ukcards.style.display="block";
        indiacards.style.display="none";
        usacards.style.display="none";
        const country="gb";
        fetchnewscountry(country);
    }
})

//fetch news category wise
const categorycards=document.querySelector(".categorycards");
async function fetchNewscategory(country, category) {
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=c9fac730ef284886a1be6dc1858033eb`;
    const response = await fetch(url);
    
    if (response.status === 400) {
        alert("Location is invalid");
    } else if (response.status === 200) {
        const json = await response.json();
        // console.log(json);
        const articles = json.articles.slice(1, 7);
        displayNews(articles);
    }
}

function displayNews(articles) {
    categorycards.innerHTML = '';  // Clear previous news

    const cards = document.createElement('div');
    cards.classList.add('cards');

    articles.forEach((article, index) => {
        const cardsec = document.createElement('div');
        cardsec.classList.add('cardsec');
        const author = document.createElement('div');
        author.classList.add('author-info');

        const authorImage = document.createElement('img');
        authorImage.classList.add('author-image');
        if (article.author && authorImages[article.author]) {
            authorImage.src = `/img/${authorImages[article.author]}`;
            authorImage.alt = article.author;
        } else {
            authorImage.src = `/img/inditod.png`;
        }
        author.appendChild(authorImage);

        const textsettinghindi = document.createElement('div');
        textsettinghindi.classList.add('textsettinghindi');

        const langhead = document.createElement('h1');
        langhead.classList.add('langhead');
        langhead.textContent = article.title;

        const urlcon = document.createElement('div');
        urlcon.classList.add('urlcon');

        const langp = document.createElement('a');
        langp.classList.add('langp');
        langp.href = article.url;
        langp.target = '_blank';
        langp.textContent = 'Read Full Article Here';

        //add note button
        const overlay = document.querySelector(".overlay");
        const addnote= document.createElement("button");
        addnote.classList.add('addnotebtn');
        addnote.textContent="MakeNote";

        const addoverlay=document.querySelector("#addoverlay");
        
        const addnoteele=document.querySelector(".addnote")
        const closebtn= document.querySelector(".close");
        closebtn.addEventListener('click',()=>{
            if(addnoteele.style.display="block"){
                addnoteele.style.display="none";
                addoverlay.style.display = "none";
            }
        })
        
        addnote.addEventListener('click',()=>{
            if(addnoteele.style.display="none"){
                addnoteele.style.display="block";
                addoverlay.style.display = "block";
            }
           
        })

        textsettinghindi.appendChild(author);
        textsettinghindi.appendChild(langhead);
        urlcon.appendChild(langp);
        urlcon.appendChild(addnote);
        textsettinghindi.appendChild(urlcon);
        cardsec.appendChild(textsettinghindi);

        cards.appendChild(cardsec);
        categorycards.appendChild(cards);
    });
}


document.querySelectorAll('.catbtn').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        const country = getSelectedCountry();  // This function needs to return the currently selected country
        
        if (country) {
            fetchNewscategory(country, category);
        } else {
            alert("Please select a country first.");
        }
    });
});


function getSelectedCountry() {
    if (indiacards.style.display === "block") {
        return "in";
    } else if (usacards.style.display === "block") {
        return "us";
    } else if (ukcards.style.display === "block") {
        return "gb";
    }
    return null;
}
