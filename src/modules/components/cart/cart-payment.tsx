import { ShippingFormSchemaType } from "@/config/schemas";
import ShippingForm from "@/modules/components/forms/shipping-form";
import PaymentForm from "@/modules/components/forms/payment-form";

const CartPayment = ({ activeStep }: { activeStep: number }) => {
  return (
    <div>
      <div className="flex flex-col justify-between border-b pb-2">
        <h2 className="text-2xl font-semibold">Payment Method</h2>
      </div>
      <PaymentForm activeStep={activeStep} />
    </div>
  );
};
export default CartPayment;
