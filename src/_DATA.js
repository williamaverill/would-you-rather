let users = [
  {
    id: "sarahedo",
    name: "Sarah Edo",
    avatarURL:
      "https://avatars.dicebear.com/v2/female/08a5fc6f136ccc9d2705826e620c73e9.svg",
    answers: {
      "8xf0y6ziyjabvozdd253nd": "optionOne",
      "6ni6ok3ym7mf1p33lnez": "optionTwo",
      am8ehyc8byjqgar0jgpub9: "optionTwo",
      loxhs1bqm25b708cmbf3g: "optionTwo",
    },
    questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
  },
  {
    id: "tylermcginnis",
    name: "Tyler McGinnis",
    avatarURL:
      "https://avatars.dicebear.com/v2/male/08a5fc6f136ccc9d2705826e620c73e9.svg",
    answers: {
      vthrdm985a262al8qx3do: "optionOne",
      xj352vofupe1dqz9emx13r: "optionTwo",
    },
    questions: ["loxhs1bqm25b708cmbf3g", "vthrdm985a262al8qx3do"],
  },
  {
    id: "johndoe",
    name: "John Doe",
    avatarURL:
      "https://avatars.dicebear.com/v2/gridy/08a5fc6f136ccc9d2705826e620c73e9.svg",
    answers: {
      xj352vofupe1dqz9emx13r: "optionOne",
      vthrdm985a262al8qx3do: "optionTwo",
      "6ni6ok3ym7mf1p33lnez": "optionTwo",
    },
    questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
  },
];

let questions = [
  {
    id: "8xf0y6ziyjabvozdd253nd",
    author: "sarahedo",
    timestamp: 1467166872634,
    optionOne: {
      votes: ["sarahedo"],
      text: "have horrible short term memory",
    },
    optionTwo: {
      votes: [],
      text: "have horrible long term memory",
    },
  },
  {
    id: "6ni6ok3ym7mf1p33lnez",
    author: "johndoe",
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: "become a superhero",
    },
    optionTwo: {
      votes: ["johndoe", "sarahedo"],
      text: "become a supervillain",
    },
  },
  {
    id: "am8ehyc8byjqgar0jgpub9",
    author: "sarahedo",
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: "be telekinetic",
    },
    optionTwo: {
      votes: ["sarahedo"],
      text: "be telepathic",
    },
  },
  {
    id: "loxhs1bqm25b708cmbf3g",
    author: "tylermcginnis",
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: "be a front-end developer",
    },
    optionTwo: {
      votes: ["sarahedo"],
      text: "be a back-end developer",
    },
  },
  {
    id: "vthrdm985a262al8qx3do",
    author: "tylermcginnis",
    timestamp: 1489579767190,
    optionOne: {
      votes: ["tylermcginnis"],
      text: "find $50 yourself",
    },
    optionTwo: {
      votes: ["johndoe"],
      text: "have your best friend find $500",
    },
  },
  {
    id: "xj352vofupe1dqz9emx13r",
    author: "johndoe",
    timestamp: 1493579767190,
    optionOne: {
      votes: ["johndoe"],
      text: "write JavaScript",
    },
    optionTwo: {
      votes: ["tylermcginnis"],
      text: "write Swift",
    },
  },
];

export function generateUID() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

export function _getUsers() {
  return new Promise((res, rej) => {
    setTimeout(() => res(users), 1000);
  });
}

export function _getQuestions() {
  return new Promise((res, rej) => {
    setTimeout(() => res(questions), 1000);
  });
}

function formatQuestion(question) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author: question.author,
    optionOne: {
      votes: [],
      text: question.optionOne.text,
    },
    optionTwo: {
      votes: [],
      text: question.optionTwo.text,
    },
  };
}

export function _saveQuestion(question) {
  return new Promise((res, rej) => {
    const authedUser = question.author;
    const formattedQuestion = formatQuestion(question);

    setTimeout(() => {
      questions = [...questions, formattedQuestion];

      console.log(users.filter((user) => user.id == authedUser));

      users = [
        ...users,
        users
          .filter((user) => user.id === authedUser)[0]
          .questions.concat([formattedQuestion.id]),
      ];

      res(formattedQuestion);
    }, 1000);
  });
}

export function _saveQuestionAnswer(authedUser, qid, answer) {
  return new Promise((res, rej) => {
    console.log(authedUser.id);
    setTimeout(() => {
      users = [
        ...users,
        users.map((user) => {
          if (user.id !== authedUser.id) {
            return user;
          } else {
            return Object.assign({}, user, {
              answers: { ...user.answers, [qid]: answer },
            });
          }
        }),
      ];

      questions = [
        ...questions,
        questions
          .filter((question) => question.id === qid)[0]
          [answer].votes.concat(authedUser.id),
      ];

      res();
    }, 500);
  });
}
