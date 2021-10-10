const User = require("../models/User");

exports.crearUsuario = async (req, res) => {
  try {
    let user;
    user = new User(req.body);
    await user.save();
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.updateUser = async (req, res) => {
  try {
    const {
      nombre,
      apellido,
      documento,
      entidad_medica,
      direccion,
      telefono,
      escolaridad,
      ocupacion,
      fechaNacimiento,
      sexo,
    } = req.body;

    let user = await User.findById(req.params.id);

    if (!user) {
      res.status(404).json({ msg: "No existe el usuario" });
    }

    user.nombre = nombre;
    user.apellido = apellido;
    user.documento = documento;
    user.entidad_medica = entidad_medica;
    user.direccion = direccion;
    user.telefono = telefono;
    user.escolaridad = escolaridad;
    user.ocupacion = ocupacion;
    user.fechaNacimiento = fechaNacimiento;
    user.sexo = sexo;

    user = await User.findOneAndUpdate({ _id: req.params.id }, user, {
      new: true,
    });
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.getUserId = async (req, res) => {
  try {
    let user = await User.findById(req.params.id);

    if (!user) {
      res.status(404).json({ msg: "No existe el usuario" });
    }

    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};

exports.deleteUser = async (req, res) => {
  try {
    let user = await User.findById(req.params.id);

    if (!user) {
      res.status(404).json({ msg: "No existe el usuario" });
    }

    await User.findOneAndRemove({ _id: req.params.id });
    res.json({ msg: "Usuario eliminado con exito" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};
