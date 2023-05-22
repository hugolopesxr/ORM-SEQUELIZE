// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class Niveis extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   Niveis.init({
//     descr_nivel: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'Niveis',
//   });
//   return Niveis;
// };

'use strict';
module.exports = (sequelize, DataTypes) => {
const Niveis = sequelize.define('Niveis', {
    descr_nivel: DataTypes.STRING
  }, { paranoid: true });
    Niveis.associate = function(models) {
      Niveis.hasMany(models.Turmas, {
        foreignKey: 'nivel_id',
      })
  };
  return Niveis;
};