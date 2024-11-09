import { buttonVariants } from "@/components/ui/button";
import UserAuthForm from "@/components/user-auth-form";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Signup = () => {
  return (
    <div className="container grid flex-col lg:grid-cols-2 h-screen w-screen items-center justify-center lg:max-w-none lg:px-0">
      <Link
        href={"/signin"}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-4 md:left-8 md:top-8"
        )}
      >
        ログイン
      </Link>
      <div className="h-full bg-slate-100 lg:block hidden" />

      <div className="mx-auto w-full sm:w-[350px] flex flex-col justify-center space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold tracking-tighter">
            アカウントの作成
          </h1>
          <p className="text-sm text-slate-500">
            メールアドレスを入力してアカウント作成してください。
          </p>
        </div>
        <UserAuthForm />
      </div>
    </div>
  );
};

export default Signup;
