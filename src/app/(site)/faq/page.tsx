"use client";

import { useState } from "react";
import { faqCategories, supportSection, contactSection } from "@/lib/faq";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function FaqPage() {
  const [activeTab, setActiveTab] = useState("security");

  const activeCategory = faqCategories.find((cat) => cat.id === activeTab);

  return (
    <div className="min-h-screen bg-[#FCFCF9]">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#186E68]/10 to-transparent pt-20 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img
              src="/icons/question.svg"
              alt="Question mark icon"
              className="w-12 h-12"
            />
            <h1 className="text-4xl md:text-5xl font-bold text-[#186E68]">
              FAQ
            </h1>
          </div>
          <p className="text-lg md:text-xl text-[#4F4949] font-semibold tracking-wider">
            ANSWERS TO YOUR QUESTIONS
          </p>
        </div>
      </section>

      {/* Tabbed Navigation */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {faqCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={cn(
                "px-6 py-3 rounded-full font-semibold transition-all duration-200",
                activeTab === category.id
                  ? "bg-[#186E68] text-white shadow-lg"
                  : "bg-white text-[#4F4949] border border-[#8BA39C] hover:border-[#186E68] hover:text-[#186E68]"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Questions Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {activeCategory?.questions.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200 border border-[#E5E5E0]"
            >
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={faq.icon}
                  alt=""
                  className="w-8 h-8 flex-shrink-0 mt-1"
                />
                <h3 className="text-lg font-bold text-[#186E68]">
                  {faq.question}
                </h3>
              </div>
              <p className="text-[#4F4949] leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Support Section */}
      <section className="bg-gradient-to-b from-[#186E68]/5 to-[#186E68]/10 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <span className="text-6xl">💬</span>
          </div>
          <h2 className="text-3xl font-bold text-[#186E68] mb-4">
            {supportSection.heading}
          </h2>
          <p className="text-xl font-semibold text-[#4F4949] mb-6">
            {supportSection.cta}
          </p>
          <p className="text-[#4F4949] leading-relaxed max-w-2xl mx-auto">
            {supportSection.description}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl p-10 shadow-lg border border-[#E5E5E0] text-center">
          <div className="mb-6">
            <span className="text-6xl">📧</span>
          </div>
          <h2 className="text-2xl font-bold text-[#186E68] mb-4">
            {contactSection.title}
          </h2>
          <p className="text-[#4F4949] leading-relaxed mb-8 max-w-2xl mx-auto">
            {contactSection.description}
          </p>
          <Link
            href={contactSection.link}
            className="inline-block bg-[#186E68] hover:bg-[#145a55] text-white font-semibold px-8 py-4 rounded-full transition-colors cursor-pointer"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
