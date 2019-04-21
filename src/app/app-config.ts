import {environment} from '../environments/environment';

export class AppConfig {
    public static url = environment.production ? 'https://www.dominusdev.com:8999/api/' : 'http://192.168.0.100:8000/api/';
}
