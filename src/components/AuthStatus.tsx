import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import styles from '../styles/AuthStatus.module.scss';

const AuthStatus: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className={styles['auth-status']}>
      {isAuthenticated ? (
        <span className={`badge bg-success ${styles.badge}`}>Conectado</span>
      ) : (
        <span className={`badge bg-danger ${styles.badge}`}>Desconectado</span>
      )}
    </div>
  );
};

export default AuthStatus;