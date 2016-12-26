import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router' ;

import { UserComponent } from './user/user.component' ;
import { BasicDetailsComponent } from './basic-details/basic-details.component' ;
import { FitBitComponent } from './fit-bit/fit-bit.component';
import { DynamicComponent } from './dynamic/dynamic.component';
import { ComputeTreeComponent } from './compute-tree/compute-tree.component';

const routes : Routes = [
    { path: 'user', component: UserComponent,
        children: [
            { path:'basic-details', component: BasicDetailsComponent },
            { path: 'fit-bit', component: FitBitComponent },
            { path: 'dynamic', component: DynamicComponent },
            { path: 'compute-premium', component: ComputeTreeComponent },
            { path:'', redirectTo: 'basic-details', pathMatch: 'full' }
        ]
    },
    { path: '', redirectTo: 'user', pathMatch: 'full' }
] 

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }

