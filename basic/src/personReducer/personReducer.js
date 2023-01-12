export default function personReducer(person, action) {
  switch (action.type) {
    case 'update': {
      const { change, current } = action;
      return {
        ...person,
        mentors: person.mentors.map((mentor) => {
          if (mentor.name === change) {
            return {
              ...mentor,
              name: current,
            };
          }
          return mentor;
        }),
      };
    }

    case 'added': {
      const { addMentor, addTitld } = action;
      return {
        ...person,
        mentors: [...person.mentors, { name: addMentor, title: addTitld }],
      };
    }

    case 'delete': {
      const { deleteMentor } = action;
      return {
        ...person,
        mentors: person.mentors.filter((m) => m.name !== deleteMentor),
      };
    }
    default: {
      throw Error(`알 수 없는 액션 타입이다. ${action.type}`);
    }
  }
}
