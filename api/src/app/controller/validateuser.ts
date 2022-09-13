import nodemailer from 'nodemailer';

export interface ConfirmMail {
    email: string;
    token: string
  }

export default function validateuser ({email, token}: ConfirmMail){

    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
      auth: {
          user: 'compustorehenry@gmail.com',
          pass: "dnybnopwvxliapcc"
        },
      });
  
      let mailOption={
          from: 'compustorehenry@gmail.com',
          to: email,
          subject: "Hola!!! Su cuenta fue creada con Exito! ✔",

          text: `http://localhost:3001/mail/confirmtrue?token=${token}`

      
      }
  
      transporter.sendMail(mailOption, (error, info)=>{
          if(error){
               return (error.message)
          }else{
             return email
          }
      })
  
}