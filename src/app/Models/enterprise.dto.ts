export class EnterpriseDTO {
  enterpriseId: number
  constitucionJuridica: string
  socialDenomination: string
  activity: string
  logo: string
  nameSurname: string
  contactEmail: string
  dateCreation: string
  enterpriseSite: string
  island: string

 constructor(
  enterpriseId: number,
  constitucionJuridica: string,
  socialDenomination: string,
  activity: string,
  logo: string,
  nameSurname: string,
  contactEmail: string,
  dateCreation: string,
  enterpriseSite: string,
  island: string,
  ) {
    this.enterpriseId = enterpriseId
    this.constitucionJuridica = constitucionJuridica
    this.socialDenomination = socialDenomination
    this.activity = activity
    this.logo = logo
    this.nameSurname = nameSurname
    this.contactEmail = contactEmail
    this.dateCreation = dateCreation
    this.enterpriseSite = enterpriseSite
    this.island = island
    }
}
