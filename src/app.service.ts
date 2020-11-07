import { Injectable } from '@nestjs/common';
import axios from 'axios';
@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    const res = await axios.get('https://ipapi.co/json');
    return res.data;
  }
}
