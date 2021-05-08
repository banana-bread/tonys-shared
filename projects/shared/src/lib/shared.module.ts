import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HttpAdapter } from './http-adapter.service';
import { JwtService } from './jwt-service/jwt.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { SnackbarNotificationService } from './snackbar-notification-service/snackbar-notification.service';
import { SnackbarNotificationComponent } from './snackbar-notification-service/snackbar-notification.component';

@NgModule({
  declarations: [
    SnackbarNotificationComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    MatSnackBarModule,
    MatIconModule,
  ],
  exports: []
})
export class TonysSharedModule { 
  static forRoot() {
    return {
      ngModule: TonysSharedModule,
      providers: [ 
        HttpAdapter,
        JwtService, 
        SnackbarNotificationService,
      ]
    }
  }
}
