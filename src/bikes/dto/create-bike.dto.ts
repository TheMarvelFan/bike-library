import { IsString, IsInt, Min, Max } from 'class-validator';

export class CreateBikeDto {
  @IsString()
  make: string;

  @IsString()
  model: string;

  @IsInt()
  @Min(1900)
  @Max(new Date().getFullYear() + 1)
  year: number;

  @IsString()
  type: string;
}
