import { useState } from 'react';
import type { FormEvent } from 'react';

const errMessage = {
  email: 'Invalid email format',
  password: 'Password at least 8 characters',
};

export function Login() {
  // validation message
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // check validation
    let passValidation = true;

    // handle typescript with form
    const form = e.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      email: HTMLInputElement;
    } & {
      password: HTMLInputElement;
    };
    const email = formElements.email.value;
    const password = formElements.password.value;

    // check email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError(errMessage.email);
      passValidation = false;
    } else {
      setEmailError('');
    }
    // check password
    if (password.length < 8) {
      setPasswordError(errMessage.password);
      passValidation = false;
    } else {
      setPasswordError('');
    }

    // send api request
    if (passValidation) {
      alert('Success to login!');
    } else {
      alert('Failed to login!');
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Login to your account
            </h1>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@example.com"
                  required
                />
                <p
                  className={`${
                    emailError ? 'block' : 'hidden'
                  } text-rose-400 absolute text-xs`}
                >
                  {emailError}
                </p>
              </div>
              <div className="mt-1">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
                <p
                  className={`${
                    passwordError ? 'block' : 'hidden'
                  } text-rose-400 absolute text-xs`}
                >
                  {passwordError}
                </p>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
