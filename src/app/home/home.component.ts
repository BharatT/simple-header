import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  images = ['../assets/images/a11.png', '../assets/images/a12.png', '../assets/images/a13.png', '../assets/images/a14.png', '../assets/images/a15.png', '../assets/images/a16.png', '../assets/images/a17.png'];
  imge;
  names = ['Ram', 'sita', 'Bharat'];
  uname;
  i = 0;
  clearImg;
  clearJ;
  constructor() {

  }
  ngOnInit() {
    this.j();
    this.slider();
  }

  j() {
    let i = 0;
    this.clearJ = setInterval(() => {
      this.uname = this.names[i];
      console.log("J :", i)
      i = i + 1;
      if (i === this.names.length) {
        i = 0;
      }
    }, 1000);
  }

  slider(){
    let i = 0;
   this.clearImg = setInterval(()=>{
    console.log("Img :", i)
      this.imge = this.images[i];
      i++;
      if(i === this.images.length){
        i = 0;
      }
    },2000)

  }
  ngOnDestroy(){
    if (this.clearImg) {
      clearInterval(this.clearImg);
   }
   if (this.clearJ) {
    clearInterval(this.clearJ);
 }
  }
}
