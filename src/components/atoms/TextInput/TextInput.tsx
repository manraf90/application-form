import { IconType } from '../Icon/Icon.type';
import { TextInputProps } from './TextInput.type';
import { emailRegex } from '@/validators/validator';
import { Notification } from '../Notification/Notification';

const defaultStyle =
    '!outline-none h-[48px] w-full bg-white border rounded-lg border-input-default text-input-text-color focus:border-input-active active:border-input-active hover:bg-[#FBFAF2]';

const errorStyle = 'border-2 border-input-error !bg-input-error-bg';

export const TextInput: React.FC<TextInputProps> = ({
    className,
    errors,
    name,
    label,
    value,
    onChange
}: TextInputProps) => {
    const error = errors?.[name];
    const emailError =
        name === 'email' && !emailRegex.test(value) && value !== '';

    return (
        <div className="mt-5">
            <label htmlFor="test">{label}</label>
            <input
                type="text"
                name={name}
                className={`${defaultStyle} ${className} ${
                    error ? errorStyle : ''
                } mt-2 mb-1 p-input-text`}
                value={value}
                onChange={onChange}
            />

            {(error || emailError) && (
                <Notification
                    iconType={IconType.warning_icon}
                    text={
                        emailError
                            ? 'Please use correct formatting. Example: address@email.com'
                            : error
                    }
                    isError
                    className="mt-0"
                />
            )}
        </div>
    );
};
