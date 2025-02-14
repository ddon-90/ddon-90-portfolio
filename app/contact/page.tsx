"use client";

import { useActionState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { FormState, send } from '@/lib/actions';

const initialState: FormState = {
  errors: {},
  inputs: {},
  success: false,
}

export default function Contact() {

  const [state, formAction, isPending] = useActionState(send, initialState);

  return (
    <main role="main" className="min-h-screen bg-zinc-100 dark:bg-zinc-900 p-4 sm:p-8">
      <Navbar />

      <div className="max-w-2xl mx-auto my-12">
        <h1 className="text-3xl font-bold mb-8 text-center dark:text-white">Contact Me</h1>
        <form action={formAction} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Name
            </label>
            <Input
              className={state.errors?.name ? 'border-red-500 mt-2' : 'mt-2'}
              type="text"
              id="name"
              name="name"
              defaultValue={state.inputs?.name}
              placeholder="John Doe"
              required
            />

            {state.errors?.name && (
              <p className="mt-2 text-red-500 text-sm">
                {state.errors?.name}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Email
            </label>
            <Input
              className={state.errors?.email ? 'border-red-500 mt-2' : 'mt-2'}
              type="email"
              id="email"
              name="email"
              defaultValue={state.inputs?.email}
              placeholder="John.Doe@gmail.com"
              required
            />

            {state.errors?.email && (
              <p className="mt-2 text-red-500 text-sm">
                {state.errors?.email}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Message
            </label>
            <Textarea
              className={state.errors?.message ? 'border-red-500 mt-2' : 'mt-2'}
              id="message"
              name="message"
              rows={8}
              defaultValue={state.inputs?.message}
              placeholder="Hello, I would like to talk about ..."
              minLength={10}
              required
            />

            {state.errors?.message && (
              <p className="mt-2 text-red-500 text-sm">
                {state.errors?.message}
              </p>
            )}
          </div>

          {state.success && (
            <p className="text-green-500 text-sm">
              Your message has been sent successfully!
            </p>
          )}

          <Button
            className="w-full"
            disabled={isPending}
            type="submit"
          >
            {isPending ? "Sending ..." : "Send Message"}
          </Button>
        </form>
      </div>

      <Footer />
    </main>
  )
}

