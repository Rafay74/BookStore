import express from 'express'
import { Router } from 'express'
import { getBook } from '../controllers/bookController.js'


const router = Router()

router.get('/', getBook)

export default router;
