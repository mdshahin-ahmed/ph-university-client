import { Form, Select } from "antd";
import { Controller } from "react-hook-form";

type TPhSelectProps = {
  label: string;
  name: string;
  options: {
    value: string;
    label: string;
    disabled?: boolean;
  }[];
};

const PhSelect = ({ options, label, name }: TPhSelectProps) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select
            size="large"
            {...field}
            style={{ width: "100%" }}
            options={options}
          />
          {error && (
            <>
              <small style={{ color: "red" }}>{error.message}</small>
            </>
          )}
        </Form.Item>
      )}
    />
  );
};

export default PhSelect;
