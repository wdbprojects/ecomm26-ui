"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { shippingFormSchema, ShippingFormSchemaType } from "@/config/schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, ListRestart } from "lucide-react";
import { useRouter } from "next/navigation";

const ShippingForm = ({
  activeStep,
  setShippingForm,
}: {
  activeStep: number;
  setShippingForm: (data: ShippingFormSchemaType) => void;
}) => {
  const router = useRouter();

  const form = useForm<ShippingFormSchemaType>({
    resolver: zodResolver(shippingFormSchema),
    defaultValues: {
      name: "",
      email: "",
      address: "",
      city: "",
      phone: "",
    },
  });

  const { handleSubmit, control, reset } = form;

  const onSubmit = (values: ShippingFormSchemaType) => {
    setShippingForm(values);
    router.push("/cart?step=3", { scroll: false });
  };

  return (
    <div className="mx-auto py-4">
      <Form {...form}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-2 gap-4"
        >
          <FormField
            control={control}
            name="name"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
                  </FormControl>
                  <FormMessage className="mt-0 text-xs" />
                </FormItem>
              );
            }}
          />
          <FormField
            control={control}
            name="email"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage className="mt-0 text-xs" />
                </FormItem>
              );
            }}
          />

          <FormField
            control={control}
            name="address"
            render={({ field }) => {
              return (
                <FormItem className="col-span-2">
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full address" {...field} />
                  </FormControl>
                  <FormMessage className="mt-0 text-xs" />
                </FormItem>
              );
            }}
          />
          <FormField
            control={control}
            name="city"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your city" {...field} />
                  </FormControl>
                  <FormMessage className="mt-0 text-xs" />
                </FormItem>
              );
            }}
          />
          <FormField
            control={control}
            name="phone"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your phone number" {...field} />
                  </FormControl>
                  <FormMessage className="mt-0 text-xs" />
                </FormItem>
              );
            }}
          />
          {/* checkout button */}
          {activeStep === 2 && (
            <div className="col-span-2 mt-6 flex w-full items-center justify-between gap-4">
              <Button
                onClick={() => {
                  reset();
                }}
                type="button"
                size="default"
                variant="secondary"
                className="flex w-full flex-1 items-center justify-center gap-3 text-sm font-semibold"
              >
                <ListRestart />
                <span>Reset</span>
              </Button>
              <Button
                type="submit"
                size="default"
                variant="default"
                className="flex w-full flex-1 items-center justify-center gap-3 text-sm font-semibold"
              >
                <ArrowRight />
                <span>Continue </span>
              </Button>
            </div>
          )}
        </form>
      </Form>
    </div>
  );
};

export default ShippingForm;
