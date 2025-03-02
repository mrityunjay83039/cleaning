import { useFormContext } from "react-hook-form";
import TextField from "@mui/material/TextField";
import InputMask from "react-input-mask";
import { InputLabel } from "@mui/material";
interface FormInputProps {
  name: string;
  control?: any;
  label?: any;
  setValue?: any;
  value?: any;
  placeholder?: any;
  onPaste?: any;
  onKeyDown?: any;
  onChange?: any;
  mask?: any;
  type?: any
  className?: any
  multiline?: any
  rows?: any
  InputProps?: any
  inputProps?:any
  InputLabelProps?: any
  asteriskReq?: boolean;

}

export const FormInputText = ({
  name,
  label,
  onChange,
  value,
  placeholder,
  mask,
  type, 
  className,
  multiline,
  rows,
  InputProps,
  inputProps,
  asteriskReq = false,
  InputLabelProps,
  onPaste,
  onKeyDown,
  control
}: FormInputProps) => {
  const {
    register,
    formState: { errors },

  } = useFormContext();
  const { onBlur, ...registerProps } = register(name);

  return mask ? (
    <>
    <InputLabel variant="standard">
        {label}{asteriskReq?(<span style={{color: 'red'}}> *</span>):null}
      </InputLabel> 
    <InputMask
      mask={mask}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      {...register(name)}
      placeholder={placeholder}
    >
      {(inputProps: any) => (
        
        <TextField
          helperText={errors[name] ? (errors[name]?.message as string) : null}
          error={!!errors[name]?.message}
          // label={label}
          variant="outlined"
          fullWidth
          InputLabelProps= {InputLabelProps}
          {...inputProps}
          {...inputProps}
        />
      )}
    </InputMask>
    </>

  ) : (

    <>
    {type != 'hidden' &&
      <InputLabel variant="standard">
        {label}{asteriskReq?(<span style={{color: '#EE1D25', fontSize: '14px'}}> *</span>):null}
      </InputLabel> 
}
    <TextField
      helperText={errors[name] ? (errors[name]?.message as string) : null}
      error={!!errors[name]?.message}
      {...register(name)}
      placeholder={placeholder}
      value={value}
      type={type}
      onChange={onChange}
      // label={label}
      variant="outlined"
      fullWidth
      onPaste={onPaste}
      onKeyDown={onKeyDown}
      className={className}
      multiline={multiline}
      rows={rows}
      InputProps={InputProps} 
      inputProps={inputProps}
      InputLabelProps= {InputLabelProps}
    />
      
      </>

    
  );
  return (
    <TextField

      helperText={errors[name] ? (errors[name]?.message as string) : null}
      error={!!errors[name]?.message}
      {...register(name)}
      placeholder={placeholder}
      value={value}
      type={type}
      onChange={onChange}
      // label={label}
      variant="outlined"
      fullWidth
    />
  );
};
