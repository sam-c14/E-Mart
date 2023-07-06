import React from "react";
import faqs from "../../assets/images/question-mark-g2d25c60df_640.jpg";
import questions from "../../assets/data/faqs.json";

const Faqs = () => {
  const links = document.querySelectorAll(".link") as NodeListOf<HTMLElement>;
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      const currentLink = document.querySelector(".active") as HTMLElement;
      currentLink?.classList.remove("active");
      currentLink?.classList.add("hover:text-gray-100");
      link.classList.add("active");
      link.classList.remove("hover:text-gray-100");
    });
  });
  return (
    <div>
      <div className="py-5 pl-20 bg-white shadow-sm border-b mb-3">
        <div className="text-sm">
          Home {">"} Help {">"} <span className="text-pink-800">FAQ</span>
        </div>
        <div>
          <h1 className="font-bold text-4xl">Frequently Asked Questions</h1>
        </div>
      </div>
      <div className="px-20 mt-5">
        <div className="bg-white rounded-tl-sm rounded-tr-sm flex justify-between px-2 py-10">
          <div className="w-1/2 flex items-center pl-5 font-semibold text-lg text-gray-900">
            <p>
              Get all the answers to the most frequently asked questions (FAQs)
              regarding some of our popular categories which include
              electronics, mobile phones, computers, fashion, beauty products,
              home and kitchen,building and construction materials and a whole
              lot more from premium brands as well as managing your account,
              payment, vouchers and much, much more.
            </p>
          </div>
          <div className="w-1/4 h-1/2">
            <img src={faqs} alt="faqs" />
          </div>
        </div>
        <div className="bg-sky-400 rounded-bl-sm rounded-br-sm mb-10 flex">
          <div className="border-r w-1/5 pt-10 border-white">
            <ul>
              {questions.faqs.map((faq) => (
                <li className="my-5 px-5 link text-gray-200 transition-all hover:text-gray-100">
                  {faq.question}
                </li>
              ))}
            </ul>
          </div>
          <div className="px-10 w-4/5 pt-4">
            {questions.faqs.map((faq) => (
              <div className="faq my-10">
                <h2 className="text-3xl text-white font-bold w-4/5">
                  {faq.question}
                </h2>
                <p className="my-5 text-gray-100">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
