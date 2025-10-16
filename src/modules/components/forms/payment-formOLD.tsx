"use client";

import { useId } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { paymentFormSchema, PaymentFormSchemaType } from "@/config/schemas";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { usePaymentInputs } from "react-payment-inputs";
import images, { type CardImages } from "react-payment-inputs/images";
import { ArrowRight, CreditCardIcon, ListRestart } from "lucide-react";
import { Button } from "@/components/ui/button";

const PaymentForm = ({ activeStep }: { activeStep: number }) => {
  const id = useId();
  const {
    meta,
    getCardNumberProps,
    getExpiryDateProps,
    getCVCProps,
    getCardImageProps,
  } = usePaymentInputs();

  const router = useRouter();

  const form = useForm<PaymentFormSchemaType>({
    resolver: zodResolver(paymentFormSchema),
    defaultValues: {
      nameOnCard: "",
      cardNumber: "",
      expDate: "",
      cvc: "",
    },
  });

  const { handleSubmit, control, reset } = form;

  const onSubmit = (values: PaymentFormSchemaType) => {
    console.log(values);
    // router.push("/cart?step=3", { scroll: false });
  };

  return (
    <div className="*:not-first:mt- mt-4 max-w-[400px]">
      <legend className="text-foreground mb-2 text-sm font-medium">
        Card Details
      </legend>

      <div className="rounded-md shadow-xs">
        <div className="rounded-md shadow-xs">
          <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormField
                control={control}
                name="nameOnCard"
                render={({ field }) => {
                  return (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Name on card"
                          className="mb-2 w-full rounded-md shadow-none"
                          {...field}
                          id={`expiry-${id}`}
                        />
                      </FormControl>
                    </FormItem>
                  );
                }}
              />
              <div className="relative focus-within:z-10">
                <FormField
                  control={control}
                  name="cardNumber"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormControl>
                          <Input
                            className="peer rounded-b-none pe-9 shadow-none [direction:inherit]"
                            {...getCardNumberProps()}
                            id={`number-${id}`}
                            /* {...field} */
                            onChange={(event) => {
                              field.onChange(event.target.value);
                            }}
                          />
                        </FormControl>
                        <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 peer-disabled:opacity-50">
                          {meta.cardType ? (
                            <svg
                              className="overflow-hidden rounded-sm"
                              {...getCardImageProps({
                                images: images as unknown as CardImages,
                              })}
                              width={20}
                            />
                          ) : (
                            <CreditCardIcon size={16} aria-hidden="true" />
                          )}
                        </div>
                      </FormItem>
                    );
                  }}
                />
              </div>
              <div className="-mt-px flex">
                <div className="focus-within-z-10 min-w-0 flex-1">
                  <FormField
                    control={control}
                    name="expDate"
                    render={({ field }) => {
                      console.log(field);

                      return (
                        <FormItem>
                          <FormControl>
                            <Input
                              className="rounded-e-none rounded-t-none shadow-none [direction:inherit]"
                              {...getExpiryDateProps()}
                              /* {...field} */
                              id={`expiry-${id}`}
                              onChange={(event) => {
                                field.onChange(event.target.value);
                              }}
                            />
                          </FormControl>
                        </FormItem>
                      );
                    }}
                  />
                </div>
                <div className="-ms-px min-w-0 flex-1 focus-within:z-10">
                  <FormField
                    control={control}
                    name="cvc"
                    render={({ field }) => {
                      return (
                        <FormItem>
                          <FormControl>
                            <Input
                              className="rounded-s-none rounded-t-none shadow-none [direction:inherit]"
                              {...getCVCProps()}
                              {...field}
                              id={`cvc-${id}`}
                            />
                          </FormControl>
                        </FormItem>
                      );
                    }}
                  />
                </div>
              </div>

              {/* checkout button */}

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
            </form>
          </Form>
          <div className="relative focus-within:z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
