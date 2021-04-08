const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) {
    const attributes = {
        date: { type: DataTypes.DATE, allowNull: true, },
        text: { type: DataTypes.STRING, allowNull: true },
        title: { type: DataTypes.STRING, allowNull: true },
        image: { type: DataTypes.STRING, allowNull: true }
    };
    const options = {
        defaultScope: {
            attributes: { exclude: ['hash'] }
        },
        scopes: {
            withHash: { attributes: {}, }
        }
    };
    return sequelize.define('News', attributes, options);
}
