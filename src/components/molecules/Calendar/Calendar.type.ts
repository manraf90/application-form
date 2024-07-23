import { FormPageErrors, FormPageState } from '@/pages/FormPage/FormPage.type';

export interface CalendarProps {
    setFormData: React.Dispatch<React.SetStateAction<FormPageState>>;
    formDate: string;
    formTime: string | null;
    errors: FormPageErrors;
    name: string;
}
