import { Component, OnInit } from '@angular/core';
import { Dummy } from '../models/dummy.model';
import { Users } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {

  user:Users ;
  dummy:Dummy;
  user1:any;
  msg:any;
    constructor(private userservice:UserService) {
      this.user=new Users();
      this.dummy=new Dummy();
    }


    Add()
    {
       console.log(this.user);
       this.userservice.addUser(this.user).subscribe(
        u=>{
           this.user1 = u;
           this.msg=undefined;
           console.log(this.user1);
          },
           err=>this.msg = err.error.Message);
    }


  ngOnInit(): void {
  }

}
