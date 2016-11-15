import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { GroupsListComponent } from './groups-list.component';
import { GroupDetailComponent } from './group-detail.component';
import { GroupAddComponent } from './group-add.component';
import { GroupEditComponent } from './group-edit.component';

import { GroupService } from './group.service'
import { GroupsRoutingModule } from './groups-routing.module';


@NgModule({
    imports: [           
      GroupsRoutingModule
    ],
    exports: [

    ],
    declarations: [
        GroupsListComponent,
        GroupDetailComponent,
        GroupAddComponent,
        GroupEditComponent
    ],
    providers: [
        GroupService
    ]
})
export class GroupsModule { }
