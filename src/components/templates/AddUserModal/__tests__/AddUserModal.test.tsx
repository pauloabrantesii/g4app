import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import AddUserModal from '../index';

// Mock simples do i18n
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { language: 'pt-BR' },
  }),
}));

describe('AddUserModal', () => {
  it('deve chamar onSave com os dados corretos', () => {
    const onSave = jest.fn();
    const onClose = jest.fn();
    
    const { getByPlaceholderText, getByText } = render(
      <AddUserModal 
        visible={true} 
        onClose={onClose} 
        onSave={onSave} 
      />
    );

    // Preenche os campos
    fireEvent.changeText(getByPlaceholderText('Nome'), 'João Silva');
    fireEvent.changeText(getByPlaceholderText('Telefone'), '(11) 91234-5678');
    
    // Clica no botão salvar
    fireEvent.press(getByText('Salvar'));

    // Verifica se onSave foi chamado com os dados corretos
    expect(onSave).toHaveBeenCalledWith(
      expect.objectContaining({
        name: 'João Silva',
        phone: '(11)91234-5678', // Formato aplicado pela máscara
        image: expect.any(Object)
      })
    );
  });

  it('deve fechar o modal ao clicar em Cancelar', () => {
    const onSave = jest.fn();
    const onClose = jest.fn();
    
    const { getByText } = render(
      <AddUserModal 
        visible={true} 
        onClose={onClose} 
        onSave={onSave} 
      />
    );

    // Clica no botão cancelar
    fireEvent.press(getByText('Cancelar'));

    // Verifica se onClose foi chamado
    expect(onClose).toHaveBeenCalled();
  });

  it('deve limpar os campos após salvar', () => {
    const onSave = jest.fn();
    const onClose = jest.fn();
    
    const { getByPlaceholderText, getByText } = render(
      <AddUserModal 
        visible={true} 
        onClose={onClose} 
        onSave={onSave} 
      />
    );

    // Preenche os campos
    fireEvent.changeText(getByPlaceholderText('Nome'), 'João Silva');
    fireEvent.changeText(getByPlaceholderText('Telefone'), '(11) 91234-5678');
    
    // Clica no botão salvar
    fireEvent.press(getByText('Salvar'));

    // Verifica se os campos foram limpos
    expect(getByPlaceholderText('Nome').props.value).toBe('');
    expect(getByPlaceholderText('Telefone').props.value).toBe('');
  });
}); 