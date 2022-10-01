//Importaciones
const router = require('express').Router();
const { Tarea } = require('./tarea.model');

//Configuración del body parser
const bodyParser = require('body-parser');
router.use(bodyParser.json());

//Peticiones http
router.get('/', (req, res) => res.send('El servidor está funcionando'));

router.get('/api/details/tasks', (req, res) => {
    Tarea.find().then(tareas => res.json(tareas))
});

router.get('/api/details/tasks/:id', (req, res) => {
    Tarea.findById(req.params.id).then(tarea => res.json(tarea))
});

router.delete('/api/delete/tasks/:id', (req, res) => {
    Tarea.findByIdAndDelete(req.params.id, (err) => {
        if(err) throw err
        else res.json({message: 'Tarea eliminada correctamente'})
    })
});

router.post('/api/post/tasks', (req, res) => {
    const tarea = new Tarea(req.body);
    tarea.save((err, post) => {
        if(err) throw err 
        else res.json(post)
    });
});

router.patch('/api/patch/tasks/:_id', (req, res) => {
    const { _id } = req.params;
    const { tarea } = req.body;
    Tarea.findByIdAndUpdate({ _id }, { tarea }, (err, data) => {
        if(err) throw err
        else res.json([data, { _id, tarea }])
    });
});

//Exportación
module.exports = router;