import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class LocalizedNameUpdateInput {
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
export class NationalIdUpdateInput {
  @Field()
  idNumber: string;

  @Field()
  expiryDate: Date;
}

@InputType()
export class CountryUpdateInput {
  @Field()
  id: string;

  @Field()
  name: string;
}

@InputType()
export class NationalityUpdateInput {
  @Field()
  countryId: number;

  @Field(() => CountryUpdateInput)
  country: CountryUpdateInput;
}

@InputType()
export class MaritalStatusUpdateInput {
  @Field()
  id: string;

  @Field()
  name: string;
}

@InputType()
export class UpdateUserInput {
  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  fatherName?: string;

  @Field({ nullable: true })
  grandfatherName?: string;

  @Field({ nullable: true })
  familyName?: string;

  @Field({ nullable: true })
  dateOfBirth?: string;

  @Field({ nullable: true })
  gender?: string;

  @Field({ nullable: true })
  title?: string;

  @Field({ nullable: true })
  passportNumber?: string;

  @Field({ nullable: true })
  passportIssueDate?: string;

  @Field({ nullable: true })
  passportExpiryDate?: string;

  @Field(() => LocalizedNameUpdateInput, { nullable: true })
  localizedName?: LocalizedNameUpdateInput;

  @Field(() => NationalIdUpdateInput, { nullable: true })
  nationalId?: NationalIdUpdateInput;

  @Field(() => [NationalityUpdateInput], { nullable: true })
  nationalities?: NationalityUpdateInput[];

  @Field(() => MaritalStatusUpdateInput, { nullable: true })
  maritalStatus?: MaritalStatusUpdateInput;

  @Field({ nullable: true })
  dependants?: number;
}
