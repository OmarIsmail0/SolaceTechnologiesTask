import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class LocalizedName {
  @Field()
  firstName: string;

  @Field()
  fatherName: string;

  @Field()
  grandfatherName: string;

  @Field()
  familyName: string;
}

@ObjectType()
export class NationalId {
  @Field()
  idNumber: string;

  @Field()
  expiryDate: Date;
}

@ObjectType()
export class Country {
  @Field()
  id: string;

  @Field()
  name: string;
}

@ObjectType()
export class Nationality {
  @Field(() => Country)
  country: Country;

  @Field(() => Int)
  countryId: number;
}

@ObjectType()
export class MaritalStatus {
  @Field()
  id: string;

  @Field()
  name: string;
}

@ObjectType()
export class User {
  @Field()
  id: number;

  @Field()
  firstName: string;

  @Field()
  fatherName: string;

  @Field()
  grandfatherName: string;

  @Field()
  familyName: string;

  @Field()
  gender: string;

  @Field()
  title: string;

  @Field()
  dateOfBirth: string;

  @Field()
  passportNumber: string;

  @Field()
  passportIssueDate: string;

  @Field()
  passportExpiryDate: string;

  @Field(() => LocalizedName)
  localizedName: LocalizedName;

  @Field(() => NationalId)
  nationalId: NationalId;

  @Field(() => [Nationality])
  nationalities: Nationality[];

  @Field(() => MaritalStatus)
  maritalStatus: MaritalStatus;

  @Field(() => Int)
  dependants: number;
}
