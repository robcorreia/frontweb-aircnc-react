import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }) {
  const [email, setEmail] = useState('');//inicia a input em branco


  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post('/sessions', {/* email: email */ email });

    const { _id } = response.data; //pega só o id do response

    localStorage.setItem('user', _id); //banco de dados do navegador
  
    history.push('/dashboard');
  }
  return (
    <>
      <p>Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa</p>

      <form onSubmit={handleSubmit}>{/* serve para realizar uma ação quando o usuario fazer um submit */}
        <label htmlFor="email">E-MAIL *</label>
        <input
          id="email"
          type="text"
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={event => setEmail(event.target.value)}
 /*serve para pegar o valor de email digitado e setar no setEmail*/ />
        <button className="btn" type="submit">Entrar</button>
      </form>
    </>
  )
}