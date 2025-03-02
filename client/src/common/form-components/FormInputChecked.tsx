import { useFormContext } from "react-hook-form";
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, MenuItem, Select } from "@mui/material";
interface FormInputProps {
  defaultChecked: any;
  name: string;
  label: string;
  onChange?: any;
}

export const FormInputChecked = ({
  defaultChecked,
  name,
  label,
  onChange,
}: FormInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <FormGroup className="checkbox">
        <FormControlLabel  {...register(name)} control={<Checkbox defaultChecked={defaultChecked} onChange={onChange} />} label={label} />
        <FormHelperText>{errors[name] ? (errors[name]?.message as string) : null}</FormHelperText>
      </FormGroup>
    </>
  );
};
