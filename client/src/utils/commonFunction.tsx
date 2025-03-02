import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import dayjs from "dayjs";
import { DEFAULT_TIMEZONE } from "../config/app-constants";
import moment from 'moment-timezone'

export function groupArrayValues(input, key) {
  return input?.reduce((acc, currentValue) => {
    const groupKey = currentValue[key];
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(currentValue);
    return acc;
  }, {});
}

/* Create a new date string in the "MM-DD-YYYY" format */
export function convertDateFormat(originalDateString) {
  // Split the original date string into day, month, and year components
  const [year, month, day] = originalDateString.split("-");

  const formattedDateString = `${month}-${day}-${year}`;
  return formattedDateString;
}

/* Convert date value from new Date() to string format */
export function formatDate(date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-based
  const day = date.getDate().toString().padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function mmddyyDate(d) {
  const date = new Date(d);
  let year = date?.getFullYear();
  if (year < 0) {
    year = -year;
  }

  const month = (date?.getMonth() + 1).toString().padStart(2, "0");
  const day = date?.getDate().toString().padStart(2, "0");
  return `${month}/${day}/${year}`;
}

export function ffddyyhisDate(d) {
  const date =  dayjs(d).format('MM/DD/YYYY');
  const time =  dayjs(d).format('H:mm:ss');
  return `${date} at ${time}`;
}
export function timeFormatter(d) {
  // console.log('dayjs',d)
  if(typeof d !== "undefined"){
    const timesField = d.split(':')
    const hour =  timesField[0];
    const min =  timesField[1];
    const sec =  timesField[2];
    return `${hour}h:${min}m:${sec}s`;
  } 
  return '00h:00m:00s'
 
}
export function MMMDDYYYY(d) {
  const date =  dayjs(d).format('MMM/DD/YYYY');
  return `${date}`;
}

export function ffddyyHHMMDate(d) {
  const date =  dayjs(d).format('DD MMM YYYY');
  const time =  dayjs(d).format('HH:mm');
  return `${date} ${time}`;
}
export function ffddyyDate(d) {
  const date =  dayjs(d).format('DD MMMM YYYY');
  return `${date}`;
}

export function convertDateToString(d) {
  const date = new Date(d);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}T${hours}-${minutes}-${seconds}Z`;
  return formattedDate;
}
export function convertDateToUTC(d) {
  const dateString = d;
  const year = dateString.substring(0, 4);
  const month = dateString.substring(4, 6);
  const day = dateString.substring(6, 8);
  const hour = dateString.substring(9, 11);
  const minute = dateString.substring(11, 13);
  const second = dateString.substring(13, 15);

  const date = new Date(Date.UTC(year, month - 1, day, hour, minute, second));
  return date;
}
export function getWeek(date) {
  const onejan: any = new Date(date.getFullYear(), 0, 1);
  const weekNumber = Math.ceil(
    ((date - onejan) / 86400000 + onejan.getDay() + 1) / 7
  );

  return weekNumber;
}
export function findIndexByValue(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1; // Return -1 if no match is found
}

export function getCookie(cname) {
  const name = cname + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");
  for (const element of ca) {
    let c = element;
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export function deleteAllCookies() {
  const cookies = document.cookie.split(";");

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i];
    const eqPos = cookie.indexOf("=");
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}

export function sortArray(arr, key) {
  return arr.slice().sort((a, b) => a[key] - b[key]);
}
export function isEmptyObject(obj) {
  if (typeof obj !== "undefined" && obj != null && Object.keys(obj).length === 0  ) {
    return true;
  }
  return false;
}


export const getNameInitials = (name:string) => {
  if(name !== undefined){
    const names = name.split(" ");
    return names
      ?.map((word) => word[0])
      ?.join("")
      .toUpperCase();
  }
  
};

export const resetState = () => ({
  type: "RESET_STATE",
});


export const setColumnSetting = (data: any) => {
  localStorage.setItem(data?.module, data.columns);
};

export const removeItemLocalStorage = (data: any) => {
  localStorage.removeItem(data);
};

export const getColumnSetting = (module: any) => {
  const result = localStorage.getItem(module);
    return JSON.parse(result)
  
  
};
export const getLocalStorageData = (module: any) => {
 return localStorage.getItem(module);  
};

export const getItem = (module: any) => {
  const result = localStorage.getItem(module);
    return JSON.parse(result)
  
};

export const getUser = () =>{
  const permissionList = useSelector<RootState, unknown>(
    (state) => (state.permissions as { data?: any })?.data
  );
  return JSON.parse(JSON.stringify(permissionList));
}

export const getCountryData = (countryList:any,matchValue,filterBy:string = 'countryId') => {
  if(filterBy == 'countryId'){
    return countryList.filter((response) => response.countryId == matchValue)
  }else{
    return countryList.filter((response) => response.countryName == matchValue)
  }
}
export const getStateData = (stateList:any,matchValue,filterBy:string = 'stateId') => {
  if(filterBy == 'stateId'){
    return stateList.filter((response) => response.stateId == matchValue)
  }else if(filterBy == 'stateCode'){
    return stateList.filter((response) => response.stateCode == matchValue)
  }else{
    return stateList.filter((response) => response.countryName == matchValue)
  }
}
export const convertSelectKeyValue = (data,keyName,ValueName) => {
  const customerStatusData = [];
  data.map((item:any)=>{
    const data = {
      value:item[keyName],
      label:item[ValueName]
    }
    customerStatusData.push(data);
  })
  return customerStatusData;
}


export const convertSelectKeyValuetoNumber = (data,keyName,ValueName) => {
  const customerStatusData = [];
  data.map((item:any)=>{
    const data = {
      value:Number(item[keyName]),
      label:item[ValueName]
    }
    customerStatusData.push(data);
  })
  return customerStatusData;
}


export const convertToSlug = (Text:string) =>{
  return (typeof Text !== 'undefined') ? Text.toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, ""):'';
}

export const FormInputObject = (name,value) => {
  const hiddenFieldSample1 = document.createElement('input');
  hiddenFieldSample1.type = 'hidden';
  hiddenFieldSample1.name = name;
  hiddenFieldSample1.value = value;
  return hiddenFieldSample1;
}

export const convertTimewithTimezone = (date,format=null,isISO=false) =>{
  if(isISO){
    return moment(date).tz(DEFAULT_TIMEZONE).format()
  }else{
    return moment(date).tz(DEFAULT_TIMEZONE).format(format)
  }
  
}

export const truncateText = (text) => {
  if(text.length > 50){
    return text.substring(0, 50) + "...";
  }else{
    return text;
  }
}

export const allowNumericOnlyPaste=(e) =>{
  e.preventDefault();
  const pastedText = e.clipboardData.getData('text/plain');
  const numericOnly = pastedText.replace(/[^\d,]/g, ''); // Replace non-digit characters
  document.execCommand("insertText", false, numericOnly);
}

export const handleNumberKeyPress = (e: any) => {
  // let key = e.key;
  const key = e.key;
  // Allow Ctrl+A/Ctrl+C/Ctrl+V for select all, copy, paste
  if ((e.ctrlKey || e.metaKey) && (key === 'a' || key === 'c' || key === 'v')) {
    return;
}
if (e.keyCode == 37 || e.keyCode == 39 || e.keyCode == 38 || e.keyCode == 40) {
  return true;
}

// Allow Backspace, Tab, Enter, Escape, Delete
if (e.keyCode === 8 || e.keyCode === 9 || e.keyCode === 13 || e.keyCode === 27 || e.keyCode === 46) {
    return;
}
  if (e.keyCode != 8 && e.keyCode != 9) {
    if (e.ctrlKey) {
      return;
    } 
    if (!/\d+/.test(key)) {
      e.preventDefault();
    }
  }
};


export const handleNumberKeyPressWithDot = (e: any) => {
  const key = e.key;
  const decimalMatches = e.target.value?.match(/\./g);
  if (e.keyCode == 37 || e.keyCode == 39 || e.keyCode == 38 || e.keyCode == 40) {
    return true;
  }
  if (e.keyCode === 8 || e.keyCode === 9 || e.keyCode === 13 || e.keyCode === 27 || e.keyCode === 46) {
    return;
  }
  if (e.keyCode != 8 && e.keyCode != 9) {

    // If the dot is the first character and it's not allowed
    if (key === '.' && e.target.value === '') {
      e.preventDefault();
      return;
    }
    if (key === '.' && decimalMatches !== null && decimalMatches.includes('.')) {
      e.preventDefault();
      return;
    }
    if (e.ctrlKey) {
      return;
    }
    if (!/^\d*\.?\d{0,2}$/.test(key)) {
      e.preventDefault();
    }
  }
};

export const allowNumericOnlyPasteWithDecimal=(e) =>{
  e.preventDefault();
  const pastedText = e.clipboardData.getData('text/plain');
  const numericOnly = pastedText.replace(/[^\d.]/g, '');// Replace non-digit characters
  document.execCommand("insertText", false, numericOnly);
}