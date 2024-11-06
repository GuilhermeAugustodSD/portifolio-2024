import { AsideSection } from "../sections/AsideSection";
import styles from "./page.module.css";

export const dynamicParams = false

const MainPage = async ({ params }: {
    params: Promise<{ lang: string }>
}) => {

    const { lang } = await params

    return (
        <div>
            {lang}
            {/* <AsideSection />s */}
        </div>
    );
}

const generateStaticParams = async () => {
    return [{ lang: 'en' }, { lang: 'PT' }]
}

export { generateStaticParams }
export default MainPage