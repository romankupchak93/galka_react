const { DataTypes } = require('sequelize');

module.exports = model;
function model(sequelize) {
    const attributes = {
        turnId:             { type: DataTypes.INTEGER, allowNull: false },
        surName:            { type: DataTypes.STRING, allowNull: false },
        name:               { type: DataTypes.STRING, allowNull: false },
        middleName:         { type: DataTypes.STRING, allowNull: true },
        birthday:           { type: DataTypes.DATE, allowNull: false },
        username:           { type: DataTypes.STRING, allowNull: false },
        email:              { type: DataTypes.STRING, allowNull: false },
        hash:               { type: DataTypes.STRING, allowNull: false },
        socialCardTypeName: { type: DataTypes.STRING, allowNull: false },
        socialCardNumber:   { type: DataTypes.CHAR, allowNull: false },
        validityDate:       { type: DataTypes.DATE, allowNull: true }
    };
    const options = {
        defaultScope: {
            attributes: { exclude: ['hash'] }
        },
        scopes: {
            withHash: { attributes: {}, }
        }
    };
    return sequelize.define('User', attributes, options);
}
