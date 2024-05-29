import { Router } from "express";
import {

  renderNotes,
  renderNotesqf,
  renderNotessf,
  renderNotesf,
  renderNotescodigo,
  renderNotescodigo1,
  renderNotescodigo2,
  renderNotespremios,
  renderEditForm,
  updateNote,
  deleteNote,
  imprimirNote,
  imprimirNote1,
  imprimirNote2,
  renderVisualizarnotas
} from "../controllers/notes.controller.js";

import { isAuthenticated } from "../helpers/auth.js";

const router = Router();

// New Note


// Get All Notes
router.get("/notes", isAuthenticated, renderNotes);
router.post("/pedircodigo", isAuthenticated, renderNotescodigo);
router.post("/pedircodigo1", isAuthenticated, renderNotescodigo1);
router.post("/pedircodigo2", isAuthenticated, renderNotescodigo2);
router.get("/notespremios", isAuthenticated, renderNotespremios);
router.get("/notesqf", isAuthenticated, renderNotesqf);

router.get("/notessf", isAuthenticated, renderNotessf);

router.get("/notesf", isAuthenticated, renderNotesf);


// Edit Notes
router.get("/notes/edit/:id", isAuthenticated, renderEditForm);


router.put("/notes/edit-note/:id", isAuthenticated, updateNote);


// Delete Notes
router.delete("/notes/delete/:id", isAuthenticated, deleteNote);

// imprimir Notes
router.get("/notes/imprimir", isAuthenticated, imprimirNote);
router.get("/notes/imprimir1", isAuthenticated, imprimirNote1);
router.get("/notes/imprimir2", isAuthenticated, imprimirNote2);

router.get("/notes/visualizar/:id", isAuthenticated, renderVisualizarnotas);


export default router;
