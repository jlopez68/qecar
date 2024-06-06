import User from "../models/User.js";
import codigo from "../models/codigo.js";
import Codigo from "../models/codigo.js";

import passport from "passport";

export const renderSignUpForm = (req, res) =>   { 
  const ini = true;
res.render("auth/signup", {ini})};

export const signup = async (req, res) => {

  const { name, apellido, email, tipo_usuario, cedula, celular, ciudad, drogueria, termsAndConditions} = req.body;
  console.log("codigo",req.body.codigo);
  const codFound = await Codigo.findOne({cod:req.body.codigo,usado:"S"})
  console.log(codFound);
 
  if (codFound) {
    req.flash("error_msg", "El Codigo ya fue Usado.");
    return res.redirect("/auth/signup");
  }

  const codFound1 = await Codigo.findOne({cod:req.body.codigo})
  console.log(codFound1);
 console.log("codigo2",req.body.codigo);
  if (!codFound1) {
    req.flash("error_msg", "El Codigo no exite.");
    return res.redirect("/auth/signup");
  }

  if (termsAndConditions != "on") {
    req.flash("error_msg", "Debe Leer y aceptar los términos y condiciones .");
    return res.redirect("/auth/signup");


  }

  const userFound = await User.findOne({ email: req.body.email });
  if (userFound) {
    req.flash("error_msg", "El Email ya existe.");
    return res.redirect("/auth/signup");
  }

  let errors = [];

//  const { name, apellido, email, tipo_usuario} = req.body;
  const newUser = new User({ name, apellido, email,  tipo_usuario, cedula, celular, ciudad, drogueria}); 
  newUser.tipo_usuario = "Jugador";
  newUser.password = "1234";
  newUser.puntos=0;
  newUser.posicion = 0;
  newUser.codigo1 = "S";
  newUser.codigo2 = "N";
  newUser.codigo3 = "N";
  newUser.codigo4 = "N";
  
  await newUser.save();
  await Codigo.findOneAndUpdate({cod:req.body.codigo}, {usado:"S"})

  req.flash("success_msg", "Registro Completado");
  //envio del email a administrador para aprobar


  res.redirect("/auth/signin");
};

export const renderSigninForm = (req, res) => res.render("auth/signin");

export const renderSigningrupos = (req, res) => res.render("auth/grupos");
export const renderSigninsedes = (req, res) => res.render("auth/sedes");


export const signin = passport.authenticate("local", {
  successRedirect: "/notes",
  failureRedirect: "/auth/signin",
  failureFlash: true,
});

export const logout = async (req, res, next) => {
  await req.logout((err) => {
    if (err) return next(err);
    req.flash("success_msg", "Cerrando Sesion");

      res.redirect("/");
  });
};



  