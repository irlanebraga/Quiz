import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogoQuiz from '../../assets/images/quiz.png';
import './styles.css';

function Score({ score }) {
  const navigate = useNavigate();
  const messages = {
    0 : "Você não sabe nada de React 😂",
    1 : "Você sabe muito pocuo sobre React 😢",
    2 : "VocÊ sabe um pouco sobre React 😊",
    3 : "Você está no caminho 😁",
    4 : "Você sabe muito sobre React 😜",
    4 : "Você é Fera 😎",
  }

  function restart() {
    return navigate('/');
  }

  return (
    <div className="container">
        <h1 className='titulo'>Pontuação</h1>
        <img src={LogoQuiz} alt="Logo" className='logo'/>
        <small className='descricao'>{score ? messages[score] : messages[5]}</small>

        <div className="score-container">
          <big className='score'>{score ? score : 5}</big>
          <small className='total'>/ 5</small>
        </div>

        <button onClick={restart} className='btn-restart'>Reiniciar</button>

        <footer className='footer'>
            <span className='autor'>Criado por 
                <a href="https://github.com/irlanebraga" target={"_blank"} rel="noreferrer" className='autor'> Irlane Braga </a>
            </span>
        </footer>
    </div>
  )
}

export default Score;