const express = require('express');
const { getRepository } = require('typeorm');
const Ticket = require('../models/ticketDB');
const router = express.Router();

router.get('/', async (req, res) => {
  const { status } = req.query;

  try {
    const ticketRepository = getRepository(Ticket);

    console.log('Received status filter:', status);
    let tickets;
    if (status && status !== 'all') {
      tickets = await ticketRepository.find({ where: { status }, order: { updated_at: "DESC" } });
    } else {
      tickets = await ticketRepository.find({ order: { updated_at: "DESC" } });
    }
    
    console.log('All Tickets:', JSON.stringify(tickets, null, 2));
    res.json(tickets);
  } catch (error) {
    console.error('Error fetching tickets:', error);
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  const { title, description, contact, status } = req.body;
  try {
    const ticketRepository = getRepository(Ticket);
    const newTicket = ticketRepository.create({ 
      title,
      description,
      contact,
      status: status || 'pending',
      created_at: new Date(),
      updated_at: new Date(),
     });
    await ticketRepository.save(newTicket);

    console.log('New Ticket Created:', JSON.stringify(newTicket, null, 2));
    res.status(201).json(newTicket);
  } catch (error) {
    console.error('Error creating ticket:', error);
    res.status(400).json({ message: error.message });
  }
});

router.put('/:ticketId', async (req, res) => {
  const { ticketId } = req.params;
  const { status } = req.body;

  try {
    const ticketRepository = getRepository(Ticket);
    const ticket = await ticketRepository.findOne({
      where: { id: ticketId },
    });

    if (!ticket) {
      return res.status(404).json({ message: 'Ticket not found' });
    }

    ticket.status = status;
    ticket.updated_at = new Date();

    await ticketRepository.save(ticket);

    console.log('Updated Ticket:', JSON.stringify(ticket, null, 2));
    return res.json(ticket);
  } catch (error) {
    console.error('Error updating ticket:', error);
    return res.status(400).json({ message: error.message });
  }
});


module.exports = router;
