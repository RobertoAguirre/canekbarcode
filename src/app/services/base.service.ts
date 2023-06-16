import { environment } from 'src/environments/environment';

export abstract class BaseService {

  baseURL = environment.apiURL;

}
