const { Router } = require('express');
const router = Router();

const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, QuerySnapshot } = require('firebase-admin/firestore');

var admin = require("firebase-admin");
var serviceAccount = require("../../firebase.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://mercado-2d30e-default-rtdb.firebaseio.com"
});

const db = getFirestore();//firebase firestore

module.exports = db;
