
import { Injectable } from "@angular/core";
import {HttpInterceptor, HttpRequest, HttpHandler, HttpContextToken} from "@angular/common/http";
import { AuthService } from "./auth.service";


export const BYPASS_LOG = new HttpContextToken(() => false);
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const authToken = this.authService.getToken();
    if (req.context.get(BYPASS_LOG) === false){
    req = req.clone({
      setHeaders: {
        Authorization: "" + authToken
      }
    });
    }
    return next.handle(req);
  }
}
