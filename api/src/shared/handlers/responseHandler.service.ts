import { Injectable } from '@nestjs/common';

@Injectable()
export class ResponseHandlerService {
  success(data: any, message: string = 'Operation successful') {
    return {
      status: 'success',
      message,
      data,
    };
  }

  error(errorMessage: string) {
    throw new Error(errorMessage);
  }
}
