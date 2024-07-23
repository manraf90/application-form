import { RangeInputProps } from './RangeInput.type';

export const RangeInput = ({ age, handleChange }: RangeInputProps) => {
    return (
        <div className="my-2">
            <label htmlFor="age">Age:</label>
            <div className="flex justify-between mt-4">
                <span className="text-xs">8</span>
                <span className="text-xs">{age}</span>
            </div>
            <input
                className="bg-btn-inactive h-1 w-full cursor-pointer range-lg range accent-color-purple appearance-none rounded-lg"
                type="range"
                name="age"
                min="8"
                max="100"
                value={age}
                onChange={handleChange}
            />
        </div>
    );
};
