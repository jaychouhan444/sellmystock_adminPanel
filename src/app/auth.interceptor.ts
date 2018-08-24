import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(req, next) {
        const token = localStorage.getItem('token');
        const authRequest = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${token}`)
        });
        console.log(req);
        return next.handle(authRequest);
    }

}
