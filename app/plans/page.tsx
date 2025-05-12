

const page = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <section className="max-w-5xl mx-auto p-6">
                <h1 className="text-4xl font-bold text-gray-800 mb-6">Nuestros Planes</h1>
                <p className="text-lg text-gray-600 mb-8">
                    En <span className="font-semibold text-blue-600">LideraTec</span>, ofrecemos soluciones flexibles para mejorar la productividad de tu equipo.
                </p>

                {/* Tabla de planes */}
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-gray-300 p-4 text-left">Plan</th>
                                <th className="border border-gray-300 p-4 text-left">Funciones</th>
                                <th className="border border-gray-300 p-4 text-left">Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="border border-gray-300 p-4 font-semibold">Básico</td>
                                <td className="border border-gray-300 p-4">Gestión de tareas, chat en equipo, almacenamiento limitado.</td>
                                <td className="border border-gray-300 p-4">Gratis</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-4 font-semibold">Pro</td>
                                <td className="border border-gray-300 p-4">Todo lo del plan Básico + Integraciones con herramientas externas, reportes avanzados.</td>
                                <td className="border border-gray-300 p-4">$15/mes</td>
                            </tr>
                            <tr>
                                <td className="border border-gray-300 p-4 font-semibold">Empresarial</td>
                                <td className="border border-gray-300 p-4">Funciones premium, soporte prioritario, personalización avanzada.</td>
                                <td className="border border-gray-300 p-4">$45/mes</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <p className="text-lg text-gray-600 mt-8">
                    ¿Listo para optimizar tu equipo? <a href="/register" className="text-blue-600 font-semibold hover:underline">Contáctanos</a> y te asesoramos.
                </p>
            </section>
        </div>
    )
}

export default page
