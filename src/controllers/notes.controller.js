import Note from "../models/Note.js";
import resultados from "../models/resultados.js";
import Usuario from "../models/User.js"
import Codigo from "../models/codigo.js"




  
export const renderNotesqf = async (req, res) => {

  const nombre = req.user.name;
  const usua = req._id
  const tp = true;
  const ad = false;
  const ini = false;
  const usuario12 = await Usuario.findOne({email: req.user.email, codigo2:"S"});
  console.log("usuario",usuario12);
  if (!usuario12){
  res.render("notes/pedircodigo1", { nombre, tp, ad, ini});
  }
  else {  res.render("notes/all-notes-qf", { nombre, tp, ad, ini});}

};

export const renderNotescodigo = async (req, res) => {

  const nombre = req.user.name;
  const usua = req._id
  const tp = true;
  const ad = false;
  const ini = false;
  console.log(req.body.CODIGO);

  const codFound = await Codigo.findOne({cod:req.body.CODIGO,usado:"S"})
  console.log(codFound);
 
  if (codFound) {
    req.flash("error_msg", "El Codigo ya fue Usado.");
    return res.redirect("/notes");
  }

  const codFound1 = await Codigo.findOne({cod:req.body.CODIGO})
  console.log(codFound1);
 
  if (!codFound1) {
    req.flash("error_msg", "El Codigo no exite.");
    return res.redirect("/notes");
  }
  await Codigo.findOneAndUpdate({cod:req.body.CODIGO}, {usado:"S"})
  console.log(req.user.email);
  await Usuario.findOneAndUpdate({email: req.user.email}, {codigo2:"S"})

  res.render("notes/all-notes-qf", { nombre, tp, ad, ini});


};

export const renderNotespremios = async (req, res) => {
  const nombre = req.user.name;
  const usua = req._id
  const tp = true;
  const ad = false;
  const ini = false;
  res.render("notes/notes-premios", { nombre, tp, ad, ini});
};

export const renderNotessf = async (req, res) => {
  const nombre = req.user.name;
  const usua = req._id
  const tp = true;
  const ad = false;
  const ini = false;
  const usuario13 = await Usuario.findOne({email: req.user.email, codigo3:"S"});
  console.log("usuario",usuario13);
  if (!usuario13){
  res.render("notes/pedircodigo2", { nombre, tp, ad, ini});
  }
  else {  res.render("notes/all-notes-sf", { nombre, tp, ad, ini});}
};

export const renderNotescodigo1 = async (req, res) => {

  const nombre = req.user.name;
  const usua = req._id
  const tp = true;
  const ad = false;
  const ini = false;
  console.log(req.body.CODIGO1);

  const codFound = await Codigo.findOne({cod:req.body.CODIGO1,usado:"S"})
  console.log(codFound);
 
  if (codFound) {
    req.flash("error_msg", "El Codigo ya fue Usado.");
    return res.redirect("/notes");
  }

  const codFound1 = await Codigo.findOne({cod:req.body.CODIGO1})
  console.log(codFound1);
 
  if (!codFound1) {
    req.flash("error_msg", "El Codigo no exite.");
    return res.redirect("/notes");
  }
  await Codigo.findOneAndUpdate({cod:req.body.CODIGO1}, {usado:"S"})
  console.log(req.user.email);
  await Usuario.findOneAndUpdate({email: req.user.email}, {codigo3:"S"})

  res.render("notes/all-notes-sf", { nombre, tp, ad, ini});


};


export const renderNotesf = async (req, res) => {
  const nombre = req.user.name;
  const usua = req._id
  const tp = true;
  const ad = false;
  const ini = false;
  const usuario14 = await Usuario.findOne({email: req.user.email, codigo4:"4"});
  console.log("usuario",usuario14);
  if (!usuario14){
  res.render("notes/pedircodigo3", { nombre, tp, ad, ini});
  }
  else {  res.render("notes/all-notes-f", { nombre, tp, ad, ini});}
};

export const renderNotescodigo2 = async (req, res) => {

  const nombre = req.user.name;
  const usua = req._id
  const tp = true;
  const ad = false;
  const ini = false;
  console.log(req.body.CODIGO2);

  const codFound = await Codigo.findOne({cod:req.body.CODIGO2,usado:"S"})
  console.log(codFound);
 
  if (codFound) {
    req.flash("error_msg", "El Codigo ya fue Usado.");
    return res.redirect("/notes");
  }

  const codFound1 = await Codigo.findOne({cod:req.body.CODIGO2})
  console.log(codFound1);
 
  if (!codFound1) {
    req.flash("error_msg", "El Codigo no exite.");
    return res.redirect("/notes");
  }
  await Codigo.findOneAndUpdate({cod:req.body.CODIGO2}, {usado:"S"})
  console.log(req.user.email);
  await Usuario.findOneAndUpdate({email: req.user.email}, {codigo4:"S"})

  res.render("notes/all-notes-f", { nombre, tp, ad, ini});


};







export const renderNotes = async (req, res) => {

  console.log("tipo",req.user.tipo_usuario);

  const tip = req.user.tipo_usuario;
  const email = req.user.email;
    if (tip == "Jugador"){
      
      const nombre = req.user.name;
      const usua = req._id
      const tp = true;
      const ad = false;
      const ini = false;
      const notes1 = await Note.findOne({ email: email });
    //  console.log(notes1.email);
      if (!notes1) { 
        const newjuego = new Note({ email: req.user.email, status_partido: "A", numero:1, grupo: "A",fecha: '20/06/2024',mapa1: "/img/Argentina.png", mapa2: "/img/Canada.png", equipo1: "ARGENTINA",equipo2: "CANADA",resultado1: 0,resultado2: 0, puntos:0});
        const juego = await newjuego.save();
        const user = await Note.findOne({email: email, grupo: "A",fecha: '20/06/2024',equipo1: "ARGENTINA",equipo2: "CANADA" }).lean();
        const us = user._id
        await Note.findOneAndUpdate({email:req.user.email, grupo: "A",fecha: '20/06/2024',equipo1: "ARGENTINA",equipo2: "CANADA" }, { usuario: us }) ;

        const newjuego1 = new Note({email: req.user.email, status_partido: "A", numero:2,grupo: "A",fecha: '21/06/2024',mapa1: "/img/Peru.png", mapa2: "/img/Chile.png", equipo1: "PERU",equipo2: "CHILE",resultado1: 0,resultado2: 0, puntos:0});
        const juego1 = await newjuego1.save();
        const user1 = await Note.findOne({email: email, grupo: "A",fecha: '21/06/2024',equipo1: "PERU",equipo2: "CHILE" }).lean();
        const us1 = user1._id
        await Note.findOneAndUpdate({email:req.user.email, grupo: "A",fecha: '21/06/2024',equipo1: "PERU",equipo2: "CHILE" }, { usuario: us1}) ;

        const newjuego2 = new Note({email: req.user.email, status_partido: "A", numero:3,grupo: "A",fecha: '25/06/2024',mapa1: "/img/Peru.png", mapa2: "/img/Canada.png", equipo1: "PERU",equipo2: "CANADA",resultado1: 0,resultado2: 0, puntos:0});
        const juego2 = await newjuego2.save();
        const user2 = await Note.findOne({email: email, grupo: "A",fecha: '25/06/2024',equipo1: "PERU",equipo2: "CANADA" }).lean();
        const us2 = user2._id
        await Note.findOneAndUpdate({email:req.user.email, grupo: "A",fecha: '25/06/2024',equipo1: "PERU",equipo2: "CANADA" }, { usuario: us2}) ;

        const newjuego3 = new Note({email: req.user.email, status_partido: "A", numero:4,grupo: "A",fecha: '25/06/2024',mapa1: "/img/Chile.png", mapa2: "/img/Argentina.png", equipo1: "CHILE",equipo2: "ARGENTINA",resultado1: 0,resultado2: 0, puntos:0});
        const juego3 = await newjuego3.save();
        const user3 = await Note.findOne({email: email, grupo: "A",fecha: '25/06/2024',equipo1: "CHILE",equipo2: "ARGENTINA" }).lean();
        const us3 = user3._id
        await Note.findOneAndUpdate({email:req.user.email, grupo: "A",fecha: '25/06/2024',equipo1: "CHILE",equipo2: "ARGENTINA" }, { usuario: us3}) ;

        const newjuego4 = new Note({email: req.user.email, status_partido: "A", numero:5,grupo: "A",fecha: '29/06/2024',mapa1: "/img/Argentina.png", mapa2: "/img/Peru.png",equipo1: "ARGENTINA",equipo2: "PERU",resultado1: 0,resultado2: 0, puntos:0});
        const juego4 = await newjuego4.save();
        const user4 = await Note.findOne({email: email, grupo: "A",fecha: '29/06/2024',equipo1: "ARGENTINA",equipo2: "PERU" }).lean();
        const us4 = user4._id
        await Note.findOneAndUpdate({email:req.user.email, grupo: "A",fecha: '29/06/2024',equipo1: "ARGENTINA",equipo2: "PERU" }, { usuario: us4}) ;

        const newjuego5 = new Note({email: req.user.email, status_partido: "A", numero:6,grupo: "A",fecha: '29/06/2024',mapa1: "/img/Canada.png", mapa2: "/img/Chile.png",equipo1: "CANADA",equipo2: "CHILE",resultado1: 0,resultado2: 0, puntos:0});
        const juego5 = await newjuego5.save();
        const user5 = await Note.findOne({email: email, grupo: "A",fecha: '29/06/2024',equipo1: "CANADA",equipo2: "CHILE" }).lean();
        const us5 = user5._id
        await Note.findOneAndUpdate({email:req.user.email, grupo: "A",fecha: '29/06/2024',equipo1: "CANADA",equipo2: "CHILE" }, { usuario: us5}) ;

        const newjuego6 = new Note({email: req.user.email, status_partido: "A", numero:7,grupo: "B",fecha: '22/06/2024',mapa1: "/img/Ecuador.png", mapa2: "/img/Venezuela.png",equipo1: "ECUADOR",equipo2: "VENEZUELA",resultado1: 0,resultado2: 0, puntos:0});
        const juego6 = await newjuego6.save();
        const user6 = await Note.findOne({email: email, grupo: "B",fecha: '22/06/2024',equipo1: "ECUADOR",equipo2: "VENEZUELA" }).lean();
        const us6 = user6._id
        await Note.findOneAndUpdate({email:req.user.email, grupo: "B",fecha: '22/06/2024',equipo1: "ECUADOR",equipo2: "VENEZUELA" }, { usuario: us6}) ;

        const newjuego7 = new Note({email: req.user.email, status_partido: "A", numero:8,grupo: "B",fecha: '22/06/2024',mapa1: "/img/Mexico.png", mapa2: "/img/Jamaica.png",equipo1: "MEXICO",equipo2: "JAMAICA",resultado1: 0,resultado2: 0, puntos:0});
        const juego7 = await newjuego7.save();
        const user7 = await Note.findOne({email: email, grupo: "B",fecha: '22/06/2024',equipo1: "MEXICO",equipo2: "JAMAICA" }).lean();
        const us7 = user7._id
        await Note.findOneAndUpdate({email:req.user.email, grupo: "B",fecha: '22/06/2024',equipo1: "MEXICO",equipo2: "JAMAICA" }, { usuario: us7}) ;

        const newjuego8 = new Note({email: req.user.email, status_partido: "A", numero:9,grupo: "B",fecha: '26/06/2024',mapa1: "/img/Ecuador.png", mapa2: "/img/Jamaica.png",equipo1: "ECUADOR",equipo2: "JAMAICA",resultado1: 0,resultado2: 0, puntos:0});
        const juego8 = await newjuego8.save();
        const user8 = await Note.findOne({email: email, grupo: "B",fecha: '26/06/2024',equipo1: "ECUADOR",equipo2: "JAMAICA" }).lean();
        const us8 = user8._id
        await Note.findOneAndUpdate({email:req.user.email, grupo: "B",fecha: '26/06/2024',equipo1: "ECUADOR",equipo2: "JAMAICA" }, { usuario: us8}) ;

        const newjuego9 = new Note({email: req.user.email, status_partido: "A", numero:10,grupo: "B",fecha: '26/06/2024',mapa1: "/img/Venezuela.png", mapa2: "/img/Mexico.png",equipo1: "VENEZUELA",equipo2: "MEXICO",resultado1: 0,resultado2: 0, puntos:0});
        const juego9 = await newjuego9.save();
        const user9 = await Note.findOne({email: email, grupo: "B",fecha: '26/06/2024',equipo1: "VENEZUELA",equipo2: "MEXICO" }).lean();
        const us9 = user9._id
        await Note.findOneAndUpdate({email:req.user.email, grupo: "B",fecha: '26/06/2024',equipo1: "VENEZUELA",equipo2: "MEXICO" }, { usuario: us9}) ;

        const newjuego10 = new Note({email: req.user.email, status_partido: "A", numero:11,grupo: "B",fecha: '30/06/2024',mapa1: "/img/Jamaica.png", mapa2: "/img/Venezuela.png",equipo1: "JAMAICA",equipo2: "VENEZUELA",resultado1: 0,resultado2: 0, puntos:0});
        const juego10 = await newjuego10.save();
        const user10 = await Note.findOne({email: email, grupo: "B",fecha: '30/06/2024',equipo1: "JAMAICA",equipo2: "VENEZUELA" }).lean();
        const us10 = user10._id
        await Note.findOneAndUpdate({email:req.user.email, grupo: "B",fecha: '30/06/2024',equipo1: "JAMAICA",equipo2: "VENEZUELA" }, { usuario: us10}) ;


        const newjuego11 = new Note({email: req.user.email, status_partido: "A", numero:12,grupo: "B",fecha: '30/06/2024',mapa1: "/img/Mexico.png", mapa2: "/img/Ecuador.png",equipo1: "MEXICO",equipo2: "ECUADOR",resultado1: 0,resultado2: 0, puntos:0});
        const juego11 = await newjuego11.save();
        const user11 = await Note.findOne({email: email, grupo: "B",fecha: '30/06/2024',equipo1: "MEXICO",equipo2: "ECUADOR" }).lean();
        const us11 = user11._id
        await Note.findOneAndUpdate({email:req.user.email, grupo: "B",fecha: '30/06/2024',equipo1: "MEXICO",equipo2: "ECUADOR" }, { usuario: us11}) ;


        const newjuego12 = new Note({email: req.user.email, status_partido: "A", numero:13,grupo: "C",fecha: '23/06/2024',mapa1: "/img/Usa.png", mapa2: "/img/Bolivia.png",equipo1: "USA",equipo2: "BOLIVIA",resultado1: 0,resultado2: 0, puntos:0});
        const juego12 = await newjuego12.save();
        const user12 = await Note.findOne({email: email, grupo: "C",fecha: '23/06/2024',equipo1: "USA",equipo2: "BOLIVIA" }).lean();
        const us12 = user12._id
        await Note.findOneAndUpdate({email:req.user.email, grupo: "C",fecha: '23/06/2024',equipo1: "USA",equipo2: "BOLIVIA" }, { usuario: us12}) ;

        const newjuego13 = new Note({email: req.user.email, status_partido: "A", numero:14,grupo: "C",fecha: '23/06/2024',mapa1: "/img/Uruguay.png", mapa2: "/img/Panama.png",equipo1: "URUGUAY",equipo2: "PANAMA",resultado1: 0,resultado2: 0, puntos:0});
        const juego13 = await newjuego13.save();
        const user13 = await Note.findOne({email: email, grupo: "C",fecha: '23/06/2024',equipo1: "URUGUAY",equipo2: "PANAMA" }).lean();
        const us13 = user13._id
        await Note.findOneAndUpdate({email:req.user.email, grupo: "C",fecha: '23/06/2024',equipo1: "URUGUAY",equipo2: "PANAMA" }, { usuario: us13}) ;

        const newjuego14 = new Note({email: req.user.email, status_partido: "A", numero:15,grupo: "C",fecha: '27/06/2024',mapa1: "/img/Panama.png", mapa2: "/img/Usa.png",equipo1: "PANAMA",equipo2: "USA",resultado1: 0,resultado2: 0, puntos:0});
        const juego14 = await newjuego14.save();
        const user14 = await Note.findOne({email: email, grupo: "C",fecha: '27/06/2024',equipo1: "PANAMA",equipo2: "USA" }).lean();
        const us14 = user14._id
        await Note.findOneAndUpdate({email:req.user.email, grupo: "C",fecha: '27/06/2024',equipo1: "PANAMA",equipo2: "USA" }, { usuario: us14}) ;

        const newjuego15 = new Note({email: req.user.email, status_partido: "A", numero:16,grupo: "C",fecha: '27/06/2024',mapa1: "/img/Uruguay.png", mapa2: "/img/Bolivia.png",equipo1: "URUGUAY",equipo2: "BOLIVIA",resultado1: 0,resultado2: 0, puntos:0});
        const juego15 = await newjuego15.save();
        const user15 = await Note.findOne({email: email, grupo: "C",fecha: '27/06/2024',equipo1: "URUGUAY",equipo2: "BOLIVIA" }).lean();
        const us15 = user15._id
        await Note.findOneAndUpdate({email:req.user.email, grupo: "C",fecha: '27/06/2024',equipo1: "URUGUAY",equipo2: "BOLIVIA" }, { usuario: us15}) ;

        const newjuego16 = new Note({email: req.user.email, status_partido: "A", numero:17,grupo: "C",fecha: '01/07/2024',mapa1: "/img/Bolivia.png", mapa2: "/img/Panama.png",equipo1: "BOLIVIA",equipo2: "PANAMA",resultado1: 0,resultado2: 0, puntos:0});
        const juego16 = await newjuego16.save();
        const user16 = await Note.findOne({email: email, grupo: "C",fecha: '01/07/2024',equipo1: "BOLIVIA",equipo2: "PANAMA" }).lean();
        const us16 = user16._id
        await Note.findOneAndUpdate({email:req.user.email, grupo: "C",fecha: '01/07/2024',equipo1: "BOLIVIA",equipo2: "PANAMA" }, { usuario: us16}) ;

        const newjuego17 = new Note({email: req.user.email, status_partido: "A", numero:18,grupo: "C",fecha: '01/07/2024',mapa1: "/img/Usa.png", mapa2: "/img/Uruguay.png",equipo1: "USA",equipo2: "URUGUAY",resultado1: 0,resultado2: 0, puntos:0});
        const juego17 = await newjuego17.save();
        const user17 = await Note.findOne({email: email, grupo: "C",fecha: '01/07/2024',equipo1: "USA",equipo2: "URUGUAY" }).lean();
        const us17 = user17._id
        await Note.findOneAndUpdate({email:req.user.email, grupo: "C",fecha: '01/07/2024',equipo1: "USA",equipo2: "URUGUAY" }, { usuario: us17}) ;

        const newjuego18 = new Note({email: req.user.email, status_partido: "A", numero:19,grupo: "D",fecha: '24/06/2024',mapa1: "/img/Colombia.png", mapa2: "/img/Paraguay.png",equipo1: "COLOMBIA",equipo2: "PARAGUAY",resultado1: 0,resultado2: 0, puntos:0});
        const juego18 = await newjuego18.save();
        const user18 = await Note.findOne({email: email, grupo: "D",fecha: '24/06/2024',equipo1: "COLOMBIA",equipo2: "PARAGUAY" }).lean();
        const us18 = user18._id
        await Note.findOneAndUpdate({email:req.user.email, grupo: "D",fecha: '24/06/2024',equipo1: "COLOMBIA",equipo2: "PARAGUAY" }, { usuario: us18}) ;

        const newjuego19 = new Note({email: req.user.email, status_partido: "A", numero:20,grupo: "D",fecha: '24/06/2024',mapa1: "/img/Brazil.png", mapa2: "/img/CostaRica.png",equipo1: "BRAZIL",equipo2: "COSTA RICA",resultado1: 0,resultado2: 0, puntos:0});
        const juego19 = await newjuego19.save();
        const user19 = await Note.findOne({email: email, grupo: "D",fecha: '24/06/2024',equipo1: "BRAZIL",equipo2: "COSTA RICA" }).lean();
        const us19 = user19._id
        await Note.findOneAndUpdate({email:req.user.email, grupo: "D",fecha: '24/06/2024',equipo1: "BRAZIL",equipo2: "COSTA RICA" }, { usuario: us19}) ;

        const newjuego20 = new Note({email: req.user.email, status_partido: "A", numero:21,grupo: "D",fecha: '28/06/2024',mapa1: "/img/Colombia.png", mapa2: "/img/CostaRica.png",equipo1: "COLOMBIA",equipo2: "COSTA RICA",resultado1: 0,resultado2: 0, puntos:0});
        const juego20 = await newjuego20.save();
        const user20 = await Note.findOne({email: email, grupo: "D",fecha: '28/06/2024',equipo1: "COLOMBIA",equipo2: "COSTA RICA" }).lean();
        const us20 = user20._id
        await Note.findOneAndUpdate({email:req.user.email, grupo: "D",fecha: '28/06/2024',equipo1: "COLOMBIA",equipo2: "COSTA RICA" }, { usuario: us20}) ;

        const newjuego21 = new Note({email: req.user.email, status_partido: "A", numero:22,grupo: "D",fecha: '28/06/2024',mapa1: "/img/Paraguay.png", mapa2: "/img/Brazil.png",equipo1: "PARAGUAY",equipo2: "BRAZIL",resultado1: 0,resultado2: 0, puntos:0});
        const juego21 = await newjuego21.save();
        const user21 = await Note.findOne({email: email, grupo: "D",fecha: '28/06/2024',equipo1: "PARAGUAY",equipo2: "BRAZIL" }).lean();
        const us21 = user21._id
        await Note.findOneAndUpdate({email:req.user.email, grupo: "D",fecha: '28/06/2024',equipo1: "PARAGUAY",equipo2: "BRAZIL" }, { usuario: us21}) ;

        const newjuego22 = new Note({email: req.user.email, status_partido: "A", numero:23,grupo: "D",fecha: '02/07/2024',mapa1: "/img/CostaRica.png", mapa2: "/img/Paraguay.png",equipo1: "COSTA RICA",equipo2: "PARAGUAY",resultado1: 0,resultado2: 0, puntos:0});
        const juego22 = await newjuego22.save();
        const user22 = await Note.findOne({email: email, grupo: "D",fecha: '02/07/2024',equipo1: "COSTA RICA",equipo2: "PARAGUAY" }).lean();
        const us22 = user22._id
        await Note.findOneAndUpdate({email:req.user.email, grupo: "D",fecha: '02/07/2024',equipo1: "COSTA RICA",equipo2: "PARAGUAY" }, { usuario: us22}) ;

        const newjuego23 = new Note({email: req.user.email, status_partido: "A", numero:24,grupo: "D",fecha: '02/07/2024',mapa1: "/img/Brazil.png", mapa2: "/img/Colombia.png",equipo1: "BRAZIL",equipo2: "COLOMBIA",resultado1: 0,resultado2: 0, puntos:0});
        const juego23 = await newjuego23.save();
        const user23 = await Note.findOne({email: email, grupo: "D",fecha: '02/07/2024',equipo1: "BRAZIL",equipo2: "COLOMBIA" }).lean();
        const us23 = user20._id
        await Note.findOneAndUpdate({email:req.user.email, grupo: "D",fecha: '02/07/2024',equipo1: "BRAZIL",equipo2: "COLOMBIA" }, { usuario: us23}) ;

         const notes = await Note.find({email: req.user.email})
        .sort({ date:"desc" })
        .lean();
        const puntos = 0;
         console.log("aqui si estoy")
         res.render("notes/all-notes-pronos", { notes, nombre, puntos, tp, ad, ini} );
      
      
      }

      else
{
      const nombre = req.user.name;
      const email = req.user.email;
      const puntos = req.user.puntos;
      const posicion = req.user.posicion;
      console.log("p",puntos)
      const notes = await Note.find({email: email})
        .sort({ date:"desc" })
        .lean();
         res.render("notes/all-notes-pronos", { notes, nombre, puntos, posicion, tp, ad, ini} );
    }      
} 

else
{
  const tp = false;
  const ad = true;
  const ini = false;
  //  const notes = await Note.find()
  const notes = await resultados.find()
  .sort({ date: "desc" })
  .lean();

res.render("notes/all-notes", { notes , tp, ad, ini });
};
};

export const renderEditForm = async (req, res) => {
  const tip = req.user.tipo_usuario;
  const jue = req.user.status_partido;
  console.log(tip);
  if (tip == "Jugador"){  const tp = true;
    const ad = false;
    const ini = false;

    const note = await Note.findById(req.params.id).lean();
    if(note.status_partido == "C") {
      req.flash("success_msg", "Juego Cerrado No se Puede Modificar");
        res.redirect("/notes");
     } 
 
    res.render("notes/edit-note", { note, tp, ad, ini });}
 
    else
  {
  const tp = false;
  const ad = true;
  const ini = false;
  const note = await resultados.findById(req.params.id).lean();
  res.render("notes/edit-note", { note, tp, ad, ini });
}


};

export const renderVisualizarnotas = async (req, res) => {
  const tp = false;
  const ad = true;
  const ini = false;
  const note = await resultados.findById(req.params.id).lean();

  res.render("notes/visualizar-notas", { note, tp, ad, ini }); 
};



export const updateNote = async (req, res) => {
  const tip = req.user.tipo_usuario;
  if (tip == "Jugador")
     {
      const { grupo, fecha,equipo1,resultado1,equipo2,resultado2  } = req.body;
      await Note.findByIdAndUpdate(req.params.id, { grupo, fecha, equipo1, pronostico1:req.body.resultado1, equipo2, pronostico2:req.body.resultado2, puntos:0 });
  
     }
  else
    { 
     const { grupo, fecha,equipo1,resultado1,equipo2,resultado2,jugado,cerrar  } = req.body;
     if (cerrar == "1") {
         await Note.updateMany({grupo:grupo, fecha:fecha, equipo1:equipo1, equipo2:equipo2}, { status_partido:"C"  });
     }
     else{
    await resultados.findByIdAndUpdate(req.params.id, { grupo, fecha, equipo1,resultado1, equipo2, resultado2, jugado:req.body.jugado });
 //   console.log(req.params.id);

    const gru = req.body.grupo;
    const fec = req.body.fecha;
    const equi1 = req.body.equipo1;
    const equi2 = req.body.equipo2;
    const resu1 = req.body.resultado1;
    const resu2 = req.body.resultado2;
 //   console.log(gru,fec,equi1,equi2,resu1,resu2);
    await Note.updateMany({grupo:gru, fecha:fec, equipo1:equi1, equipo2:equi2}, { resultado1: resu1, resultado2: resu2, puntos:0  });
//
     Note.find({grupo:gru, fecha:fec, equipo1:equi1, equipo2:equi2,status_partido:"C", pronostico1 : {$ne:null}, pronostico2 : {$ne:null}},{_id:0,usuario:1}).lean().exec(sumarpuntos);
     async function  sumarpuntos (err, _id) {

      if(err) {
        console.log("error");
        console.log(err);
      }
      const ciclo = _id.length;
      console.log("ciclo",ciclo);
//      console.log(_id[0]);
      for (let step = 0; step < ciclo; step++) {
        // Runs 5 times, with values of step 0 through 4.
 //       console.log(_id.usuario[0])  
        let ver = JSON.stringify(_id[step]); 
        var ver1 = ver.slice(12,-2);
        
//console.log(ver);
//console.log(ver1);
        var punt = 0;


        if (resu1 > resu2) {
  //          console.log("ver1",ver1);
            const notes100 = await Note.findOne( {usuario:ver1}).lean();
            const uemail = notes100.email;
            const pronos1 = notes100.pronostico1;
            const pronos2 = notes100.pronostico2;
    //        console.log("notes2",notes100);
     //       console.log(notes100.pronostico1);
     //       console.log(notes100.pronostico2);
     //       console.log(pronos1);
     //       console.log(pronos2);
//            const pronos1 = notes100.pronostico1;
  //          const pronos2 = notes100.pronostico2;
          if (pronos1 > pronos2) {
       //     console.log("por aca");
            punt = punt + 1;
            if(resu1 == pronos1 && resu2 == pronos2) { punt = punt +2;   }
          }};



          if (resu2 > resu1) {
            const notes100 = await Note.findOne( {usuario:ver1}).lean();
            const uemail = notes100.email;
            const pronos1 = notes100.pronostico1;
            const pronos2 = notes100.pronostico2;
          if (pronos2 > pronos1) {
              punt = punt+1;

              if(resu1 == pronos1 && resu2 == pronos2) { punt=punt+2; }}
          
          };

         if(resu1 == resu2 ) {
            const notes100 = await Note.findOne( {usuario:ver1}).lean();
            const uemail = notes100.email;
            const pronos1 = notes100.pronostico1;
            const pronos2 = notes100.pronostico2;
            if(pronos1 == pronos2) {
              punt = punt+1;
             if(resu1 == pronos1 && resu2 == pronos2) { punt=punt+2; console.log("paso5");}}}


         const doc = await Note.updateOne({usuario:ver1},  {puntos:punt, status_partido:"C"});
         const notes100 = await Note.findOne( {usuario:ver1}).lean();
//         console.log("usuario",notes100.email);
  //       console.log("puntos",punt);

         const puntousuario = await Usuario.findOne( {email: notes100.email}).lean()
         const puntuacion = puntousuario.puntos + punt;
         const doc2 = await Usuario.updateOne({email: notes100.email},  {puntos:puntuacion});


        } 
     }
 /*    console.log("posicion");
     User.find({tipo_usuario:"Jugador"},{_id:0,email:1}).sort({ puntos: "desc" }).lean().exec(posicion);
     
     async function  posicion (err, _id) {
     
      if(err) {
        console.log("error");
        console.log(err);
      }
      const ciclo = _id.length;
      console.log("ciclo",ciclo);
    //  console.log(_id[0]);
      for (let step = 0; step < ciclo; step++) {
        // Runs 5 times, with values of step 0 through 4.
     //       console.log(_id.usuario[0])  
        let ver = JSON.stringify(_id[step]); 
        var ver1 = ver.slice(10,-2);
        
    // console.log(ver);
     console.log(ver1);
     const notes100 = await User.findOne( {email:ver1}).lean();
       const pos = step+1;
       console.log("pos",pos);   
       const doc2 = await Usuario.updateOne({email: notes100.email},  {posicion:pos});
       
       
       
      }
     }*/

};
  req.flash("success_msg", "Resultado Grabado Satisfactoriamente");

// vamos con la posicion


Usuario.find({tipo_usuario:"Jugador"},{_id:0,email:1}).sort({ puntos: "desc" }).lean().exec(posicion1);
     
async function  posicion1 (err, _id) {

 if(err) {
   console.log("error");
   console.log(err);
 }
 const ciclo = _id.length;
 console.log("ciclo2",ciclo);
  console.log(_id[0]);
 for (let step = 0; step < ciclo; step++) {
   // Runs 5 times, with values of step 0 through 4.
//       console.log(_id.usuario[0])  
   let ver = JSON.stringify(_id[step]); 
   var ver1 = ver.slice(10,-2);
   
console.log(ver);
console.log(ver1);
const notes100 = await User.findOne( {email:ver1}).lean();
  const pos = step+1;   
  console.log("pos1",pos);
  console.log("email",notes100.email);
     
  const doc2 = await Usuario.updateOne({email: notes100.email},  {posicion:pos});
  if(err) {
    console.log("error");
    console.log(err);
  }
  console.log("aca entre");
  
 }
}
    }


  res.redirect("/notes");
};




export const calcularposicion = async (req, res) => {

Usuario.find({tipo_usuario:"Jugador"},{_id:0,email:1}).sort({ puntos: "desc" }).lean().exec(posicion1);
res.redirect("/notes");     
async function  posicion1 (err, _id) {

 if(err) {
   console.log("error");
   console.log(err);
 }
 const ciclo = _id.length;
 console.log("ciclo2",ciclo);
  console.log(_id[0]);
 for (let step = 0; step < ciclo; step++) {
   // Runs 5 times, with values of step 0 through 4.
//       console.log(_id.usuario[0])  
   let ver = JSON.stringify(_id[step]); 
   var ver1 = ver.slice(10,-2);
   
console.log(ver);
console.log(ver1);
const notes100 = await User.findOne( {email:ver1}).lean();
  const pos = step+1;   
  console.log("pos1",pos);
  console.log("email",notes100.email);
     
  const doc2 = await Usuario.updateOne({email: notes100.email},  {posicion:pos});
  if(err) {
    console.log("error");
    console.log(err);
  }
  console.log("aca entre");
  
 }
}

};

export const deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  req.flash("success_msg", "Medico Borrado Satisfactoriamente");
  res.redirect("/notes");
};



import PdfkitConstruct from "pdfkit-construct";
import User from "../models/User.js";
export const imprimirNote = async (req, res) => {
  const pedi = await Note.find({status_partido:"C"})
  .sort({ date: "desc" })
  .lean();

            const doc = new PdfkitConstruct({
            size: 'letter',
            margins: {top: 20, left: 5, right: 5, bottom: 20},
            bufferPages: true});

            // set the header to render in every page
            doc.setDocumentHeader({}, () => {


     //         doc.lineJoin('miter')
     //             .rect(0, 0, doc.page.width, doc.header.options.heightNumber).fill("#ededed");

              doc.fill("#115dc8")
                  .fontSize(20)
                  .text("Laboratorios Ecar", {align: 'center'});
              doc.fill("#115dc8")
                  .fontSize(18)
                  .text("Resultados", {align: 'center'});

          });



            // add a table (you can add multiple tables with different columns)
            // make sure every column has a key. keys should be unique
            doc.addTable(
              [
                {key: 'email', label: 'Email', align: 'left'},
                {key: 'grupo', label: 'Grupo', align: 'left' },
                  {key: 'fecha', label: 'Fecha', align: 'left'},
                  {key: 'equipo1', label: 'Equipo ', align: 'left'},
                  {key: 'pronostico1', label: 'Pronos', align: 'left'},
                  {key: 'resultado1', label: 'Resul', align: 'left'},
                  {key: '', label: 'Vs', align: 'left'},
                  {key: 'equipo2', label: 'Equipo', align: 'left'},
                  {key: 'pronostico2', label: 'Pronos', align: 'left'},
                  {key: 'resultado2', label: 'Resul', align: 'left'},
                  {key: 'puntos', label: 'Puntos', align: 'left'},

              ],
              pedi, {
                  border: null,
                  width: "auto",
                  striped: true,
                  stripedColors: ["#f6f6f6", "#d6c4dd"],
                  cellsPadding: 10,
                  marginLeft: 25,
                  marginRight: 25
              });

             // set the footer to render in every page
            doc.setDocumentFooter({}, () => {

              //         doc.lineJoin('miter')
              //             .rect(0, doc.footer.y, doc.page.width, doc.footer.options.heightNumber).fill("#c2edbe");
         
                       doc.fill("#7416c8")
                           .fontSize(8)
                           .text("Quiniela Laboratorios Ecar", doc.footer.x, doc.footer.y + 10);
                   });
          // render tables
          doc.render();
            // this should be the last
            // for this to work you need to set bufferPages to true in constructor options 
            //doc.setPageNumbers((p, c) => `Page ${p} of ${c}`, "bottom right");
            doc.pipe(res);
            doc.end();
        
};


import PdfkitConstruct1 from "pdfkit-construct";
import User1 from "../models/User.js";
export const imprimirNote1 = async (req, res) => {

  const pedi = await User1.find({tipo_usuario:"Jugador"})
  .sort({ puntos: "desc" })
  .lean();

            const doc = new PdfkitConstruct1({
            size: 'letter',
            margins: {top: 20, left: 5, right: 5, bottom: 20},
            bufferPages: true});

            // set the header to render in every page
            doc.setDocumentHeader({}, () => {


     //         doc.lineJoin('miter')
     //             .rect(0, 0, doc.page.width, doc.header.options.heightNumber).fill("#ededed");

              doc.fill("#115dc8")
                  .fontSize(20)
                  .text("Laboratorios Ecar", {align: 'center'});
              doc.fill("#115dc8")
                  .fontSize(18)
                  .text("Posicion de los Jugadores", {align: 'center'});

          });



            // add a table (you can add multiple tables with different columns)
            // make sure every column has a key. keys should be unique
            doc.addTable(

              [
                {key: 'posicion', label: '#', align: 'left'},
                {key: 'name', label: 'Nombre', align: 'left'},
                {key: 'apellido', label: 'Apelido', align: 'left'},
                {key: 'email', label: 'Email', align: 'left'},
                {key: 'puntos', label: 'Puntos', align: 'center'},

              ],
              pedi, {
                  border: null,
                  width: "auto",
                  striped: true,
                  stripedColors: ["#f6f6f6", "#d6c4dd"],
                  cellsPadding: 10,
                  marginLeft: 25,
                  marginRight: 25
              });

             // set the footer to render in every page
            doc.setDocumentFooter({}, () => {

              //         doc.lineJoin('miter')
              //             .rect(0, doc.footer.y, doc.page.width, doc.footer.options.heightNumber).fill("#c2edbe");
         
                       doc.fill("#7416c8")
                           .fontSize(8)
                           .text("Quiniela Laboratorios Ecar", doc.footer.x, doc.footer.y + 10);
                   });
          // render tables
          doc.render();
            // this should be the last
            // for this to work you need to set bufferPages to true in constructor options 
            //doc.setPageNumbers((p, c) => `Page ${p} of ${c}`, "bottom right");
            doc.pipe(res);
            doc.end();
        
};


import PdfkitConstruct2 from "pdfkit-construct";
import User2 from "../models/User.js";
export const imprimirNote2 = async (req, res) => {
  console.log(req.user.email)
  const pedi2 = await Note.find({email:req.user.email})
  .sort({ date: "desc" })
  .lean();

            const doc2 = new PdfkitConstruct2({
            size: 'letter',
            margins: {top: 20, left: 5, right: 5, bottom: 20},
            bufferPages: true});

            // set the header to render in every page
            doc2.setDocumentHeader({}, () => {


     //         doc.lineJoin('miter')
     //             .rect(0, 0, doc.page.width, doc.header.options.heightNumber).fill("#ededed");

              doc2.fill("#115dc8")
                  .fontSize(20)
                  .text("Laboratorios Ecar", {align: 'center'});
              doc2.fill("#115dc8")
                  .fontSize(18)
                  .text("Mi Pronostico", {align: 'center'});

          });



            // add a table (you can add multiple tables with different columns)
            // make sure every column has a key. keys should be unique
            doc2.addTable(
              [

                {key: 'grupo', label: 'Grupo', align: 'left' },
                  {key: 'fecha', label: 'Fecha', align: 'left'},
                  {key: 'equipo1', label: 'Equipo ', align: 'left'},
                  {key: 'pronostico1', label: 'Pronos', align: 'left'},
                  {key: 'resultado1', label: 'Resul', align: 'left'},
                  {key: '', label: 'Vs', align: 'left'},
                  {key: 'equipo2', label: 'Equipo', align: 'left'},
                  {key: 'pronostico2', label: 'Pronos', align: 'left'},
                  {key: 'resultado2', label: 'Resul', align: 'left'},
                  {key: 'puntos', label: 'Puntos', align: 'left'},

              ],
              pedi2, {
                  border: null,
                  width: "auto",
                  striped: true,
                  stripedColors: ["#f6f6f6", "#d6c4dd"],
                  cellsPadding: 10,
                  marginLeft: 25,
                  marginRight: 25
              });

             // set the footer to render in every page
            doc2.setDocumentFooter({}, () => {

              //         doc.lineJoin('miter')
              //             .rect(0, doc.footer.y, doc.page.width, doc.footer.options.heightNumber).fill("#c2edbe");
         
                       doc2.fill("#7416c8")
                           .fontSize(8)
                           .text("Quiniela Laboratorios Ecar", doc2.footer.x, doc2.footer.y + 10);
                   });
          // render tables
          doc2.render();
            // this should be the last
            // for this to work you need to set bufferPages to true in constructor options 
            //doc.setPageNumbers((p, c) => `Page ${p} of ${c}`, "bottom right");
            doc2.pipe(res);
            doc2.end();
        
};
