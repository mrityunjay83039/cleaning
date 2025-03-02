
import { useFormContext, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { InputLabel } from '@mui/material';

interface FormInputProps {
  name: string; 
  label?: any;
  placeholder?: string;
  asteriskReq?: boolean;
}

export const FormInputNumber = ({ name, label, placeholder, asteriskReq = false, }: FormInputProps) => {
  const {
    control,
    
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      name={name}
      control={control} 
      render={({ field }) => (
        <><InputLabel variant="standard">
          {label}{asteriskReq?(<span style={{color: '#EE1D25', fontSize: '14px'}}> *</span>):null}
        </InputLabel>
        <TextField
            {...field}
            // label={label}
            placeholder={placeholder}
            variant="outlined"
            fullWidth
            error={!!errors[name]}
            helperText={errors[name] ? (errors[name]?.message as string) : null}
            onChange={(e) => {
              //console.log('e', e.target.value);
              const filteredValue = e.target.value.replace(/[^0-9]/g, '');
              //console.log('filteredValue', filteredValue);
              field.onChange(Number(filteredValue));
            } } />
          </>
      )}
    />
  );
};
