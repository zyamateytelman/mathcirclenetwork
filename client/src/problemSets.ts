// Problem sets for the Math Circle website

export type ProblemSet = {
  title: string;
  category: string;
  description: string;
  problems: { question: string; subparts?: string[] }[];
};

export const problemSets: ProblemSet[] = [
  {
    title: "Markov Chain Weather Problem",
    category: "Probability & Statistics",
    description:
      "Explore weather prediction using Markov chains. This problem introduces the concept of Markov processes and long-term probability.",
    problems: [
      {
        question:
          "Mathachusetts has the following weather pattern: If it is sunny one day, there is a 90% chance it will be sunny the next day and a 10% chance it will be rainy the next day. If it is rainy one day, there is a 50% chance it will be sunny the next day and a 50% chance it will be rainy the next day. Given that it is sunny today (October 26, 2023), what is the probability of rain on next 4th of July?",
      },
    ],
  },
  {
    title: "The Pirate Gold Problem",
    category: "Game Theory & Logic",
    description:
      "A classic logic puzzle about pirates, gold, and optimal strategies. This problem explores voting, survival, and maximizing rewards.",
    problems: [
      {
        question:
          "Seven pirates have 100 gold coins to split amongst themselves. They have chosen an interesting way of splitting the pot: The first pirate proposes a split. All pirates (including the proposer) vote yes/no. If 50% or more approve, the split is accepted. If not, the proposer is killed, and the next pirate proposes a new split, and so on. Each pirate wants to survive and get as much gold as possible. How should pirate 1 propose splitting the gold to maximize their gold?",
      },
    ],
  },
  {
    title: "Bayesian Reasoning: Sisters and Probability",
    category: "Probability & Logic",
    description:
      "A set of probability puzzles about families, daughters, and conditional probability. Great for exploring Bayesian reasoning!",
    problems: [
      {
        question:
          "You live in a city where every family has exactly two children, and each child has a 50/50 chance of being male or female.",
        subparts: [
          "(a) You meet someone and ask, 'Do you have a daughter?' They say yes. What is the probability that their daughter has a sister?",
          "(b) You meet someone and ask, 'Do you have a daughter born on a Tuesday?' They say yes. What is the probability that their daughter has a sister?",
          "(c) You meet someone and ask, 'Are you the father of the high-school valedictorian?' (who you know is a girl). They say yes. What is the probability that their daughter has a sister?",
        ],
      },
    ],
  },
  {
    title: "The Mathematics of Spot It!",
    category: "Combinatorics & Geometry",
    description:
      "Explore the math behind the game Spot It! (Dobble). These problems introduce finite projective planes, combinatorial design, and symmetry.",
    problems: [
      {
        question:
          "Suppose you want to design a deck where each card has exactly 8 symbols, and any two cards share exactly one symbol. What is the largest number of cards you can have in such a deck? How many different symbols do you need?",
      },
      {
        question:
          "Try to construct a small version of a Spot It! deck where each card has 3 symbols, and any two cards share exactly one symbol. How many cards and symbols are possible? Can you draw the cards and check the property?",
      },
      {
        question:
          "What is a finite projective plane? How does it relate to the Spot It! deck? Can you find the connection between the number of cards, symbols, and the arrangement?",
      },
      {
        question:
          "Why is it impossible to make a standard deck with, say, 7 symbols per card and 30 cards, where every pair of cards shares exactly one symbol? What mathematical property is violated?",
      },
    ],
  },
  {
    title: "The Grid Lock Problem",
    category: "Combinatorics & Geometry",
    description:
      "A fascinating puzzle involving a 4×4 grid of locks that can be rotated. This problem explores linear algebra over finite fields and matrix operations.",
    problems: [
      {
        question:
          "A door has 16 locks arranged in a 4×4 grid. Each lock has a key slot that is either vertical or horizontal. The door will only open when all key slots have the same orientation. You have a key that fits all locks, but here's the catch: when you turn the key in a particular lock, all other locks in that same row or column also turn. Can you open the door?",
        subparts: [
          "(a) Start with the configuration shown in the problem. Can you find a sequence of moves to get all locks to the same orientation?",
          "(b) What mathematical structure does this problem represent? Think about vectors and linear transformations.",
          "(c) How many different configurations are possible? How many moves are needed in the worst case?",
          "(d) Can you generalize this to an n×n grid? What conditions must be met for the door to be openable?",
        ],
      },
    ],
  },
  {
    title: "Sports Betting and Expected Value",
    category: "Probability & Statistics",
    description:
      "Explore the mathematics behind sports betting, expected value calculations, and decision theory in uncertain situations.",
    problems: [
      {
        question:
          "Consider a sports betting scenario where you can bet on the outcome of a game. The bookmaker offers odds that translate to a 60% probability of Team A winning and 40% probability of Team B winning.",
        subparts: [
          "(a) If you bet $100 on Team A and they win, you get $150 back. If they lose, you lose your $100. What is the expected value of this bet?",
          "(b) If you bet $100 on Team B and they win, you get $250 back. If they lose, you lose your $100. What is the expected value of this bet?",
          "(c) Which bet has the better expected value? Should you take either bet?",
          "(d) How do bookmakers set odds to ensure they make a profit? What mathematical principle is at work?",
        ],
      },
    ],
  },
  {
    title: "Power Ranking Systems",
    category: "Applied Mathematics",
    description:
      "Explore the mathematics behind ranking systems used in sports, competitions, and other competitive environments.",
    problems: [
      {
        question:
          "Consider a tournament where teams play each other and we want to create a power ranking system based on wins, losses, and the strength of opponents.",
        subparts: [
          "(a) Design a simple ranking system where each team gets points for wins and loses points for losses. How would you handle ties?",
          "(b) How can you incorporate the strength of opponents into your ranking? What mathematical concept does this represent?",
          "(c) Can you create a system that accounts for the margin of victory? What are the pros and cons of this approach?",
          "(d) How would you handle situations where teams haven't played the same number of games?",
        ],
      },
    ],
  },
];

export const categories = [
  {
    key: 'All',
    title: 'All Problems',
    icon: '🌐',
    description: 'All problem sets',
    color: 'from-slate-500/20 to-slate-700/20',
    difficulty: '',
    count: problemSets.length.toString(),
  },
  {
    key: 'Probability & Statistics',
    title: 'Probability & Statistics',
    icon: '📊',
    description: 'Probability, statistics, and Markov chains',
    color: 'from-green-500/20 to-emerald-500/20',
    difficulty: 'Intermediate',
    count: problemSets.filter(p => p.category === 'Probability & Statistics').length.toString(),
  },
  {
    key: 'Game Theory & Logic',
    title: 'Game Theory & Logic',
    icon: '♟️',
    description: 'Game theory, logic, and strategy',
    color: 'from-blue-500/20 to-cyan-500/20',
    difficulty: 'Advanced',
    count: problemSets.filter(p => p.category === 'Game Theory & Logic').length.toString(),
  },
  {
    key: 'Probability & Logic',
    title: 'Probability & Logic',
    icon: '🧮',
    description: 'Bayesian reasoning and probability puzzles',
    color: 'from-purple-500/20 to-pink-500/20',
    difficulty: 'Advanced',
    count: problemSets.filter(p => p.category === 'Probability & Logic').length.toString(),
  },
  {
    key: 'Combinatorics & Geometry',
    title: 'Combinatorics & Geometry',
    icon: '🔷',
    description: 'Combinatorics, geometry, and design theory',
    color: 'from-yellow-500/20 to-orange-500/20',
    difficulty: 'Expert',
    count: problemSets.filter(p => p.category === 'Combinatorics & Geometry').length.toString(),
  },
  {
    key: 'Applied Mathematics',
    title: 'Applied Mathematics',
    icon: '⚙️',
    description: 'Real-world applications and modeling',
    color: 'from-red-500/20 to-pink-500/20',
    difficulty: 'Intermediate',
    count: problemSets.filter(p => p.category === 'Applied Mathematics').length.toString(),
  },
]; 