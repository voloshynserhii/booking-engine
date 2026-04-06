import { Message } from '@/src/types';

export const messages: Message[] = [
  {
    id: 'msg1',
    bookingId: 'b1',
    senderType: 'GUEST',
    content: 'Hi, can I request a late checkout?',
    createdAt: '2024-03-16T10:30:00Z',
  },
  {
    id: 'msg2',
    bookingId: 'b1',
    senderType: 'HOST',
    content: 'Hello! Late checkout is available until 2 PM for an additional charge.',
    createdAt: '2024-03-16T11:00:00Z',
  },
  {
    id: 'msg3',
    bookingId: 'b2',
    senderType: 'GUEST',
    content: 'When is check-in available?',
    createdAt: '2024-03-19T09:00:00Z',
  },
  {
    id: 'msg4',
    bookingId: 'b2',
    senderType: 'HOST',
    content: 'Check-in is from 3 PM onwards. Early check-in might be available if the room is ready.',
    createdAt: '2024-03-19T09:15:00Z',
  },
  {
    id: 'msg5',
    bookingId: 'b3',
    senderType: 'GUEST',
    content: 'Are there any nearby restaurants?',
    createdAt: '2024-03-21T15:45:00Z',
  },
  {
    id: 'msg6',
    bookingId: 'b3',
    senderType: 'HOST',
    content: 'Yes! There are several great restaurants within walking distance. I can provide recommendations upon arrival.',
    createdAt: '2024-03-21T16:10:00Z',
  },
];
