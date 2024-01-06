#!/usr/bin/env node

const nodemailer = require("nodemailer");

const mail = process.env.SNDML_MAIL;
const pass = process.env.SNDML_PASS;

(async () => {
  if (!mail || !pass)
    return console.log(
      "Environment variables not found.\n set SNDML_MAIL and SNDML_PASS in your environment."
    );
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: mail,
      pass: pass,
    },
  });
  await transporter.sendMail({
    from: mail,
    to: process.argv[2],
    subject: process.argv[3],
    text: process.argv[4],
  });
})();
