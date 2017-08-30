export class Util {
  static getPropertiesOfBooleanArray(obj: boolean[]): string[] {
    const result = [];
    obj.forEach((element,property) => {
        if(element){
        if (obj.hasOwnProperty(property)) {
        result.push(property);
      }
      }
    });
    return result;
  }
}