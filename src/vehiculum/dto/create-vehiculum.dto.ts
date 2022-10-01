import { IsInt, IsPositive, IsString, Min, MinLength } from 'class-validator';

export class CreateVehiculumDto {
  @IsInt()
  @IsPositive()
  @Min(1)
  id: number;
  @MinLength(1)
  @IsString()
  name: string;
}
