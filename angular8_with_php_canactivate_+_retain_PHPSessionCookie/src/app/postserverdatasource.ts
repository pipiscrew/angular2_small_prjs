import { Observable } from 'rxjs/internal/Observable';
import { ServerDataSource } from 'ng2-smart-table';

export class PostServerDataSource extends ServerDataSource {

    protected requestElements(): Observable<any> {
        console.log("sdfsd");
        let httpParams = this.createRequesParams();
        return this.http.post(this.conf.endPoint, httpParams, { withCredentials: true, observe: 'response' });
    }

}