import Form from "react-bootstrap/Form";
import VariantsExample from "../../components/Button";
import Input from "../../components/Input";
import { Stack } from "react-bootstrap";

function Home() {
  return (
    <Form>
      <Stack gap={3}>
        <Input label="Email" type="email" placeholder="Email Address" />
        <Input label="Password" type="password" placeholder="Password" />
        <VariantsExample />
      </Stack>
    </Form>
  );
}

export default Home;
