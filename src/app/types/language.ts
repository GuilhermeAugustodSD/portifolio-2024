export interface LanguageType {
    language: string
}

export interface DictionaryLanguagesType {
    en: string
    es: string
    pt: string
}

export interface DictionaryType {
    residence: DictionaryLanguagesType
    city: DictionaryLanguagesType
    age: DictionaryLanguagesType
    download: DictionaryLanguagesType
    yearsExperience: DictionaryLanguagesType
    concludedProjects: DictionaryLanguagesType
    happyClients: DictionaryLanguagesType
    awards: DictionaryLanguagesType
    myServices: DictionaryLanguagesType
    recomendations: DictionaryLanguagesType
    experiences: DictionaryLanguagesType
}