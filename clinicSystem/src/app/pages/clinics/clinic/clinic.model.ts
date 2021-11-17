export class ClinicModel {

  constructor(public id: string,
              public name: string,
              public address: string,
              public contact: string,
              public email: string,
              public operationStart: string,
              public operationEnd: string,
              public startDay: string,
              public endDay: string,
              public description: string){}
}
