"use client";

import { Icon } from "@/components/icon";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";
import React, { useState } from "react";

const UserAuthForm = () => {
  const [isGithubLoading, setIsGithubLoading] = useState<boolean>(false);

  return (
    <div className="grid gap-6">
      <form>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label htmlFor="email">メールアドレス</Label>
            <Input id="email" placeholder="name@example.com" type="email" />
          </div>
          <button className={cn(buttonVariants())}>
            メールアドレスでログイン
          </button>
        </div>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="text-slate-500 px-2 bg-background">または</span>
        </div>
      </div>
      <button
        onClick={() => {
          setIsGithubLoading(true);
          signIn("github");
        }}
        className={cn(buttonVariants({ variant: "outline" }))}
      >
        {isGithubLoading ? (
          <Icon.spinner className="animate-spin" />
        ) : (
          <Icon.github />
        )}
        Github
      </button>
    </div>
  );
};

export default UserAuthForm;
