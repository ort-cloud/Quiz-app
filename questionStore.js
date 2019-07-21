const STORE = [
  {
    question: "How many Star Wars ‘Episodes” are there? (pre Disney)",
    answers: [2, 4, 6, 8],
    correctAnswer: "6",
    correctImg: 'https://banner2.kisspng.com/20180402/rww/kisspng-han-solo-luke-skywalker-chewbacca-leia-organa-solo-cosplay-5ac288bead74e8.0596458915226984307105.jpg',
    altCorrect: 'Han Solo',
    wrongImg: 'https://banner2.kisspng.com/20180528/tje/kisspng-admiral-ackbar-anakin-skywalker-galactic-civil-war-5b0bdaf8575b03.3381948915275036083578.jpg',
    altWrong: 'Admiral Ackbar'
  },
  {
    question: "Of those ‘Episodes’ which is the first released?",
    answers: [2, 4, 6, 8],
    correctAnswer: "4",
    correctImg: 'https://banner2.kisspng.com/20180402/rww/kisspng-han-solo-luke-skywalker-chewbacca-leia-organa-solo-cosplay-5ac288bead74e8.0596458915226984307105.jpg',
    altCorrect: 'Han Solo',
    wrongImg: 'https://banner2.kisspng.com/20180528/tje/kisspng-admiral-ackbar-anakin-skywalker-galactic-civil-war-5b0bdaf8575b03.3381948915275036083578.jpg',
    altWrong: 'Admiral Ackbar'
  },
  {
    question: "Which (pre Disney) 'Episode' was the last to be released?",
    answers: [2, 4, 6, 8],
    correctAnswer: "6",
    correctImg: 'https://banner2.kisspng.com/20180402/rww/kisspng-han-solo-luke-skywalker-chewbacca-leia-organa-solo-cosplay-5ac288bead74e8.0596458915226984307105.jpg',
    altCorrect: 'Han Solo',
    wrongImg: 'https://banner2.kisspng.com/20180528/tje/kisspng-admiral-ackbar-anakin-skywalker-galactic-civil-war-5b0bdaf8575b03.3381948915275036083578.jpg',
    altWrong: 'Admiral Ackbar'
  },
  {
    question: "Which ‘Episode’ does Lando Calrissian first appear?",
    answers: [1, 3, 5, 7],
    correctAnswer: "5",
    correctImg: 'https://banner2.kisspng.com/20180402/rww/kisspng-han-solo-luke-skywalker-chewbacca-leia-organa-solo-cosplay-5ac288bead74e8.0596458915226984307105.jpg',
    altCorrect: 'Han Solo',
    wrongImg: 'https://banner2.kisspng.com/20180528/tje/kisspng-admiral-ackbar-anakin-skywalker-galactic-civil-war-5b0bdaf8575b03.3381948915275036083578.jpg',
    altWrong: 'Admiral Ackbar'
  },
  {
    question: "Who is Luke Skywalker’s father?",
    answers: ["Han Solo", "Ben Kenobi", "Darth Vader", "Admiral Ackbar"],
    correctAnswer: "Darth Vader",
    correctImg: 'https://banner2.kisspng.com/20180402/rww/kisspng-han-solo-luke-skywalker-chewbacca-leia-organa-solo-cosplay-5ac288bead74e8.0596458915226984307105.jpg',
    altCorrect: 'Han Solo',
    wrongImg: 'https://banner2.kisspng.com/20180528/tje/kisspng-admiral-ackbar-anakin-skywalker-galactic-civil-war-5b0bdaf8575b03.3381948915275036083578.jpg',
    altWrong: 'Admiral Ackbar'
  },
  {
    question: `“That’s no moon. It’s a space station.” What is this quote in reference too?`,
    answers: [
      "Star Destroyer",
      "Death Star",
      "Super Star Destroyer",
      "Millenium Falcon"
    ],
    correctAnswer: "Death Star",
    correctImg: 'https://banner2.kisspng.com/20180402/rww/kisspng-han-solo-luke-skywalker-chewbacca-leia-organa-solo-cosplay-5ac288bead74e8.0596458915226984307105.jpg',
    altCorrect: 'Han Solo',
    wrongImg: 'https://banner2.kisspng.com/20180528/tje/kisspng-admiral-ackbar-anakin-skywalker-galactic-civil-war-5b0bdaf8575b03.3381948915275036083578.jpg',
    altWrong: 'Admiral Ackbar'
  },
  {
    question: "What planet was destroyed in ‘A New Hope’?",
    answers: ["Coruscant", "Tatooine", "Endor", "Alderaan"],
    correctAnswer: "Alderaan",
    correctImg: 'https://banner2.kisspng.com/20180402/rww/kisspng-han-solo-luke-skywalker-chewbacca-leia-organa-solo-cosplay-5ac288bead74e8.0596458915226984307105.jpg',
    altCorrect: 'Han Solo',
    wrongImg: 'https://banner2.kisspng.com/20180528/tje/kisspng-admiral-ackbar-anakin-skywalker-galactic-civil-war-5b0bdaf8575b03.3381948915275036083578.jpg',
    altWrong: 'Admiral Ackbar'
  },
  {
    question: "Which character made the order to destroy the planet?",
    answers: [
      "Darth Vader",
      "Grand Moff Tarkin",
      "Chewbacca",
      "Admiral Thrawn"
    ],
    correctAnswer: "Grand Moff Tarkin",
    correctImg: 'https://banner2.kisspng.com/20180402/rww/kisspng-han-solo-luke-skywalker-chewbacca-leia-organa-solo-cosplay-5ac288bead74e8.0596458915226984307105.jpg',
    altCorrect: 'Han Solo',
    wrongImg: 'https://banner2.kisspng.com/20180528/tje/kisspng-admiral-ackbar-anakin-skywalker-galactic-civil-war-5b0bdaf8575b03.3381948915275036083578.jpg',
    altWrong: 'Admiral Ackbar'
  },
  {
    question:
      "What was the name of the bounty hunter who took Han Solo to Jabba the Hutt?",
    answers: ["Boba Fett", "Lando Calrissian", "Nein Nunb", "C-3PO"],
    correctAnswer: "Boba Fett",
    correctImg: 'https://banner2.kisspng.com/20180402/rww/kisspng-han-solo-luke-skywalker-chewbacca-leia-organa-solo-cosplay-5ac288bead74e8.0596458915226984307105.jpg',
    altCorrect: 'Han Solo',
    wrongImg: 'https://banner2.kisspng.com/20180528/tje/kisspng-admiral-ackbar-anakin-skywalker-galactic-civil-war-5b0bdaf8575b03.3381948915275036083578.jpg',
    altWrong: 'Admiral Ackbar'
  },
  {
    question: "When Lea tell Han she loves him, what was his response?",
    answers: ["I love you, too", "Shut up", "I told you so", "I know"],
    correctAnswer: "I know",
    correctImg: 'https://banner2.kisspng.com/20180402/rww/kisspng-han-solo-luke-skywalker-chewbacca-leia-organa-solo-cosplay-5ac288bead74e8.0596458915226984307105.jpg',
    altCorrect: 'Han Solo',
    wrongImg: 'https://banner2.kisspng.com/20180528/tje/kisspng-admiral-ackbar-anakin-skywalker-galactic-civil-war-5b0bdaf8575b03.3381948915275036083578.jpg',
    altWrong: 'Admiral Ackbar'
  }
];
