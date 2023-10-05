import express from 'express';

const router = express.Router();

import EmployeeController from '../controller/employeeController.js';



router.get('/', EmployeeController.getAllDoc)
router.post('/', EmployeeController.createDoc)
router.get('/edit/:id', EmployeeController.editDoc)
router.post('/update/:id', EmployeeController.updateDocById)
router.post('/delete/:id', EmployeeController.deleteDocById)

export default router;