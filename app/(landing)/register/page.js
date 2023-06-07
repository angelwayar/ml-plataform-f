"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { registerUser } from "@/app/(landing)/_api/user";

export default function Page() {
  const [user, setUserState] = useState({});
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    setUserState(
      {
        username: data.username,
        password: data.password,
        verifyPassword: data.validatePassword
      }
    )
    const algo = await registerUser(
      {
        "username": data.username,
        "password": data.password,
      }
    );
    if (algo) {
      router.push('/');
    }
  });

  return (
    <div>
      <h1>
        Page Register
      </h1>
      <form onSubmit={onSubmit}>
        <input
          placeholder="username"
          {...register("username", { required: true })}
        />
        {
          errors.username && (
            <span>This field is required</span>
          )
        }
        <input
          type="password"
          placeholder="password"
          {...register("password", { required: true })}
        />
        {
          errors.password && (
            <span>This field is required</span>
          )
        }
        <input
          type="password"
          placeholder="validatePassword"
          {...register("validatePassword", { required: true })}
        />
        <button>Register</button>
      </form>
    </div>
  )
}
