import { Component } from '@angular/core';

@Component({
    selector: 'my-child',
    template: `
        <div>
            <span>我是child{{a}}</span>
            <input type="button" value="按我" (click)="f()">
        </div>
    `
})
export class ChildComponent  {
    a:number = 9;

    f(){
        this.a++;
    }
}