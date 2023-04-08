import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogoQuiz from '../../assets/images/quiz.png';
import './styles.css';

function Home() {
  const navigate = useNavigate();

  function start() {
    return navigate('/game');
  }

  return (
    <div className="container">
        <h1 className='titulo'>Bem-vindo ao</h1>
        <img src={LogoQuiz} alt="Logo" className='logo'/>
        <small className='descricao'>Se divertido com esse Quiz insano!</small>

        <button onClick={start} className='btn-start'>🚀 Começar</button>

        <footer className='footer'>
            <span className='autor'>Criado por 
                <a href="https://github.com/irlanebraga" target={"_blank"} rel="noreferrer" className='autor'> Irlane Braga </a>
            </span>
        </footer>
    </div>
  )
}

export default Home;