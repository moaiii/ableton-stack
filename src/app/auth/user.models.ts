export class User {

  constructor(
    public firstName: string,
    public lastName: string,
    public artistName: string,
    public profilePicture?: string,
    public genreOne: string,
    public genreTwo?: string,
    public genreThree?: string,
    public soundcloudUrl: string,
    public dropboxUrl: string,
    public websiteUrl?: string,
    public password: string,
    public email: string
  ){}

}
