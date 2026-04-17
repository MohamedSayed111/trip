const boatImg = "/assets/tour-boat-DVIq_CHy.jpg";
const safariImg = "/assets/tour-safari-BwO6875g.jpg";
const historicalImg = "/assets/tour-historical-DWde3eDh.jpg";
const shoppingImg = "/assets/tour-shopping-Dy04Wl9y.jpg";
const tours = [
  { id: "tr1", category: "boat", nameAr: "رحلة جزيرة الحمرا", nameEn: "Hamra Island Boat Trip", descAr: "غوص وسنوركلينج في مياه فيروزية صافية.", descEn: "Snorkeling in crystal turquoise waters.", duration: "8 ساعات", durationEn: "8 hours", price: 55, image: boatImg },
  { id: "tr2", category: "boat", nameAr: "دولفين هاوس", nameEn: "Dolphin House", descAr: "السباحة مع الدلافين البرية في خليجها الطبيعي.", descEn: "Swim with wild dolphins in their natural bay.", duration: "يوم كامل", durationEn: "Full day", price: 75, image: boatImg },
  { id: "tr3", category: "safari", nameAr: "سفاري الصحراء بالكواد", nameEn: "Desert Quad Safari", descAr: "مغامرة بدراجات الكواد بين الكثبان الرملية.", descEn: "Quad bike adventure across the dunes.", duration: "4 ساعات", durationEn: "4 hours", price: 40, image: safariImg },
  { id: "tr4", category: "safari", nameAr: "سفاري جيب وعشاء بدوي", nameEn: "Jeep Safari & Bedouin Dinner", descAr: "جولة جيب 4×4 مع غروب الشمس وعشاء بدوي تقليدي.", descEn: "4x4 jeep tour with sunset and traditional Bedouin dinner.", duration: "6 ساعات", durationEn: "6 hours", price: 50, image: safariImg },
  { id: "tr5", category: "historical", nameAr: "جولة الأقصر التاريخية", nameEn: "Luxor Historical Tour", descAr: "وادي الملوك ومعبد الكرنك مع مرشد متخصص.", descEn: "Valley of the Kings and Karnak Temple with an expert guide.", duration: "يوم كامل", durationEn: "Full day", price: 95, image: historicalImg },
  { id: "tr6", category: "historical", nameAr: "أهرامات الجيزة وأبو الهول", nameEn: "Giza Pyramids & Sphinx", descAr: "اكتشف عجائب الدنيا السبع مع رحلة طيران داخلية.", descEn: "Discover the Seven Wonders with a domestic flight included.", duration: "يوم طويل", durationEn: "Long day", price: 220, image: historicalImg },
  { id: "tr7", category: "shopping", nameAr: "تسوق في القصير", nameEn: "El Quseir Shopping", descAr: "زيارة الأسواق المحلية والبازارات التقليدية.", descEn: "Visit local markets and traditional bazaars.", duration: "3 ساعات", durationEn: "3 hours", price: 25, image: shoppingImg },
  { id: "tr8", category: "shopping", nameAr: "بازار بورت غالب", nameEn: "Port Ghalib Bazaar", descAr: "تجربة تسوق راقية على الواجهة البحرية.", descEn: "Premium shopping experience on the marina.", duration: "4 ساعات", durationEn: "4 hours", price: 30, image: shoppingImg }
];
const simPlans = [
  {
    id: "sim1",
    nameAr: "الباقة الأساسية",
    nameEn: "Basic Plan",
    data: "10 GB",
    validityAr: "14 يوم",
    validityEn: "14 days",
    price: 15,
    features: [
      { ar: "إنترنت 4G/5G", en: "4G/5G Internet" },
      { ar: "مكالمات محلية", en: "Local Calls" },
      { ar: "تفعيل فوري", en: "Instant Activation" }
    ]
  },
  {
    id: "sim2",
    nameAr: "الباقة الأكثر مبيعاً",
    nameEn: "Best Seller",
    data: "30 GB",
    validityAr: "30 يوم",
    validityEn: "30 days",
    price: 25,
    popular: true,
    features: [
      { ar: "إنترنت 4G/5G سريع", en: "Fast 4G/5G Internet" },
      { ar: "مكالمات محلية ودولية", en: "Local & International Calls" },
      { ar: "هوت سبوت", en: "Hotspot Enabled" },
      { ar: "تفعيل فوري", en: "Instant Activation" }
    ]
  },
  {
    id: "sim3",
    nameAr: "الباقة الكاملة",
    nameEn: "Unlimited",
    data: "بلا حدود",
    validityAr: "30 يوم",
    validityEn: "30 days",
    price: 45,
    features: [
      { ar: "بيانات بلا حدود", en: "Unlimited Data" },
      { ar: "مكالمات دولية بلا حدود", en: "Unlimited International Calls" },
      { ar: "هوت سبوت بلا حدود", en: "Unlimited Hotspot" },
      { ar: "أولوية الشبكة", en: "Network Priority" }
    ]
  }
];
const tourCategories = [
  { key: "boat", ar: "رحلات بحرية", en: "Boat Trips", image: boatImg },
  { key: "shopping", ar: "رحلات تسوق", en: "Shopping Trips", image: shoppingImg },
  { key: "historical", ar: "رحلات تاريخية", en: "Historical Trips", image: historicalImg },
  { key: "safari", ar: "رحلات سفاري", en: "Safari Trips", image: safariImg }
];
export {
  tourCategories as a,
  simPlans as s,
  tours as t
};
