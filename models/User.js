const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  documento: { type: Number, required: true },
  entidad_medica: { type: String, required: true },
  direccion: { type: String, required: true },
  telefono: { type: Number, default: 0 },
  escolaridad: { type: String, default: "no aplica" },
  ocupacion: { type: String, default: "no aplica" },
  fechaNacimiento: { type: Date, required: true },
  sexo: { type: String, default: "no aplica" },
  fechaCreacion: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("User", UserSchema);
