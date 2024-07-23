import { useState, DragEvent } from 'react';
import { UploadInputProps } from './UploadInput.type';
import { IconButton } from '../IconButton/IconButton';
import { Notification, IconType } from '@/components/atoms';
import { FormPageState } from '@/pages/FormPage/FormPage.type';

const defaultStyle =
    'cursor-pointer border border-input-default px-4 py-2 rounded-md w-full flex items-center justify-center h-[96px] bg-white';

const errorStyle = 'border-2 border-input-error !bg-input-error-bg';

export const UploadInput: React.FC<UploadInputProps> = ({
    file,
    errors,
    handleChange,
    isSubmitted = false,
    title,
    setFormData,
    name
}: UploadInputProps) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_dragging, setDragging] = useState(false);

    const errorsFileName = errors?.[name];

    const isError = isSubmitted && errorsFileName;

    const handleDragOver = (e: DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
        setDragging(true);
    };

    const handleDragLeave = () => {
        setDragging(false);
    };

    const handleDrop = (e: DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
        setDragging(false);
        const file = e.dataTransfer.files[0];
        setFormData((prevState: FormPageState) => ({
            ...prevState,
            file
        }));
    };

    const handleRemoveFile = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        setFormData((prevState: FormPageState) => ({
            ...prevState,
            file: null
        }));
    };

    return (
        <div className="mt-6">
            <span>{title}</span>
            <div className="flex flex-col items-center space-y-1 mt-2">
                <label
                    htmlFor="file-upload"
                    className={`${defaultStyle} ${isError ? errorStyle : ''}`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
                    {!file ? (
                        <p className="text-color-gray">
                            <span className="text-color-purple mr-2">
                                Upload a file
                            </span>{' '}
                            or drag and drop here
                        </p>
                    ) : (
                        <div className="flex items-center justify-center">
                            <span className="font-medium mr-2">
                                {file?.name}{' '}
                            </span>
                            <IconButton
                                iconType={IconType.x_icon}
                                onClick={handleRemoveFile}
                            />
                        </div>
                    )}
                </label>
                <input
                    id="file-upload"
                    name="file"
                    type="file"
                    className="hidden"
                    onChange={handleChange}
                />
                {isError && (
                    <Notification
                        iconType={IconType.warning_icon}
                        text={isError}
                    />
                )}
            </div>
        </div>
    );
};
