import { Injectable } from '@angular/core';

@Injectable()
export class Site{
    url:string;
    name:string;
    constructor(url:string, name:string){
        this.url = url;
        this.name = name;
    }
}