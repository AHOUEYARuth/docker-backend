require("dotenv").config();

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../schemas/users");

const saltRounds = 10;

exports.createUser = (req, res) => {
  bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
    const user = new User({
      name: req.body.name,
      firstName: req.body.firstName,
      email: req.body.email,
      password: hash, // on stocke le mot de passe crypté
      age: req.body.age,
    });

    user.save()
      .then((data) => res.status(200).json(data ))
      .catch((error) => res.json(error));
  });
}

exports.login = (req, res) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (!user) {
        return res.status(401).json({ message: "Utilisateur non trouvé" });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((valide) => {
          if (!valide) {
            return res.status(401).json({ message: "Mot de passe incorrect" });
          }
          res.status(200).json({
            token: jwt.sign(
              {
                userId: user._id,
              },
              process.env.JWT_SECRET,
              {
                expiresIn: "24h", // durée de validité du token
              }
            ),
          });
        })
        .catch((error) => res.status(500).json({ error }));
    })
    .catch((error) => res.status(400).json({ error }));
};