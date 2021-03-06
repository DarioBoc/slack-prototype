import Sequelize from 'sequelize';

import config from '../config';

const sequelize = new Sequelize(config.db.database, 'postgres', config.db.password, {
  dialect: 'postgres',
  define: {
    underscored: true,
  },
  operatorsAliases: false,
});

const models = {
  User: sequelize.import('./user'),
  Channel: sequelize.import('./channel'),
  Message: sequelize.import('./message'),
  Team: sequelize.import('./team'),
};

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
