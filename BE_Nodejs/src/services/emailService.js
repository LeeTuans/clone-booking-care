require('dotenv').config();
const nodemailer = require('nodemailer');

let sendSimpleEmail = async (dataSend) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_APP,
            pass: process.env.EMAIL_APP_PASSWORD
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Lê Tuấn👻" <leetuan0388@gmail.com>',
        to: dataSend.reciverEmail,
        subject: "Thông tin đặt lịch khám bệnh",
        text: "Hello world?",
        html: getBodyHTMLEmail(dataSend)
    });
}

let getBodyHTMLEmail = (dataSend) => {
    let result = '';
    if (dataSend.language === 'vi') {
        result = `<h3>Xin chào ${dataSend.patientName}!</h3>
        <p>Bạn nhận được email này vì bạn đã đặt lịch khám bệnh online trên Booking Care</p>
        <p> Thông tin đặt lịch:</p>
        <div><b>Thời gian: ${dataSend.time}</b></div>
        <div><b>Bác sĩ: ${dataSend.doctorName}</b></div>
        <p> Vui lòng nhấn vào đường link bên dưới để xác nhận </p>
        <div>
        <a href=${dataSend.redirectLink} target="_blank">Click here</a>
        </div>`
    }
    if (dataSend.language === 'en') {
        result = `<h3>Dear ${dataSend.patientName}!</h3>
        <p>Bạn nhận được email này vì bạn đã đặt lịch khám bệnh online trên Booking Care (en)</p>
        <p> Thông tin đặt lịch:</p>
        <div><b>Thời gian: ${dataSend.time}</b></div>
        <div><b>Bác sĩ: ${dataSend.doctorName}</b></div>
        <p> Vui lòng nhấn vào đường link bên dưới để xác nhận </p>
        <div>
        <a href=${dataSend.redirectLink} target="_blank">Click here</a>
        </div>`
    }
    return result;
}

let getBodyHTMLRemedy = (dataSend) => {
    let result = '';
    if (dataSend.language === 'vi') {
        result =
            `<h3>Xin chào ${dataSend.patientName}!</h3>
            <p>Bạn nhận được email này vì bạn đã đặt lịch khám bệnh online trên Booking Care</p>
            <p>Thông tin đơn thuốc/hóa đơn được gửi trong file đính kèm.</p>
            <p> Thông tin đặt lịch:</p>
            <div><b>Thời gian: ${dataSend.time}</b></div>
            <div><b>Bác sĩ: ${dataSend.doctorName}</b></div>
            <p> Xin chân thành cảm ơn </p>`
    }
    if (dataSend.language === 'en') {
        result = `<h3>Dear ${dataSend.patientName}!</h3>
            <p>Bạn nhận được email này vì bạn đã đặt lịch khám bệnh online trên Booking Care (en)</p>
            <p>Bạn nhận được email này vì bạn đã đặt lịch khám bệnh online trên Booking Care</p>
            <p>Thông tin đơn thuốc/hóa đơn được gửi trong file đính kèm.</p>
            <p> Thông tin đặt lịch:</p>
            <div><b>Thời gian: ${dataSend.time}</b></div>
            <div><b>Bác sĩ: ${dataSend.doctorName}</b></div>
            <p> Xin chân thành cảm ơn </p>`
    }
    return result;
}

let sendAttachment = async (dataSend) => {
    return new Promise(async (resolve, reject) => {
        try {
            let transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 587,
                secure: false,
                auth: {
                    user: process.env.EMAIL_APP,
                    pass: process.env.EMAIL_APP_PASSWORD
                },
            });
            console.log("base64", dataSend.email)
            // send mail with defined transport object
            let info = await transporter.sendMail({
                from: '"Lê Tuấn👻" <leetuan0388@gmail.com>',
                to: dataSend.email,
                subject: "Kết quả đặt lịch khám bệnh",
                text: "Hello world?",
                html: getBodyHTMLRemedy(dataSend),
                attachments: [
                    {
                        filename: `remedy-${dataSend.patientId}-${new Date().getTime()}.png`,
                        content: dataSend.imgBase64.split("base64,")[1],
                        encoding: 'base64'
                    }
                ]
            });

            resolve(true);
        } catch (e) {
            console.log(e);
            reject(e);
        }
    })
}

module.exports = {
    sendSimpleEmail: sendSimpleEmail,
    sendAttachment: sendAttachment
}