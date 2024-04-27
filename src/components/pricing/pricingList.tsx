import type { PricingItem as TPricingItem } from "@/types/PricingItem";
import { PricingItem } from "./pricingItem";

/**
 * This component renders a list of PricingItem components
 * It is needed to provide a solid layout for the pricing items
 *
 * @param pricingItems
 * @returns A react element that represents a list of pricing items
 */
export const PricingList = ({
  pricingItems,
}: {
  pricingItems: TPricingItem[];
}) => {
  return (
    <div className="flex gap-10 h-[25rem] justify-center">
      {pricingItems.map((pricingItem, index) => (
        <PricingItem
          key={index}
          pricingType={pricingItem.pricingType}
          title={pricingItem.title}
        />
      ))}
    </div>
  );
};