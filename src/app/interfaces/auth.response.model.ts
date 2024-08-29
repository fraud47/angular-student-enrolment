export interface Token {
    access: string;
    expiresIn: number;
    accessTokenType: string;
    refresh: string;
    refreshExpiresIn: number;
  }
  
  export interface Role {
    type: string;
  }
  
  export interface ResponseBody {
    token: Token;
    roles: Role[];
  }
  
  export interface GeneralResponse {
    successful: boolean;
    narration: string;
    status: number;
    body: ResponseBody;
  }
  