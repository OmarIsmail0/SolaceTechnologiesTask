import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class LocalizedNameInput {
  @Field()
  firstName: string;

  @Field()
  fatherName: string;

  @Field()
  grandfatherName: string;

  @Field()
  familyName: string;
}

@InputType()
export class NationalIdInput {
  @Field()
  idNumber: string;

  @Field()
  expiryDate: Date;
}

@InputType()
export class CountryInput {
  @Field()
  id: string;

  @Field()
  name: string;
}

@InputType()
export class NationalityInput {
  @Field()
  countryId: number;

  @Field(() => CountryInput)
  country: CountryInput;
}

@InputType()
export class MaritalStatusInput {
  @Field()
  id: string;

  @Field()
  name: string;
}

@InputType()
export class CreateUserInput {
  @Field()
  firstName: string;

  @Field()
  fatherName: string;

  @Field()
  grandfatherName: string;

  @Field()
  familyName: string;

  @Field()
  dateOfBirth: string;

  @Field()
  gender: string;

  @Field()
  title: string;

  @Field()
  passportNumber: string;

  @Field()
  passportIssueDate: string;

  @Field()
  passportExpiryDate: string;

  @Field(() => LocalizedNameInput)
  localizedName: LocalizedNameInput;

  @Field(() => NationalIdInput)
  nationalId: NationalIdInput;

  @Field(() => [NationalityInput])
  nationalities: NationalityInput[];

  @Field(() => MaritalStatusInput)
  maritalStatus: MaritalStatusInput;

  @Field()
  dependants: number;
}
