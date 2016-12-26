import { Component, OnInit } from '@angular/core' ;

import { UserService } from './user.service';
import { User } from './user';

@Component({
    moduleId: module.id,
    selector: 'my-user',
    providers: [ UserService ],
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit{
    users : User[] ;
    user : User ;
    constructor(private userService: UserService) { }

    ngOnInit(): void{
        this.userService.getUserDetails().then(users => {
            this.users = users ;
            this.user = users[0] ;
        })
    }
}
