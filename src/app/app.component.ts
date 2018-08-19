import { Component , OnInit} from '@angular/core';
import { LoginService } from "./providers/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{

  constructor(private loginService:LoginService){

  }

  ngOnInit(): void {
    console.log('started...');
  }
}