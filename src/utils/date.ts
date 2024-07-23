export class LocalDate extends Date {
    getDay(): number {
        const index = super.getDay();

        return index === 0 ? 6 : index - 1;
    }
}

export const getDayFromDate = (date: string) => {
    return Number(date?.split('-')[2]);
};

export const getformattedDate = (date: string) => {
    const splittedDate = date?.split('-');
    const dayNumber = Number(splittedDate[2]);
    const formattedDay = dayNumber < 10 ? `0${dayNumber}` : dayNumber;
    return `${splittedDate[0]}-${splittedDate[1]}-${formattedDay}`;
};
