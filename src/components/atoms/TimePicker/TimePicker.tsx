import { AVAILABLE_HOURS } from './TimePicker.config';
import { TimePickerProps } from './TimePicker.type';

export const TimePicker = ({ onClick, formTime }: TimePickerProps) => {
    return (
        <div className="m-0 mt-6 sm:ml-6 sm:mt-0 flex flex-col">
            <p className="mb-2">Time</p>
            <div className="flex sm:flex-col gap-2 flex-wrap">
                {AVAILABLE_HOURS.map(({ id, time }) => {
                    const isActive = time === formTime;
                    return (
                        <button
                            key={id}
                            type="button"
                            className={`bg-white h-[46px] w-full border border-input-default rounded-lg p-[17px] flex justify-center items-center cursor-pointer mb-2 max-w-[76px] sm:max-w-[79px] ${
                                isActive ? 'border-color-purple border-2' : ''
                            }`}
                            onClick={onClick}
                            data-time={time}
                        >
                            <span>{time}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};
