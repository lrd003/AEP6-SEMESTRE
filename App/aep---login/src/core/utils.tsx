export const emailValidator = (email: string) => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) return 'Email não pode estar vazio.';
  if (!re.test(email)) return 'Ooops! É necessario um email valido.';

  return '';
};

export const passwordValidator = (password: string) => {
  if (!password || password.length <= 0) return 'Senha não pode estar vazia.';

  return '';
};

export const nameValidator = (name: string) => {
  if (!name || name.length <= 0) return 'Nome não pode estar vazio.';

  return '';
};
