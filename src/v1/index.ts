import express from 'express';

const router = express.Router();

// create
router.post('/', async (req, res) => {
  const body = req.body;
  try {
    res.status(200).send({ message: 'success', status: 'success', data: body });
  } catch (error: any) {
    res.status(500).send({ message: error.message, status: 'error' });
  }
});

// read 1
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    res.status(200).send({ message: 'success', status: 'success', data: { id: id } });
  } catch (error: any) {
    res.status(500).send({ message: error.message, status: 'error' });
  }
});

// read many
router.post('/get_by', async (req, res) => {
  const body = req.body;
  try {
    res.status(200).send({ message: 'success', status: 'success', data: body });
  } catch (error: any) {
    res.status(500).send({ message: error.message, status: 'error' });
  }
});

// update
router.put('/', async (req, res) => {
  const body = req.body;
  try {
    res.status(200).send({ message: 'success', status: 'success', data: body });
  } catch (error: any) {
    res.status(500).send({ message: error.message, status: 'error' });
  }
});

// delete
router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    res.status(200).send({ message: 'success', status: 'success', data: { id: id } });
  } catch (error: any) {
    res.status(500).send({ message: error.message, status: 'error' });
  }
});

export const v1 = router;
