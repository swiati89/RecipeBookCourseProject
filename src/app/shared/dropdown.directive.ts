import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
 @HostBinding('class.open') isOpen = false;


  constructor() { }

  ngOnInit() {}

  @HostListener('click') togleOpen (event: Event) {
    this.isOpen = !this.isOpen;
  }

}


