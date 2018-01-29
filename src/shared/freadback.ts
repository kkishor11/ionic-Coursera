export interface Feedback {
    fisrname: string;
    lastname: string;
    telnum: string;
    email: string;
    agree: boolean;
    contacttype: string;
    message: string;
}

export const ContactType = ['None', 'Tel', 'Email'];