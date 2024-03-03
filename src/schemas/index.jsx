import * as Yup from 'yup';


export const contactSchema = Yup.object({
    name: Yup.string().min(3).max(30).required("Please enter your full name"),
    email: Yup.string().email().required("Please enter your email"),
    message: Yup.string().min(3).required("Please leave a message")
})