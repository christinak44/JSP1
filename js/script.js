/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
//Homer Simpson quotes from screenrant.com
const quotes = [
  {
    id: 1,
    quote: 'It takes two to lie; One to lie, and one to listen.',
    source: 'Homer Simpson',
    // type: 'Real Talk ala Mr. Simpson',
    // citation: 'The Simpsons, Season 3, Ep 20',
    // year: 1992

  },

  {
    id: 2,
    quote: "Facts are meaningless. You could use facts to prove anything that's even remotely true.",
    source: 'Homer Simpson',
    // type: 'Real Talk ala Mr. Simpson',
    // citation: 'The Simpsons, Season 9, EP 8',
    // year: 1997

  },

  {
    id: 3,
    quote:  "I am so smart! I am so smart! S-M-R-T! I mean S-M-A-R-T!",
    source: 'Homer Simpson',
    // type: 'Motivation ala Mr. Simpson',
    citation: 'The Simpsons, Season 5, Ep 3',
    year: 1993

  },

  {
    id: 4,
    quote: "D'oh!",
    source: 'Homer Simpson',
    // type: 'Classic Mr. Simpson',
    citation: 'The Simpsons',
    // year: ''

  },
  //simpsons.fandom.com/wiki

  {
    id: 5,
    quote: "All my life I've had one dream. To achieve my many goals. Mr. Burns has never given me a thumbs up or a 'way to be' or a 'you go girl!'",
    source: 'Homer Simpson',
    // type: 'Relatable Mr. Simpson',
    // citation: 'The Simpsons, Season 14, EP 15',
    year: 2003
  }
];
// console.log(quotes);

/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
 let randomQuote = Math.floor( Math.random() * quotes.length );
 return quotes[randomQuote];
  
}



/***
 * `printQuote` function
***/
function printQuote() {
  const seenQuotes = {};
  let quote = getRandomQuote();
  while(seenQuotes[quote.id]){
    //Only add to seenQuotes if this quote ID isn't there
    if(!seenQuotes[quote.id]){
      seenQuotes[quote.id] = true;
    } else {
      //call getRandomQuote again if it's an already seen quote
      quote = getRandomQuote();
    }
  }
  let displayQuote = `<p class="quote"> ${quote.quote} </p><p class="source"> ${quote.source}`;
  if (quote.citation) {
    displayQuote += `<span class="citation"> ${quote.citation} </span>`;
  }
  if (quote.year) {
    displayQuote += `<span class="year"> ${quote.year} </span>`;
  }
  displayQuote += `</p>`;
  return document.getElementById('quote-box').innerHTML =  displayQuote;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
printQuote();