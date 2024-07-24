import { useState } from "react";
import {
  Button,
  Form,
  FormField,
  Checkbox,
  Container,
} from "semantic-ui-react";

const AddFacility = () => {
  const [facilityName, setFacilityName] = useState("");
  return (
    <Container>
      <Form className="facility-name">
        <FormField>
          <label>Facility Name</label>
          <input placeholder="Facility Name" />
        </FormField>
        <FormField>
          <label>Address</label>
          <input placeholder="Address" />
        </FormField>
        <FormField>
          {/* <Checkbox label='I agree to the Terms and Conditions' /> */}
        </FormField>
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};
export default AddFacility;
