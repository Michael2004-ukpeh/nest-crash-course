import { PartialType } from '@nestjs/mapped-types';
import { IsEmail, IsNumberString, IsString } from 'class-validator';
import { CreateUserDto } from './createUserDto';
export class UpdateUserDto extends PartialType(CreateUserDto) {}
