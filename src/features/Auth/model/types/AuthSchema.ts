export interface AuthSchema {
  email: string;
  password: string;
  isLoading: boolean;
  error?: string | undefined;
}
