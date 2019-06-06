import { Component, OnInit } from '@angular/core';
declare var $ : any;
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'infinia-Ecom';
 constructor (){

 }
   ngOnInit () {
     firebase.initializeApp({
      apiKey: "AIzaSyC6RUH-emygRPPxBlA3bjOuZYlsWW60N6E",
      authDomain: "infinia-2bede.firebaseapp.com"
     });
    $(document).ready(function () {
     
      $('#app').slick({
          dots: false,
          arrows: false,
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          responsive: [
              {
                  breakpoint: 767,
                  centerMode: true,
                  centerPadding: '20px',
                  settings: {
                      slidesToShow: 1.65,
                      slidesToScroll: 1
                  }
              }
              
          ]
      });
      
      })
 
  }
}
