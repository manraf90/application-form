export interface FormPageProps {
    firstName: string;
    lastName: string;
    email: string;
    age: number;
    date: string;
    file: File | null;
    time: string | null;
}

export interface FormPageErrors {
    [key: string]: string;
}

export interface FormPageState extends FormPageProps {}
