import { Box, Grid } from "@mui/material";

import FormSection from "../../components/FormSection";
import InputField from "../../components/InputField";
import { OTHER_DATA } from "../../constants/otherData";
import { useForm } from "react-hook-form";

const FinancialInformation = () => {
  const {
    handleSubmit: handleBankInformationSubmit,
    control: bankInformationControl,
  } = useForm({
    defaultValues: OTHER_DATA.bankInformation,
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Box>
      <FormSection
        title="Contact Information"
        onSubmit={handleBankInformationSubmit(onSubmit)}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3}>
            <InputField
              control={bankInformationControl}
              name="bankName"
              label="Bank Name"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <InputField
              control={bankInformationControl}
              name="IBAN"
              label="IBAN"
            />
          </Grid>
        </Grid>
      </FormSection>
    </Box>
  );
};

export default FinancialInformation;
