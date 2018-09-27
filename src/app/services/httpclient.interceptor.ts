import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse} from '@angular/common/http';
import { UserService } from './user.service';
import { Events } from 'ionic-angular';

@Injectable()
export class HttpClientInterceptor implements HttpInterceptor {

	constructor(private userService: UserService,
				      public events: Events) {

	}

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		// customRequest refers to the updates request that has the users usinque token attached
		let customRequest;

    return this.userService.getUserToken()

		.mergeMap(token => {
			if (token) {
				customRequest = req.clone({ headers: req.headers.set('Authorization',  token )})
			} else {
        customRequest = req.clone({ headers: req.headers.set('Authorization','' )})
			}
			return next.handle(customRequest).do((request: HttpEvent<any>) => {
				if (request instanceof HttpResponse) {
					// do stuff with response if you want
				}},
				(err: any) => {
					if (err instanceof HttpErrorResponse) {
						if (err.status === 401) {
							console.log("unauthorized");
							// redirect to the login route
							// this.authService.handleUnauthorizedUser();
						}
					}
			})
		})
	}

}
