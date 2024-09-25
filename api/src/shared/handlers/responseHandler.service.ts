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

  error(errorMessage: string, statusCode: number = 400, data: any = null) {
    return {
      status: 'error',
      message: errorMessage,
      statusCode,
      data,
    };
  }
}
