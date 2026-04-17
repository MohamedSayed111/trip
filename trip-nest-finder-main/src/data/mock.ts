import transferImg from "@/assets/service-transfer.jpg";
import boatImg from "@/assets/tour-boat.jpg";
import safariImg from "@/assets/tour-safari.jpg";
import historicalImg from "@/assets/tour-historical.jpg";
import shoppingImg from "@/assets/tour-shopping.jpg";
import simImg from "@/assets/service-sim.jpg";

export type TourCategory = "boat" | "safari" | "historical" | "shopping";

export type Transfer = {
  id: string;
  fromAr: string;
  fromEn: string;
  toAr: string;
  toEn: string;
  durationMin: number;
  price: number;
  image: string;
};

export type Tour = {
  id: string;
  category: TourCategory;
  nameAr: string;
  nameEn: string;
  descAr: string;
  descEn: string;
  duration: string;
  durationEn: string;
  price: number;
  image: string;
};

export type SimPlan = {
  id: string;
  nameAr: string;
  nameEn: string;
  data: string;
  validityAr: string;
  validityEn: string;
  price: number;
  features: { ar: string; en: string }[];
  popular?: boolean;
};

export const transfers: Transfer[] = [
  { id: "t1", fromAr: "مطار مرسى علم", fromEn: "Marsa Alam Airport", toAr: "فنادق بورت غالب", toEn: "Port Ghalib Hotels", durationMin: 20, price: 25, image: transferImg },
  { id: "t2", fromAr: "مطار مرسى علم", fromEn: "Marsa Alam Airport", toAr: "فنادق القصير", toEn: "El Quseir Hotels", durationMin: 60, price: 45, image: transferImg },
  { id: "t3", fromAr: "مطار مرسى علم", fromEn: "Marsa Alam Airport", toAr: "فنادق أبو دباب", toEn: "Abu Dabbab Hotels", durationMin: 45, price: 35, image: transferImg },
  { id: "t4", fromAr: "مطار الغردقة", fromEn: "Hurghada Airport", toAr: "مرسى علم", toEn: "Marsa Alam", durationMin: 240, price: 120, image: transferImg },
  { id: "t5", fromAr: "مرسى علم", fromEn: "Marsa Alam", toAr: "الأقصر", toEn: "Luxor", durationMin: 300, price: 150, image: transferImg },
  { id: "t6", fromAr: "مرسى علم", fromEn: "Marsa Alam", toAr: "أسوان", toEn: "Aswan", durationMin: 360, price: 180, image: transferImg },
];

export const tours: Tour[] = [
  { id: "tr1", category: "boat", nameAr: "رحلة جزيرة الحمرا", nameEn: "Hamra Island Boat Trip", descAr: "غوص وسنوركلينج في مياه فيروزية صافية.", descEn: "Snorkeling in crystal turquoise waters.", duration: "8 ساعات", durationEn: "8 hours", price: 55, image: boatImg },
  { id: "tr2", category: "boat", nameAr: "دولفين هاوس", nameEn: "Dolphin House", descAr: "السباحة مع الدلافين البرية في خليجها الطبيعي.", descEn: "Swim with wild dolphins in their natural bay.", duration: "يوم كامل", durationEn: "Full day", price: 75, image: boatImg },
  { id: "tr3", category: "safari", nameAr: "سفاري الصحراء بالكواد", nameEn: "Desert Quad Safari", descAr: "مغامرة بدراجات الكواد بين الكثبان الرملية.", descEn: "Quad bike adventure across the dunes.", duration: "4 ساعات", durationEn: "4 hours", price: 40, image: safariImg },
  { id: "tr4", category: "safari", nameAr: "سفاري جيب وعشاء بدوي", nameEn: "Jeep Safari & Bedouin Dinner", descAr: "جولة جيب 4×4 مع غروب الشمس وعشاء بدوي تقليدي.", descEn: "4x4 jeep tour with sunset and traditional Bedouin dinner.", duration: "6 ساعات", durationEn: "6 hours", price: 50, image: safariImg },
  { id: "tr5", category: "historical", nameAr: "جولة الأقصر التاريخية", nameEn: "Luxor Historical Tour", descAr: "وادي الملوك ومعبد الكرنك مع مرشد متخصص.", descEn: "Valley of the Kings and Karnak Temple with an expert guide.", duration: "يوم كامل", durationEn: "Full day", price: 95, image: historicalImg },
  { id: "tr6", category: "historical", nameAr: "أهرامات الجيزة وأبو الهول", nameEn: "Giza Pyramids & Sphinx", descAr: "اكتشف عجائب الدنيا السبع مع رحلة طيران داخلية.", descEn: "Discover the Seven Wonders with a domestic flight included.", duration: "يوم طويل", durationEn: "Long day", price: 220, image: historicalImg },
  { id: "tr7", category: "shopping", nameAr: "تسوق في القصير", nameEn: "El Quseir Shopping", descAr: "زيارة الأسواق المحلية والبازارات التقليدية.", descEn: "Visit local markets and traditional bazaars.", duration: "3 ساعات", durationEn: "3 hours", price: 25, image: shoppingImg },
  { id: "tr8", category: "shopping", nameAr: "بازار بورت غالب", nameEn: "Port Ghalib Bazaar", descAr: "تجربة تسوق راقية على الواجهة البحرية.", descEn: "Premium shopping experience on the marina.", duration: "4 ساعات", durationEn: "4 hours", price: 30, image: shoppingImg },
];

export const simPlans: SimPlan[] = [
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
      { ar: "تفعيل فوري", en: "Instant Activation" },
    ],
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
      { ar: "تفعيل فوري", en: "Instant Activation" },
    ],
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
      { ar: "أولوية الشبكة", en: "Network Priority" },
    ],
  },
];

export const simImage = simImg;

export const tourCategories: { key: TourCategory; ar: string; en: string; image: string }[] = [
  { key: "boat", ar: "رحلات بحرية", en: "Boat Trips", image: boatImg },
  { key: "shopping", ar: "رحلات تسوق", en: "Shopping Trips", image: shoppingImg },
  { key: "historical", ar: "رحلات تاريخية", en: "Historical Trips", image: historicalImg },
  { key: "safari", ar: "رحلات سفاري", en: "Safari Trips", image: safariImg },
];
