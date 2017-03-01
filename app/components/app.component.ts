import { Component } from '@angular/core';
import {Site} from '../Site.ts';

@Component({
  selector: 'my-app',
  templateUrl: '/app/views/app.component.html',
})
export class AppComponent  {
	a:number = 2777;
    list:string[] = ["二条","东风"];
    isShow:boolean = true;
    values:string;

    wangzhiArr:Site[] = [
        new Site("http://www.163.com","网易"),
        new Site("http://www.sohu.com","搜狐"),
        new Site("http://www.sina.com","新网")
    ]

	fun(){
		this.a++;
	}

    changeshow(){
        this.isShow = !this.isShow;
    }

    ku(event:any){
        this.values += event.target.value + ",";
    }
}