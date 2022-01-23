let users = [
  {
    id: "sarahedo",
    name: "Sarah Edo",
    avatarURL:
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn1.vectorstock.com%2Fi%2Fthumb-large%2F71%2F05%2Fcyber-gamer-girl-esport-logo-mascot-design-vector-35337105.jpg&imgrefurl=https%3A%2F%2Fwww.vectorstock.com%2Froyalty-free-vectors%2Fgirl-gamer-logo-vectors&tbnid=Q1ww73c1JLEhNM&vet=12ahUKEwijkP_f_Mb1AhWIBDQIHVSxDfkQMyhVegUIARCYAQ..i&docid=obVko_mF6xbWhM&w=238&h=250&q=girl%20game%20logo%20avatar&hl=en&ved=2ahUKEwijkP_f_Mb1AhWIBDQIHVSxDfkQMyhVegUIARCYAQ",
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
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.ytimg.com%2Fan%2FeX_L39UvZes%2F98699c08-8f5a-4e38-b296-69ce5589294a_mq.jpg%3Fv%3D5d3f36ee&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DeX_L39UvZes&tbnid=yzRTD0tnU36BIM&vet=12ahUKEwj1l--S-8b1AhWUJjQIHVMDDiYQMygCegQIARAm..i&docid=Li5Bp-o3wz9HgM&w=300&h=300&itg=1&q=tyler%20mcginnis&ved=2ahUKEwj1l--S-8b1AhWUJjQIHVMDDiYQMygCegQIARAm",
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
      "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F2d%2F0f%2F50%2F2d0f50e8e4f6b233c7cf70b4bd36f89c.png&imgrefurl=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F352477108322644529%2F&tbnid=xcgBehBT0MEFIM&vet=12ahUKEwim8NmH_Mb1AhWKATQIHRRACHYQMygBegUIARC5AQ..i&docid=2mftk_WuKQvqUM&w=800&h=600&itg=1&q=game%20logo%20avatar&hl=en&ved=2ahUKEwim8NmH_Mb1AhWKATQIHRRACHYQMygBegUIARC5AQ",
    answers: {
      xj352vofupe1dqz9emx13r: "optionOne",
      vthrdm985a262al8qx3do: "optionTwo",
      "6ni6ok3ym7mf1p33lnez": "optionTwo",
    },
    questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"],
  },
];

let questions = {
  "8xf0y6ziyjabvozdd253nd": {
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
  "6ni6ok3ym7mf1p33lnez": {
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
  am8ehyc8byjqgar0jgpub9: {
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
  loxhs1bqm25b708cmbf3g: {
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
  vthrdm985a262al8qx3do: {
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
  xj352vofupe1dqz9emx13r: {
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
};

function generateUID() {
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
    setTimeout(() => res({ ...questions }), 1000);
  });
}

function formatQuestion({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    },
  };
}

export function _saveQuestion(question) {
  return new Promise((res, rej) => {
    const authedUser = question.author;
    const formattedQuestion = formatQuestion(question);

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion,
      };

      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          questions: users[authedUser].questions.concat([formattedQuestion.id]),
        },
      };

      res(formattedQuestion);
    }, 1000);
  });
}

export function _saveQuestionAnswer({ authedUser, qid, answer }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer,
          },
        },
      };

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser]),
          },
        },
      };

      res();
    }, 500);
  });
}
