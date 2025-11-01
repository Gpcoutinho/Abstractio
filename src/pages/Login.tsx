// Login.js
import React, { useState } from 'react';

function Login() {
  // Estados para armazenar os inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Impede que a página recarregue
    console.log('Enviando dados:', { email, password });
    
    // TODO: Fazer a chamada de API real aqui
  };

  return (
    // Container principal: centraliza tudo na tela
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      
      {/* O card do formulário */}
      <form 
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm" 
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          Login
        </h2>
        
        {/* Grupo do Email */}
        <div className="mb-4">
          <label 
            htmlFor="email" 
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        {/* Grupo da Senha */}
        <div className="mb-6">
          <label 
            htmlFor="password" 
            className="block text-gray-700 text-sm font-semibold mb-2"
          >
            Senha:
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        {/* Botão de Entrar */}
        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white font-bold py-3 rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Login;