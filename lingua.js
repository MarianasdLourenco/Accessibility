const languEL = document.querySelector('.bandeira');
const link = document.querySelectorAll('a');
let inicio = document.querySelector('#acs-inicio');
let contato = document.querySelector('#contato');
let profissao = document.querySelector("#profissao");
let educacao = document.querySelector('#educacao');
let idiomas = document.querySelector('#idiomas');
let sobre = document.querySelector('#sobre');
let voluntariado = document.querySelector('#voluntariado');
let habilidade = document.querySelector('#skills');
let textosobre = document.querySelector('#textosobre');
let textosobre1 = document.querySelector('#textosobre1');
let interesse = document.querySelector('#interesses');

link.forEach( el => {
    el.addEventListener('click',() => {
        languEL.querySelector('.ativo').classList.remove('ativo');
        el.classList.add('ativo');

        const lingua = el.getAttribute('language');

        inicio.textContent = data[lingua].inicio;
        contato.textContent = data[lingua].contato;
        profissao.textContent = data[lingua].profissao;
        educacao.textContent = data[lingua].educacao;
        idiomas.textContent = data[lingua].idiomas;
        sobre.textContent = data[lingua].sobre;
        textosobre1.textContent = data[lingua].textosobre1;
        textosobre.textContent = data[lingua].textosobre;
        voluntariado.textContent = data[lingua].voluntariado;
        habilidade.textContent = data[lingua].habilidade;
        interesse.textContent = data[lingua].interesse;
    });
});

var data = {
        "portugues": { 
            "inicio": "inicio",
            "contato": "CONTATO",
            "profissao":"Estudante Universitário ",
            "educacao": "EDUCAÇÃO",
            "idiomas": "IDIOMAS",
            "sobre":"SOBRE",
            "voluntariado": "VOLUNTARIADO",
            "habilidade": "HABILIDADES",
            "textosobre":"Olá, sou Mariana! Estudante de Sistemas para Internet, apaixonada por programação, entrei na Etec em 2018 onde pude aprofundar meus conhecimento na área, gosto de asssustos relacionados a programação Web, bancos de dados, PHP e Design. estou sempre fazendo e aprendendo algo novo, pretendo aprofundar meus estudos em Bancos de dados e Web Design.",
            "textosobre1":"programa realizado pela Etec que visa promover a importância da leitura, trabalhando o emocional e senso crítico dos alunos, são realizadas reuniões semanalmente para realizar a leitura dos livros e debater os temas abordados.",
            "interesse": "INTERESSES"
        },
        "english": { 
            "inicio": "begin",
            "contato": "CONTACT",
            "profissao":"University Student ",
            "educacao": "EDUCATION",
            "idiomas": "LANGUAGES",
            "sobre":"ABOUT",
            "textosobre":"Hi, I'm Mariana! Student of Internet Systems, passionate about programming, I joined Etec in 2018 where I could deepen my knowledge in the area, I like topics related to Web programming, databases, PHP and Design. I'm always doing and learning something new, I intend to deepen my studies in Databases and Web Design.",
            "textosobre1":"A program carried out by Etec that aims to promote the importance of reading, working on the students' emotional and critical sense.",
            
            "voluntariado": "VOLUNTEER",
            "habilidade": "SKILLS",
            "interesse": "INTERESTS"
        },
        "espanhol": { 
            "textosobre1":"Un programa llevado a cabo por Etec que tiene como objetivo promover la importancia de la lectura, trabajando el sentido emocional y crítico de los estudiantes, se realizan reuniones semanales para leer libros y discutir los temas tratados.",
            "inicio": "comienzo",
            "contato": "CONTACTO",
            "profissao":"Estudiante universitario ",
            "educacao": "EDUCACIÓN",
            "idiomas": "IDIOMAS",
            "textosobre":"Hola, soy Mariana. Estudiante de Sistemas de Internet, apasionado por la programación, ingresé a la Etec en 2018 donde pude profundizar mis conocimientos en el área, me gustan los assustos relacionados con la programación Web, bases de datos, PHP y Diseño. Siempre estoy haciendo y aprendiendo algo nuevo, pretendo profundizar mis estudios en Bases de Datos y Diseño Web.",
            "sobre":"ACERCA DE",
            "voluntariado": "TRABAJAR COMO VOLUNTARIO",
            "habilidade": "HABILIDADES",
            "interesse": "INTERESES"
        },
        "deutsch": { 
            "textosobre1":"Ein von Etec durchgeführtes Programm, das die Bedeutung des Lesens fördern und den emotionalen und kritischen Sinn der SchülerInnen schulen soll. Es werden wöchentlich Treffen abgehalten, um Bücher zu lesen und die behandelten Themen zu diskutieren.",
            "inicio": "Anfang",
            "contato": "Kontakt",
            "profissao":"Universitätsstudent",
            "educacao": "Ausbildung",
            "idiomas": "Sprache",
            "textosobre":"Hallo, ich bin Mariana! Student der Internet-Systeme, leidenschaftlich über die Programmierung, trat ich in die Etec im Jahr 2018, wo ich mein Wissen in dem Bereich zu vertiefen, Ich mag asssustos im Zusammenhang mit Web-Programmierung, Datenbanken, PHP und Design. Ich bin immer tun und lernen etwas Neues, ich beabsichtige, meine Studien in Datenbanken und Web-Design zu vertiefen.",
            "sobre":"Über",
            "voluntariado": "Freiwilligenarbeit",
            "habilidade": "Fähigkeit",
            "interesse": "Anordnung"
        }
}