import UserAuthForm from "@/components/user-auth-form";
import Link from "next/link";
import React from "react";

const Signin = () => {
  return (
    <div className="container flex flex-col justify-center h-screen items-center w-screen">
      <div className="mx-auto w-full sm:w-[350px] flex flex-col justify-center space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold tracking-tighter">
            Welcome Back
          </h1>
          <p className="text-sm text-slate-500">
            メールアドレスを入力してログインできます。
          </p>
        </div>
        <UserAuthForm />

        <p className="text-slate-500 px-8 text-center text-sm">
          <Link href={"/signup"} className="underline underline-offset-4">
            アカウントを持っていませんか？
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
