const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const pool = new Pool({
    connectionString : process.env.DATABASE_URL,
    ssl : {
        rejectUnauthorized : false
    }
});

app.get('/',(req,res)=>{
    try {
        res.json({message : "WELLCOME>>"});
    } catch (err) {
        res.status(500).json({error : err.message});
    }
});
//--------------------------employees-----------------------------------------------------------------------
app.get('/employee',async(req,res)=>{
    try {
        const result = await pool.query('select * from employee');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({error : err.message});
    }
});

//---------------------coustomer---------------------------------------------------------------------------------
app.get('/coustomer',async(req,res)=>{
    try {
        const result = await pool.query('select * from coustomer');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({error : err.message});
    }
});
//=================branch=======================================================================================
app.get('/branch',async(req,res)=>{
    try {
        const result = await pool.query('select * from branch');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({error : err.message});
    }
});


//===================appointment===========================================================================================
app.get('/appointment',async(req,res)=>{
    try {
        const result = await pool.query('select * from appointment');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({error : err.message});
    }
});

//==================appointment_service===================================================

app.get('/appointment_service',async(req,res)=>{
    try {
        const result = await pool.query('select * from appointment_service');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({error : err.message});
    }
});

//=======================discount==============================================================
app.get('/discount',async(req,res)=>{
    try {
        const result = await pool.query('select * from discount');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({error : err.message});
    }
});

//=======================inventory==========================================================================
app.get('/inventory',async(req,res)=>{
    try {
        const result = await pool.query('select * from inventory');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({error : err.message});
    }
});

//==========================invoice==============================================
app.get('/invoice',async(req,res)=>{
    try {
        const result = await pool.query('select * from invoice');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({error : err.message});
    }
});

//======================invoice_discount================================================================
app.get('/invoice_discount',async(req,res)=>{
    try {
        const result = await pool.query('select * from invoice_discount');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({error : err.message});
    }
});
//===================================loyalty_program=========================================================
app.get('/loyalty_program',async(req,res)=>{
    try {
        const result = await pool.query('select * from loyalty_program');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({error : err.message});
    }
});

//=================================payment==========================================================
app.get('/payment',async(req,res)=>{
    try {
        const result = await pool.query('select * from payment');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({error : err.message});
    }
});

//======================================product========================================================
app.get('/product',async(req,res)=>{
    try {
        const result = await pool.query('select * from product');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({error : err.message});
    }
});

//==========================review==================================================
app.get('/review',async(req,res)=>{
    try {
        const result = await pool.query('select * from review');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({error : err.message});
    }
});

//=========================service=========================================================
app.get('/service',async(req,res)=>{
    try {
        const result = await pool.query('select * from service');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({error : err.message});
    }
});


//=========================supplier======================================================================
app.get('/supplier',async(req,res)=>{
    try {
        const result = await pool.query('select * from supplier');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({error : err.message});
    }
});

//====================================details=============================================================
app.get('/details',async(req,res)=>{
    try {
        const result = await pool.query('select * from detils');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({error : err.message});
    }
});

app.listen(3000,()=>{
    console.log('Sever is Running on port 3000')
});

