import { Component, Input, Output } from "@angular/core";
import { EventEmitter } from "@angular/forms/src/facade/async";
import { UsersService } from "app/users.service";

@Component({
    selector: 'app-users',
    template: `
        <p> I'm in the usersComponent </p>
        <button (click) = "showInfo = true"> show info </button>
        <button (click) = "onShowAlert()"> Show alert ! </button>
        <p *ngIf="showInfo"> Some extra user information!</p>
        <p *ngFor="let user of users"> {{user}} </p>
        <p [ngStyle]="{'background-color': color}"> This is color </p>
    `
})
export class UsersComponent {
    color = "green";
    showInfo = false;
    //@Input() users: any;

    onShowAlert() {
        this.alertThrown.emit("This is my message");
    }
    @Output() alertThrown = new EventEmitter<string>();

    users: any[]; 

    constructor(private usersService: UsersService) {
      this.users = this.usersService.getUsers();
    }
    
}