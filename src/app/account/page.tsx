'use client'

import { LoginForm } from "@/components/login-form"
import { Signupform } from "@/components/signup-form"
import { useState } from "react"

export default function Account() {
    const [form, setForm] = useState<"login" | "signup">("login")
    

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        {form === "login" ? <LoginForm /> :  <Signupform /> }
       
      </div>
    </div>
  )
}
