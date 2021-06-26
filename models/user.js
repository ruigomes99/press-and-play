const bcrypt = require("bcryptjs");


//PT: Cria o modelo do User que é usado no passaporte
//ENG: Create the user model that is used in passport 
module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    id_user: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    primeiro_nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ultimo_nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nif: {
      type: DataTypes.INTEGER,
      //unique: true,
      allowNull: false
    },
    data_nascimento: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    pais: {
      type: DataTypes.STRING
    },
    localidade: {
      type: DataTypes.STRING
    },
    avatar: {
      type: DataTypes.STRING
    },
    pontos: {
      type: DataTypes.INTEGER
    },
    confirmar_email: {
      type: DataTypes.INTEGER
    },
    token: {
      type: DataTypes.STRING
    },
    banido: {
      type: DataTypes.INTEGER
    },
    id_google: {
      type: DataTypes.STRING
    },
    descontos: {
      type: DataTypes.INTEGER
    },
    descontos_usados: {
      type: DataTypes.INTEGER
    }
  }, {
    freezeTableName: true,
    tableName: 'utilizador',
    createdAt: 'data_conta_criada',
    updatedAt: 'ultima_atualizacao'
  })
  //PT: Criar um método para o modelo de User
  //PT: Este modelo vai confirmar se uma password não encriptada que foi introduzida pelo utilizador pode sequer ser comparada com uma que esteja guardada na base dados
  //ENG: Create a method for the user model
  //ENG: This model is going to confirm if the password not encrypted that was inserted by the user can be compared with one that is in the data base
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  //PT: Os hooks são métodos automáticos que correm durante várias fazes do ciclo de vida do modelo de User
  //PT: Neste caso, antes de um User ser criado, a palavra-passe introduzida pelo utilizador vai ser encriptada através do modulo bcrypt
  //ENG: The hooks are authomatic methods that run during severall fases of the user's model cycle of life
  //ENG: In this case, before an user is created, the password inserted by the user is going to be enrypted by bcrypt's model
  User.beforeCreate(user => {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
  return User;
};