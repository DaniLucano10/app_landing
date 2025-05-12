"use client"

const AboutPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <section className="max-w-4xl mx-auto p-6">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">Sobre Nosotros</h1>

                <p className="text-lg text-gray-600">
                    En <span className="font-semibold text-black">LideraTec</span>, creemos en el poder de la productividad y la tecnología para transformar espacios de trabajo. Nuestra plataforma ofrece herramientas intuitivas diseñadas para optimizar la colaboración y gestión de proyectos.
                </p>

                <h2 className="text-2xl font-semibold text-gray-700 mt-8">Nuestra Misión</h2>
                <p className="text-gray-600">
                    Facilitar el trabajo diario a equipos y empresas mediante soluciones digitales inteligentes que maximizan la eficiencia y la comunicación.
                </p>

                <h2 className="text-2xl font-semibold text-gray-700 mt-8">Nuestra Visión</h2>
                <p className="text-gray-600">
                    Ser la plataforma líder en productividad empresarial, conectando equipos y potenciando la innovación en el trabajo remoto y presencial.
                </p>

                <h2 className="text-2xl font-semibold text-gray-700 mt-8">Nuestros Valores</h2>
                <ul className="list-disc pl-6 text-gray-600">
                    <li><strong>Innovación:</strong> Evolucionamos constantemente para ofrecer herramientas avanzadas.</li>
                    <li><strong>Colaboración:</strong> Creemos en el trabajo en equipo como clave del éxito.</li>
                    <li><strong>Eficiencia:</strong> Optimizamos cada proceso para mejorar la productividad.</li>
                </ul>

            </section>
        </div>
    )
}

export default AboutPage
