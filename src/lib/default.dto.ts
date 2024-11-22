import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNumber, IsOptional } from 'class-validator';

export class DefaultDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsNumber()
  id?: number;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDate()
  createdAt?: Date;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsDate()
  updatedAt?: Date;
}
