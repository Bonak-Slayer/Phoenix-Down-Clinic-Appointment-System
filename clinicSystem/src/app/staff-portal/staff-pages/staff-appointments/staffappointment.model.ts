export class StaffappointmentModel {
  constructor(public id: string,
              public date: string,
              public status: string,
              public category: string,
              public patient: string,
              public doctor: string,
              public clinic: string){}
}
