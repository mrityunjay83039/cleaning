import {z} from 'zod'

export const loginFormSchema = z.object({
    email:z.string(),
    password:z.string(),
}).superRefine((data, refinementContext)=>{
    if(data.email == ''){
        refinementContext.addIssue({
            code: 'custom',
            message: 'Email is required',
            path:  ['email']
        })
    }
});

export type loginFormInput = z.infer<
  typeof loginFormSchema
>;