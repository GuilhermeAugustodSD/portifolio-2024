import { MetadataRoute } from "next"
import { languages } from "../constants/languages"

const generateSitemaps = async () => {
    return languages
}

const sitemap = async ({ lang }: { lang: string }): Promise<MetadataRoute.Sitemap> => {
    return [
        {
            url: 'https://nextjs.org',
            lastModified: new Date(),
            alternates: {
                languages: {
                    en: 'https://nextjs.org/en',
                    es: 'https://nextjs.org/es',
                    pt: 'https://nextjs.org/pt',
                },
            },
        },
    ]
}

export { generateSitemaps }