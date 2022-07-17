import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/routing.service';
import { TokenService } from 'src/app/token.service';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit {
  isLoggedIn: boolean = false;
  constructor(private routingService: RoutingService,
    private tokenService: TokenService) {
    let token: String = this.tokenService.getToken();
    if(token!=""){
      this.routingService.setCommunActiveRouteTo("Accueil")
    }else{
      this.routingService.changeRoutes([
        {
          name: "Accueil",
          styleClasses: "nav-item active",
          url: "/home"
        },
        {
          name: "Se Connecter",
          styleClasses: "nav-item",
          url: "/client/login"
        }
      ]);
    }
  }
  ngOnInit(): void {
    //animating
    setTimeout(()=>{
      document.getElementById("visual1")!.style.left = "-35%"
      document.getElementById("visual2")!.style.right = "-35%"
      document.getElementById("title")!.style.marginLeft = "0"
      document.getElementById("introductionCols")!.style.marginTop = "55px"
    },100);
  }

}
