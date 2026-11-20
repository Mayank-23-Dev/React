import React from "react";
import { useForm } from "react-hook-form";
const Form = () => {
  const { register, handleSubmit } = useForm();

  return (
    <div className="w-100 mx-auto my-10 p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
      <h1 className="text-2xl font-bold text-gray-800 text-center mb-6 tracking-tight">
        Product Form
      </h1>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
        className="flex flex-col gap-4"
      >
        <input
          {...register("profuctname")}
          type="text"
          placeholder="Product Name"
          className="w-full px-4 py-2.5 text-sm text-gray-800 bg-gray-50 rounded-xl border border-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
        />
        <input
          {...register("price")}
          type="text"
          placeholder="Price"
          className="w-full px-4 py-2.5 text-sm text-gray-800 bg-gray-50 rounded-xl border border-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
          />
        <select
          {...register("category")}
          placeholder="Select Category"
          className="w-full px-4 py-2.5 text-sm text-gray-700 bg-gray-50 rounded-xl border border-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all cursor-pointer"
          >
          <option value="MAYANK">Mayank</option>
          <option value="SIMRAN">Simran</option>
          <option value="OUR_KIDS">Our Kids</option>
        </select>
        <input
          {...register("image")}
          type="text"
          placeholder="Image"
          className="w-full px-4 py-2.5 text-sm text-gray-800 bg-gray-50 rounded-xl border border-gray-200 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder-gray-400"
        />
        <button
          type="submit"
          className="w-full mt-2 py-2.5 px-4 bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white font-medium text-sm rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
