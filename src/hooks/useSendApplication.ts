import { useMutation } from '@tanstack/react-query';

import { sendApplicationData } from '@/services/FormPage/FormPage.service';

export const useSendApplication = () => {
    const { mutate: sendApplicationDataMutation } = useMutation({
        mutationFn: sendApplicationData,
        onSuccess: () => {
            alert('Form submitted successfully');
        },
        onError: () => {
            alert('Something went wrong!!!');
        }
    });

    return { sendApplicationDataMutation };
};
