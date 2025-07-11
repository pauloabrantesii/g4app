# Desafio G4 - App React Native

Um aplicativo React Native desenvolvido com Clean Code, SOLID, Redux, navegação (Stack/Tab), integração com API pública, internacionalização (i18n), estilização via StyleSheet, separação de componentes burros/containers, e testes.

## 🚀 Funcionalidades

- **Autenticação**: Login com API pública (DummyJSON)
- **Navegação**: Stack Navigator + Tab Navigator
- **Geolocalização**: Exibe mapa estático com coordenadas do device
- **Favoritos**: Cadastro e gerenciamento de usuários favoritos
- **Internacionalização**: Suporte a múltiplos idiomas (i18n)
- **Estado Global**: Redux para gerenciamento de estado
- **Testes**: Testes unitários para componentes principais

## 🛠️ Tecnologias Utilizadas

- React Native
- TypeScript
- Redux Toolkit
- React Navigation
- React i18next
- @react-native-community/geolocation
- React Native Testing Library
- Jest

## 📱 Estrutura do Projeto

```
src/
├── components/
│   ├── atoms/          # Componentes básicos (Button, Input, etc.)
│   ├── molecules/      # Componentes compostos
│   ├── organisms/      # Componentes complexos (Login, Home, etc.)
│   └── templates/      # Templates reutilizáveis
├── containers/         # Containers com lógica de negócio
├── store/             # Redux store e slices
├── services/          # Serviços de API
├── hooks/             # Hooks customizados
├── navigation/        # Configuração de navegação
├── types/             # Tipos TypeScript
├── helper/            # Funções utilitárias
└── assets/            # Imagens e recursos
```

## 🔧 Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn
- React Native CLI
- Android Studio (para Android)
- Xcode (para iOS - apenas macOS)

## 🚀 Como Executar

### 1. Instalar Dependências

```bash
npm install
```

### 2. iOS (apenas macOS)

```bash
cd ios
pod install
cd ..
npx react-native run-ios
```

### 3. Android

```bash
npx react-native run-android
```

## 🔑 Credenciais de Login

O app utiliza a API pública [DummyJSON](https://dummyjson.com/docs/auth#auth-me) para autenticação.

**Credenciais de teste:**
- **Usuário:** `emilys`
- **Senha:** `emilyspass`

### Endpoints da API

- **Login:** `POST https://dummyjson.com/auth/login`
- **Usuário atual:** `GET https://dummyjson.com/auth/me`
- **Refresh token:** `POST https://dummyjson.com/auth/refresh`

## 🧪 Executar Testes

```bash
# Executar todos os testes
npm test

# Executar testes específicos
npm test -- --testPathPattern="LoginComponent|AddUserModal"

# Executar testes em modo watch
npm test -- --watch
```

## 📋 Funcionalidades Principais

### Login
- Autenticação com username e senha
- Validação de campos
- Tratamento de erros
- Navegação automática após login
- "Esqueci minha senha"

### Home
- Exibição de dados do usuário logado
- Geolocalização com mapa estático
- Botões de ação (Cadastrar, Consultar organização)

### Favoritos
- Lista de usuários favoritos
- Adicionar novos usuários via modal
- Busca e filtro por nome/telefone
- Máscara de telefone automática

### Navegação
- Stack Navigator para Login/ForgotPassword
- Tab Navigator para Home/Favorites/Telephone
- Navegação automática baseada no estado de autenticação

## 🎨 Design System

O projeto utiliza uma paleta de cores centralizada:

```typescript
export const colors = {
  primary: '#007AFF',
  secondary: '#5856D6',
  background: '#F2F2F7',
  white: '#FFFFFF',
  black: '#000000',
  gray: '#8E8E93',
  lightGray: '#C7C7CC',
  error: '#FF3B30',
  success: '#34C759',
};
```

## 👨‍💻 Autor

**Paulo Abrantes**
- GitHub: [@pauloabrantes](https://github.com/pauloabrantes)


