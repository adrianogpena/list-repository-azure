import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class RequestsService {
  private logger = new Logger(RequestsService.name);

  constructor(protected http: HttpService) {}

  private getHttp(url: string): any {
    return this.http.get(url).toPromise();
  }

  private postHttp(url: string, data: any): any {
    return this.http
      .post(url, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .toPromise();
  }

  async getListAzure(): Promise<{ id: number }> {
    const response = await this.getHttp(`${process.env.URL_AZURE}`);
    return response.data;
  }
}
