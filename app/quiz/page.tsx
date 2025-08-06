// app/quiz/page.tsx

import React from "react";
import { Navbar } from "../dashboard/components/navbar";
import { Footer } from "../dashboard/components/footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-3xl tracking-tight text-white text-center mt-44 ">
        Coming Soon
      </h1>
      <Footer />
    </div>
  );
};

export default page;
