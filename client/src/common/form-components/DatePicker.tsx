import { useFormContext, Controller } from "react-hook-form";
import moment, { Moment } from "moment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { FormControl, FormLabel, InputLabel } from "@mui/material";
import React, { useEffect } from "react";
import dayjs from "dayjs";
import { DATEPICKER_INPUT_TYPE } from "../../config/app-constants";

interface FormInputDatePickerProps {
  name: string;
  label?: any;
  format: string;
  className?: string;
  onChange?: any;
  labelStyle?: any;
  minDate?: any;
  maxDate?: any;
  views?: any;
  disabled?: any;
  asteriskReq?: boolean;
}

const FormInputDatePicker = ({
  name, 
  label,
  format,
  className,
  onChange,
  minDate,
  maxDate,  
  labelStyle,
  disabled,
  views,
  asteriskReq = false
}: FormInputDatePickerProps) => {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();

  // useEffect(() => {
  //   const initialDate = moment(new Date()).format(
  //     format ? format : "DD/MM/YYYY"
  //   );
  //  // setValue(name, initialDate);
  // }, [setValue, name, format]);

  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>

      <InputLabel variant="standard">
          {label} {asteriskReq?(<span style={{color: 'red'}}> *</span>):null}
      </InputLabel>
      <FormControl
        className={className}
        fullWidth
        error={!!errors[name]?.message}
      >
        {(typeof labelStyle === "undefined" ||
          (typeof labelStyle !== "undefined" && labelStyle != "merge")) 
          }
        <Controller
          name={name}
          control={control}
          render={({ field }) => {
            return (
              <DatePicker
                // label={label}
                disabled={disabled}
                minDate={minDate}
                maxDate={maxDate}
                views={views}
                slotProps={{
                  field: {
                      readOnly: true,
                  },
                  layout: {
                    sx: {
                      color: '#1565c0',
                      borderRadius: '2px',
                      borderWidth: '0px',
                      borderColor: '#2196f3',
                      border: '1px solid',
                      
                    }
                  }
              }}
                {...field}
                format={format} 
                // defaultValue={moment(new Date()).format(format)}
                value={
                  field.value
                    ? moment(field.value, (format ? format : DATEPICKER_INPUT_TYPE))
                    : null
                }
                onChange={(event: any) => {
                  field.onChange(event ? moment(event).format(format) : "");
                  if (onChange) onChange(event);
                }}
              />
            );
          }}
        />
        {errors[name] && (
        <span
          style={{ color: "#d32f2f", fontSize: "0.75rem" }}
          className="pt-1 block error-msg required text-danger small"
        >
          {errors[name]?.message as string}
        </span>
      )}
      </FormControl>
      
    </LocalizationProvider>
  );
};

export default FormInputDatePicker;

