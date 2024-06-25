/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { Box, Grid } from "@mui/material";
import InputField from "../../components/InputField";
import FormSection from "../../components/FormSection";
import { OTHER_DATA } from "../../constants/otherData";
import { updateUser } from "../../api/updateUser";

const PersonalInformationTab = ({ userData }) => {
  userData.nationalId.expiryDate = userData.nationalId.expiryDate.split("T")[0];

  const { handleSubmit, control } = useForm({
    defaultValues: userData,
  });

  const {
    handleSubmit: handleContactInformationSubmit,
    control: contactInformationControl,
  } = useForm({
    defaultValues: OTHER_DATA.contactInformation,
  });
  const {
    handleSubmit: handleEmergencyContactSubmit,
    control: emergencyContactControl,
  } = useForm({
    defaultValues: OTHER_DATA.emergencyContact,
  });
  const {
    handleSubmit: handleAddressDetailsSubmit,
    control: addressDetailsControl,
  } = useForm({
    defaultValues: OTHER_DATA.addressDetails,
  });
  const {
    handleSubmit: handleDrivingLicenseDetailsSubmit,
    control: drivingLicenseDetailsControl,
  } = useForm({
    defaultValues: OTHER_DATA.drivingLicenseDetails,
  });
  const {
    handleSubmit: handleMilitaryStatusSubmit,
    control: militaryStatusControl,
  } = useForm({
    defaultValues: OTHER_DATA.militaryStatus,
  });

  const onSubmit = (data) => {
    data.dependants = parseInt(data.dependants);
    console.log(data);
    updateUser(1, data);
  };

  return (
    <Box>
      <FormSection title="Basic Inforamtion" onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <InputField
              control={control}
              name="nationalId.idNumber"
              label="National ID Number"
              disabled={false}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InputField
              control={control}
              name="nationalId.expiryDate"
              label="National ID Expiring Date"
              disabled={false}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InputField
              control={control}
              name="title"
              label="Title"
              disabled={false}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} />
          <Grid item xs={12} sm={6} md={3}>
            <InputField
              control={control}
              name="firstName"
              label="First Name"
              disabled={false}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InputField
              control={control}
              name="fatherName"
              label="Father Name"
              disabled={false}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InputField
              control={control}
              name="grandfatherName"
              label="Grand Father Name"
              disabled={false}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InputField
              control={control}
              name="familyName"
              label="Family Name"
              disabled={false}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <InputField
              control={control}
              name="localizedName.firstName"
              label="الأسم الأول"
              disabled={false}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InputField
              control={control}
              name="localizedName.fatherName"
              label="اسم الأب"
              disabled={false}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InputField
              control={control}
              name="localizedName.grandfatherName"
              label="اسم الجد"
              disabled={false}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InputField
              control={control}
              name="localizedName.familyName"
              label="اللقب / اسم العائلة"
              disabled={false}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InputField
              control={control}
              name="dateOfBirth"
              label="Date of birth"
              disabled={false}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InputField
              control={control}
              name="gender"
              label="Gender"
              disabled={false}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InputField
              control={control}
              name="nationalities[0].country.name"
              label="Nationality"
              disabled={false}
            />
          </Grid>
          {userData.nationalities.slice(1).map((nationality, index) => (
            <Grid key={nationality.countryId} item xs={12} sm={6} md={3}>
              <InputField
                control={control}
                name={`nationalities[${index + 1}].country.name`}
                label="Additional Nationality"
                disabled={false}
              />
            </Grid>
          ))}
          <Grid item xs={12} sm={6} md={3}>
            <InputField
              control={control}
              name="passportNumber"
              label="Passport No."
              disabled={false}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InputField
              control={control}
              name="passportIssueDate"
              label="Passport Issue Date"
              disabled={false}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InputField
              control={control}
              name="passportExpiryDate"
              label="Passport Expiry Date"
              disabled={false}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} />
          <Grid item xs={12} sm={6} md={3}>
            <InputField
              control={control}
              name="maritalStatus.name"
              label="Marital Status"
              disabled={false}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InputField
              control={control}
              name="dependants"
              label="Dependencies"
              disabled={false}
            />
          </Grid>
        </Grid>
      </FormSection>

      <FormSection
        title="Contact Information"
        onSubmit={handleContactInformationSubmit(onSubmit)}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <InputField
              control={contactInformationControl}
              name="email"
              label="Personal Email"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InputField
              control={contactInformationControl}
              name="mobile"
              label="Mobile"
            />
          </Grid>
        </Grid>
      </FormSection>

      <FormSection
        title="Emergency Contacts"
        onSubmit={handleEmergencyContactSubmit(onSubmit)}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <InputField
              control={emergencyContactControl}
              name="name"
              label="Emergency Contact Person Name"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InputField
              control={emergencyContactControl}
              name="relation"
              label="Emergency Relation"
            />
          </Grid>
        </Grid>
      </FormSection>

      <FormSection
        title="Address Details"
        onSubmit={handleAddressDetailsSubmit(onSubmit)}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <InputField
              control={addressDetailsControl}
              name="country"
              label="Country"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InputField
              control={addressDetailsControl}
              name="city"
              label="City"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InputField
              control={addressDetailsControl}
              name="postalCode"
              label="Postal Code"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} />
          <Grid item xs={12} sm={6} md={3}>
            <InputField
              control={addressDetailsControl}
              name="building"
              label="Building"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InputField
              control={addressDetailsControl}
              name="street"
              label="Street"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InputField
              control={addressDetailsControl}
              name="floorNo"
              label="Floor No."
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InputField
              control={addressDetailsControl}
              name="apartment"
              label="Apartment"
            />
          </Grid>
        </Grid>
      </FormSection>

      <FormSection
        title="Driving License Details"
        onSubmit={handleDrivingLicenseDetailsSubmit(onSubmit)}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <InputField
              control={drivingLicenseDetailsControl}
              name="license"
              label="Driving License"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InputField
              control={drivingLicenseDetailsControl}
              name="type"
              label="Driving License Type"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InputField
              control={drivingLicenseDetailsControl}
              name="expiryDate"
              label="Driving License expiry date"
            />
          </Grid>
        </Grid>
      </FormSection>

      <FormSection
        title="Military Status"
        onSubmit={handleMilitaryStatusSubmit(onSubmit)}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <InputField
              control={militaryStatusControl}
              name="travelPermit"
              label="Require Travel Permit"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InputField
              control={militaryStatusControl}
              name="status"
              label="Military Status"
            />
          </Grid>
        </Grid>
      </FormSection>
    </Box>
  );
};

export default PersonalInformationTab;
