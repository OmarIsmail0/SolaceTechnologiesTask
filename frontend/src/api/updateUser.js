import axios from "axios";

const GRAPHQL_ENDPOINT = "http://localhost:3000/graphql";

export const updateUser = async (userId, userData) => {
  const mutation = `
    mutation($userId: Int!, $updateUserInput: UpdateUserInput!) {
      updateUser(userId: $userId, updateUserInput: $updateUserInput) {
        id
        firstName
        fatherName
        grandfatherName
        familyName
        dateOfBirth
        gender
        title
        passportNumber
        passportIssueDate
        passportExpiryDate
        localizedName {
          firstName
          fatherName
          grandfatherName
          familyName
        }
        nationalId {
          idNumber
          expiryDate
        }
        nationalities {
          country {
            id
            name
          }
          countryId
        }
        maritalStatus {
          id
          name
        }
        dependants
      }
    }
  `;

  const variables = {
    userId,
    updateUserInput: userData,
  };

  try {
    const response = await axios.post(GRAPHQL_ENDPOINT, {
      query: mutation,
      variables,
    });
    return response.data.data.updateUser;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};
