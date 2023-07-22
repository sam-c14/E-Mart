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
      <div className="py-5 pl-10 xl:pl-20 bg-white shadow-sm border-b mb-3">
        <div className="text-sm">
          Home {">"} Help {">"} <span className="text-pink-800">FAQ</span>
        </div>
        <div>
          <h1 className="font-bold text-4xl">Frequently Asked Questions</h1>
        </div>
      </div>
      <div className="md:px-0 lg:px-10 xl:px-20 mt-5">
        <div className="bg-white rounded-tl-sm rounded-tr-sm flex sm:justify-between flex-wrap px-2 py-10">
          <div className="sm:w-1/2 w-full flex items-center pl-5 font-semibold text-base lg:text-lg text-gray-900">
            <p>
              Get all the answers to the most frequently asked questions (FAQs)
              regarding some of our popular categories which include
              electronics, mobile phones, computers, fashion, beauty products,
              home and kitchen,building and construction materials and a whole
              lot more from premium brands as well as managing your account,
              payment, vouchers and much, much more.
            </p>
          </div>
          <div className="sm:w-1/4 w-full h-1/2">
            <img src={faqs} alt="faqs" />
          </div>
        </div>
        <div className="bg-sky-400 rounded-bl-sm rounded-br-sm sm:mb-10 flex sm:flex-nowrap flex-wrap">
          <div className="border-r w-full sm:w-1/5 sm:pt-10 border-white">
            <ul>
              {questions.faqs.map((faq, index) => (
                <li
                  className="my-5 py-3 sm:py-1 px-5 link text-gray-200 sm:text-justify text-center transition-all sm:border-0 
                border-b border-t border-white hover:text-gray-100"
                  key={index}
                >
                  {faq.question}
                </li>
              ))}
            </ul>
          </div>
          <div className="px-10 w-full sm:w-4/5 pt-4">
            {questions.faqs.map((faq, index) => (
              <div className="faq my-10" key={index}>
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
