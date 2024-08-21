// import icons
import { FaFacebookF } from "react-icons/fa";
import { SiGrab } from "react-icons/si";
import { FaRegCircleCheck } from "react-icons/fa6";
import { AiFillHeart } from "react-icons/ai";
import { FaRegGrinSquintTears } from "react-icons/fa";
import { FaRegGrinTears } from "react-icons/fa";

// import logo grab
import grabFoodLogo from "../../public/img/header/GrabFood_(2016).svg";
// import logo Grab-thumb-up-logo
import grabThumbUpLogo from "../../public/img/header/Grab-thumb-up-logo.png";
// import logo facebook
import facebookLogo from "../../public/img/header/facebook.svg";

// import image
import AboutImg from "../../public/img/about/store-front-removebg-2.png";
import ModelWhiteImg from "../../public/img/model-white.png";
import ModelBlackImg from "../../public/img/model-black.png";
import MenuImg1 from "../../public/img/menu/1.jpg";
import MenuImg2 from "../../public/img/menu/2.jpg";
import MenuImg3 from "../../public/img/menu/3.jpg";
import MenuImg4 from "../../public/img/menu/4.jpg";

import Avatar1 from "../../public/img/reviews/avatar1.png";
import Avatar2 from "../../public/img/reviews/avatar2.png";
import Avatar3 from "../../public/img/reviews/avatar3.png";
import Avatar4 from "../../public/img/reviews/avatar4.png";
import Avatar5 from "../../public/img/reviews/avatar5.png";
import Avatar6 from "../../public/img/reviews/avatar6.png";
import Avatar7 from "../../public/img/reviews/avatar7.png";
import Avatar8 from "../../public/img/reviews/avatar8.png";
import Avatar9 from "../../public/img/reviews/avatar9.png";
import Avatar10 from "../../public/img/reviews/avatar10.png";
import Avatar11 from "../../public/img/reviews/avatar11.png";
import Avatar12 from "../../public/img/reviews/avatar12.png";
import Avatar13 from "../../public/img/reviews/avatar13.png";
import Avatar14 from "../../public/img/reviews/avatar14.png";
import Avatar15 from "../../public/img/reviews/avatar15.png";
import Avatar16 from "../../public/img/reviews/avatar16.png";
import Avatar17 from "../../public/img/reviews/avatar17.png";
import Avatar18 from "../../public/img/reviews/avatar18.png";
import Avatar19 from "../../public/img/reviews/avatar19.png";

import eventBantanHospital from "../../public/img/events/event-bantan-hospital.png";
import eventTummasartHotel from "../../public/img/events/event-tummasart-hotel.png";
import eventSiamCountryClubRollingHall from "../../public/img/events/event-siam-country-club-rolling-hall.png";
import eventSiamCountryClubWaterside from "../../public/img/events/Siam Country Club Waterside.jpg";

export const eventData = {
  title: "การจัดส่งนอกสถานที่",
  subtitle: "",
  btnText: "https://m.me/100462874827002",
  slider: [
    {
      locationName: "โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านตาลหมัน",
      website: "http://gishealth.moph.go.th/pcu/admin/pcu.php?code=01845",
      image: eventBantanHospital,
      alt: "สั่งอาหาร ข้าวกล่อง อาหารกล่อง ลุงตุ่มข้าวมันไก่ - ข้าวมันไก่ โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านตาลหมัน",
      title:
        "สั่งอาหาร ข้าวกล่อง อาหารกล่อง ลุงตุ่มข้าวมันไก่ - ข้าวมันไก่ โรงพยาบาลส่งเสริมสุขภาพตำบลบ้านตาลหมัน",
      amount: "75 กล่อง",
      desc: "ลุงตุ่มข้าวมันไก่ขอบคุณสำหรับ50ออเดอร์จากโรงพยาบาลส่งเสริมสุขภาพตำบลบ้านตาลหมันและ25ออเดอร์จากบ้าน สจ.แมน ด้วยนะคะ",
    },
    {
      locationName: "โรงแรมธรรมศาสตร์",
      website: "https://www.ecohotel.in.th/",
      image: eventTummasartHotel,
      alt: "สั่งอาหาร ข้าวกล่อง อาหารกล่อง ลุงตุ่มข้าวมันไก่ - ข้าวมันไก่ โรงแรมธรรมศาสตร์",
      title:
        "สั่งอาหาร ข้าวกล่อง อาหารกล่อง ลุงตุ่มข้าวมันไก่ - ข้าวมันไก่ โรงแรมธรรมศาสตร์",
      amount: "45 กล่อง",
      desc: "ขอบคุณโรงแรมธรรมศาสตร์ด้วยนะคะ สำหรับออเดอร์เช้านี้45กล่อง 😊",
    },
    {
      locationName: "Siam Country Club Rolling Hill",
      website: "https://siamcountryclub.com/rolling-hills/",
      image: eventSiamCountryClubRollingHall,
      alt: "สั่งอาหาร ข้าวกล่อง อาหารกล่อง ลุงตุ่มข้าวมันไก่ - ข้าวมันไก่ Siam Country Club Rolling Hill",
      title:
        "สั่งอาหาร ข้าวกล่อง อาหารกล่อง ลุงตุ่มข้าวมันไก่ - ข้าวมันไก่ Siam Country Club Rolling Hill",
      amount: "115 กล่อง",
      desc: "ขอบคุณออเดอร์ของ Siam Country Club Rolling Hill\nจัดส่งเสร็จเป็นที่เรียบร้อย 115 กล่อง 🙏🏻😊💕\n🙏🏻ขอบคุณลูกค้าที่น่ารักทุกคนเลยนะคะ🙏🏻",
    },
    {
      locationName: "Siam Country Club Waterside",
      website: "https://siamcountryclub.com/waterside/",
      image: eventSiamCountryClubWaterside,
      alt: "สั่งอาหาร ข้าวกล่อง อาหารกล่อง ลุงตุ่มข้าวมันไก่ - ข้าวมันไก่ Siam Country Club Waterside",
      title:
        "สั่งอาหาร ข้าวกล่อง อาหารกล่อง ลุงตุ่มข้าวมันไก่ - ข้าวมันไก่ Siam Country Club Waterside",
      amount: "120 กล่อง",
      desc: "ขอบพระคุณ  Siam Country Club Waterside มากๆนะคะ สำหรับข้าวมันไก่ผสม120กล่อง ขอบพระคุณที่เปิดโอกาสเเละให้โอกาสให้ลุงตุ่มได้ให้บริการนะคะ🙏🏻💕",
    },
  ],
};

export const customerReviewData = {
  title: "รีวิวจากลูกค้า",
  subtitle: "ลูกค้าที่พึงพอใจมากกว่า 1200+ (อ้างอิงจาก App.grabFood)",
  modelImg: ModelWhiteImg,
  slider: [
    {
      message:
        "ไก่ทอดอร่อยมากครับ",
      image: Avatar19,
      name: "suphakit",
      period: "2 วันที่ผ่านมา",
      rating: 5,
    },
    {
      message:
        "ข้าวมันไก่อร่อยค่ะ ให้เยอะ สั่งเครื่องดื่มแยกถุงให้ อย่างดี ประทับใจค่ะ",
      image: Avatar19,
      name: "supap f.",
      period: "นานกว่า 96 วันที่ผ่านมา",
      rating: 5,
    },
    {
      message: "อาหารรสชาติอร่อยแถมยังให้เยอะมากๆ",
      image: Avatar18,
      name: "ภาวนา ปัดถาวะโร",
      period: "นานกว่า 96 วันที่ผ่านมา",
      rating: 5,
    },
    {
      message: "อร่อยมากกกก ขอตับไปให้มาเยอะมาก 👏",
      image: Avatar17,
      name: "ขนัญชิดา บริมาตุ",
      period: "นานกว่า 110 วันที่ผ่านมา",
      rating: 5,
    },
    {
      message: "อร่อยค่ะ น้ำจิ้มรสชาติดี โอเลี้ยงอร่อย",
      image: Avatar19,
      name: "Sophida C.",
      period: "นานกว่า 64 วันที่ผ่านมา",
      rating: 5,
    },
    {
      message: "ข้าวมันไก่ให้เยอะมาก น้ำจิ้มอร่อย กินคนเดียวยังไม่หมดเลยค่าา",
      image: Avatar16,
      name: "mint",
      period: "นานกว่า 64 วันที่ผ่านมา",
      rating: 5,
    },
    {
      message:
        "อร่อยมากค่ะ ไก่ต้มเนื้อไม่แห้ง น้ำซุปก็อร่อยมาก สั่งโอเลี้ยงยกล้อมาด้วย อร่อยมากค่ะ จะสั่งอีกแน่ๆค่ะ",
      image: Avatar18,
      name: "ภิญญพัฒน์ เปรมสิริพงษ์กุล",
      period: "นานกว่า 64 วันที่ผ่านมา",
      rating: 5,
    },
    {
      message:
        "อร่อยมากเลยครับ ไม่หวงของเลย เราก็ว้าวุ่นเลยทีนี้ ตื่นมาสั่งทันบ้างไม่ทันบ้าง",
      image: Avatar15,
      name: "พิธา",
      period: "นานกว่า 51 วันที่ผ่านมา",
      rating: 5,
    },
    {
      message: "อร่อยมากค่ะ ร้านใส่ใจอ่านรายละเอียดมากค่ะ",
      image: Avatar14,
      name: "Lalita P.",
      period: "นานกว่า 51 วันที่ผ่านมา",
      rating: 5,
    },
    {
      message: "อร่อยมากๆครับ",
      image: Avatar12,
      name: "ต้าร์",
      period: "นานกว่า 54 วันที่ผ่านมา",
      rating: 5,
    },
    {
      message: "อร่อย ให้เยอะ สะอาด ไม่ผิดหวังเลยค่ะ 👍👍",
      image: Avatar11,
      name: "Grap N.",
      period: "นานกว่า 47 วันที่ผ่านมา",
      rating: 5,
    },
    {
      message: "อร่อยครับ",
      image: Avatar12,
      name: "ต้าร์",
      period: "นานกว่า 49 วันที่ผ่านมา",
      rating: 5,
    },
    {
      message: "อร่อยครับ สั่งกินแทบทุกวัน",
      image: Avatar10,
      name: "วรวุฒิ พุ่มพวง",
      period: "นานกว่า 50 วันที่ผ่านมา",
      rating: 5,
    },
    {
      message: "อร่อย ได้เยอะ 5 ดาวไปเลยค่ะ",
      image: Avatar9,
      name: "Kunnika b.",
      period: "นานกว่า 39 วันที่ผ่านมา",
      rating: 5,
    },
    {
      message: "อิ่ม อร่อย ไม่เคยเปลี่ยนเลย♥️♥️",
      image: Avatar8,
      name: "จุฬารัตน์",
      period: "นานกว่า 45 วันที่ผ่านมา",
      rating: 5,
    },
    {
      message: "อร่อย ได้เยอะ ส่งฟรี ทั้งปี คุ้มๆๆๆ",
      image: Avatar7,
      name: "Tawatchai. Jaiprom",
      period: "นานกว่า 46 วันที่ผ่านมา",
      rating: 5,
    },
    {
      message: "อร่อยมากกกกกค่ะ",
      image: Avatar7,
      name: "Thanaphat P.",
      period: "นานกว่า 29 วันที่ผ่านมา",
      rating: 5,
    },
    {
      message: "รสชาติอร่อย ให้เยอะคุ้มเกินคุ้ม ไว้ จะกดหัวใจเป็นร้านโปรดค่ะ",
      image: Avatar6,
      name: "ลลิา ดาวแจ่ม",
      period: "นานกว่า 36 วันที่ผ่านมา",
      rating: 5,
    },
    {
      message: "อร่อย สะอาด ได้เยอะ ตรงปกไม่จกตา สั่งครั้งแรกประทับใจ",
      image: Avatar5,
      name: "ยูริ",
      period: "นานกว่า 37 วันที่ผ่านมา",
      rating: 5,
    },
    {
      message: "ที่ร้านให้เยอะมากคะ ข้าวมันไก่อร่อยคะ",
      image: Avatar19,
      name: "supap f.",
      period: "นานกว่า 25 วันที่ผ่านมา",
      rating: 5,
    },
    {
      message: "อิ่มจุกทุกมื้อที่สั่งจริงๆ😍 แม่ค้าก็น่ารัก",
      image: Avatar8,
      name: "จุฬารัตน์",
      period: "นานกว่า 28 วันที่ผ่านมา",
      rating: 5,
    },
    {
      message: "ถูกใจ อร่อยที่สุด ในพัทยาหายากมาราคาและคุณภาพขนาดนี้❤️❤️",
      image: Avatar9,
      name: "kancha.",
      period: "นานกว่า 28 วันที่ผ่านมา",
      rating: 5,
    },
    {
      message: "อร่อยมากๆค่ะ ให้เยอะตลอด อิ่มจุก",
      image: Avatar8,
      name: "จุฬารัตน์",
      period: "นานกว่า 14 วันที่ผ่านมา",
      rating: 5,
    },
    {
      message: "อร่อย",
      image: Avatar7,
      name: "Tawatchai. jaiprom",
      period: "นานกว่า 17 วันที่ผ่านมา",
      rating: 5,
    },
    {
      message: "อร่อย ใส่ใจ❤️🙏",
      image: Avatar7,
      name: "สอง รวิษฎา",
      period: "นานกว่า 24 วันที่ผ่านมา",
      rating: 5,
    },
    {
      message: "ชอบอร่อยมากสั่งประจำ",
      image: Avatar3,
      name: "ธนพร",
      period: "นานกว่า 10 วันที่ผ่านมา",
      rating: 5,
    },
    {
      message:
        "สั่งครั้งแรกสั่งตามเพื่อนรีวิวเลย สั่งข้าวมันไก่ผสม พิเศษมา กับน้ำอันชัญมะนาว ข้าวมันไก่คืออร่อยมากจริงๆ😋...",
      image: Avatar2,
      name: "ชมพู่",
      period: "นานกว่า 11 วันที่ผ่านมา",
      rating: 5,
    },
    {
      message: "อร่อยมากๆๆ ปริมาณดีค่ะ พี่ที่ร้านพูดจาเพราะมาก",
      image: Avatar1,
      name: "Chaniporn C.",
      period: "นานกว่า 10 วันที่ผ่านมา",
      rating: 5,
    },
  ],
};

export const menuData = {
  title: "เมนู",
  subtitle: "ตรวจสอบเมนูอร่อยของเรา",
  modelImg: ModelWhiteImg,
  btnText: "สั่งเลยที่ Grab Food",
  btnURL:
    "https://food.grab.com/th/th/restaurant/%E0%B8%A5%E0%B8%B8%E0%B8%87%E0%B8%95%E0%B8%B8%E0%B9%88%E0%B8%A1%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%A1%E0%B8%B1%E0%B8%99%E0%B9%84%E0%B8%81%E0%B9%88-loong-toom-hainanese-chicken-rice-%E0%B8%96-%E0%B8%8A%E0%B8%B1%E0%B8%A2%E0%B8%9E%E0%B8%A3%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5-chaiyaporn-vidhi-road-delivery/3-CZDTGBM2TETCNJ?",

  menuItems: [
    {
      image: MenuImg1,
      image_alt:
        "ลุงตุ่มข้าวมันไก่ (Loong Toom Hainanese chicken rice) - ถ.ชัยพรวิธี (Chaiyaporn Vidhi Road) : ข้าวมันไก่ต้ม",
      image_title:
        "ลุงตุ่มข้าวมันไก่ (Loong Toom Hainanese chicken rice) - ถ.ชัยพรวิธี (Chaiyaporn Vidhi Road) : ข้าวมันไก่ต้ม",
      name: "ข้าวมันไก่ต้ม",
      price: "฿ 50",
      description: "ข้าวนุ่มๆ ไก่ต้มแน่นๆ ซดน้ำซุปร้อนๆ",
    },
    {
      image: MenuImg2,
      name: "ข้าวมันไก่ทอด",
      image_alt:
        "ลุงตุ่มข้าวมันไก่ (Loong Toom Hainanese chicken rice) - ถ.ชัยพรวิธี (Chaiyaporn Vidhi Road) : ข้าวมันไก่ทอด",
      image_title:
        "ลุงตุ่มข้าวมันไก่ (Loong Toom Hainanese chicken rice) - ถ.ชัยพรวิธี (Chaiyaporn Vidhi Road) : ข้าวมันไก่ทอด",
      price: "฿ 50",
      description: "ข้าวนุ่มๆ ไก่ทอดแน่นๆ ซดน้ำซุปร้อนๆ",
    },
    {
      image: MenuImg3,
      name: "ข้าวมันไก่ผสม",
      image_alt:
        "ลุงตุ่มข้าวมันไก่ (Loong Toom Hainanese chicken rice) - ถ.ชัยพรวิธี (Chaiyaporn Vidhi Road) : ข้าวมันไก่ผสม",
      image_title:
        "ลุงตุ่มข้าวมันไก่ (Loong Toom Hainanese chicken rice) - ถ.ชัยพรวิธี (Chaiyaporn Vidhi Road) : ข้าวมันไก่ผสม",
      price: "฿ 50",
      description: "ข้าวนุ่มๆ ไก่ต้มแน่นๆ+ไก่ทอดแน่นๆ",
    },
    {
      image: MenuImg4,
      name: "ไก่สับล้วน",
      image_alt:
        "ลุงตุ่มข้าวมันไก่ (Loong Toom Hainanese chicken rice) - ถ.ชัยพรวิธี (Chaiyaporn Vidhi Road) : ไก่สับล้วน",
      image_title:
        "ลุงตุ่มข้าวมันไก่ (Loong Toom Hainanese chicken rice) - ถ.ชัยพรวิธี (Chaiyaporn Vidhi Road) : ไก่สับล้วน",
      price: "฿ 80",
      description: "ไก่สับล้วน",
    },
  ],
};

export const heroData = {
  pretitle: "เปิดให้บริการทุกวัน: 6 A.M. - 8 P.M.",
  title: "ลุงตุ่มข้าวมันไก่",
  subtitle: "ข้าวนุ่ม ไก่นิ่ม พร้อมน้ำจิ้มสูตรเด็ด",
  btnText: "เมนูของเรา",
};

export const navData = [
  { href: "#hero", name: "หน้าหลัก" },
  { href: "#about", name: "เกี่ยวกับฉัน" },
  { href: "#menu", name: "เมนู" },
  { href: "#reviews", name: "เรตติ้งและรีวิว" },
  { href: "#events", name: "จัดส่งนอกสถานที่" },
];

export const socialData = [
  {
    href: "https://www.facebook.com/LungtumKhaomunkai/",
    title: "ลุงตุ่มข้าวมันไก่ | Facebook",
    icon: <FaFacebookF />,
  },
  // {
  //   href: "https://food.grab.com/th/th/restaurant/%E0%B8%A5%E0%B8%B8%E0%B8%87%E0%B8%95%E0%B8%B8%E0%B9%88%E0%B8%A1%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%A1%E0%B8%B1%E0%B8%99%E0%B9%84%E0%B8%81%E0%B9%88-loong-toom-hainanese-chicken-rice-%E0%B8%96-%E0%B8%8A%E0%B8%B1%E0%B8%A2%E0%B8%9E%E0%B8%A3%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5-chaiyaporn-vidhi-road-delivery/3-CZDTGBM2TETCNJ?",
  //   title: "ลุงตุ่มข้าวมันไก่ | อร่อยยกนิ้ว | Grab-thumb-up",
  //   icon: grabThumbUpLogo,
  // },
  {
    href: "https://food.grab.com/th/th/restaurant/%E0%B8%A5%E0%B8%B8%E0%B8%87%E0%B8%95%E0%B8%B8%E0%B9%88%E0%B8%A1%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%A1%E0%B8%B1%E0%B8%99%E0%B9%84%E0%B8%81%E0%B9%88-loong-toom-hainanese-chicken-rice-%E0%B8%96-%E0%B8%8A%E0%B8%B1%E0%B8%A2%E0%B8%9E%E0%B8%A3%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5-chaiyaporn-vidhi-road-delivery/3-CZDTGBM2TETCNJ?",
    title: "ลุงตุ่มข้าวมันไก่ | GrabFood",
    icon: <SiGrab />,
  },
];

export const aboutData = {
  pretitle:
    "ต้องขอขอบคุณตลอด 4 ปีที่ผ่านมาด้วยนะคะ ทั้งลูกค้าหน้าร้าน และลูกค้าเดลิเวอรี่",
  title: "ร้านลุงตุ่มข้าวมันไก่",
  subtitle: [
    {
      text: "ร้านเราเป็นร้านเล็กๆ ที่อัดแน่นไปด้วยของคุณภาพของวัตถุดิบทั้งนั้น ",
    },
    {
      text: "แม่ค้าขอขอบคุณทุกคำติชม ออเดอร์ไหนที่แม่ค้าผิดพลาดไป แสดงว่าแม่ค้านอนน้อยค่ะ",
    },
    {
      text: "กราบขอบพระคุณลูกค้าทุกคนเลยนะคะ",
    },
  ],
  btnText: "Grab food",
  btnURL:
    "https://food.grab.com/th/th/restaurant/%E0%B8%A5%E0%B8%B8%E0%B8%87%E0%B8%95%E0%B8%B8%E0%B9%88%E0%B8%A1%E0%B8%82%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%A1%E0%B8%B1%E0%B8%99%E0%B9%84%E0%B8%81%E0%B9%88-loong-toom-hainanese-chicken-rice-%E0%B8%96-%E0%B8%8A%E0%B8%B1%E0%B8%A2%E0%B8%9E%E0%B8%A3%E0%B8%A7%E0%B8%B4%E0%B8%98%E0%B8%B5-chaiyaporn-vidhi-road-delivery/3-CZDTGBM2TETCNJ?",
  AboutImg: AboutImg,
};
