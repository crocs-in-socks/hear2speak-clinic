
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "What should I expect during my first appointment?",
      answer: "During your first appointment, we will conduct a thorough assessment based on your specific needs. For hearing concerns, this typically involves a comprehensive hearing evaluation. For speech or language concerns, we'll perform an initial assessment to understand your specific challenges. We'll discuss your medical history, current symptoms, and goals for treatment. At the end of the appointment, we'll explain our findings and recommend a personalized treatment plan."
    },
    {
      question: "How often do hearing aids need to be replaced?",
      answer: "On average, hearing aids last about 5-7 years. However, this can vary depending on the model, how well they're maintained, and technological advancements. Regular maintenance can extend their lifespan. We recommend annual checkups to ensure your hearing aids are functioning optimally and meeting your hearing needs."
    },
    {
      question: "How long does a typical speech therapy session last?",
      answer: "Most speech therapy sessions last between 30-40 minutes, depending on the individual's needs and age. For children, sessions might be shorter to accommodate their attention span. The frequency of sessions is personalized based on your therapist's recommendation and can range from once a week to several times a week."
    },
    {
      question: "Can hearing loss be prevented?",
      answer: "While some causes of hearing loss cannot be prevented (such as genetic factors or aging), noise-induced hearing loss can be prevented by protecting your ears from loud sounds. We recommend using ear protection in noisy environments, keeping volume at a reasonable level when using headphones, and getting regular hearing check-ups to monitor your hearing health."
    },
    {
      question: "How do I know if my child needs speech therapy?",
      answer: "Signs that may indicate your child could benefit from speech therapy include: not babbling by 9 months, not speaking first words by 15 months, not combining words by 24 months, difficult-to-understand speech after age 3, stuttering that persists for more than 6 months, or difficulty following directions. If you're concerned about your child's speech or language development, we recommend scheduling an evaluation with our speech-language pathologists."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Find answers to common questions about our services and treatments
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium text-clinic-blue-dark hover:text-clinic-teal">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-clinic-grey">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
