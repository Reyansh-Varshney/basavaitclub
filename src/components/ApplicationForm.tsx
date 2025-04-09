
import React, { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';
import { Code, User, Mail, Phone, GraduationCap, FileCode, Lightbulb, CheckCircle } from 'lucide-react';

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  grade: z.string().min(1, {
    message: "Please select your grade.",
  }),
  phoneNumber: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  programmingExperience: z.string().min(1, {
    message: "Please select your programming experience.",
  }),
  interests: z.array(z.string()).min(1, {
    message: "Please select at least one area of interest.",
  }),
  codingQuestion: z.string().min(1, {
    message: "Please provide an answer to the coding question.",
  }),
  projectIdea: z.string().min(20, {
    message: "Please provide a project idea (minimum 20 characters).",
  }),
  agreeToTerms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

const ApplicationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStep, setFormStep] = useState(0);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      grade: "",
      phoneNumber: "",
      programmingExperience: "",
      interests: [],
      codingQuestion: "",
      projectIdea: "",
      agreeToTerms: false,
    },
    mode: "onChange",
  });

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log(values);
    toast.success("Application submitted successfully! We'll review and get back to you soon.");
    
    form.reset();
    setIsSubmitting(false);
    setFormStep(0);
  };

  const nextFormStep = async () => {
    const fields = formStep === 0
      ? ["fullName", "email", "grade", "phoneNumber"]
      : ["programmingExperience", "interests"];

    const isValid = await form.trigger(fields as any);
    if (isValid) setFormStep(formStep + 1);
  };

  const prevFormStep = () => {
    setFormStep(formStep - 1);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 mb-4">
          <FileCode className="h-8 w-8 text-white" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Join the IT Club</h2>
        <p className="text-gray-600">
          Complete the application form below to join our community of tech enthusiasts.
        </p>
      </div>

      <Card className="border-t-4 border-t-primary shadow-lg">
        <CardContent className="p-6">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${formStep >= 0 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>
                  1
                </div>
                <div className={`h-1 w-12 ${formStep >= 1 ? 'bg-primary' : 'bg-gray-200'}`}></div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${formStep >= 1 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>
                  2
                </div>
                <div className={`h-1 w-12 ${formStep >= 2 ? 'bg-primary' : 'bg-gray-200'}`}></div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${formStep >= 2 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-500'}`}>
                  3
                </div>
              </div>
            </div>
            <div className="flex justify-between text-sm mt-1">
              <span className={formStep >= 0 ? 'text-primary font-medium' : 'text-gray-500'}>Personal Info</span>
              <span className={formStep >= 1 ? 'text-primary font-medium' : 'text-gray-500'}>Experience</span>
              <span className={formStep >= 2 ? 'text-primary font-medium' : 'text-gray-500'}>Assessment</span>
            </div>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {formStep === 0 && (
                <div className="space-y-6 animate-fade-in">
                  <h3 className="text-lg font-medium flex items-center gap-2">
                    <User className="h-5 w-5 text-primary" />
                    Personal Information
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            Full Name
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" {...field} className="border-gray-300 focus:border-primary" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-1">
                            <Mail className="h-4 w-4" />
                            Email
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your email" type="email" {...field} className="border-gray-300 focus:border-primary" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="grade"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-1">
                            <GraduationCap className="h-4 w-4" />
                            Grade/Class
                          </FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="border-gray-300 focus:border-primary">
                                <SelectValue placeholder="Select your grade" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="9">Class 9</SelectItem>
                              <SelectItem value="10">Class 10</SelectItem>
                              <SelectItem value="11">Class 11</SelectItem>
                              <SelectItem value="12">Class 12</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-1">
                            <Phone className="h-4 w-4" />
                            Phone Number
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your phone number" {...field} className="border-gray-300 focus:border-primary" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="flex justify-end mt-6">
                    <Button 
                      type="button" 
                      onClick={nextFormStep}
                      className="bg-primary hover:bg-primary/90"
                    >
                      Next Step
                    </Button>
                  </div>
                </div>
              )}

              {formStep === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <h3 className="text-lg font-medium flex items-center gap-2">
                    <Code className="h-5 w-5 text-primary" />
                    Experience & Interests
                  </h3>
                  
                  <FormField
                    control={form.control}
                    name="programmingExperience"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Programming Experience</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-3"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0 bg-white p-4 rounded-md border border-gray-200 hover:border-primary/50 transition-colors">
                              <FormControl>
                                <RadioGroupItem value="beginner" />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer flex-1">
                                Beginner (Little to no experience)
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0 bg-white p-4 rounded-md border border-gray-200 hover:border-primary/50 transition-colors">
                              <FormControl>
                                <RadioGroupItem value="intermediate" />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer flex-1">
                                Intermediate (Some experience with basic languages)
                              </FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0 bg-white p-4 rounded-md border border-gray-200 hover:border-primary/50 transition-colors">
                              <FormControl>
                                <RadioGroupItem value="advanced" />
                              </FormControl>
                              <FormLabel className="font-normal cursor-pointer flex-1">
                                Advanced (Comfortable with multiple languages)
                              </FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="interests"
                    render={() => (
                      <FormItem>
                        <div className="mb-4">
                          <FormLabel className="text-base">Areas of Interest</FormLabel>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {[
                            { id: "webDev", label: "Web Development", icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg> },
                            { id: "appDev", label: "App Development", icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg> },
                            { id: "ai", label: "Artificial Intelligence", icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v8"/><path d="M8.5 4.5s-1.8 4.5 0 8"/><path d="M15.5 4.5s1.8 4.5 0 8"/><path d="M9 17.1c1 .3 2 .5 3 .5s2-.2 3-.5"/><path d="M12 14v4"/><path d="M22 9v6"/><path d="M18 12v2a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4v-2"/><path d="M18 9v3"/><path d="M6 9v3"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10"/></svg> },
                            { id: "dataScience", label: "Data Science", icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m18 12-6-6-6 6"/><path d="m8 6 4 0"/><path d="m6 4 0 4"/><circle cx="18" cy="18" r="3"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="6" r="3"/></svg> },
                            { id: "gameDev", label: "Game Development", icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="6" x2="10" y1="12" y2="12"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="15" x2="15.01" y1="13" y2="13"/><line x1="18" x2="18.01" y1="11" y2="11"/><rect width="20" height="12" x="2" y="6" rx="2"/></svg> },
                            { id: "cybersecurity", label: "Cybersecurity", icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg> },
                            { id: "robotics", label: "Robotics", icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="16" x="4" y="4" rx="2"/><circle cx="9" cy="10" r="1"/><circle cx="15" cy="10" r="1"/><path d="m9 16 3-3 3 3"/></svg> },
                            { id: "design", label: "UI/UX Design", icon: <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg> }
                          ].map((item) => (
                            <FormField
                              key={item.id}
                              control={form.control}
                              name="interests"
                              render={({ field }) => {
                                return (
                                  <FormItem
                                    key={item.id}
                                    className="flex flex-row items-start space-x-3 space-y-0 bg-white p-4 rounded-md border border-gray-200 hover:border-primary/50 transition-colors"
                                  >
                                    <FormControl>
                                      <Checkbox
                                        checked={field.value?.includes(item.id)}
                                        onCheckedChange={(checked) => {
                                          return checked
                                            ? field.onChange([...field.value, item.id])
                                            : field.onChange(
                                                field.value?.filter(
                                                  (value) => value !== item.id
                                                )
                                              )
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal cursor-pointer flex items-center gap-2">
                                      <span className="text-primary">{item.icon}</span>
                                      {item.label}
                                    </FormLabel>
                                  </FormItem>
                                )
                              }}
                            />
                          ))}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex justify-between mt-6">
                    <Button 
                      type="button" 
                      onClick={prevFormStep}
                      variant="outline"
                    >
                      Previous
                    </Button>
                    <Button 
                      type="button" 
                      onClick={nextFormStep}
                      className="bg-primary hover:bg-primary/90"
                    >
                      Next Step
                    </Button>
                  </div>
                </div>
              )}

              {formStep === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <h3 className="text-lg font-medium flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    Skills Assessment
                  </h3>
                  
                  <FormField
                    control={form.control}
                    name="codingQuestion"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Coding Question</FormLabel>
                        <p className="text-sm text-gray-500 mb-2">
                          Write a short code snippet to find the factorial of a number (in any language you're comfortable with).
                        </p>
                        <FormControl>
                          <Textarea
                            placeholder="Write your code here..."
                            className="font-mono border-gray-300 focus:border-primary min-h-[150px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="projectIdea"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Idea</FormLabel>
                        <p className="text-sm text-gray-500 mb-2">
                          Describe a tech project you'd like to work on as part of the IT Club.
                        </p>
                        <FormControl>
                          <Textarea
                            placeholder="Describe your project idea..."
                            className="border-gray-300 focus:border-primary min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="agreeToTerms"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4 rounded-md bg-gray-50">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel className="text-sm">
                            I agree to the terms and conditions of the IT Club
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />

                  <div className="flex justify-between mt-6">
                    <Button 
                      type="button" 
                      onClick={prevFormStep}
                      variant="outline"
                    >
                      Previous
                    </Button>
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="bg-primary hover:bg-primary/90"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4" />
                          Submit Application
                        </div>
                      )}
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </Form>
        </CardContent>
      </Card>

      <div className="mt-8 text-center text-sm text-gray-500">
        <p>By submitting this application, you'll be considered for IT Club membership for the current academic year.</p>
      </div>
    </div>
  );
};

export default ApplicationForm;
