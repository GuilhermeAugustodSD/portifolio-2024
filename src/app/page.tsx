import { useRouter } from "next/router";
import styles from "./page.module.scss";
import { AsideSection } from "./sections/AsideSection";
import { useEffect } from "react";
import { redirect } from "next/navigation";

export default function Home() {

  redirect("/en")

  return null
}
