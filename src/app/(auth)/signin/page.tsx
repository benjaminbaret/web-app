'use client';

import Image from "next/image";
import * as z from 'zod';
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const router = useRouter();

  const FormSchema = z.object({
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must have than 8 characters'),
  });


  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevents the page from reloading
  
    // Collect form data
    const formData = new FormData(event.currentTarget);
    const values = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };
  
    // Pass values to the onSubmit function
    onSubmit(values);
  };
  
  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    // Use next-auth to sign in the user with the provided email and password
    const signInData = await signIn("credentials", {
      redirect: false, // Prevents redirect; allows handling the result manually
      email: values.email,
      password: values.password,
    });
  
    if(signInData?.error) {
      console.log(signInData.error);
    } else {
      router.push("/dashboard");
    }
  };

  return (
      <div>
          <title>Login Page</title>
          <div className="flex flex-col bg-white h-full">
            <section className="flex h-screen bg-gray-50 dark:bg-gray-900 object-fill">
              <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <Image
                className="dark:invert"
                src="/walltech-logo-black.svg"
                alt="Next.js logo"
                width={360}
                height={38}
                priority
              />
              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                  <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                      Connectez-vous à votre compte
                    </h1>
                    <form onSubmit={handleFormSubmit} method="POST" className="space-y-4 md:space-y-6" >
                      <div>
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Identifiant
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="name@company.com"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="password"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Mot de passe
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="••••••••"
                          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                      >
                        Sign in
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
      </div>
  );
}