import { useFormContext, Controller } from "react-hook-form";
import { FormControl, FormLabel, InputLabel, MenuItem, Select, colors } from "@mui/material";
import { useEffect } from "react";

interface FormInputProps {
  name: string;
  control?: any;
  label?: any;
  setValue?: any;
  value?: any;
  onChange?: any;
  options?: any;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  defaultValue?: any;
  sx?: any;
  size?: any;
  defaultOption?: boolean;
  initialOption?:string;
  asteriskReq?: boolean;
  isDefaultOptionIsInt?: boolean;
}

export const FormInputSelect = ({
  name,
  label,
  onChange,
  options,
  className,
  placeholder,
  disabled,
  defaultValue,
  initialOption,
  sx,
  asteriskReq = false,
  size = 'small',
  defaultOption = false,
  isDefaultOptionIsInt=true
}: FormInputProps) => {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();

  useEffect(() => {
    if (defaultValue) {
      //console.log('defaultValue', defaultValue);

      setValue(name, defaultValue);
    }
  }, [defaultValue, setValue, name]);

  const idToNameMap = options.reduce((acc, option) => {
    acc[option.value] = option.label;
    return acc;
  }, {});

  return ( 
    <>
      <InputLabel variant="standard">
          {label}{asteriskReq?(<span style={{color: '#EE1D25', fontSize: '14px'}}> *</span>):null}
        </InputLabel>
      <FormControl
        sx={sx}
        size={size}
        className={className}
        component="fieldset"
        error={!!errors[name]?.message}
      >
        {/* <FormLabel component="legend">{label}</FormLabel> */}
  
        <Controller
          name={name} 
          control={control}
          render={({ field }) => (
            <Select
              disabled={disabled}
              value={defaultValue}
              {...field}
              onChange={(event) => {
                // onChange(event);
                //console.log('field', field);
                field.onChange(event);
                if (onChange) onChange(event);
              }}
              displayEmpty
              renderValue={(selected) => {
                if (
                  selected === "" ||
                  selected === 0 ||
                  selected === null ||
                  selected === -1 ||
                  selected === undefined
                ) {
                  return <>{placeholder}</>;
                }
                if (selected === defaultValue) {
                  // return <>{defaultValue}</>;
                  return idToNameMap[defaultValue];
                }
                return idToNameMap[selected];
              }}
            >
              {
                defaultOption === true ? (
                  <MenuItem key={''} value={isDefaultOptionIsInt ? 0:''}>
                   {initialOption}
                  </MenuItem>
                ):null
              }
              {options.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          )}
        />
      </FormControl>
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

// import { useFormContext } from "react-hook-form";
// import { FormControl, FormLabel, MenuItem, Select } from "@mui/material";
// import { useEffect } from "react";
// interface FormInputProps {
//   name: string;
//   control?: any;
//   label?: string;
//   setValue?: any;
//   value?: any;
//   onChange?: any;
//   options?: any;
//   className?: string;
//   placeholder?: string;
// }

// export const FormInputSelect = ({
//   name,
//   label,
//   onChange,
//   value,
//   options,
//   className,
//   placeholder,
// }: FormInputProps) => {
//   const {
//     register,
//     setValue :setFormValue,
//     formState: { errors },
//   } = useFormContext();

//   const generateDropdownOptions = () => {
//     return options.map((option) => (
//       <MenuItem key={option.value} value={option.value}>
//         {option.label}
//       </MenuItem>
//     ));
//   };

//   useEffect(() => {
//     if (value !== undefined || value !== null ||  value !=="") {
//       setFormValue(name, placeholder);
//     }
//   }, [name, setFormValue, value]);

//   const handleChange = (event) => {
//     const selectedValue = event.target.value;
//     setFormValue(name, selectedValue);
//     if (onChange) onChange(event);
//   };

//   return (
//     <>
//       <FormControl className={className} component="fieldset" fullWidth>
//         <FormLabel component="legend">{label}</FormLabel>

//         <Select
//           {...register(name)}
//           value={value ||" "}
//           onChange={handleChange}
//           error={!!errors[name]?.message}
//           label={label}
//           renderValue={(selected) => {
//             if (!selected) {
//               return <em>{placeholder}</em>;
//             }
//             return selected;
//           }}

//         >
//           <MenuItem value="" >
//             {placeholder}
//           </MenuItem>
//           {generateDropdownOptions()}
//         </Select>
//       </FormControl>
//       {errors[name] && (
//         <span
//           style={{ color: "#d32f2f", fontSize: "0.75rem" }}
//           className="pt-1 block required text-danger small"
//         >
//           {errors[name]?.message as string}
//         </span>
//       )}
//     </>
//   );
// };
