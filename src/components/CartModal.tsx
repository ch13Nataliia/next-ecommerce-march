'use client';

import Image from 'next/image';

const CartModal = () => {
  const carItems = true;

  return (
    <div className="w-max absolute  p-4 rounded-md bg-white top-20 right-0 flex flex-col gap-6 z-20 shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
      {!carItems ? (
        <div className="">Cart is empty</div>
      ) : (
        <>
        <h2 className='text-xl font-semibold'>Shopping Cart</h2>
          {/* // LIST */}
          <div className="flex flex-col gap-8">
            {/* ITEM */}

            <div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/30888208/pexels-photo-30888208/free-photo-of-cozy-morning-with-latte-art-and-newspaper.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                width={72}
                height={96}
                className="rounded-md object-cover"
              />
              <div className="flex flex-col justify-between gap-6">
                {/* TOP */}
                <div className="">
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="p-1 bg-gray-100 rounded-md">$49</div>
                  </div>
                  {/* DESCRIPRION */}
                  <div className="text-sm text-gray-500">available</div>
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>

            {/* ITEM */}

            <div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/30888208/pexels-photo-30888208/free-photo-of-cozy-morning-with-latte-art-and-newspaper.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt=""
                width={72}
                height={96}
                className="rounded-md object-cover"
              />
              <div className="flex flex-col justify-between gap-6">
                {/* TOP */}
                <div className="">
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="p-1 bg-gray-100 rounded-md">$49</div>
                  </div>
                  {/* DESCRIPRION */}
                  <div className="text-sm text-gray-500">available</div>
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty. 2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
          </div>
          {/* // BOTTOM */}
          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span className="">Subtotal</span>
              <span className="">$49</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">
              Shipping and taxes calculated at checkout.
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                View Cart
              </button>
              <button className="rounded-md py-3 px-4 bg-black text-white disabled:cursor-not-allowed disabled:opacity-75">
                Checkout
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;
