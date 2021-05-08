import { Component, Inject } from "@angular/core"
import { MAT_SNACK_BAR_DATA } from "@angular/material/snack-bar";
import { SnackbarNotificationData } from "./snackbar-notification-data.interface";

@Component({
    template: `
        <span style="
            font-size: 16px; 
            color: #FFF; 
            display: flex; 
            justify-content: space-between;
            align-items: center;">
            <span [innerHTML]="this.data.message"></span>
            <mat-icon style="transform: scale(1.2);">{{ this.data.icon }}</mat-icon>
        </span> 
    `
})
export class SnackbarNotificationComponent {
    constructor(@Inject(MAT_SNACK_BAR_DATA) public data: SnackbarNotificationData) {}
}
