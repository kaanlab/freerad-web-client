import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router-deprecated';

import { GroupAttr } from './groupattr';
import { GroupAttrService } from './groupattr.service';

@Component({
    selector: 'groupsattr-list',
    templateUrl: 'app/groupattr/groupsattr-list.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [GroupAttrService]      
})

export class GroupsAttrListComponent implements OnInit {
    
    private loading:boolean = true;
    
    groupAttrs: GroupAttr[];
    //selectedUser: GroupAttr;
    errorMessage: any;
    
    constructor(
        private router: Router,
        private groupAttrService: GroupAttrService       
        ) { }

    ngOnInit() {
        this.groupAttrService.getGroupsAttr()
            .then(groupAttrs => this.groupAttrs = groupAttrs)
            .then(loading => this.loading = false)
            .catch(error => this.errorMessage = error);
    }

    goToNewGroupAttr() {
        this.navigateToNewGroupAttr()
    }

    private navigateToNewGroupAttr(){
        this.router.navigateByUrl('/group/groupattr/add');
    }
}