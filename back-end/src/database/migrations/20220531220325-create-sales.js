"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    const Sales = queryInterface.createTable("Sales", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.NUMBER,
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: {
          model: "users",
          key: "id",
        },
      },
      seller_id: {
        type: Sequelize.NUMBER,
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: {
          model: "users",
          key: "id",
        },
      },
      total_price: { type: Sequelize.NUMBER, allowNull: false },
      delivery_addres: { type: Sequelize.STRING, allowNull: false },
      delivery_number: { type: Sequelize.STRING, allowNull: false },
      sale_date: { type: Sequelize.DATETIME, allowNull: false },
      status: { type: Sequelize.STRING, allowNull: false },
    });
    return Sales;
  },

  async down(queryInterface, _Sequelize) {
    queryInterface.dropTable("Sales");
  },
};