import React, { useState } from 'react';

const LoginForm: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'demo' && password === 'demo') {
      onLogin();
    } else {
      setError('Usuario o contraseña incorrectos.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Usuario" value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Contraseña" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">Iniciar sesión</button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default LoginForm;