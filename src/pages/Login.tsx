
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageProvider } from '../contexts/LanguageContext';
import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Login page content that uses the language provider
const LoginContent = () => {
  const { t } = useLanguage();
  const { toast } = useToast();

  // Form validation schema
  const formSchema = z.object({
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters.",
    }),
  });

  // Initialize the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Handle form submission
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // This is where you would integrate with a real authentication system
    console.log("Login attempt:", values);
    toast({
      title: t('loginSuccess'),
      description: t('welcomeBack'),
    });
  };

  return (
    <div className="container mx-auto p-4 max-w-5xl">
      <Header />
      
      <div className="flex justify-center py-8">
        <Card className="w-full max-w-md">
          <CardHeader className="bg-sa-green text-white rounded-t-lg">
            <CardTitle className="text-center">{t('login')}</CardTitle>
          </CardHeader>
          
          <CardContent className="p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('email')}</FormLabel>
                      <FormControl>
                        <Input placeholder="example@email.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t('password')}</FormLabel>
                      <FormControl>
                        <Input type="password" placeholder="••••••••" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full bg-sa-yellow hover:bg-sa-yellow/90 text-black">
                  {t('login')}
                </Button>
              </form>
            </Form>
          </CardContent>
          
          <CardFooter className="flex flex-col gap-4 pb-6">
            <div className="text-center text-sm">
              {t('dontHaveAccount')} <Link to="/signup" className="text-sa-blue hover:underline font-medium">{t('signUp')}</Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

// Main component wrapped with LanguageProvider
const Login = () => {
  return (
    <LanguageProvider>
      <LoginContent />
    </LanguageProvider>
  );
};

export default Login;
