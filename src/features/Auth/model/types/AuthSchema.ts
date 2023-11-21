export interface AuthSchema {
  email: string;
  password: string;
  repeatPassword?: string;
  isLoading: boolean;
  error?: string | boolean;
}
