import { Controller, Put, Param, Body, ParseIntPipe } from "@nestjs/common";
import { UsersService } from './users.service';
import { UpdateUserDto } from "./dto/user.dtos";
import { ApiTags } from "@nestjs/swagger";

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Put(':id')
  async updateUser(@Param('id',ParseIntPipe) id: number, @Body() user: UpdateUserDto) {
    return await this.usersService.updateUser(user, id);
  }
}
