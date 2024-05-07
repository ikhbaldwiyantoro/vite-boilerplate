import { Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./style.scss";

function VariantsExample() {
  return (
    <Stack direction="horizontal" gap={4}>
      <Stack gap={2}>
        <h3>Small</h3>
        <Button variant="primary" size="sm">
          Button
        </Button>
        <Button variant="outline-primary" size="sm">
          Button
        </Button>
      </Stack>
      <Stack gap={2}>
        <h3>Medium</h3>
        <Button variant="primary" size="md">
          Button
        </Button>
        <Button variant="outline-primary" size="md">
          Button
        </Button>
      </Stack>
      <Stack gap={2}>
        <h3>Large</h3>
        <Button variant="primary" size="lg">
          Button
        </Button>
        <Button variant="outline-primary" size="lg">
          Button
        </Button>
      </Stack>
    </Stack>
  );
}

export default VariantsExample;
