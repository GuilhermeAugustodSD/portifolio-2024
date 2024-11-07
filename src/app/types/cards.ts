import { LanguageType } from "./language"

export interface CardType extends LanguageType {
  name: string
  description: string
}

export interface CardPropsType extends CardType {}

export interface CardRecommendationPropsType extends CardType {
  company?: string
  grade?: number 
  picture?: string 
}

export interface CardExperiencesType extends LanguageType {
  ocupation: string
  company: string
  startDate: string
  endDate: string
  description: string

}