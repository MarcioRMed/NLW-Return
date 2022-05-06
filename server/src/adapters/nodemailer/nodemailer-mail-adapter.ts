import { MailAdapter, SendMailData } from "../mail-adapters";
import nodemailer from 'nodemailer'


// adicionar no env
const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "1e89c0acdfd96a",
      pass: "98aea28331f9dd"
    }
  });


export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData){
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Marcio Ramos Medeiros <contato.microinfo@gmail.com>',
            subject,
            html: body,

    });
    }
    
    
}