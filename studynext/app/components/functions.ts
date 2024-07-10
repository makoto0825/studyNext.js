export const putcart = async (prev: string | null, formDate: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const itemID = formDate.get("itemID");
  if (itemID === "1") {
    return "you have added item to cart";
  }
  return prev;
};
