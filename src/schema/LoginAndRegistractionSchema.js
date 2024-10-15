import * as Yup  from 'yup'

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
export const formSchema=(isRegister)=>Yup.object().shape({
     name:Yup.string().when([],{
        is:()=>isRegister,
        then:(schema)=>schema.min(5,'Too short !').max(30,'Too Long !').required('name is required'),
        otherwise:(schema)=>schema.notRequired()
     }),
     email:Yup.string().matches(emailRegex, "Invalid Email").required('Email is Required'),
     password:Yup.string().matches(passwordRegex,"Not a strong Password").required("password is required"),
     rePassword:Yup.string().when([],{
        is:()=>isRegister,
        then:(schema)=>schema.label('confirm Password').required().oneOf([Yup.ref('password'),null],"Pasword must match"),
        otherwise:(schema)=>schema.notRequired()
     })
})