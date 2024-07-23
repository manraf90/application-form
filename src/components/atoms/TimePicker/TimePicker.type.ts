export interface AvailableHour {
    id: number;
    time: string;
}

export interface TimePickerProps {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    formTime: string | null;
}
