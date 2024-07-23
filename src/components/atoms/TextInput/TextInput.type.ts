import { FormPageErrors } from '@/pages/FormPage/FormPage.type';

export interface TextInputProps {
    className?: React.HTMLProps<HTMLInputElement>['className'];
    label?: string;
    placeholder?: React.HTMLProps<HTMLInputElement>['placeholder'];
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    name: string;
    errors: FormPageErrors;
}
