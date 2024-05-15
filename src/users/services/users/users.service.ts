import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/user';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

   constructor(@InjectRepository(User) private userRepository : Repository<User>){}
    findUsers(){}
    createUser(){}
}
