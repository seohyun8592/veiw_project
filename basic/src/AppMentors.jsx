// import React, { useState } from 'react';
import { useReducer } from 'react';
import personReducer from './personReducer/personReducer';

export default function AppMentor() {
  // const [person, setPerson] = useState(initialPerson);
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const hadleUpdate = () => {
    const change = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);

    dispatch({ type: 'update', change, current });
  };

  const handleAdd = () => {
    const addMentor = prompt(`추가하는 멘토의 이름을 입력해주세요`);
    const addTitld = prompt(`추가하는 멘토의 타이틀을 입력해주세요`);

    dispatch({ type: 'added', addMentor, addTitld });
  };

  const handleDelete = () => {
    const deleteMentor = prompt(`삭제 할 멘토의 이름을 입력해주세요`);

    dispatch({ type: 'delete', deleteMentor });
  };
  return (
    <div>
      <h1>
        {person.name}은 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={hadleUpdate}>멘토 이름 바꾸기(변경)</button>

      <button onClick={handleAdd}>
        추가 할 멘토의 이름을 입력해 주세요!(추가)
      </button>

      <button onClick={handleDelete}>
        삭제 할 멘토를 선택해 주세요!(삭제)
      </button>
    </div>
  );
}

const initialPerson = {
  name: '서현',
  title: '개발자',
  mentors: [
    {
      name: '밥',
      title: '시니어개발자',
    },
    {
      name: '제임스',
      title: '시니어개발자',
    },
  ],
};
