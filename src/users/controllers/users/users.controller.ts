import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService){}    

    @Get()
    getUsers(){ }
    
    // @Post()
    // createUser(@Body() createUserDto:CreateUserDto ){
    //     this.userService.createUser()
    // }
}
