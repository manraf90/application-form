import { useEffect, useState } from 'react';

import { Button, RangeInput, TextInput } from '@/components/atoms';
import { Calendar, UploadInput } from '@/components/molecules';
import { FormPageState, FormPageErrors } from './FormPage.type';
import { useSendApplication } from '@/hooks/useSendApplication';

const formState: FormPageState = {
    firstName: '',
    lastName: '',
    email: '',
    age: 8,
    date: '',
    file: null,
    time: ''
};

export const FormPage = () => {
    const [formData, setFormData] = useState<FormPageState>(formState);
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [formErrors, setFormErrors] = useState<FormPageErrors>({});

    const { sendApplicationDataMutation } = useSendApplication();

    const isDisabledBtn = submitted && Object.keys(formErrors)?.length > 0;

    useEffect(() => {
        if (!submitted) return;
        validateForm();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = e.target;

        if (name === 'file' && files) {
            setFormData({
                ...formData,
                file: files[0]
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const validateForm = (): boolean => {
        const { firstName, lastName, email, date, time, file } = formData;
        const errors: FormPageErrors = {};

        if (!firstName) errors.firstName = 'First name is required';
        if (!lastName) errors.lastName = 'Last name is required';
        if (!email) errors.email = 'Email is required';
        if (!file) errors.file = 'File is required';
        if (!date || !time) errors.date = 'Date and time is required';

        setFormErrors(errors);

        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);

        if (!validateForm()) return;

        const { time, ...rest } = formData;

        const body = {
            ...rest,
            date: `${formData.date} ${time}`
        };

        sendApplicationDataMutation(body);
    };

    return (
        <form
            className="py-12 w-full max-w-[426px] px-6 sm:px-0"
            onSubmit={handleSubmit}
        >
            <h2 className="text-2xl font-medium">Personal info</h2>
            <TextInput
                label="First name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                errors={formErrors}
            />
            <TextInput
                label="Last name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                errors={formErrors}
            />
            <TextInput
                label="Email address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                errors={formErrors}
            />
            <RangeInput age={formData.age} handleChange={handleChange} />
            <UploadInput
                isSubmitted={submitted}
                title="Photo"
                handleChange={handleChange}
                file={formData.file}
                setFormData={setFormData}
                errors={formErrors}
                name="file"
            />
            <h2 className="text-2xl font-medium mt-12 mb-8">Your workout</h2>
            <Calendar
                errors={formErrors}
                formDate={formData.date}
                formTime={formData.time}
                name="date"
                setFormData={setFormData}
            />
            <Button
                className={`mt-12 `}
                disabled={isDisabledBtn}
                label="Send Application"
            />
        </form>
    );
};

export default FormPage;
