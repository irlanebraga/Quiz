import React, { useEffect, useState } from 'react';
import { useNavigation } from 'react-router-dom';
import { questions, shuffle} from '../../database/questions';
import LogoQuiz from '../../assets/images/quiz.png';
import Score from '../score'

import './styles.css';

function Game() {
  // const navigate = useNavigation();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questionSelected, setquestionSelected] = useState([]);
  const [userAnwsers, setuserAwnsers] = useState([]);
  const [finish, setFinish] = useState(false);

  useEffect(() => {
    if (questionSelected.length > 0) 
      return  

    const embaralhadas = shuffle(questions);
    const selectedQuestions = embaralhadas.slice(0,5);
    setquestionSelected(selectedQuestions);
  },[questionSelected])

  function handleAnswer(selectOptionIndex) {
    const currentQuestionData = questionSelected[currentQuestion];
    const userAnswer = currentQuestionData.answers[Number(selectOptionIndex)];
    setuserAwnsers([...userAnwsers, userAnswer]);

    if (currentQuestion < 4) {
      setCurrentQuestion(currentQuestion + 1);
    }else{
      setFinish(true);
    }
  }

  const currentQuestionData = questionSelected[currentQuestion];

  if (finish) {
    const correctAnswers = userAnwsers.filter(answer => answer.correct === true).length;
    return <Score score={correctAnswers}/>
  }

  return (
    <div className="container">
      <img src={LogoQuiz} alt="Logo Quiz" className='logo' />
      <div className="card">
        <div className="card-questao">
          <h2 className='card-titulo'>Pergunta {currentQuestion + 1} de 5</h2>
          <p className='questao'>{currentQuestionData?.question}</p>
        </div>

        <div className="card-resposta">
          <div className="card-opcao">
            {currentQuestionData?.answers.map((option, index) => (
              <button 
                key={index} 
                className='card-opcao' 
                onClick={() => handleAnswer(index)}>
                {option.text}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Game;