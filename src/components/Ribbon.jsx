function Ribbon() {
  return (
    <div className="bg-primary text-white overflow-hidden mt-[30px]">
      <div className="relative flex w-max animate-marquee whitespace-nowrap py-3 font-semibold">

        {/* First copy */}
        <div className="flex gap-12 px-6">
          <span>😊 No palm oil</span>
          <span>😊 No preservatives</span>
          <span>😊 No added colors</span>
          <span>😊 No palm oil</span>
          <span>😊 No preservatives</span>
          <span>😊 No added colors</span>
        </div>

        {/* Duplicate copy (important for seamless loop) */}
        <div className="flex gap-12 px-6">
          <span>😊 No palm oil</span>
          <span>😊 No preservatives</span>
          <span>😊 No added colors</span>
          <span>😊 No palm oil</span>
          <span>😊 No preservatives</span>
          <span>😊 No added colors</span>
        </div>

      </div>
    </div>
  );
}

export default Ribbon;