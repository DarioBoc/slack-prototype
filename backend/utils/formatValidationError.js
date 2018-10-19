export default (error, models) => {
  if (error instanceof models.sequelize.ValidationError) {
    return error.errors.map(x => ({
      path: x.path,
      message: x.message,
    }));
  }

  return [{ path: 'name', message: 'something went wrong' }];
};
