import { DictionaryLanguagesType } from "./language"

export interface ClientType{
    name: string
    company: string
    picture: string
    description: DictionaryLanguagesType
    grade?: number
}