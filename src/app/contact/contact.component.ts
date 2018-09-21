import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  user: any;

  constructor(public AuthService: AuthService) { }

  ngOnInit() {
    this.AuthService.getUser().subscribe(data => {
      this.user = data;
    });
  }

}
