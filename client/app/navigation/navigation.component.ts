import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})

export class NavigationComponent {
    isClicked = [1,0,0,0] ;

    clicked(temp:number){
        this.isClicked = [0,0,0,0] ;
        this.isClicked[temp] = 1 ;
    }    

}