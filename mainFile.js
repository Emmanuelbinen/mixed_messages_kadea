// Generate a random index into the array
const randomIndex = Math.floor(Math.random() * messages.length);

// Get the random message object
const randomMessage = messages[randomIndex];

// Randomly select a word from each list in the message object
const randomSubject = randomMessage.subject;
const randomAdjective = randomMessage.adjectives[Math.floor(Math.random() * randomMessage.adjectives.length)];
const randomVerbIndex = Math.floor(Math.random() * randomMessage.verbs.length);
const randomVerb = randomMessage.verbs[randomVerbIndex];
const randomObject = randomMessage.objects[Math.floor(Math.random() * randomMessage.objects.length)];

let randomAdverbialPhrase;
if (Array.isArray(randomMessage.adverbialPhrases)) {
  const randomIndex = Math.floor(Math.random() * randomMessage.adverbialPhrases.length);
  randomAdverbialPhrase = randomMessage.adverbialPhrases[randomIndex];
} else {
  randomAdverbialPhrase = randomMessage.adverbialPhrases;
}

// Construct the random message
let message = randomSubject + " " + randomVerb + " " + randomAdjective + " and " + randomObject + " " + randomAdverbialPhrase + ".";

// Display the random message
console.log(message);