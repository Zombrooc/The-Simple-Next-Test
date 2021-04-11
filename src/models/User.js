const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  idNumber: {
    type: String,
    required: true,
    select: false,
  },
  cpf: {
    type: String,
    required: true,
    select: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator(value) {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          value
        );
      },
      message: "Email inválido",
    },
  },
  password: {
    type: String,
    select: false,
  },
  passwordResetToken: {
    type: String,
    select: false,
  },
  passwordResetExpires: {
    type: Date,
    select: false,
  },
  contactNumber: [
    {
      type: String,
      required: true,
    },
  ],
  address: {
    zipCode: {
      type: String,
      required: true,
      select: false,
    },
    street: {
      type: String,
      required: true,
      select: false,
    },
    houseNumber: {
      type: String,
      required: true,
      select: false,
    },
    neighborhood: {
      type: String,
      required: true,
      select: false,
    },
    city: {
      type: String,
      required: true,
      select: false,
    },
    state: {
      type: String,
      required: true,
      select: false,
    },
  },
  isAdmin: {
    type: Boolean,
    default: false,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// userSchema.pre("save", async function (next) {
//   const hash = await bcrypt.hashSync(this.password, 10);
//   this.password = hash;
//   next();
// });

module.exports = mongoose.model("User", userSchema);
