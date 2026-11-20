import React from 'react'

const ProductCard = ({ product, del }) => {
    return (
      <div className="w-100 border-2 border-gray-600 hover:border-gray-300 hover:shadow-white rounded-[20px] overflow-hidden shadow-lg p-4 flex flex-col justify-between gap-4 bg-zinc-800 transition-all duration-250">
        <img
          className="h-48 w-full object-contain bg-white rounded-lg p-2"
          src={product.image}
          alt={product.title}
        />
        <div className="flex flex-col gap-1">
          <h2 className="font-semibold text-lg text-amber-50 line-clamp-1">
            {product.title}
          </h2>
          <h2 className="font-semibold text-xl text-green-500 underline">
            ₹{(product.price * 95).toFixed(2)}
          </h2>
          <h2 className="text-sm text-zinc-400 capitalize">
            {product.category}
          </h2>
        </div>
        <button
          onClick={() => del(product.id)}
          className="text-white cursor-pointer bg-red-700 rounded p-2 font-medium"
        >
          Delete
        </button>
      </div>
    );
}

export default ProductCard