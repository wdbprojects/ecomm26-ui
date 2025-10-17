"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { paymentFormSchema, PaymentFormSchemaType } from "@/config/schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Ban, ShoppingBasket } from "lucide-react";
import Image from "next/image";

const PaymentForm = () => {
  const form = useForm<PaymentFormSchemaType>({
    resolver: zodResolver(paymentFormSchema),
    // mode: "onBlur",
    defaultValues: {
      nameOnCard: "",
      cardNumber: "",
      month: "",
      year: "",
      cvv: "",
      // sameAsShipping: true,
      comments: "",
    },
  });

  const { handleSubmit, control, reset } = form;

  const onSubmit = (values: PaymentFormSchemaType) => {
    console.log(values);
  };

  return (
    <div className="mt-4 w-full max-w-md">
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup>
            <FieldSet>
              <FieldLegend>Checkout</FieldLegend>
              <FieldDescription>
                Complete your order by filling in the details below. All
                transactions are secured and encrypted
              </FieldDescription>
              <div className="mt-0 flex items-center justify-start gap-3">
                <Image
                  src="/klarna.png"
                  width={50}
                  height={50}
                  alt="Klarna"
                  className="rounded-md"
                />
                <Image
                  src="/cards.png"
                  width={50}
                  height={50}
                  alt="Cards"
                  className="rounded-md"
                />
                <Image
                  src="/stripe.png"
                  width={50}
                  height={50}
                  alt="Stripe"
                  className="rounded-md"
                />
              </div>
              <FieldGroup>
                <Field>
                  <FormField
                    control={control}
                    name="nameOnCard"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                            Name on Card
                          </FieldLabel>
                          <FormControl>
                            <Input
                              {...field}
                              id="checkout-7j9-card-name-43j"
                              placeholder="Evil Rabbit"
                              autoComplete="off"
                            />
                          </FormControl>
                          <FormMessage className="text-xs italic" />
                        </FormItem>
                      );
                    }}
                  />
                </Field>
                <Field>
                  <FormField
                    control={control}
                    name="cardNumber"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FieldLabel htmlFor="checkout-7j9-card-number-uw1">
                            Card Number
                          </FieldLabel>
                          <FormControl>
                            <Input
                              {...field}
                              id="checkout-7j9-card-number-uw1"
                              placeholder="1234 5678 9012 3456"
                              autoComplete="off"
                            />
                          </FormControl>
                          <FormMessage className="text-xs italic" />
                          <FieldDescription>
                            Enter your 16-digit card number, no spaces!
                          </FieldDescription>
                        </FormItem>
                      );
                    }}
                  />
                </Field>

                <div className="grid grid-cols-3 gap-4">
                  {/* MONTH */}
                  <Field>
                    <FormField
                      control={control}
                      name="month"
                      render={({ field }) => {
                        const { onChange, value } = field;
                        return (
                          <FormItem>
                            <FieldLabel htmlFor="checkout-exp-month-ts6">
                              Month
                            </FieldLabel>

                            <Select
                              defaultValue={value}
                              onValueChange={onChange}
                            >
                              <FormControl>
                                <SelectTrigger
                                  id="checkout-exp-month-ts6"
                                  className="w-full"
                                >
                                  <SelectValue placeholder="MM" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="01">01</SelectItem>
                                <SelectItem value="02">02</SelectItem>
                                <SelectItem value="03">03</SelectItem>
                                <SelectItem value="04">04</SelectItem>
                                <SelectItem value="05">05</SelectItem>
                                <SelectItem value="06">06</SelectItem>
                                <SelectItem value="07">07</SelectItem>
                                <SelectItem value="08">08</SelectItem>
                                <SelectItem value="09">09</SelectItem>
                                <SelectItem value="10">10</SelectItem>
                                <SelectItem value="11">11</SelectItem>
                                <SelectItem value="12">12</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage className="text-xs italic" />
                          </FormItem>
                        );
                      }}
                    />
                  </Field>
                  {/* YEAR */}
                  <Field>
                    <FormField
                      control={control}
                      name="year"
                      render={({ field }) => {
                        const { onChange, value } = field;
                        return (
                          <FormItem>
                            <FieldLabel htmlFor="checkout-7j9-exp-year-f59">
                              Year
                            </FieldLabel>
                            <Select
                              defaultValue={value}
                              onValueChange={onChange}
                            >
                              <FormControl>
                                <SelectTrigger
                                  id="checkout-7j9-exp-year-f59"
                                  className="w-full"
                                >
                                  <SelectValue placeholder="YYYY" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="2024">2024</SelectItem>
                                <SelectItem value="2025">2025</SelectItem>
                                <SelectItem value="2026">2026</SelectItem>
                                <SelectItem value="2027">2027</SelectItem>
                                <SelectItem value="2028">2028</SelectItem>
                                <SelectItem value="2029">2029</SelectItem>
                                <SelectItem value="2030">2030</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage className="text-xs italic" />
                          </FormItem>
                        );
                      }}
                    />
                  </Field>
                  {/* CVV */}
                  <Field>
                    <FormField
                      control={control}
                      name="cvv"
                      render={({ field }) => {
                        return (
                          <FormItem>
                            <FieldLabel htmlFor="checkout-7j9-cvv">
                              CVV
                            </FieldLabel>
                            <FormControl>
                              <Input
                                {...field}
                                id="checkout-7j9-cvv"
                                placeholder="123"
                                autoComplete="off"
                              />
                            </FormControl>
                            <FormMessage className="text-xs italic" />
                          </FormItem>
                        );
                      }}
                    />
                  </Field>
                </div>
              </FieldGroup>
            </FieldSet>

            {/* <FieldSet>
              <FieldLegend>Billing Address</FieldLegend>
              <FieldDescription>
                The billing address associated with your payment method
              </FieldDescription>
              <FieldGroup>
                <Field orientation="horizontal">
                  <FormField
                    control={control}
                    name="sameAsShipping"
                    render={({ field }) => {
                      const { value, onChange } = field;
                      return (
                        <FormItem>
                          <Checkbox
                            id="checkout-7j9-same-as-shipping-wgm"
                            checked={value}
                            onCheckedChange={onChange}
                          />
                          <FieldLabel
                            htmlFor="checkout-7j9-same-as-shipping-wgm"
                            className="font-normal"
                          >
                            Same as shipping address
                          </FieldLabel>
                        </FormItem>
                      );
                    }}
                  />
                </Field>
              </FieldGroup>
            </FieldSet> */}
            <FieldSet>
              <FieldGroup>
                <Field>
                  <FormField
                    control={control}
                    name="comments"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FieldLabel htmlFor="checkout-7j9-optional-comments">
                            Comments
                          </FieldLabel>
                          <Textarea
                            {...field}
                            id="checkout-7j9-optional-comments"
                            placeholder="Add any additional comments"
                            className="resize-none"
                          />
                        </FormItem>
                      );
                    }}
                  />
                </Field>
              </FieldGroup>
            </FieldSet>
            <FieldSeparator />
            <Field orientation="horizontal">
              <Button
                type="button"
                variant="secondary"
                className="flex w-full flex-1 items-center justify-center"
                onClick={() => {
                  reset();
                }}
              >
                <Ban className="size-3.5" />
                <span>Reset</span>
              </Button>
              <Button
                type="submit"
                variant="default"
                className="flex w-full flex-1 items-center justify-center"
              >
                <ShoppingBasket className="size-3.5" />
                <span>Checkout</span>
              </Button>
            </Field>
          </FieldGroup>
        </form>
      </Form>
    </div>
  );
};

export default PaymentForm;
