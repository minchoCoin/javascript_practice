const quotes = [ //객체를 저장하는 배열
    {
        Quotes: "They must often change who would be constant in happiness or wisdom.",
        Author: "-Confucius-",
    },
    {
        Quotes: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        Author: "-Nelson Mandela-",
    },
    {
        Quotes: "Life is either a daring adventure or nothing at all.",
        Author: "-Helen Keller-",
    },
    {
        Quotes: "Only I can change me life, no one can do it for me.",
        Author: "-Carol Burnett-",
    },
    {
        Quotes: "When in doubt, choose change.",
        Author: "-Lily leung-",
    },
    {
        Quotes: "The die is cast.",
        Author: "-Julius caesar-",
    },
    {
        Quotes: "If you are not willing to risk the usual, you will have to settle for the ordinary.",
        Author: "-Jim Rohn-",
    }
    ,
    {
        Quotes: "War is delightful to those who have not experienced it.",
        Author: "-Erasmus-",
    }
    ,
    {
        Quotes: "Mankind must put an end to war, or war will put an end to mankind.",
        Author: "-John Fitzgerald Kennedy-",
    }
    ,
    {
        Quotes: "My first wish is to see this plague of mankind, war, banished from the earth.",
        Author: "-George Washington-",
    }

];

const quoteText = document.querySelector(".quote span:nth-child(1)");
const author = document.querySelector(".quote span:nth-child(2)");


function quoteSelect(){
    const selectedQuote = quotes[Math.floor(Math.random()*quotes.length)];

    quoteText.innerText = selectedQuote.Quotes;
    author.innerText = selectedQuote.Author;
}
quoteSelect();
setInterval(quoteSelect,10000);
