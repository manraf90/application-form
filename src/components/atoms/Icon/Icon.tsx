import { IconProps, IconType } from './Icon.type';

import InfoIcon from '@/assets/icons/info_icon.svg?react';
import WarningIcon from '@/assets/icons/warning_icon.svg?react';
import LeftArrowIcon from '@/assets/icons/left_arrow_icon.svg?react';
import RightArrowIcon from '@/assets/icons/right_arrow_icon.svg?react';
import XIcon from '@/assets/icons/x_icon.svg?react';
import XIconRed from '@/assets/icons/x_icon_red.svg?react';

export const Icon: React.FC<IconProps> = ({
    className,
    color,
    height = 18,
    icon,
    width = 18
}: IconProps) => {
    switch (icon) {
        case IconType.x_icon:
            return (
                <XIcon
                    className={className}
                    fill={color}
                    height={height}
                    width={width}
                />
            );
        case IconType.x_icon_red:
            return (
                <XIconRed
                    className={className}
                    fill={color}
                    height={height}
                    width={width}
                />
            );
        case IconType.warning_icon:
            return (
                <WarningIcon
                    className={className}
                    fill={color}
                    height={height}
                    width={width}
                />
            );
        case IconType.left_arrow_icon:
            return (
                <LeftArrowIcon
                    className={className}
                    fill={color}
                    height={height}
                    width={width}
                />
            );
        case IconType.right_arrow_icon:
            return (
                <RightArrowIcon
                    className={className}
                    fill={color}
                    height={height}
                    width={width}
                />
            );
        case IconType.info_icon:
            return (
                <InfoIcon
                    className={className}
                    fill={color}
                    height={height}
                    width={width}
                />
            );
    }
};

export default Icon;
