module.exports = {


index: async (req, res) => {


res.render('index', {title : 'Bubblegum - Home'});





},

contato:  async (req, res) => {



    res.render('contato', {title : 'Bubblegum - Contato'});




},

login:  async (req, res) => {



    res.render('login', {title : 'Bubblegum - Login'});




},

sobrenos:  async (req, res) => {



    res.render('sobrenos', {title : 'Bubblegum - sobre nos'});




},
professores:  async (req, res) => {


    res.render('professores', {title : 'Bubblegum - Professores' });





},
cursoBasico:  async (req, res) => {



    res.render('cursobasico', {title : 'Bubblegum - CursoBasico'});




},
cursoProfessores:  async (req, res) => {


    res.render('cursoprofessores', {title : 'Bubblegum - Curso Professores'});





},
cursos:  async (req, res) => {


    res.render('cursos', {title : 'Bubblegum - Cursos Professores'});





},
cursoViagens:  async (req, res) => {




    res.render('cursoviagens', {title : 'Bubblegum - Curso Viagens '});



},

















}