import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, DecimalPipe } from '@angular/common';
import { HttpAdapter } from './http-adapter.service';
import { JwtService } from './jwt-service/jwt.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { SnackbarNotificationService } from './snackbar-notification-service/snackbar-notification.service';
import { SnackbarNotificationComponent } from './snackbar-notification-service/snackbar-notification.component';
import { AppDurationPipe } from './pipes/duration.pipe';
import { AppCurrencyPipe } from './pipes/currency.pipe';
import { AuthInterceptor } from './auth-interceptor.serice';

@NgModule({
  declarations: [
    SnackbarNotificationComponent,
    AppCurrencyPipe,
    AppDurationPipe
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    MatSnackBarModule,
    MatIconModule,
  ],
  exports: [
    AppDurationPipe,
    AppCurrencyPipe,
  ]
})
export class TonysSharedModule { 
  static forRoot() {
    return {
      ngModule: TonysSharedModule,
      providers: [ 
        HttpAdapter,
        JwtService, 
        SnackbarNotificationService,
        AuthInterceptor,
      ]
    }
  }
}
