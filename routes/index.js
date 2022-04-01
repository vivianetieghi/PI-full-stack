var express = require('express');
var router = express.Router();

const SiteController = require('../controllers/SiteController');




/* GET home page. */
router.get('/', SiteController.index);
router.get('/contato', SiteController.contato);

router.get("/contato", (req,res) => {res.render('contatos')});

router.get('/cursobasico', SiteController.cursoBasico);
router.get('/cursoprofessores', SiteController.cursoProfessores);
router.get('/cursos', SiteController.cursos);
router.get('/cursoviagens', SiteController.cursoViagens);
router.get('/login', SiteController.login);
router.get('/professores', SiteController.professores);
router.get('/sobrenos', SiteController.sobrenos);


module.exports = router;
