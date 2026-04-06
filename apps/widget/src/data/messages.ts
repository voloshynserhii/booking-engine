import { Message } from '@/src/types';

export const messages: Message[] = [
  {
    id: 'msg1',
    bookingId: 'b1',
    senderId: 'g1',
    content: 'Hi, can I request a late checkout?',
    isRead: false,
    createdAt: '2024-03-16T10:30:00Z',
  },
  {
    id: 'msg2',
    bookingId: 'b1',
    senderId: 'u1',
    content: 'Hello! Late checkout is available until 2 PM for an additional charge.',
    isRead: true,
    createdAt: '2024-03-16T11:00:00Z',
  },
  {
    id: 'msg3',
    bookingId: 'b2',
    senderId: 'g2',
    content: 'When is check-in available?',
    isRead: false,
    createdAt: '2024-03-19T09:00:00Z',
  },
  {
    id: 'msg4',
    bookingId: 'b2',
    senderId: 'u1',
    content: 'Check-in is from 3 PM onwards. Early check-in might be available if the room is ready.',
    isRead: true,
    createdAt: '2024-03-19T09:15:00Z',
  },
  {
    id: 'msg5',
    bookingId: 'b3',
    senderId: 'g3',
    content: 'Are there any nearby restaurants?',
    isRead: false,
    createdAt: '2024-03-21T15:45:00Z',
  },
  {
    id: 'msg6',
    bookingId: 'b3',
    senderId: 'u1',
    content: 'Yes! There are several great restaurants within walking distance. I can provide recommendations upon arrival.',
    isRead: true,
    createdAt: '2024-03-21T16:10:00Z',
  },
];
