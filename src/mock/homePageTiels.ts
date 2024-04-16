import IHomeTiel from "../interfaces/IHomeTiel";

import image_01 from "../assets/homeTiels/deals_in_pcs.jpg";
import image_02 from "../assets/homeTiels/home.jpg";
import image_03 from "../assets/homeTiels/laptops.jpg";
import image_04 from "../assets/homeTiels/toys_under_25USD.jpg";
import image_05 from "../assets/homeTiels/activity_trackers_smartwaches.jpeg";
import image_06 from "../assets/homeTiels/home_decor_under_50USD.jpeg";
import image_07 from "../assets/homeTiels/players_paradise.jpg";
import image_08 from "../assets/homeTiels/beauty_steals_under_25USD.jpg";
import image_09 from "../assets/homeTiels/kitchen.jpeg";
import image_10 from "../assets/homeTiels/jeans.jpg";

import { Categories } from "../enums/Categories";

export const tiels: IHomeTiel[] = [
  {
    id: "tiel_01",
    title: "Deals in PCs",
    image: image_01,
    linkName: "Shop now",
    link: `/products/${Categories.COMPUTERS}`,
  },
  {
    id: "tiel_02",
    title: "Home",
    image: image_02,
    linkName: "See more",
    link: `/products/${Categories.HOME}`,
  },
  {
    id: "tiel_03",
    title: "Laptops",
    image: image_03,
    linkName: "Shop now",
    link: `/products/${Categories.LAPTOPS}`,
  },
  {
    id: "tiel_04",
    title: "Toys under $25",
    image: image_04,
    linkName: "See more",
    link: `/products/${Categories.TOYS}`,
  },
  {
    id: "tiel_05",
    title: "Activity Trackers and smartwatches",
    image: image_05,
    linkName: "Shop now",
    link: `/products/${Categories.SMARTWATCHES}`,
  },
  {
    id: "tiel_06",
    title: "Home decor under $50",
    image: image_06,
    linkName: "See more",
    link: `/products/${Categories.DECOR}`,
  },
  {
    id: "tiel_07",
    title: "Players paradise",
    image: image_07,
    linkName: "See more",
    link: `/products/${Categories.GAMING}`,
  },
  {
    id: "tiel_08",
    title: "Beauty steals under $25",
    image: image_08,
    linkName: "Shop now",
    link: `/products/${Categories.BEAUTY}`,
  },
  {
    id: "tiel_09",
    title: "Kitchen",
    image: image_09,
    linkName: "See more",
    link: `/products/${Categories.KITCHEN}`,
  },
  {
    id: "tiel_10",
    title: "Jeans",
    image: image_10,
    linkName: "See more",
    link: `/products/${Categories.CLOTHES}`,
  },
];
