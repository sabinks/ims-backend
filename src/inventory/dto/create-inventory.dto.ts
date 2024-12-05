import { IsNotEmpty, IsString } from 'class-validator';

export class CreateInventoryDto {
  @IsNotEmpty()
  @IsString()
  entryId: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  author: string;

  @IsNotEmpty()
  @IsString()
  genre: string;

  @IsNotEmpty()
  @IsString()
  publicationDate: string;

  @IsNotEmpty()
  @IsString()
  isbn: string;
}
