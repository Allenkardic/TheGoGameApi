import { Request, Response, RequestHandler, NextFunction } from 'express';
import { IAuthRequest } from '../interfaces/IRequest';


class TokenSecurity {

  static config(): TokenSecurity {
    return new TokenSecurity();
  }

  private extractUser(req: Request): string {

    if (req.headers.username) {
      return req.headers.username as unknown as string;
    }
    return '';
  }
  
  validUserSession(): RequestHandler{

    return async (req: IAuthRequest, res: Response, next: NextFunction) => {
  
      const user = this.extractUser(req);
  
      // No API token provided
      if (!user) {
        res.status(401).json(transformResponse?.(401, 'No username provided'));
        return;
      }
      req.principal = user;
      next();

    };
  }

}

export const transformResponse = (code: number, message: any): any => {
  const data: any = {};
  if (code === 401) {
    data.code = 'TOKEN_MISSING';
  } else {
    data.code = 'SERVER_ERROR';
  }
  
  if (message instanceof Error) {
    data.message = message.message;
  } else if (typeof message === 'string') {
    data.message = message;
  } else {
    data.message = 'Unable to verify request';
  }
  
  if (typeof message === 'object' && message.data) {
    data.data = message.data;
  }
  return data;
};


export const Security = TokenSecurity.config();
export default TokenSecurity;