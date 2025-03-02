import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
interface FormInputProps {
  name: string;
  control: any;
  label: string;
  setValue?: any;
  value?: any;
  onChange?: any;
  options?: any;
}

export const FormInputRadio = ({
  name,
  label,
  onChange,
  value,
  options,
}: FormInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const generateRadioOptions = () => {
    return options.map((singleOption) => (
      <FormControlLabel
        key={singleOption.label}
        value={singleOption.value}
        label={singleOption.label}
        control={<Radio />}
      />
    ));
  };

  return (
    <>
      <FormControl component="fieldset">
        <FormLabel component="legend">{label}</FormLabel>

        <RadioGroup {...register(name)} value={value} onChange={onChange}>
          {generateRadioOptions()}
        </RadioGroup>
      </FormControl>
      {errors[name] && (
        <span className="pt-1 block required text-danger small">
          {errors[name]?.message as string}
        </span>
      )}
    </>
  );
};
