import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import './form.css'



const schema = yup
  .object({
    first_name: yup.string().matches(/^[A-Za-zÑñ]+$/, "Only letters without spaces are allowed ")
      .required("Required") .min(2, "At least 2 characters").max(100,"Maximun 100 characters"),
    last_name: yup.string().matches(/^[A-Za-zÑñ]+$/, "Only letters without spaces are allowed ")
    .required("Required").min(2, "At least 2 characters").max(200,"Maximun 200 characters"),
    email: yup.string().email("Invalid email").required("Required"),
    password: yup.string().min(8, "At least 8 characters").required("Required"),
    birthday: yup.date()
      .required("Required")
      .min(new Date('1950-01-01'), "The birthday must be greater than 1950")
      .max(new Date(), "The birthday must not be greater than today")
      .typeError("The birthday must be a date"),
  })
  .required()

function AddEdit({ user  , operateUser}) {
    const [showPassword, setShowPassword] = useState(false)
    const {handleSubmit, register, reset , formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    useEffect(() => {
        if(user){
            let birthdayDate = null;
            if (user.birthday) {
                birthdayDate = new Date(user.birthday);
                birthdayDate.setHours(12, 0, 0, 0);
            }

            const formattedUser = {
                ...user,
                birthday: birthdayDate ? birthdayDate.toISOString().split('T')[0] : ''
            }
            reset(formattedUser)
        }else{
            reset({first_name:'', last_name:'', email:'', password:'', birthday:''})
        }

    },[user])

    const onSubmit = (dataForm) => {        
        if(user){
            operateUser(dataForm , user.id)
        }else{
            operateUser(dataForm)
        }
    }

    return (
        <div>
            <h2 className='form__title'>{user ? 'Modify ' : 'Register '} user</h2>
            <form className='form__content' onSubmit={handleSubmit(onSubmit)}>
                <div className='form__group'>
                    <label className='form__label'>Name</label>
                    <input className='form__input' type="text" {...register("first_name")} />
                    {<p className="error-message">{errors.first_name?.message ? "❌ " + errors.first_name?.message : ""}</p>}
                </div>

                <div className='form__group'>
                    <label className='form__label'>Last Name</label>
                    <input className='form__input' type="text" {...register("last_name")} />
                    {<p className="error-message">{errors.last_name?.message ? "❌ " + errors.last_name?.message : ""}</p>}
                </div>

                <div className='form__group'>
                    <label className='form__label'>Email</label>
                    <input className='form__input' type="email" {...register("email")} />
                    {<p className="error-message">{errors.email?.message ? "❌ " + errors.email?.message : ""}</p>}
                </div>
                <div className='form__group'>
                    <label className='form__label'>Password</label>
                    <div style={{ position: 'relative', width: '100%' }}>
                        <input 
                            className='form__input' 
                            type={showPassword ? "text" : "password"} 
                            {...register("password")} 
                            style={{ width: '100%', paddingRight: '40px' }}
                        />
                        <button 
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            style={{
                                position: 'absolute',
                                right: '10px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                border: 'none',
                                background: 'none',
                                cursor: 'pointer',
                                padding: '0',
                                fontSize: '1.2rem'
                            }}
                        >
                            {showPassword ? '🐵' : '🙈'}
                        </button>
                    </div>
                    {<p className="error-message">{errors.password?.message ? "❌ " + errors.password?.message : ""}</p>}   
                </div>
                <div className='form__group'>
                    <label className='form__label'>Birthday</label>
                    <input className='form__input' type="date" {...register("birthday")} />
                    {<p className="error-message">{errors.birthday?.message ? "❌ " + errors.birthday?.message : ""}</p>}
                </div>

                <button  className="form__submit" type='submit'>{user ? 'Update' : 'Save '}</button>
            </form>
        </div>
    )
}

export default AddEdit