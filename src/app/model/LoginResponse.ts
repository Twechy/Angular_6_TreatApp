export interface Response {
  id: number;
  userName: string;
  email: string;
  accessToken: string;
  providerName?: any;
}

export interface LoginResponse {
  status: number;
  message: string;
  userResponse: Response;
}

