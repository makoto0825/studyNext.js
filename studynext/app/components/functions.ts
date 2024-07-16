"use server";
export const putcart = async (prev: string | null, formDate: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("this comment is put debug console because in serverside");
  const itemID = formDate.get("itemID");
  if (itemID === "1") {
    return "you have added item to cart";
  }
  return prev;
};

export async function deliverMessage(message: string) {
  await new Promise((res) => setTimeout(res, 1000));
  return message;
}
