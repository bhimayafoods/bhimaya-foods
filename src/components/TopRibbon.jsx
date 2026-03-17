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
  // Split messages by emoji patterns or common delimiters
  const messages = bannerText.split(/[|•]|(?=🚚|📦|🎁|🔥|🎉)/).filter(m => m.trim().length > 0);

  return (
    <div className="bg-[#0a4d2e] bg-gradient-to-r from-[#0a4d2e] via-[#145a32] to-[#0a4d2e] text-white overflow-hidden py-2 border-b border-white/10 shadow-sm mt-[50px]">
      <div 
        className="relative flex w-max animate-marquee whitespace-nowrap font-medium text-sm md:text-base tracking-wide"
        style={{ animationDuration: '80s' }}
      >
        
        {/* We repeat the content to ensure a seamless loop. 
            translateX(-50%) requires the content to be exactly twice as wide as the set we want to loop. */}
        <div className="flex items-center">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center">
              {messages.map((msg, index) => (
                <div key={index} className="flex items-center">
                  <span className="px-6">{msg.trim()}</span>
                  <span className="text-secondary opacity-50 text-xs">✦</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Second set for seamless loop */}
        <div className="flex items-center">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center">
              {messages.map((msg, index) => (
                <div key={index} className="flex items-center">
                  <span className="px-6">{msg.trim()}</span>
                  <span className="text-secondary opacity-50 text-xs">✦</span>
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default TopRibbon;