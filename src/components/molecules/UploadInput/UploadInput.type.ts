import { FormPageErrors, FormPageState } from '@/pages/FormPage/FormPage.type';

export interface UploadInputProps {
    isSubmitted?: boolean;
    title?: string;
    setFormData: React.Dispatch<React.SetStateAction<FormPageState>>;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    file: File | null;
    errors: FormPageErrors;
    name: string;
}
