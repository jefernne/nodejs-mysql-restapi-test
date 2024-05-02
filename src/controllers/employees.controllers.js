import { pool } from "../database/connection.js";


//---------------------------------Treaer Datos Todo los Datos ----------------------------------------//
export const getemployes = async (req, res) => {
  try {
    const [row] = await pool.query("SELECT * FROM usuario");
    res.json(row);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

//---------------------------------Treaer un Dato ----------------------------------------//
export const getwithidEmpoyes = async (req, res) => {
  try {
    const [row] = await pool.query(
      ` SELECT * FROM usuario where idUsuario=${parseInt(req.query.id)} `
    );
    res.json(row);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

//---------------------------Agregar Datos---------------------------------------//
export const postemployes = async (req, res) => {
  try {
    const { id, Nombre, Apellido } = req.body;
    console.log(id, Nombre, Apellido);
    if (!id || !Nombre || !Apellido) {
      return res.status(400).send("Tienes que llenar los campos");
    } else if (typeof id !== "number") {
      return res
        .status(400)
        .send("El id tiene que ser numero no se puede texto");
    }

    const [rows] = await pool.query(
      "insert into usuario (idUsuario, Nombre, Apellido) values (?,?,?)",
      [id, Nombre, Apellido]
    );

    res.json({
      id,
      Nombre,
      Apellido,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteemployes = async (req, res) => {
  try {
    const result = await pool.query(
      `DELETE FROM usuario WHERE idUsuario=${parseInt(req.query.id)}`
    );
    console.log(result);
    res.send("Jefernne");
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const putemployes = async (req, res) => {
  try {
    const { id } = req.query;
    const { Nombre, Apellido } = req.body;
    const [row] = await pool.query(
      "UPDATE usuario SET Nombre = IFNULL(?,Nombre), Apellido=IFNULL(?,Apellido) where idUsuario = ? ",
      [Nombre, Apellido, parseInt(id)]
    );

    if (row.affectedRows === 0)
      return res.status(404).json({
        message: "Employee not found",
      });
    console.log(row);
    res.json("received");
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
