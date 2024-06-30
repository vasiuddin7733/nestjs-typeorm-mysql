import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './typeorm/entities/user';
import { UsersModule } from './users/users.module';
import { CustomerModule } from './customer/customer.module';
import { Customer } from './customer/entities/customer.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'vasiuddin',
    password: '123456',
    database: 'typeormMysql',
    entities: [User, Customer],
    synchronize: true,
  }), UsersModule, CustomerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
