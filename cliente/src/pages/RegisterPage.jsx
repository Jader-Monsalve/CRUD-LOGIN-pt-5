import { useForm } from 'react-hook-form'
import { useAuth } from './context/Auth.Context';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function RegisterPage() {

    const { register, handleSubmit, formState : {errors} } = useForm();
    const { signup, isAuthenticathed, errors: RegisterErrors } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
      if(isAuthenticathed) navigate('/tasks')
    }, [isAuthenticathed, navigate])
  return (
    <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
      <form onSubmit={handleSubmit( async (values) => {
        signup(values);//console.log(values);
      
      })}>
        <input type="text" {...register("username", {required:true})} placeholder='username'
        className='w-full bg-zinc-600 text-white px-4 py-4 rounded-md my-2'/>
        <input type="email" {...register("email", {required:true})} placeholder='email'
        className='w-full bg-zinc-600 text-white px-4 py-4 rounded-md my-2'/>
        <input type="password" {...register("password", {required:true})} placeholder='password'
        className='w-full bg-zinc-600 text-white px-4 py-4 rounded-md my-2'/>
        <button type="submit" className="bg-blue-500 hover:bg-700 text-white font-bold py-2 px-4 rounded-full">Register</button>
      </form>
    </div>
  )
}

export default RegisterPage
