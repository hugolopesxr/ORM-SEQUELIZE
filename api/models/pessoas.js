'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pessoas = sequelize.define('Pessoas', {
    nome: {
      type: DataTypes.STRING,
      validate: {
        funcaoValidadora: function(dado) {
          if (dado.length < 3) throw new Error('O campo nome deve ter mais de 3 caracteres')
        }
      }
    },
    ativo: DataTypes.BOOLEAN,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Dados do tipo e-mail inválidos'
        }
      }
    },
    role: DataTypes.STRING
  }, {
    paranoid: true,
    defaultScope: {
      where: { ativo: true }
    },
    scopes: {
      todos: { where: {} },
      //etc: { constraint: valor }
    }
  });
  Pessoas.associate = function (models) {
    Pessoas.hasMany(models.Turmas, {
      foreignKey: 'docente_id',
    })
    Pessoas.hasMany(models.Matriculas, {
      foreignKey: 'estudante_id',
      scope: { status: 'confirmado' },
      as: 'aulasMatriculadas'
    })
  }
  return Pessoas;
};