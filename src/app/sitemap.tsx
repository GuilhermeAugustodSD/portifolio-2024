import { MetadataRoute } from "next"
import { languages } from "./constants/languages"
import { DictionaryLanguagesType } from "./types/language"
import { Languages } from "next/dist/lib/metadata/types/alternative-urls-types"

const Sitemap = (): MetadataRoute.Sitemap => {

    const languagesUTS = languages.map((language) => language.lang)
    const languagesRoutes: DictionaryLanguagesType = {} as DictionaryLanguagesType

    languagesUTS.forEach(uts => {
        languagesRoutes[uts as keyof DictionaryLanguagesType] = `https://nextjs.org/${uts}`
    })

    return [
        {
            url: 'https://nextjs.org',
            lastModified: new Date(),
            alternates: {
                languages: languagesRoutes as Languages<string>
            },
        },
    ]
}

export default Sitemap