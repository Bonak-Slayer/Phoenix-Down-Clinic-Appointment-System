export class AppointmentModel {
  constructor(public id: string,
              public date: string,
              public status: string,
              public category: string,
              public doctor: string,
              public clinic: string,
              public dateCreated: string){}
}
