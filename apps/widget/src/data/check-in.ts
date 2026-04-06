import { CheckInSession, CheckInData } from '@/src/types';

export const checkInSessions: CheckInSession[] = [
  {
    id: 'ci-session1',
    bookingId: 'b1',
    token: 'token-xyz-123-abc',
    expiresAt: '2024-04-10T23:59:59Z',
    completed: true,
    createdAt: '2024-04-06T10:00:00Z',
  },
  {
    id: 'ci-session2',
    bookingId: 'b2',
    token: 'token-abc-456-def',
    expiresAt: '2024-04-13T23:59:59Z',
    completed: false,
    createdAt: '2024-04-09T14:00:00Z',
  },
];

export const checkInData: CheckInData[] = [
  {
    id: 'ci-data1',
    checkInSessionId: 'ci-session1',
    guestName: 'John Doe',
    documentNumber: 'DOC123456789',
    documentPhotoUrl: 'https://example.com/docs/john-doc.jpg',
    signed: true,
    createdAt: '2024-04-06T10:30:00Z',
  },
  {
    id: 'ci-data2',
    checkInSessionId: 'ci-session1',
    guestName: 'Jane Doe',
    documentNumber: 'DOC987654321',
    documentPhotoUrl: 'https://example.com/docs/jane-doc.jpg',
    signed: true,
    createdAt: '2024-04-06T10:35:00Z',
  },
];
