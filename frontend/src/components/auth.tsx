import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";

export default function AuthForms() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [forgotPasswordOpen, setForgotPasswordOpen] = useState<boolean>(false);
  const [agreedToTerms, setAgreedToTerms] = useState<boolean>(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agreedToTerms) {
      alert("Please agree to the terms and conditions");
      return;
    }
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Handle login logic here
    }, 1000);
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!agreedToTerms) {
      alert("Please agree to the terms and conditions");
      return;
    }
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Handle registration logic here
    }, 1000);
  };

  const handleForgotPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call to send password reset code
    setTimeout(() => {
      setIsLoading(false);
      setForgotPasswordOpen(false);
      // You would typically show a success message here
      alert(
        "If your email exists in our system, you will receive a password reset code shortly."
      );
    }, 1000);
  };

  return (
    <div className="flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Login</CardTitle>
                <CardDescription>
                  Enter your email and password to login to your account
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleLogin}>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <Dialog
                        open={forgotPasswordOpen}
                        onOpenChange={setForgotPasswordOpen}
                      >
                        <DialogTrigger asChild>
                          <Button
                            variant="link"
                            className="px-0 font-normal text-xs"
                            type="button"
                          >
                            Forgot password?
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>Reset password</DialogTitle>
                            <DialogDescription>
                              Enter your email address and we'll send you a code
                              to reset your password.
                            </DialogDescription>
                          </DialogHeader>
                          <form onSubmit={handleForgotPassword}>
                            <div className="grid gap-4 py-4">
                              <div className="space-y-2">
                                <Label htmlFor="resetEmail">Email</Label>
                                <Input
                                  id="resetEmail"
                                  type="email"
                                  placeholder="name@example.com"
                                  required
                                />
                              </div>
                            </div>
                            <DialogFooter>
                              <Button
                                type="button"
                                variant="outline"
                                onClick={() => setForgotPasswordOpen(false)}
                              >
                                Cancel
                              </Button>
                              <Button type="submit" disabled={isLoading}>
                                {isLoading ? "Sending..." : "Send reset code"}
                              </Button>
                            </DialogFooter>
                          </form>
                        </DialogContent>
                      </Dialog>
                    </div>
                    <Input id="password" type="password" required />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={agreedToTerms}
                      onCheckedChange={(checked) =>
                        setAgreedToTerms(checked as boolean)
                      }
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to the{" "}
                      <Button
                        variant="link"
                        className="p-0 font-normal text-primary"
                        type="button"
                      >
                        Terms of Service
                      </Button>{" "}
                      and{" "}
                      <Button
                        variant="link"
                        className="p-0 font-normal text-primary"
                        type="button"
                      >
                        Privacy Policy
                      </Button>
                    </label>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    type="submit"
                    disabled={isLoading || !agreedToTerms}
                  >
                    {isLoading ? "Logging in..." : "Login"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
          <TabsContent value="register">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Create an account</CardTitle>
                <CardDescription>
                  Enter your details to create a new account
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleRegister}>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First name</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last name</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="registerEmail">Email</Label>
                    <Input
                      id="registerEmail"
                      type="email"
                      placeholder="name@example.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="registerPassword">Password</Label>
                    <Input id="registerPassword" type="password" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input id="confirmPassword" type="password" required />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={agreedToTerms}
                      onCheckedChange={(checked) =>
                        setAgreedToTerms(checked as boolean)
                      }
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to the{" "}
                      <Button
                        variant="link"
                        className="p-0 font-normal text-primary"
                        type="button"
                      >
                        Terms of Service
                      </Button>{" "}
                      and{" "}
                      <Button
                        variant="link"
                        className="p-0 font-normal text-primary"
                        type="button"
                      >
                        Privacy Policy
                      </Button>
                    </label>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    className="w-full"
                    type="submit"
                    disabled={isLoading || !agreedToTerms}
                  >
                    {isLoading ? "Creating account..." : "Create account"}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
