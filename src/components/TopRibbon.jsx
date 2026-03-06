function TopRibbon() {
  return (
    <div className="bg-primary text-white overflow-hidden mt-[50px]">
      <div className="relative flex w-max animate-marquee whitespace-nowrap py-3 font-semibold">

        {/* First Copy */}
        <div className="flex gap-16 px-6">
          <span>🚚 Free Delivery for orders above ₹499+ 🎉</span>
          <span>🚚 Free Delivery for orders above ₹499+ 🎉</span>
          <span>🚚 Free Delivery for orders above ₹499+ 🎉</span>
        </div>

        {/* Duplicate Copy (for seamless loop) */}
        <div className="flex gap-16 px-6">
          <span>🚚 Free Delivery for orders above ₹499+ 🎉</span>
          <span>🚚 Free Delivery for orders above ₹499+ 🎉</span>
          <span>🚚 Free Delivery for orders above ₹499+ 🎉</span>
        </div>

      </div>
    </div>
  );
}

export default TopRibbon;