// ============================================
// 💝 PERSONALIZA TU PÁGINA DE SAN VALENTÍN AQUÍ 💝
// ============================================

const CONFIG = {
    // El nombre de tu persona especial que aparecerá en el título
    // Ejemplo: "Andrea", "María", "Juan"
    valentineName: "Andrea",

    // El título que aparecerá en la pestaña del navegador
    // ¡Puedes usar emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "¿Quieres ser mi Valentín? 💝",

    // Emojis flotando que aparecerán en el fondo
    // Encuentra más emojis aquí: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Emojis de corazones
        bears: ['🧸', '🐻']                     // Emojis de ositos tiernos
    },

    // Preguntas y respuestas
    // Personaliza cada pregunta y sus posibles respuestas
    questions: {
        first: {
            text: "¿Te gusto?",                                // Primera pregunta
            yesBtn: "Sí",                                       // Texto del botón "Sí"
            noBtn: "No",                                        // Texto del botón "No"
            secretAnswer: "¡No me gustas, te amo! ❤️"           // Mensaje secreto al pasar el cursor
        },
        second: {
            text: "¿Cuánto me amas?",                           // Para el medidor de amor
            startText: "¡Tanto!",                               // Texto antes del porcentaje
            nextBtn: "Siguiente ❤️"                             // Texto del botón para continuar
        },
        third: {
            text: "¿Quieres ser mi Valentín el 14 de febrero de 2025? 🌹",  // ¡La gran pregunta!
            yesBtn: "¡Sí!",                                                 // Texto del botón "Sí"
            noBtn: "No"                                                     // Texto del botón "No"
        }
    },

    // Mensajes que aparecen según la cantidad en el medidor de amor
    loveMessages: {
        extreme: "WOOOOW ¿Me amas tanto?? 🥰🚀💝",  // Cuando pasan de 5000%
        high: "¡Hasta el infinito y más allá! 🚀💝", // Cuando pasan de 1000%
        normal: "¡Y más allá! 🥰"                  // Cuando pasan de 100%
    },

    // Mensajes que aparecen después de que respondan "¡Sí!"
    celebration: {
        title: "¡Yay! ¡Soy la persona más afortunada del mundo! 🎉💝💖💝💓",
        message: "¡Ahora ven por tu regalo, un gran abrazo calientito y un beso enorme!",
        emojis: "🎁💖🤗💝💋❤️💕"  // Estos emojis aparecerán rebotando
    },

    // Esquema de colores para la página
    // Usa https://colorhunt.co o https://coolors.co para encontrar combinaciones lindas
    colors: {
        backgroundStart: "#ffafbd",    // Inicio del degradado (colores suaves recomendados)
        backgroundEnd: "#ffc3a0",      // Fin del degradado (combina con backgroundStart)
        buttonBackground: "#ff6b6b",   // Color de los botones (debe resaltar sobre el fondo)
        buttonHover: "#ff8787",        // Color del botón al pasar el cursor (un poco más claro)
        textColor: "#ff4757"           // Color del texto (asegúrate de que se lea bien)
    },

    // Configuración de animaciones
    // Ajusta estos valores si quieres animaciones más rápidas o lentas
    animations: {
        floatDuration: "15s",          // Duración en segundos para que los emojis floten (10-20s recomendado)
        floatDistance: "50px",         // Distancia en píxeles que se mueven de lado (30-70px recomendado)
        bounceSpeed: "0.5s",           // Velocidad del rebote (0.3-0.7s recomendado)
        heartExplosionSize: 1.5        // Tamaño del efecto "explosión" de corazones (1.2-2.0 recomendado)
    },

    // Música de fondo (Opcional)
    // Agrega una URL de tu canción favorita con las licencias correspondientes
    music: {
        enabled: true,                        // Habilita o deshabilita la música
        autoplay: true,                       // Intenta reproducir automáticamente (puede estar bloqueado en algunos navegadores)
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3", // URL de la música en streaming
        startText: "🎵 Reproducir música",     // Texto del botón para iniciar la música
        stopText: "🔇 Detener música",         // Texto del botón para detener la música
        volume: 0.5                            // Nivel de volumen (0.0 a 1.0)
    }
};

// No modifiques nada debajo de esta línea a menos que sepas lo que estás haciendo
window.VALENTINE_CONFIG = CONFIG;
