import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit{
  
  showOptions:boolean = false;
  
  windowSize: { width: number; height: number } = { width: window.innerWidth, height: window.innerHeight };
  
  ngOnInit(): void {
    this.compareSize(this.windowSize.width);
  }

  showOpt(){
    this.showOptions = !this.showOptions;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.windowSize.width = window.innerWidth;

    this.compareSize(this.windowSize.width);
    
  }

  compareSize(size: number){
    if(size <= 750){
      if(this.showOptions) this.showOptions = !this.showOptions;
    }
    else{
      this.showOptions = true;
    }
  }

}
