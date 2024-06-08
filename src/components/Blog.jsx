import React from "react";
import { CustomButtonRightArrow } from "../utils/CustomButton";
import { BLOGS } from "../utils/constants";

function Blog() {
  return (
    <div className="flex flex-col items-center w-full">
      <hr className="w-full" />
      <div className="flex flex-col max-w-[75%] gap-16 py-16 xl:py-40">
        <div className="flex justify-between">
          <h1 className="text-5xl lg:text-7xl mb-5">Blog</h1>
          <CustomButtonRightArrow>All articles</CustomButtonRightArrow>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {BLOGS.map((blog, idx) => (
            <button><img className="w-fit h-fit" src={blog?.src} alt={blog?.src +"_" + idx} /></button>
          ))}
        </div>
      </div> 
      <hr className="w-full" />
    </div>
  );
}

export default Blog;
