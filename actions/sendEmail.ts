"use server" 
import { Resend } from "resend"
import { getErrorMessage, validateString } from "@/lib/utils"

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData)=>{
    const senderEmail = formData.get('senderEmail')
    const message = formData.get('message')

    if (!validateString(senderEmail,500)){
        return {
            error:"Invalid Sender EmailID"
        }
    }
    if (!validateString(message,5000)){
        return {
            error:"Invalid Message"
        }
    }

    try{
        await resend.emails.send({
            from:'onboarding@resend.dev',
            to:'chitranshjawere3@gmail.com',
            subject:'Message From Contact Form',
            reply_to: senderEmail as string,
            text: message as string,
        })
    }
    catch(error:unknown){
        return {error: getErrorMessage(error)}
    }
}

