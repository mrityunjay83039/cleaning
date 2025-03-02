import { useFormContext, Controller } from "react-hook-form";
import { FormControl, FormLabel, FormControlLabel, Checkbox } from "@mui/material";

interface FormInputCheckboxProps {
  name: string;
  label?: string;
  control?: any;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  disabled?: boolean;
}

export const FormInputCheckbox = ({
  name,
  label,
  className,
  onChange,
  disabled
}: FormInputCheckboxProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <FormControl className={className} component="fieldset" error={!!errors[name]?.message}>
      <FormControlLabel
        control={
          <Controller
            name={name}
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <Checkbox
                {...field}
                checked={field.value}
                disabled= {disabled}
                onChange={(event) => {
                  field.onChange(event);
                  if (onChange) onChange(event, event.target.checked);
                }}
              />
            )}
          />
        }
        label={label}
      />
      {errors[name] && (
        <span
          style={{ color: "#d32f2f", fontSize: "0.75rem" }}
          className="pt-1 block required text-danger small"
        >
          {errors[name]?.message as string}
        </span>
      )}
    </FormControl>
  );
};
