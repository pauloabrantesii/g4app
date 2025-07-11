# Sistema de Internacionalização (i18n)

Este projeto utiliza `react-i18next` para gerenciar traduções e internacionalização.

## Estrutura

```
src/i18n/
├── index.ts              # Configuração principal do i18n
├── locales/
│   ├── pt-BR.ts         # Traduções em português
│   └── en-US.ts         # Traduções em inglês
└── README.md            # Esta documentação
```

## Como Usar

### 1. Hook Personalizado

```typescript
import { useTranslation } from '../hooks/useTranslation';

const MyComponent = () => {
  const { t, changeLanguage, isPortuguese, isEnglish } = useTranslation();

  return (
    <Text>{t('login.welcome') as string}</Text>
  );
};
```

### 2. Funções Disponíveis

- `t(key, options?)` - Traduz uma chave
- `changeLanguage(language)` - Muda o idioma
- `getCurrentLanguage()` - Obtém o idioma atual
- `isPortuguese()` - Verifica se é português
- `isEnglish()` - Verifica se é inglês

### 3. Adicionando Novas Traduções

#### Em `src/i18n/locales/pt-BR.ts`:
```typescript
export const ptBR = {
  mySection: {
    myKey: 'Minha tradução',
    withVariable: 'Olá {{name}}!',
  },
};
```

#### Em `src/i18n/locales/en-US.ts`:
```typescript
export const enUS = {
  mySection: {
    myKey: 'My translation',
    withVariable: 'Hello {{name}}!',
  },
};
```

### 4. Usando com Variáveis

```typescript
const { t } = useTranslation();

// Com variável
<Text>{t('validation.minLength', { min: 6 }) as string}</Text>

// Resultado: "Mínimo de 6 caracteres"
```

### 5. Organização das Chaves

Use uma estrutura hierárquica para organizar as traduções:

```typescript
{
  // Tela específica
  login: {
    welcome: 'Bem-vindo',
    button: 'Entrar',
  },
  
  // Seção comum
  common: {
    loading: 'Carregando...',
    error: 'Erro',
  },
  
  // Validações
  validation: {
    required: 'Campo obrigatório',
    email: 'Email inválido',
  },
}
```

## Idiomas Suportados

- **pt-BR** - Português Brasileiro (padrão)
- **en-US** - Inglês Americano

## Configuração

O i18n é inicializado automaticamente no `App.tsx`:

```typescript
import './src/i18n';
```

## Componente de Seleção de Idioma

Use o `LanguageSelector` para permitir que o usuário mude o idioma:

```typescript
import LanguageSelector from '../components/molecules/LanguageSelector';

<LanguageSelector />
```

## Boas Práticas

1. **Sempre use chaves descritivas** - `login.welcome` em vez de `welcome`
2. **Organize por seções** - Agrupe traduções relacionadas
3. **Use variáveis para conteúdo dinâmico** - `{{name}}` em vez de concatenar strings
4. **Mantenha consistência** - Use a mesma estrutura em todos os idiomas
5. **Teste em todos os idiomas** - Verifique se todas as traduções estão corretas 