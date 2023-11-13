const EmailCode = require("./EmailCode");
const User = require("./User");

EmailCode.belongsTo(User); // llave foranea
User.hasOne(EmailCode);