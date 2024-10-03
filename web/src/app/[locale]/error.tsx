"use client";
import React from 'react';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const ErrorPage: React.FC<ErrorProps> = ({ error, reset }) => {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Ocorreu um erro</h1>
      <p>{error.message}</p>
      <button onClick={() => reset()}>Tentar novamente</button>
    </div>
  );
};

export default ErrorPage;