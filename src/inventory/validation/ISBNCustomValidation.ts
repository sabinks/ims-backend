import { Injectable } from '@nestjs/common';
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'isCustomValid', async: false }) // async can be true if needed
@Injectable()
export class ISBNCustomValidation implements ValidatorConstraintInterface {
  validate(input: any, args: ValidationArguments): boolean {
    const isbnDigit = input.replace(/[^0-9]/g, '');

    if (
      isbnDigit.toString().length == 10 ||
      isbnDigit.toString().length == 13
    ) {
      return true;
    }
    return false;
  }

  defaultMessage(args: ValidationArguments): string {
    return 'ISBN new format length: 13 & old format length: 10';
  }
}
