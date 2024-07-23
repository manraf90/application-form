import { Icon } from '@/components/atoms';
import { IconButtonProps } from './IconButton.type';

export const IconButton = ({ iconType, onClick }: IconButtonProps) => {
    return (
        <button onClick={onClick} type="button">
            <Icon icon={iconType} />
        </button>
    );
};
