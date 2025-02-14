const { EntitySchema } = require('typeorm');

const Ticket = new EntitySchema({
  name: 'Ticket',
  tableName: 'tickets',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    title: {
      type: 'varchar',
    },
    description: {
      type: 'text',
    },
    contact: {
      type: 'varchar',
    },
    status: {
      type: 'enum',
      enum: ['pending', 'accepted', 'resolved', 'rejected'],
      default: 'pending',
    },
    created_at: {
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP',
    },
    updated_at: {
      type: 'timestamp',
      default: () => 'CURRENT_TIMESTAMP',
      onUpdate: 'CURRENT_TIMESTAMP',
    },
  },
});

module.exports = Ticket;
