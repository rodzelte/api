"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/Button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/Input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router";

const formSchema = z.object({
  name: z.string().min(3).max(50, {
    message: "Name must be between 3 and 50 characters",
  }),
  username: z
    .string()
    .min(6, { message: "Username must be at least 6 characters" })
    .max(24, { message: "Username must be at most 24 characters" }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters",
  }),
});

const formFields = [
  {
    name: "name",
    label: "Full Name",
    placeholder: "John Doe",
    type: "text",
    description: "Your full name as it appears on official documents",
  },
  {
    name: "username",
    label: "Username",
    placeholder: "johndoe123@abc.abcd",
    type: "text",
    description: "Your unique username for the platform",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "••••••••",
    type: "password",
    description: "Create a strong password",
  },
];

export function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Card className="w-full max-w-md ">
      <CardHeader>
        <CardTitle>Registration</CardTitle>
        <CardDescription>
          This registration form allows users to create an account by providing
          their full name, a unique username, and a secure password. Each field
          has validation rules to ensure data integrity, such as minimum and
          maximum length requirements.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {formFields.map((field) => (
              <FormField
                key={field.name}
                control={form.control}
                name={field.name as keyof z.infer<typeof formSchema>}
                render={({ field: formField }) => (
                  <FormItem>
                    <FormLabel>{field.label}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={field.placeholder}
                        type={field.type}
                        {...formField}
                      />
                    </FormControl>
                    <FormDescription>{field.description}</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}
            <CardFooter className="space-x-4 justify-end">
              <FormDescription>
                {" "}
                <Link to="/login">Already have account?</Link>
              </FormDescription>
              <Button type="submit">Register</Button>
            </CardFooter>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
