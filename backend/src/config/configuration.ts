export default () => ({
  database: {
    type: 'mongodb',
    url: process.env.MONGODB_CONNECTION_STRING,
    database: process.env.DATABASE,
    ssl: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
    synchronize: true,
    autoLoadEntities: true,
    logging: false,
  },
});
