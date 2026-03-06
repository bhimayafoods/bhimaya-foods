function Products({
  products,
  cart,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
}) {
  const getQuantity = (id) => {
    const item = cart.find((item) => item.id === id);
    return item ? item.quantity : 0;
  };

  return (
    <section id="products" className="py-10 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-playfair text-primary text-center mb-16">
          Wholesome Delicacies
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {products.map((product) => {
            const qty = getQuantity(product.id);

            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition overflow-hidden"
              >
                <div className="relative h-64">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition duration-500"
                  />
                  <span className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-sm">
                    {product.category}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {product.name}
                    {product.quantity && (
                      <span className="text-sm text-gray-500 ml-2">
                        ({product.quantity})
                      </span>
                    )}
                  </h3>

                  <div className="flex justify-between items-center mt-6">
                    <span className="text-2xl font-bold text-primary">
                      ₹{product.price}
                    </span>

                    {qty > 0 ? (
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => decreaseQuantity(product.id)}
                          className="w-8 h-8 border border-primary rounded-full"
                        >
                          -
                        </button>
                        <span>{qty}</span>
                        <button
                          onClick={() => increaseQuantity(product.id)}
                          className="w-8 h-8 border border-primary rounded-full"
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => addToCart(product)}
                        className="bg-primary text-white px-4 py-2 rounded-full"
                      >
                        Add
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Products;