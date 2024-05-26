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
    <form className="mt-4" onSubmit={handleSubmit}>
      <div className="form-group mb-3">
        <label htmlFor="username" className="form-label">Usuario</label>
        <input id="username" className="form-control" type="text" value={username} onChange={e => setUsername(e.target.value)} />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="password" className="form-label">Contraseña</label>
        <input id="password" className="form-control" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </div>
      <button className="btn btn-primary btn-lg w-100" type="submit">Iniciar sesión</button>
      {error && <div className="text-danger mt-2">{error}</div>}
    </form>
  );
};

export default LoginForm;