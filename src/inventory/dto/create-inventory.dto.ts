import {
  IsEmpty,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
  Validate,
} from 'class-validator';
import { ISBNCustomValidation } from '../validation/ISBNCustomValidation';
// 1. Create a custom validator class

export class CreateInventoryDto {
  @IsNotEmpty({ message: 'Entry ID is required!' })
  @MinLength(3, { message: 'Entry ID must have min characters: 3' })
  @MaxLength(100, { message: 'Entry ID must have max characters: 100' })
  @IsString()
  entryId: string;

  @MinLength(2, { message: 'Book title must have min characters: 3' })
  @MaxLength(100, { message: 'Book title must have max characters: 100' })
  @IsString()
  title: string;

  @MinLength(3, { message: 'Author name must have min characters: 3' })
  @MaxLength(100, { message: 'Author name must have max characters: 100' })
  @IsString()
  author: string;

  @MinLength(3, { message: 'Genre must have min characters: 3' })
  @MaxLength(100, { message: 'Genre must have max characters: 100' })
  @IsString()
  genre: string;

  @IsNotEmpty({ message: 'Publication Date is required!' })
  @IsString()
  publicationDate: string;

  @IsNotEmpty({ message: 'ISBN value is required!' })
  @IsString()
  @Validate(ISBNCustomValidation)
  //   @Transform((param) => param.value.replace(/[^0-9]/g, ''))
  isbn: string;
}
