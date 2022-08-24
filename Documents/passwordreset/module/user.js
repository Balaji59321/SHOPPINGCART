const userModel = require("./../model/user");
const nodemailer = require("nodemailer");

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

module.exports.createUser = async (req, res, next) => {
  try {
    const user = await userModel.create({ ...req.body });
    res.send({code: 200,msg: "Created Successfully"});
  } catch (err) {
    console.log(err);
  }
};

module.exports.updateUser = async (req, res, next) => {
  try {
    const user = await userModel.updateOne(
      { mail: req.body.mail },
      { $set: { password: req.body.password } },
      { new: true }
    );
    res.send(user);
  } catch (err) {
    console.log(err);
  }
};

module.exports.validateUser = async (req, res, next) => {
  try {
    const resp = await userModel.find({
      $and: [{ mail: req.body.mail }, { password: req.body.password }],
    });
    res.send(
      resp.length === 1
        ? { msg: "Login Success" }
        : { msg: "Please enter valid username or password" }
    );
  } catch (err) {
    console.log(err);
  }
};

module.exports.getUser = async (req, res, next) => {
  try {
    const user = await userModel.find({ mail: req.body.mail });
    updatedPassword =makeid(12);
    
    if (user.length === 1) {
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "balaji59321@gmail.com",
          pass: process.env.PASSWORD,
        },
      });

      var mailOptions = {
        from: "hacker@gmail.con",
        to: req.body.mail,
        subject: "Reset Your Password",
        text: "Your New Password is : " + updatedPassword,
      };
      await userModel.updateOne(
        { mail: req.body.mail },
        { $set: { password: updatedPassword } },
        { runValidators: true }
      );
      res.send({ msg: "Mail has been sent to you please verify" });
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });
    } else {
      res.send({ msg: "User Not Found" });
    }
  } catch (err) {
    console.log(err);
  }
};
