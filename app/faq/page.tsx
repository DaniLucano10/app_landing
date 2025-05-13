"use client"

import { useState } from "react";

const faqs = [
  {
    question: "¿Qué es LideraTec?",
    answer:
      "LideraTec es una plataforma digital que ayuda a equipos a mejorar su productividad con herramientas colaborativas y gestión eficiente de proyectos.",
  },
  {
    question: "¿Cómo puedo empezar a usar LideraTec?",
    answer:
      "Puedes registrarte gratuitamente y acceder a las funciones básicas. Si necesitas herramientas avanzadas, puedes actualizar a un plan premium.",
  },
  {
    question: "¿LideraTec tiene una versión móvil?",
    answer:
      "Sí, puedes descargar nuestra app en iOS y Android para gestionar tareas y comunicarte con tu equipo desde cualquier lugar.",
  },
  {
    question: "¿LideraTec es compatible con otros software de gestión?",
    answer:
      "Sí, LideraTec ofrece integraciones con herramientas como Slack, Trello, Notion y Google Workspace para mejorar el flujo de trabajo.",
  },
  {
    question: "¿Cuáles son los requisitos para usar LideraTec?",
    answer:
      "Solo necesitas una conexión a internet y un navegador actualizado. También ofrecemos versiones para dispositivos móviles en iOS y Android.",
  },
  {
    question: "¿Cómo funciona la gestión de tareas en LideraTec?",
    answer:
      "Puedes asignar tareas a tu equipo, establecer fechas límite y recibir notificaciones de progreso en tiempo real.",
  },
  {
    question: "¿Ofrecen soporte técnico?",
    answer:
      "Sí, contamos con soporte prioritario en los planes premium y asistencia vía chat en la versión gratuita.",
  },
  {
    question: "¿Puedo probar LideraTec antes de comprar un plan?",
    answer:
      "Sí, ofrecemos una versión gratuita con funciones básicas. También puedes acceder a una prueba gratuita del plan premium por 14 días.",
  },
  {
    question: "¿Cómo protegen la seguridad de mis datos?",
    answer:
      "Usamos cifrado avanzado y políticas estrictas de privacidad para garantizar la seguridad de la información de tu equipo.",
  },
  {
    question: "¿Puedo personalizar la plataforma para mi empresa?",
    answer:
      "Sí, en el plan empresarial puedes adaptar colores, logos y procesos internos para que LideraTec se ajuste a tu marca.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);


  return (
    <section className="max-w-4xl mx-auto p-6 pt-32">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 ">Preguntas Frecuentes</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <button
              className="text-xl font-semibold text-gray-700 w-full text-left"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {faq.question}
            </button>
            {openIndex === index && <p className="text-gray-600 mt-2">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
