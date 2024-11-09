'use client'

import { signIn, signOut } from "next-auth/react";

export default function AuthButtons({ isSignedIn }: { isSignedIn?: boolean }) {
  if (!isSignedIn) {
    return <button onClick={() => signIn()}>Sign in</button>;
  }
  return <button onClick={() => signOut()}>Sign out</button>;
}