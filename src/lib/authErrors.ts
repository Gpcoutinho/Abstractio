import { FirebaseError } from 'firebase/app';

const MESSAGES: Record<string, string> = {
  'auth/invalid-credential': 'E-mail ou senha incorretos.',
  'auth/invalid-email': 'E-mail inválido.',
  'auth/user-disabled': 'Esta conta foi desativada.',
  'auth/user-not-found': 'Não encontramos uma conta com esse e-mail.',
  'auth/wrong-password': 'E-mail ou senha incorretos.',
  'auth/email-already-in-use': 'Já existe uma conta com esse e-mail.',
  'auth/weak-password': 'A senha precisa ter pelo menos 6 caracteres.',
  'auth/too-many-requests': 'Muitas tentativas. Aguarde um pouco e tente de novo.',
  'auth/popup-closed-by-user': 'Login cancelado.',
  'auth/network-request-failed': 'Falha de conexão. Verifique sua internet.',
};

export function getAuthErrorMessage(err: unknown): string {
  if (err instanceof FirebaseError) {
    return MESSAGES[err.code] ?? 'Não foi possível completar a ação. Tente novamente.';
  }
  return 'Não foi possível completar a ação. Tente novamente.';
}
