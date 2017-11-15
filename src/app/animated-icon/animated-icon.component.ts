import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-animated-icon',
  template: `<i class="{{currentIcon}}"></i>`,
  styleUrls: ['./animated-icon.component.css']
})
export class AnimatedIconComponent implements OnInit {
  @Input() icon: number = 0; 
  @Input() icons: string[] = [
    'fa fa-battery-0',
    'fa fa-battery-1',
    'fa fa-battery-2',
    'fa fa-battery-3',
    'fa fa-battery-4'
  ]
  get currentIcon() {
    return this.icons[this.icon];
  }

  _animate: boolean = true
  get animate() {
    return this._animate; 
  }

  @Input() set animate(animate) {
    this._animate = animate; 
    if (!this._animate) {
      this.icon = 0; 
    }
  }

  updateIcon() {
    if (this.animate) {
      if (this.icon < (this.icons.length -1)) {
        return this.icon++; 
      }
      return this.icon = 0; 
    }
  }

  @Input() delay: number = 500; 

  startAnimation() {
    setInterval(() => this.updateIcon(), this.delay); 
  }

  ngOnInit() {
    this.startAnimation(); 
  }

}
