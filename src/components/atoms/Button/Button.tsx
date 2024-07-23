import { ButtonProps } from './Button.type';

const defaultStyles =
    'w-full h-[45px] px-[32px] py-4 text-white font-medium text-lg bg-btn-default flex items-center justify-center rounded hover:bg-btn-hover';

const disabledStyle =
    'bg-btn-inactive hover:bg-btn-inactive cursor-not-allowed';

export const Button = ({
    type,
    className,
    onClick,
    disabled,
    isLoading,
    label
}: ButtonProps) => {
    return (
        <button
            type={type}
            className={`normal-case btn ${defaultStyles} ${className} ${
                disabled ? disabledStyle : ''
            }`}
            onClick={onClick}
            disabled={disabled || isLoading}
        >
            {label}
        </button>
    );
};
