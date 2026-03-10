import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

function TopRibbon() {
  const [bannerText, setBannerText] = useState("🚚 Free Delivery for orders above ₹499+ 🎉");

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const docRef = doc(db, "settings", "store");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists() && docSnap.data().promotionalBanner) {
          setBannerText(docSnap.data().promotionalBanner);
        }
      } catch (error) {
        console.error("Error fetching banner text:", error);
      }
    };
    fetchBanner();
  }, []);
  return (
    <div className="bg-primary text-white overflow-hidden mt-[50px]">
      <div className="relative flex w-max animate-marquee whitespace-nowrap py-3 font-semibold">

        {/* First Copy */}
        <div className="flex gap-16 px-6">
          <span>{bannerText}</span>
          <span>{bannerText}</span>
          <span>{bannerText}</span>
        </div>

        {/* Duplicate Copy (for seamless loop) */}
        <div className="flex gap-16 px-6">
          <span>{bannerText}</span>
          <span>{bannerText}</span>
          <span>{bannerText}</span>
        </div>

      </div>
    </div>
  );
}

export default TopRibbon;