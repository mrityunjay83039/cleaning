import { Box } from "@mui/material";
import { useLoginMutation } from "../../redux/services/auth";
import { useAppDispatch } from "../../redux/hooks";
import { setCredential, setToken } from "../../redux/reducer/auth";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import {
  loginFormInput,
  loginFormSchema,
} from "../../utils/validation/loginFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInputText } from "../../common/form-components/FormInputText";
import {toast} from 'react-toastify';

const Login = () => {
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();

  const loginApiCall = async (payload: any) => {
    try {
      const res = await login(payload);
      if (res && res?.data?.token !== '') {
        const token = res?.data?.token;
        toast.success('You are now logged in',{
          position: 'top-center',
        });
        dispatch(setToken(token));
        dispatch(setCredential(res?.data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const defaultValue = {
    email: "",
    password: "",
  };

  const methods = useForm<loginFormInput>({
    defaultValues: defaultValue,
    resolver: zodResolver(loginFormSchema),
  });

  const {
    reset,
    handleSubmit,
    setValue,
    formState: { errors },
  } = methods;

  const onSubmitHandler: SubmitHandler<loginFormInput> = (value) => {
    loginApiCall(value);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="45vw"
      margin="auto"
      className="tp-contact-area pt-85 pb-85"
    >
      <Box
        border="1px solid #333"
        padding="40px"
        borderRadius="5px"
        className="container"
      >
        <div className="row">
          <div className="col-lg-10">
            <div
              className="section-title-wrapper-two mb-50 wow fadeInUp"
              data-wow-delay=".2s"
            >
              {/* <h5 className="tp-section-subtitle common-yellow-shape mb-20 heading-color-black">
                Admin Panel Login
              </h5> */}
              <h4 className="heading-color-black text-center">
                Admin Panel Login
              </h4>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <FormProvider {...methods}>
              <form onSubmit={handleSubmit(onSubmitHandler)}>
                <div className="tp-contact-form">
                  <div className="row custom-mar-20">
                    <div className="col-md-12 custom-pad-20">
                      <div className="tp-contact-form-field mb-20">
                        <FormInputText
                          className="input-box"
                          label="Email"
                          InputLabelProps={{ shrink: true }}
                          name="email"
                          // onChange={(elem) => onChangeHandler(elem)}
                          placeholder="youremail@gmail.com"
                          // onChange={() => setValue("registeredPhone", control.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-12 custom-pad-20">
                      <div className="tp-contact-form-field mb-20">
                        <FormInputText
                          className="input-box"
                          type="password"
                          label="Passowrd"
                          InputLabelProps={{ shrink: true }}
                          name="password"
                          // onChange={(elem) => onChangeHandler(elem)}
                          placeholder="Password"
                          // onChange={() => setValue("registeredPhone", control.value)}
                        />
                      </div>
                    </div>

                    <div className="col-md-12 custom-pad-20">
                      <div className="tp-contact-form-field">
                        <button type="submit" className="theme-btn">
                          <i className="flaticon-enter"></i> Login
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </FormProvider>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default Login;
