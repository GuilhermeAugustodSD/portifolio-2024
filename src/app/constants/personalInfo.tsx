import { UserType } from "../types/user"

const user: UserType = {
    name: "Nome usuário",
    ocupation: {
        en: "Full Stack Developer",
        es: "Desarrollador Full Stack",
        pt: "Desenvolvedor Full Stack"
    },
    country: {
        en: "Brazil",
        es: "Brasil",
        pt: "Brasil"
    },
    city: "Brasília",
    age: 30,
    linkedin: "https://www.linkedin.com/in/",
    github: "https://github.com/"
}

export { user }