// import { useQuery } from '@tanstack/react-query';

// import { CommonSelectResponse } from './Selects.type';

import { QUERY_KEYS } from '@/constants/queryKeys';
// import { generateArrayChoice } from '@/common/utils/array';
import { getPolandHolidays } from '@/services/FormPage/FormPage.service';
import { useQuery } from '@tanstack/react-query';

export interface HolidaysTypes {
    country: string;
    date: string;
    day: string;
    iso: string;
    name: string;
    type: string;
    year: number;
}

export const useGetHolidays = () => {
    const { isLoading, data } = useQuery({
        queryKey: [QUERY_KEYS.HOLIDAYS],
        queryFn: () => getPolandHolidays()
    });

    const nationalHolidaysDates = data?.filter(
        (date: HolidaysTypes) => date.type === 'NATIONAL_HOLIDAY'
    );

    const observanceHolidaysDates = data?.filter(
        (date: HolidaysTypes) => date.type === 'OBSERVANCE'
    );

    return {
        data,
        isLoading,
        nationalHolidaysDates,
        observanceHolidaysDates
    };
};
