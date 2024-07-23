export interface ButtonProps {
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    isLoading?: boolean;
    label: string;
}
