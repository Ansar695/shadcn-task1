"use client"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { 
  Form, 
  FormControl, 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "./components/ui/form"
import { Button } from "./components/ui/button"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "./components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select"
import { Checkbox } from "./components/ui/checkbox"
 
const formSchema = z.object({
  fullname: z.string().min(4, {
    message: "Name should be atleast 4 characters long."
  }).max(50, {
    message: "Name should be maximum 50 characters long."
  }),
  email: z.string({
    required_error: "Please enter your email"
  })
  .email(),
  gender: z.enum(["male", "female", "other"], {
    required_error: "You need to select your gender.",
  }),
  country: z.string({
    required_error: "Please select your country."
  }),
  address: z.string({
    required_error: "Please Enter your Address."
  }),
  policyAgreement: z.boolean({
    required_error: "Policy Agreement is required"
  })
})

function App() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: ""
    }
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("values ", values)
  }

  return (
    <div className="p-5 m-5 w-full lg:w-[50%] max-w-[600px] mx-auto rounded-lg border border-[#e1e1e1]">
      <h1 className="text-3xl font-bold mb-4">Shadcn Hook Forms.</h1>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

        <FormField
          control={form.control}
          name="fullname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter Full Name" onChange={field.onChange} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({field}) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField 
          control={form.control}
          name="address"
          render={({field}) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input placeholder="Enter Your Address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Your Country." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="Pakistan">Pakistan</SelectItem>
                  <SelectItem value="USA">USA</SelectItem>
                  <SelectItem value="UK">UK</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Select Your Gender</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="male" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Male
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="female" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Female
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="other" />
                    </FormControl>
                    <FormLabel className="font-normal">Other</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField 
          control={form.control}
          name="policyAgreement"
          render={({field}) => (
            <FormItem>
              <FormControl>
              <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
                </FormControl>
              <FormLabel className="ml-2">Are you agree with policies</FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">
          Submit 
        </Button>
        </form>
      </Form>
    </div>
  )
}

export default App
