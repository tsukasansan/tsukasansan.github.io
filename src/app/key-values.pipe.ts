import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'keyValues'
})
export class KeyValuesPipe implements PipeTransform {

    transform(value: any, args: any[] = null): any {
        if (!value) {
            return;
        }
        return Object.keys(value).map(key => value[key]);
    }
}
