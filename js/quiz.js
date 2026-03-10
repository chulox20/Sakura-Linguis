// quiz.js

document.addEventListener("DOMContentLoaded", function () {
  const preguntas = [
    // … tus preguntas aquí
  ];

  const contenedor = document.getElementById("quiz-container");

  preguntas.forEach((q, i) => {
    const div = document.createElement("div");
    div.innerHTML = `<p>${i + 1}. ${q.pregunta}</p>`;
    q.opciones.forEach((opcion, j) => {
      div.innerHTML += `
        <label>
          <input type="radio" name="p${i}" value="${j}">
          ${opcion}
        </label><br>`;
    });
    contenedor.appendChild(div);
  });

  window.mostrarResultados = function () {
    let puntaje = 0;
    preguntas.forEach((q, i) => {
      const respuesta = document.querySelector(`input[name="p${i}"]:checked`);
      if (respuesta && parseInt(respuesta.value) === q.correcta) {
        puntaje++;
      }
    });
    document.getElementById("resultado").innerHTML = `<h2>Tu puntaje: ${puntaje} de ${preguntas.length}</h2>`;
  };
});

const preguntas = [
  {
    pregunta: "¿Cómo se dice 'Buenos días' formalmente?",
    opciones: ["ohayō", "ohayō gozaimasu", "konnichiwa", "konbanwa"],
    correcta: 1
  },
  {
    pregunta: "¿Qué significa 'hajimemashite'?",
    opciones: ["Encantado de conocerte", "Adiós", "Gracias", "Hasta luego"],
    correcta: 0
  },
  {
    pregunta: "¿Cómo se dice 'Nos vemos' informalmente?",
    opciones: ["sayōnara", "matane", "oyasumi", "konbanwa"],
    correcta: 1
  },
  {
    pregunta: "¿Cómo se presenta uno en japonés?",
    opciones: ["watashi wa ___ desu", "ohayō", "arigatō", "sumimasen"],
    correcta: 0
  },
  {
    pregunta: "¿Qué significa 'yoroshiku onegaishimasu'?",
    opciones: ["Perdón", "Un placer conocerte", "Soy ___", "Nos vemos"],
    correcta: 1
  },
  {
    pregunta: "¿Cómo se dice 'Buenas noches' (antes de dormir)?",
    opciones: ["oyasumi", "konnichiwa", "sayōnara", "ohayō gozaimasu"],
    correcta: 0
  },
  {
    pregunta: "¿Cuál es la forma informal de saludar por la mañana?",
    opciones: ["ohayō gozaimasu", "konnichiwa", "ohayō", "konbanwa"],
    correcta: 2
  },
  {
    pregunta: "¿Qué significa 'onamae wa nan desu ka?'?",
    opciones: ["¿Dónde estás?", "¿Cuál es tu nombre?", "¿Qué hora es?", "¿Cómo estás?"],
    correcta: 1
  },
  {
    pregunta: "¿Qué expresión se usa al inicio de una presentación?",
    opciones: ["hajimemashite", "sayōnara", "arigatō", "oyasumi"],
    correcta: 0
  },
  {
    pregunta: "¿Cómo se dice 'soy estudiante' en japonés?",
    opciones: ["watashi wa gakusei desu", "onamae wa desu", "konnichiwa gakusei", "watashi wa gakusei ka"],
    correcta: 0
  }
];

const contenedor = document.getElementById("quiz-container");

preguntas.forEach((q, i) => {
  const div = document.createElement("div");
  div.innerHTML = `<p>${i + 1}. ${q.pregunta}</p>`;
  q.opciones.forEach((opcion, j) => {
    div.innerHTML += `
      <label>
        <input type="radio" name="p${i}" value="${j}">
        ${opcion}
      </label><br>`;
  });
  contenedor.appendChild(div);
});

function mostrarResultados() {
  let puntaje = 0;
  preguntas.forEach((q, i) => {
    const respuesta = document.querySelector(`input[name="p${i}"]:checked`);
    if (respuesta && parseInt(respuesta.value) === q.correcta) {
      puntaje++;
    }
  });
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<h2>Tu puntaje: ${puntaje} de ${preguntas.length}</h2>`;
}
