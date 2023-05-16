// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Turmas extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Turmas.init({
//     data_inicio: DataTypes.DATEONLY
//   }, {
//     sequelize,
//     modelName: 'Turmas',
//   });
//   return Turmas;
// };

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Turmas = sequelize.define('Turmas', {
    data_inicio: DataTypes.DATEONLY
  }, {});
  Turmas.associate = function (models) {
    Turmas.hasMany(models.Matriculas, {
      foreignKey: 'turma_id',
    })
    Turmas.belongsTo(models.Pessoas, {
      foreignKey: 'docente_id',
    })
    Turmas.belongsTo(models.Niveis, {
      foreignKey: 'nivel_id',
    });
  };
  return Turmas;
};