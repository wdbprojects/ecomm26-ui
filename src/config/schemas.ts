import z from "zod";

export const shippingFormSchema = z.object({
  name: z.string().min(2, { message: "Name should be at least 2 characters" }),
  email: z.email(),
  phone: z
    .string()
    .min(7, { message: "Phone should be at least 7 digits" })
    .regex(/^\d+$/, { message: "Only numbers allowed" }),
  address: z.string().nonempty({ message: "Address is required" }),
  city: z.string().nonempty({ message: "City is required" }),
});

export type ShippingFormSchemaType = z.infer<typeof shippingFormSchema>;

export const paymentFormSchema = z.object({
  nameOnCard: z
    .string()
    .nonempty({ message: "Name should be at least 2 characters" }),
  cardNumber: z
    .string()
    .min(16, { message: "Your card must have 16 digits" })
    .max(16, { message: "Your card must have 16 digits" }),
  month: z.string().nonempty({ message: "Required field" }),
  year: z.string().nonempty({ message: "Required field" }),
  cvv: z
    .string()
    .min(3, { message: "3 digits CVV required" })
    .max(3, { message: "3 digits CVV required" }),
  // sameAsShipping: z.boolean(),
  comments: z.string(),
});

export type PaymentFormSchemaType = z.infer<typeof paymentFormSchema>;
