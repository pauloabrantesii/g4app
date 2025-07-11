import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import LoginComponent from '../index';

// Mock simples do i18n
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { language: 'pt-BR' },
  }),
}));

describe('LoginComponent', () => {
  it('deve chamar onLogin com os dados corretos', () => {
    const onLogin = jest.fn();
    const handleForgotPassword = jest.fn();

    const { getByPlaceholderText, getByText } = render(
      <LoginComponent
        onLogin={onLogin}
        handleForgotPassword={handleForgotPassword}
        isLoading={false}
        error={false}
      />,
    );

    // Preenche os campos
    fireEvent.changeText(
      getByPlaceholderText('login.loginPlaceholder'),
      'usuario',
    );
    fireEvent.changeText(
      getByPlaceholderText('login.passwordPlaceholder'),
      'senha123',
    );

    // Clica no botão de login
    fireEvent.press(getByText('login.enterButton'));

    // Verifica se onLogin foi chamado com os dados corretos
    expect(onLogin).toHaveBeenCalledWith({
      username: 'usuario',
      password: 'senha123',
    });
  });

  it('deve chamar handleForgotPassword quando clicar no link', () => {
    const onLogin = jest.fn();
    const handleForgotPassword = jest.fn();

    const { getByText } = render(
      <LoginComponent
        onLogin={onLogin}
        handleForgotPassword={handleForgotPassword}
        isLoading={false}
        error={false}
      />,
    );

    // Clica no link de esqueci minha senha
    fireEvent.press(getByText('login.forgotPassword'));

    // Verifica se handleForgotPassword foi chamado
    expect(handleForgotPassword).toHaveBeenCalled();
  });
});
