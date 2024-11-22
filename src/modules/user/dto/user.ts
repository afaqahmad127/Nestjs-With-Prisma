import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';
import { DefaultDto } from 'src/lib/default.dto';

export class User extends DefaultDto {
  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty({ required: false })
  firstName?: string;

  @ApiProperty()
  @IsString()
  lastName: string;
}
