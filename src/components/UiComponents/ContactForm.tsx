"use client";
import { createEmail } from "@/lib/utils";
import { useFormState } from "react-dom";
import React, { useEffect } from "react";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";
import { useRef } from "react";

function ContactForm() {
  const [state, formAction] = useFormState(createEmail, undefined);
  const formRef = useRef();
  const { toast } = useToast();
  useEffect(() => {
    if (state?.success) {
      toast({
        title: `✅${state?.success}`,
      });
      //@ts-ignore
      formRef?.current?.reset();
    }
  }, [state]);
  return (
    <form
      action={formAction}
      className="w-full flex flex-col items-center gap-4"
      //@ts-ignore
      ref={formRef}
    >
      <div className="w-full grid ssm:grid-cols-2 gap-3">
        <span className="flex flex-col gap-2">
          <label htmlFor="firstName" className="capitalize font-semibold">
            first name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className="bg-transparent py-2 indent-2 border-b-2 outline-none"
          />
        </span>
        <span className="flex flex-col gap-2">
          <label htmlFor="lastName" className="capitalize font-semibold">
            last name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            required
            className="bg-transparent py-2 indent-2 border-b-2 outline-none"
          />
        </span>
      </div>

      <div className="w-full grid ssm:grid-cols-2 gap-3">
        <span className="flex flex-col gap-2">
          <label htmlFor="email" className="capitalize font-semibold">
            email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="bg-transparent py-2 indent-2 border-b-2 outline-none"
          />
        </span>
        <span className="flex flex-col gap-2">
          <label htmlFor="phone" className="capitalize font-semibold">
            Phone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            required
            className="bg-transparent py-2 indent-2 border-b-2 outline-none"
          />
        </span>
      </div>
      <div className="w-full">
        <span className="flex flex-col gap-2 w-full">
          <label htmlFor="message" className="capitalize font-semibold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            className="bg-transparent py-2 indent-2 border-b-2 outline-none"
          />
        </span>
      </div>
      <Button type="submit" className="mr-auto">
        Submit
      </Button>
    </form>
  );
}

export default ContactForm;
