import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Visitor extends Model {
    public id!: number;
    public name!: string;
    public email!: string;
}

Visitor.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        },
    },
}, {
    sequelize,
    tableName: 'visitors',
    timestamps: true,
});

export default Visitor;