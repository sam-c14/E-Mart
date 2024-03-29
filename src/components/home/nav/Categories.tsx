import { FaBars } from "react-icons/fa";

export const categories: Array<string> = [
  "All Categories",
  "Computers and Accessories",
  "Phones and Tablets",
  "Electronics",
  "Konga Fashion",
  "Home and Kitchen",
  "Baby, Kids and Toys",
  "Other Categories",
];
const Categories = () => {
  return (
    <div className="sm:block hidden">
      <div className="bg-pink-800">
        <ul className="w-full over md:overflow-auto flex lg:gap-2 gap-14">
          {categories.map((category: string, index) =>
            category !== "All Categories" ? (
              <li
                key={index}
                className="flex lg:w-1/7 justify-center items-center py-3 px-1 text-white hover:bg-white md:w- hover:text-black bg-transparent transition-5 whitespace-nowrap md:text-xs lg:text-sm"
              >
                {category}
              </li>
            ) : (
              <li
                key={index}
                className="flex lg:w-1/7 justify-center gap-2 items-center py-3 px-1 text-white hover:bg-white hover:text-black bg-transparent md:text-xs lg:text-sm whitespace-nowrap font-bold transition-5"
              >
                {category} <FaBars className="font-bold text-base" />
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
