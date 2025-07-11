import React, { useState } from 'react';
import ForgotPasswordComponent from '../../components/organism/ForgotPasswordComponent';

// import { Container } from './styles';

const ForgotPasswordContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleForgotPassword = () => {
    setIsLoading(true);
    setFeedback(null);

    // Simula envio de e-mail já que não temos um backend(2 segundos)
    setTimeout(() => {
      setIsLoading(false);
      setFeedback('E-mail de recuperação enviado com sucesso!');
    }, 2000);
  };

  return (
    <ForgotPasswordComponent
      onForgotPassword={handleForgotPassword}
      isLoading={isLoading}
      feedback={feedback}
      error={false}
    />
  );
};

export default ForgotPasswordContainer;