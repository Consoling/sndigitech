import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ArrowBigRight } from "lucide-react";
import { Input } from "@/components/ui/input";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-select";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  phone: z.string().min(10, {
    message: "Phone number must be at least 10 characters.",
  }),
  feedback: z.string().min(5, {
    message: "Feedback must be at least 5 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
});

const ContactContent = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      {/* Banner Section */}
      <div className="flex w-full relative bg-white">
        <div className="bg-black flex w-full lg:h-[320px] md:h-[280px] h-[170px] ">
          <img
            src="/contact/contact-us.png"
            alt="bg-about"
            className="w-full object-cover h-full bg-blend-darken"
          />
        </div>
        <div className="flex absolute top-0 h-full w-full justify-center items-center">
          <div className="w-full flex-col flex items-center">
            <span className="text-white font-raleway text-[50px] font-semibold">
              Contact Us
            </span>
            <>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink className="text-[#e1e507]" href="/">
                      Home
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <ArrowBigRight className="text-white" />
                  </BreadcrumbSeparator>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/contact-us" className="text-white">
                      Contact Us
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </>
          </div>
        </div>
      </div>

      {/* Forms Section */}
      <section className="lg:px-44 md:px-32  px-5 py-10 flex-col flex lg:justify-center lg:gap-5 bg-white">
        <div className="w-full mt-10 justify-center flex flex-col items-center lg:px-32 md:px-5 xl:px-40">
          <h1 className="text-4xl py-5 font-raelway text-[#1f1f1f] font-bold tracking-wider">
            Get in Touch
          </h1>
          <span className="w-full md:px-20 text-center">
            We are available 24/7 by e-mail or by phone. You can also use our
            quick contact form to ask a question about our services and
            projects.
          </span>
        </div>
        <div className="flex flex-col">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8  rounded-[5px] bg-transparent backdrop-blur-lg shadow-md border w-full px-4 md:px-10 h-auto py-10 my-10 "
            >
              <div className="flex lg:flex-row flex-col gap-10 lg:justify-center ">
                <FormField
                  className="lg:w-[570px] md:w-[420px] w-[280px]"
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Name"
                          {...field}
                          className="px-10 bg-[#f5f5f5] py-6 border-none rounded-[5px]"
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Phone"
                          {...field}
                          className="px-10 py-6 bg-[#f5f5f5] border-none rounded-[5px]"
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex justify-center">
                <div className=" flex ">
                  <FormField
                    control={form.control}
                    name="feedback"
                    render={({ field }) => (
                      <FormItem className="">
                        <FormControl>
                          <Textarea
                            placeholder="Your message..."
                            className=" border-none lg:w-[570px] md:w-[420px]  w-[280px] bg-[#f5f5f5]  h-[130px] px-5 rounded-[5px]"
                            {...field}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className="flex lg:flex-row flex-col gap-10 lg:justify-center ">
                <FormField
                  className="lg:w-[570px] md:w-[420px] w-[280px]"
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Email"
                          {...field}
                          className="px-10 bg-[#f5f5f5] py-6 border-none rounded-[5px]"
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="h-12 px-24 py-2  bg-snyellow text-black font-semibold uppercase tracking-widest"
                >
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </section>
    </div>
  );
};

export default ContactContent;
