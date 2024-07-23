import Icon from '../Icon/Icon';
import { IconType } from '../Icon/Icon.type';

interface NotificationProps {
    text: string;
    isError?: boolean;
    iconType: IconType;
    className?: string;
}

const errorStyle = 'text-input-error';

export const Notification = ({
    className,
    iconType,
    isError,
    text
}: NotificationProps) => {
    return (
        <div className={`mt-3 flex gap-2 w-full items-center ${className}`}>
            <Icon icon={iconType} className="min-w-5 min-h-4" />
            <span className={`text-sm ${isError ? errorStyle : ''}`}>
                {text}
            </span>
        </div>
    );
};
