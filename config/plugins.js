//const nodemailerNTLMAuth = require('nodemailer-ntlm-auth');

module.exports = ({ env }) => ({
//  email plugin
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
          host: 'smtp.gmail.com',
          port:  587,
          auth: {
            user:"navalhydrography@gmail.com" ,
            pass:"gfsohashxwjzqgpk", 
          },
        },
        settings: {
          defaultFrom: 'navalhydrography@gmail.com',
          defaultReplyTo: 'navalhydrography@gmail.com',
        },
      },
    },
// uploads plugin
    upload: {
        config: {
          provider: 'cloudinary',
          providerOptions: {
            cloud_name: env('CLOUDINARY_NAME'),
            api_key: env('CLOUDINARY_KEY'),
            api_secret: env('CLOUDINARY_SECRET'),
          },
          actionOptions: {
            upload: {},
            delete: {},
          },
        },
      },

      'users-permissions': {
        jwtSecret: 'hjd7+FmcBJzfTlmYFYhLbA==',
      },
  });   