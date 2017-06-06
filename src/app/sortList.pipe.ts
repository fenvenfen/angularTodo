import { Injectable, Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sortList'
})
@Injectable()
export class SortListPipe implements PipeTransform {

  transform(users: any, key: string, direction: number): any[] {
    if (key && users !== null && users.length > 0) {
      users.sort(
        (a: any, b: any) => {
          const propertyA: number|string = this.getProperty(a, key);
          const propertyB: number|string = this.getProperty(b, key);

          if (propertyA < propertyB) {
            return -1 * direction;
          } else if (propertyA > propertyB) {
            return 1 * direction;
          } else {
            return 0;
          }
        }
      );
    }
    return users;
  }

  private getProperty (value: { [key: string]: any}, key: string): number|string {
    if (value == null || typeof value !== 'object') {
      return undefined;
    }
    console.log(value)

    const keys: string[] = key.split('.');
    let result: any = value[keys.shift()];

    for (const key of keys) {
      if (result == null) { // check null or undefined
        return undefined;
      }

      result = result[key];
    }

    return result;
  }
}