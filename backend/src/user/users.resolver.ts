import { Resolver, Query, Args, Int, Mutation } from '@nestjs/graphql';
import { User } from './user.model';
import { CreateUserInput } from './create-user.input';
import { UpdateUserInput } from './update-user.input';

@Resolver(() => User)
export class UserResolver {
  private readonly _users: User[] = [
    {
      id: 1,
      firstName: 'John',
      fatherName: 'John',
      grandfatherName: 'John',
      familyName: 'Smith',
      dateOfBirth: '01/04/1980',
      gender: 'Male',
      title: 'Mr.',
      passportNumber: 'A135464',
      passportIssueDate: '01/04/1980',
      passportExpiryDate: '01/04/1980',
      localizedName: {
        firstName: 'جون',
        fatherName: 'جون',
        grandfatherName: 'جون',
        familyName: 'سمبث',
      },
      nationalId: {
        idNumber: '29702031400693',
        expiryDate: new Date('2025-04-01T22:45:29.864Z'),
      },
      nationalities: [
        {
          country: {
            id: '1',
            name: 'Egyptian',
          },
          countryId: 1,
        },
        {
          country: {
            id: '2',
            name: '-',
          },
          countryId: 2,
        },
      ],
      maritalStatus: {
        id: '12',
        name: 'Single',
      },
      dependants: 0,
    },
  ];
  private idCounter = 2;
  @Query(() => User)
  user(@Args('userId', { type: () => Int }) userId: number): User {
    return this._users.find((e) => e.id == userId);
  }

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput): User {
    const newUser: User = {
      id: this.idCounter,
      ...createUserInput,
    };

    this._users.push(newUser);
    this.idCounter++;
    return newUser;
  }

  @Mutation(() => User)
  updateUser(
    @Args('userId', { type: () => Int }) userId: number,
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ): User {
    const userIndex = this._users.findIndex((user) => user.id === userId);
    if (userIndex === -1) {
      throw new Error('User not found');
    }
    const updatedUser = { ...this._users[userIndex], ...updateUserInput };
    this._users[userIndex] = updatedUser;
    return updatedUser;
  }
}

/*
 private readonly _users: User[] = [
    {
      firstName: 'Zaria',
      fatherName: 'Edward',
      grandfatherName: 'Ernest',
      familyName: 'Willie',
      localizedName: {
        firstName: 'صفوان',
        fatherName: 'حمدان',
        grandfatherName: 'هشام',
        familyName: 'عباس',
      },
      nationalId: {
        idNumber: '1c1f3fde-0581-4afb-8c7e-abacf3bc5875',
        expiryDate: new Date('2024-07-24T22:45:29.864Z'),
      },
      nationalities: [
        {
          country: {
            id: '1016',
            name: 'Bolivia',
          },
          countryId: 1016,
        },
        {
          country: {
            id: '1117',
            name: 'Latvia',
          },
          countryId: 1117,
        },
        {
          country: {
            id: '1225',
            name: 'Virgin Islands, U.S.',
          },
          countryId: 1225,
        },
      ],
      maritalStatus: {
        id: '27',
        name: 'Divorced',
      },
      dependants: 60,
    },
  ];
 */
