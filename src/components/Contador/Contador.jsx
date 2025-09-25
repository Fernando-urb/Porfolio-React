

import { animate, motion, useMotionValue, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react"; // 👈 Agregamos useRef y useState

export default function Contador({
  to = 25,
  from = 0,
  duration = 3,
  ease = "easeOut",
  className = "mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-600",
}) {
  // 1. Estados y Referencia
  const count = useMotionValue(from);
  const rounded = useTransform(count, Math.round);
  const componentRef = useRef(null); // Referencia al elemento DOM
  const [hasAnimated, setHasAnimated] = useState(false); // Bandera para asegurar que solo se anime una vez

  // 2. Lógica del Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Si el elemento es visible Y la animación NO se ha ejecutado aún
        if (entry.isIntersecting && !hasAnimated) {
          // 3. Ejecutar la Animación
          const controls = animate(count, to, { duration, ease });
          setHasAnimated(true); // Marcar como animado
          observer.unobserve(entry.target); // Dejar de observar después de la animación

          // Función de limpieza de la librería motion
          return () => controls.stop();
        }
      },
      {
        root: null, // El viewport es la raíz
        rootMargin: "0px",
        threshold: 0.5, // Ejecutar cuando el 50% del componente esté visible
      }
    );

    // Comenzar a observar el componente
    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    // Función de limpieza del Intersection Observer
    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, [count, to, duration, ease, hasAnimated]); // Dependencias

  // 4. Adjuntar la Referencia
  return (
    <motion.p ref={componentRef} className={className}>
      {rounded}
    </motion.p>
  );
}

{/* <Contador
  from={50}
  to={120}
  duration={4}
  ease={[0.22, 0.61, 0.36, 1]} 
  className="text-3xl font-semibold text-emerald-600"
/> */}

// usar con porcentaje 

{/* <p className="text-5xl font-bold text-blue-600">
  <Contador to={98} duration={2.5} className="inline text-5xl font-bold text-blue-600" />%
</p> */}