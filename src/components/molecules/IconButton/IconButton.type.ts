import { IconType } from '@/components/atoms';

export interface IconButtonProps {
    iconHeight?: number;
    iconType: IconType;
    iconWidth?: number;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
