import { AsideSection } from "../sections/AsideSection";
import styles from "./page.module.css";

const dynamicParams = false

const MainPage = async ({ params }: {
    params: Promise<{ lang: string }>
}) => {

    const language = (await params).lang

    return (
        <div>
            <AsideSection language={language} />
        </div>
    );
}

const generateStaticParams = async () => {
    return [{ lang: 'en' }, { lang: 'pt' }, { lang: 'es' }]
}

export { generateStaticParams, dynamicParams }
export default MainPage