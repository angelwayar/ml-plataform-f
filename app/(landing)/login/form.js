import { useRouter } from "next/navigation";
import { useForm } from 'react-hook-form';
import { login } from "@/app/(landing)/_api/user";
import { useUser } from "@/context/UserContext";

export default function Form() {
    const { saveToken } = useUser();
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = handleSubmit(async (data) => {

        const response = await login(
            {
                "username": data.username,
                "password": data.password,
            }
        );
        console.log('TOKEN', response.access_token);
        saveToken(response.access_token);
        // TODO: Debe de hacer push a la pagina de la plataforma
        router.push('/home');
    });


    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={onSubmit}>
                <input
                    placeholder='username'
                    {...register("username", { required: true })}
                />
                {
                    errors.username && (
                        <span>This field is required</span>
                    )
                }
                <input
                    placeholder='password'
                    {...register("password", { required: true })}
                />
                {
                    errors.password && (
                        <span>This field is required</span>
                    )
                }
                <button>Login</button>
            </form>
        </div>
    )
}
