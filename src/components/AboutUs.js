export default function AboutUs() {
  return (
    <div className="w-full flex justify-center items-center min-h-screen ">
      <div className="w-11/12 md:w-2/3 lg:w-1/2  p-6 rounded-lg shadow-lg">
        <p className="text-center text-lg md:text-2xl font-inter leading-relaxed font-bold subpixel-antialiased">
          Film is a lovely <span className="text-pink-500">disease</span>, an
          organism unlike any other.{" "}
          <span className="underline decoration-4 decoration-indigo-500">
            Studio Amoeba
          </span>{" "}
          was conceptualized on this statement. It is our running philosophy, a
          disease unlike any other. Once infected, there is only a single cure
          for the disease of{" "}
          <span className="underline decoration-indigo-500 decoration-4">
            'Film'
          </span>
          .{" "}
          <span className="underline decoration-indigo-500 decoration-4">
            'More Film'
          </span>
          .
          <br />
          We are an independent studio built to blend this disease with the
          world. One patient at a time. Ads, features, music videos, reels—
          <span className="text-pink-500">everyone is welcome</span>.
        </p>
      </div>
    </div>
  );
}
