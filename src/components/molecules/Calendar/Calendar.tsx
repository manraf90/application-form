import { FormPageState } from '@/pages/FormPage/FormPage.type';
import { useCalendar } from './hooks/useCalendar';

import { Icon, IconType, TimePicker, Notification } from '@/components/atoms';
import { CalendarProps } from './Calendar.type';
import { getDayFromDate, getformattedDate } from '@/utils/date';
import { HolidaysTypes, useGetHolidays } from '@/hooks/useGetHolidays';

export const Calendar = ({
    formDate,
    formTime,
    setFormData,
    errors,
    name
}: CalendarProps) => {
    const {
        date,
        year,
        month,
        days,
        dayNames,
        isDisabled,
        setPrevMonth,
        setNextMonth
    } = useCalendar();

    const isError = errors?.[name];

    const { nationalHolidaysDates, observanceHolidaysDates } = useGetHolidays();

    const prevMonthArrowDisabled = month === 1;
    const nextMonthArrowDisabled = month === 12;

    const handleDate = (date: string) => {
        const formattedDate = getformattedDate(date);
        setFormData((prevState: FormPageState) => ({
            ...prevState,
            date: formattedDate
        }));
    };

    const handleTimePicker = (e: React.MouseEvent<HTMLButtonElement>) => {
        const time = e.currentTarget.getAttribute('data-time');
        setFormData((prevState: FormPageState) => ({
            ...prevState,
            time
        }));
    };

    const sundays = days
        .filter((_, index) => (index + 1) % 7 === 0)
        ?.map((date) => getformattedDate(date));

    const observanceHolidayName = observanceHolidaysDates?.find(
        (el: HolidaysTypes) => el.date === formDate
    )?.name;

    const renderCalendarTopBar = (
        <div className="flex justify-between">
            <button
                onClick={setPrevMonth}
                className={`rounded-full w-12 h-12 flex items-center justify-center ${
                    prevMonthArrowDisabled ? 'opacity-40' : ''
                }`}
                type="button"
                disabled={prevMonthArrowDisabled}
            >
                <Icon icon={IconType.left_arrow_icon} width={16} height={16} />
            </button>
            <span className="flex items-center font-medium">
                {date.toLocaleString('en-En', { month: 'long' })} {year}
            </span>
            <button
                onClick={setNextMonth}
                className={`rounded-full w-12 h-12 flex items-center justify-center ${
                    nextMonthArrowDisabled ? 'opacity-40' : ''
                }`}
                type="button"
                disabled={nextMonthArrowDisabled}
            >
                <Icon icon={IconType.right_arrow_icon} width={16} height={16} />
            </button>
        </div>
    );

    const renderCalendar = (
        <ul className="grid grid-cols-7" key={days.join()}>
            {dayNames.map((dayName) => (
                <li
                    key={dayName}
                    className="text-sm text-center font-medium p-2"
                >
                    {dayName}
                </li>
            ))}
            {days.map((date, index) => {
                const formattedDate = getformattedDate(date);
                const isActive = formDate === formattedDate;
                const isDisabledState = isDisabled(date, index);
                const isClosed =
                    nationalHolidaysDates?.some(
                        (item: HolidaysTypes) => item?.date === formattedDate
                    ) ||
                    sundays?.some((item: string) => item === formattedDate);

                return (
                    <li key={date} className="p-[2px] w-full aspect-square">
                        <button
                            className={`rounded-full w-full h-full flex justify-center items-center cursor-pointer${
                                isActive ? ' bg-color-purple text-white' : ''
                            } ${isDisabledState ? 'hidden' : ''} ${
                                isClosed ? 'text-color-gray cursor-auto' : ''
                            }`}
                            onClick={() => handleDate(date)}
                            type="button"
                            disabled={isClosed}
                        >
                            {getDayFromDate(date)}
                        </button>
                    </li>
                );
            })}
        </ul>
    );

    return (
        <>
            <div className="block min-h-[400px] sm:flex">
                <div className="flex-1">
                    <p className="mb-2">Date</p>
                    <section className="bg-white rounded-lg border border-input-default p-6 max-w-full sm:max-w-[326px] min-h-[292px]">
                        {renderCalendarTopBar}
                        {renderCalendar}
                    </section>
                    {observanceHolidayName && (
                        <Notification
                            iconType={IconType.info_icon}
                            text={observanceHolidayName}
                        />
                    )}
                </div>
                <TimePicker onClick={handleTimePicker} formTime={formTime} />
            </div>
            {isError && (
                <Notification
                    iconType={IconType.x_icon_red}
                    text={isError}
                    className="mb-2"
                />
            )}
        </>
    );
};
