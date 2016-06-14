import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router-deprecated';

import { Group } from './group';
import { GroupService } from './group.service';


@Component({
    selector: 'groups-list',
    templateUrl: 'app/group/groups-list.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [GroupService]      
})

export class GroupsListComponent implements OnInit {
    
    private loading:boolean = true;
    
    groups: Group[];
    
    errorMessage: any;
    
    constructor(
        private router: Router,
        private groupService: GroupService       
        ) { }

    ngOnInit() {
        this.groupService.getGroups()
            .then(groups => this.groups = groups).then(loading => this.loading = false)
            .catch(error => this.errorMessage = error);
    }

    goToNewGroup() {
        this.navigateToNewGroup()
    }

    private navigateToNewGroup(){
        this.router.navigate(['GroupAdd']);
    }
}