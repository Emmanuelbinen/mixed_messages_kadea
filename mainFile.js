// Create an array of objects
const messages = [
    {
      subject: "You",
      adjectives: ["smart", "funny", "kind", "talented", "amazing"],
      verbs: ["are", "can be", "will be", "should be", "must be"],
      objects: ["do anything you set your mind to", "achieve great things", "make a difference in the world"],
      adverbialPhrases: ["with ease", "with passion", "with dedication"],
    },
    {
      subject: "The world",
      adjectives: ["big", "beautiful", "complex", "fascinating", "mysterious"],
      verbs: ["needs"],
      objects: ["your intelligence", "your creativity", "your empathy", "your passion", "your dedication"],
      adverbialPhrases: ["more than ever", "now more than ever"],
    },
    {
      subject: "Happiness",
      adjectives: ["true", "lasting", "genuine", "fulfilling", "deep"],
      verbs: ["is found"],
      objects: ["in helping others", "in pursuing your dreams", "in appreciating the simple things in life", "in being kind to yourself and others", "in finding your purpose"],
      adverbialPhrases: ["when you least expect it"],
    },
  ];

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