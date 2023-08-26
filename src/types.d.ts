export interface Children {
  children: React.ReactNode
}
export interface AuthData {
  email?: string
  name?: string
  phone_number?: string
  password?: string
  password_confirmation?: string
}

export interface GetServiceResponse {
  data: Service[]
}

export interface Service {
  id?: number
  nameService: string
  price: number
}

export interface Urls {
  services:string
  summary: string
}

export interface StylesNavLink {
  isActive: string
  notActive: string
}