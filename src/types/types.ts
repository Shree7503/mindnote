interface signUp {
    username: string,
    email: string,
    password: string,
    err?: string
}

interface AlertMessageProps {
    type: string,
    title: string,
    description: string,
}

interface signIn {
    email: string,
    password: string
}

export type {
    signUp,
    signIn,
    AlertMessageProps
}