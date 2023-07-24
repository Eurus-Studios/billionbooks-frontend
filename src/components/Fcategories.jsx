import React from "react";
import Image from "next/image";

const ResponsiveGridLayout = () => {
  return (

    <section className="flex my-11 flex-col mx-auto md:mx-2">
        <h1 className="popinsfont text-xl text-center font-bold my-4">FEATURED  CATEGORIES</h1>
       <div className="text-center pb-4 text-sm latofont">National & International Best Selling Collections</div>
    <div className="flex flex-wrap justify-center ">
      {/* Left Div (50% width) */}
      <div className="w-auto  p-4">
        <div className="h-auto flex hov flex-col justify-center align-middle">
          <div className="imgcont">
            <Image
              src="/bookbox.png"
              width={583}
              height={583}
              alt="Picture of the author"
            />
          </div>
          <div className="text-center text-3xl popinsfont pt-3
          ">BOOK BOX</div>
        </div>
      </div>

      {/* Right Div (50% width) */}
      <div className="w-auto  p-4">
        {/* Grid inside the right div */}
        <div className="grid grid-cols-2 gap-6">
          
          <div className="h-auto flex hov flex-col justify-center align-middle">
            <div className="imgcont">
              <Image
                src="/sleeves.jpg"
                width={275.5}
                height={275.5}
                alt="Picture of the author"
              />
            </div>
            <div className="text-center text-xl pt-3 popinsfont">BOOK SLEEVES</div>
          </div>
          <div className="h-auto flex hov flex-col justify-center align-middle">
            <div className="imgcont">
              <Image
                src="/bookmark.jpg"
                width={275.5}
                height={275.5}
                alt="Picture of the author"
              />
            </div>
            <div className="text-center text-xl pt-3 popinsfont">BOOKMARKS</div>
          </div>
          <div className="h-auto flex hov flex-col justify-center align-middle">
            <div className="imgcont">
              <Image
                src="/hardcover.jpg"
                width={275.5}
                height={275.5}
                alt="Picture of the author"
              />
            </div>
            <div className="text-center text-xl pt-3 popinsfont">HARD COVER</div>
          </div>
          <div className="h-auto flex hov flex-col justify-center align-middle">
            <div className="imgcont">
              <Image
                src="/premium.jpg"
                width={275.5}
                height={275.5}
                alt="Picture of the author"
              />
            </div>
            <div className="text-center text-xl pt-3 popinsfont">PREMIUM BOOKSET</div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default ResponsiveGridLayout;
