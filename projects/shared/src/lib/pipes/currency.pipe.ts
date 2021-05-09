import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'appCurrency',
    pure: false,
})
export class AppCurrencyPipe implements PipeTransform {

    constructor() {}

    transform(value: number): string 
    {
       return `CA $${ Math.ceil(value / 100) }`
    }
}