export interface IconProps {
    className?: React.HTMLProps<HTMLInputElement>['className'];
    color?: string;
    height?: number;
    icon: IconType;
    style?: React.CSSProperties;
    width?: number;
}

export enum IconType {
    info_icon = 'info_icon',
    left_arrow_icon = 'left_arrow_icon',
    right_arrow_icon = 'right_arrow_icon',
    warning_icon = 'warning_icon',
    x_icon = 'x_icon',
    x_icon_red = 'x_icon_red'
}
