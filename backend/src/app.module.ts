import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

require('dotenv').config()

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      username: process.env.PGUSER,
      database: process.env.PGDATABASE,
      password: process.env.PGPASSWORD,
      host: process.env.PGHOST,
      port: parseInt(process.env.PGPORT, 10),
      autoLoadModels: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}