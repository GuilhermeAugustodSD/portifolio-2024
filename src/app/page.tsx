import { defaultLanguage } from "./constants/languages";
import { redirect } from "next/navigation";

export default function Home() {

  redirect(defaultLanguage)

  return null
}
