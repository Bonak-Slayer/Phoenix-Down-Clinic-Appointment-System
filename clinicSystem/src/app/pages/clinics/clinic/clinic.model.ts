export class ClinicModel {

  constructor(public id: string,
              public name: string,
              public address: string,
              public contact: string,
              public email: string,
              public operationStart: string,
              public operationEnd: string,
              public description: string){}
}
