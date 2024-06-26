import Form from "react-bootstrap/Form";
import VariantsExample from "../../components/atoms/Button/VariantsExample";
import Input from "../../components/atoms/Input";
import { Stack } from "react-bootstrap";

function Home() {
  return (
    <Form>
      <Stack gap={3}>
        <VariantsExample />
        <Input label="Email" type="email" placeholder="Email" />
        <Input label="Password" type="password" placeholder="Password" />
        <Input isInvalid />
      </Stack>
    </Form>
  );
}

export default Home;
