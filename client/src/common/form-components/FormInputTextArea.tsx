import { useFormContext } from "react-hook-form";
import { InputLabel, TextareaAutosize } from "@mui/material";
interface FormInputProps {
  name: string;
  label: any;
  control?: any;
  setValue?: any;
  value?: any;
  placeholder?: any;
  onChange?: any;
  className?: any;
  maxLength?: any;
}

export const FormInputTextArea = ({
  name,
  onChange,
  label,
  value,
  placeholder,
  className,
  maxLength = 1000
}: FormInputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const { onBlur, ...registerProps } = register(name);

  return (
    <>
     <InputLabel variant="standard">
        {label}
      </InputLabel> 
      <TextareaAutosize
        {...register(name)}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
        // rowsMin={5}
        maxLength={maxLength}
      />

      {errors[name] && (
        <span
          style={{ color: "#d32f2f", fontSize: "0.75rem" }}
          className="pt-1 block required text-danger small"
        >
          {errors[name]?.message as string}
        </span>
      )}
    </>
  );
};
