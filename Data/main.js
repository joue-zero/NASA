"use strict";

// Document selections
// Start-UP
const newName = document.querySelector(".form-label-name");
const newMail = document.querySelector(".form-label-mail");
const newPassword = document.querySelector(".form-label-password");
const newCountry = document.querySelector(".form-label-country");
const newPhone = document.querySelector(".form-label-phone");
const termsCheckBox = document.querySelector(".form-check-input-terms");
const createNewAccountBtn = document.querySelector(
  ".buttonFormCreateNewAccount"
);

// Login
const mailLogin = document.querySelector(".mail-input-login");
const passwordLogin = document.querySelector(".password-input-login");
const loginBtn = document.querySelector(".login-btn-enter");

// Main Page
// nav-bar
const navBarName = document.querySelector(".nav-bar-userName");

// Course Template
const starBtn = document.querySelector(".star-fav");
const favContainerContent = document.querySelector(".favContainer");

// starBtn.addEventListener("click", function (e) {
//   e.preventDefault();
//   starBtn.classList.toggle("fav-selected");
//   favContainerContent.insertBefore();
// });
// Alerts
const wrongDataLogin = document.querySelector(".alert-wrong-data");

//////////////////////////////////////////////////////////////////

////////////////////////////////////  IMPORTANT  ///////////////////////////
let currentAccount = null;
let NumberOfAccounts = 0;

class User {
  balance = 0;
  rank = ++NumberOfAccounts;
  constructor(name, country, phone, mail, password) {
    this.name = name;
    this.country = country;
    this.phone = phone;
    this.mail = mail;
    this.password = password;
  }
}

//////////////////////////////// Start-Up Page ///////////////////////////////
// Validataion Of Creating Account\

// Create Account Button

//////////////////////////////// Login-in Page ///////////////////////////////

const acc1 = {
  name: "ali Dawoud",
  mail: "alidawoud99@gmail.com",
  password: "123456",
  country: "Egypt",
  Phone: "01094263212",
  balance: 500,
};

let systemAccounts = [acc1];

//////////////////////////////// Sign-Up Page ///////////////////////////////
//////////////////////////////// Courses Page ///////////////////////////////
//////////////////////////////// Daily Page ///////////////////////////////
//////////////////////////////// Rank Page ///////////////////////////////
//////////////////////////////// Bank Page ///////////////////////////////
////////////////////////////////  Page ///////////////////////////////
//////////////////////////////// Bank Page ///////////////////////////////
