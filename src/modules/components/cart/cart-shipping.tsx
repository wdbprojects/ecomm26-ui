import { ShippingFormSchemaType } from "@/config/schemas";
import ShippingForm from "@/modules/components/forms/shipping-form";

const CartShipping = ({
  activeStep,
  setShippingForm,
}: {
  activeStep: number;
  setShippingForm: (data: ShippingFormSchemaType) => void;
}) => {
  return (
    <div>
      <div className="flex flex-col justify-between border-b pb-2">
        <h2 className="text-2xl font-semibold">Shipping Address</h2>
      </div>
      <ShippingForm activeStep={activeStep} setShippingForm={setShippingForm} />
    </div>
  );
};
export default CartShipping;
