import { Stack } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function VariantsExample() {
  return (
    <>
      <Stack gap={2}>
        <Button variant="primary" size="xl">
          Login
        </Button>
        <Button variant="primary" size="xl">
          Registrasi
        </Button>
      </Stack>
      <Stack direction="horizontal" gap={3} className="mt-3">
        <Button variant="primary" size="sm">
          Ya
        </Button>
        <Button variant="primary" size="sm">
          Tidak
        </Button>
      </Stack>
    </>
  );
}

export default VariantsExample;
