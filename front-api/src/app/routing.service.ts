import { Injectable, EventEmitter } from '@angular/core';
import { RouteNavigator } from './modules/shared/models/RouteNavigator';
@Injectable({
  providedIn: 'root'
})
export class RoutingService {
  public routesEmitter:EventEmitter<Array<RouteNavigator>> = new EventEmitter<Array<RouteNavigator>>()
  public communRoutes = [
    {
      name: "Accueil",
      styleClasses: "nav-item",
      url: "/home"
    },
    {
      name: "Médecin",
      styleClasses: "nav-item",
      url: "/client/viewDoctors"
    },
    {
      name: "Articles",
      styleClasses: "nav-item",
      url: "/article"
    },
    {
      name: "Pharmacie",
      styleClasses: "nav-item",
      url: "/Pharmacie"
    },
    {
      name: "Question",
      styleClasses: "nav-item",
      url: "/questions"
    },
    {
      name: "Profile",
      styleClasses: "nav-item",
      url: "/client/profile"
    }
  ]
  constructor() { 
  }
  changeRoutes(routeLinks:Array<RouteNavigator>):void{
    this.routesEmitter.emit(routeLinks);
  }
  setCommunActiveRouteTo(name:String){
    let routes = this.communRoutes.map((route)=>{
      if(route.name==name)
        route.styleClasses = "nav-item active"
      else
        route.styleClasses = "nav-item"
      return route;
    })
    this.changeRoutes(routes);
  }
}
