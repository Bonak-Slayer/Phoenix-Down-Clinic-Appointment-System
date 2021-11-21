export class MessageModel{
  constructor(
    public content: string,
    public date: string,
    public sender: string,
    public recipient: string
  ){}
}