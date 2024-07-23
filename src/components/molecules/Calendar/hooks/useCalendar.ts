import { useEffect, useState } from 'react';

import { daysOfWeek } from '@/constants';
import { getDayFromDate, LocalDate } from '@/utils/date';

export const useCalendar = () => {
    const [modifier, setModifier] = useState(0);
    const [days, setDays] = useState<string[]>([]);

    const date = new LocalDate();
    const year = date.getFullYear();
    const month = date.getMonth();
    const modifiedDate = new LocalDate(year, month + modifier);
    const modifiedYear = modifiedDate.getFullYear();
    const modifiedMonth = modifiedDate.getMonth();

    const dayOne = new LocalDate(modifiedYear, modifiedMonth, 1).getDay();
    const lastDate = new LocalDate(
        modifiedYear,
        modifiedMonth + 1,
        0
    ).getDate();
    const dayLast = new LocalDate(
        modifiedYear,
        modifiedMonth,
        lastDate
    ).getDay();
    const monthLastDate = new LocalDate(
        modifiedYear,
        modifiedMonth,
        0
    ).getDate();
    const dayNames = daysOfWeek;
    const formattedMonth =
        modifiedMonth + 1 < 10 ? `0${modifiedMonth + 1}` : modifiedMonth + 1;

    useEffect(() => {
        const calculateDays = () => {
            const days: string[] = [];

            for (let i = dayOne; i > 0; i--) {
                days.push(
                    `${modifiedYear}-${Number(formattedMonth) - 1}-${
                        monthLastDate - i + 1
                    }`
                );
            }

            for (let i = 1; i <= lastDate; i++) {
                days.push(`${modifiedYear}-${formattedMonth}-${i}`);
            }

            for (let i = dayLast; i < 6; i++) {
                days.push(
                    `${modifiedYear}-${Number(formattedMonth) + 1}-${
                        i - dayLast + 1
                    }`
                );
            }

            setDays(days);
        };

        calculateDays();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [modifier]);

    const isDisabled = (date: string, index: number) => {
        const dayNumber = getDayFromDate(date);

        if ((index < 7 && dayNumber > 8) || (index > 28 && dayNumber < 7)) {
            return true;
        }

        return false;
    };

    const setNextMonth = () => {
        setModifier((prev) => ++prev);
        setDays([]);
    };
    const setPrevMonth = () => {
        setModifier((prev) => --prev);
        setDays([]);
    };

    return {
        date: modifiedDate,
        year: modifiedYear,
        month: modifiedMonth + 1,
        days,
        dayNames,
        isDisabled,
        setPrevMonth,
        setNextMonth
    };
};
