'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Doctor_Infor', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            doctorId: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            specialtyId: {
                type: Sequelize.INTEGER
            },
            clinicId: {
                type: Sequelize.INTEGER
            },
            priceId: {
                allowNull: false,
                type: Sequelize.STRING
            },
            provinceId: {
                allowNull: false,
                type: Sequelize.STRING
            },
            paymentId: {
                allowNull: false,
                type: Sequelize.STRING
            },
            addressClinic: {
                allowNull: false,
                type: Sequelize.STRING
            },
            nameClinic: {
                allowNull: false,
                type: Sequelize.STRING
            },
            note: {
                allowNull: false,
                type: Sequelize.STRING
            },
            count: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            //------------------
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Doctor_Infor');
    }
};