import { Room, RatePlan } from '@/src/types';

interface BookingConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  bookingDetails: {
    room: Room;
    ratePlan: RatePlan;
    checkInDate: Date;
    checkOutDate: Date;
    roomsCount: number;
    adultsCount: number;
    childrenCount: number;
    totalPrice: number;
    bookingId: string;
  };
}

export const BookingConfirmation = ({ isOpen, onClose, bookingDetails }: BookingConfirmationProps) => {
  if (!isOpen) return null;

  const {
    room,
    ratePlan,
    checkInDate,
    checkOutDate,
    roomsCount,
    adultsCount,
    childrenCount,
    totalPrice,
    bookingId
  } = bookingDetails;

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold">Booking Confirmed!</h2>
                <p className="text-green-100">Your reservation has been successfully processed</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-green-100 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Booking ID */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="text-sm text-gray-600 mb-1">Booking Reference</div>
            <div className="font-mono font-bold text-lg text-gray-800">{bookingId}</div>
          </div>

          {/* Hotel & Room Details */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Hotel Details</h3>
              <div className="space-y-2 text-sm">
                <p className="font-medium text-gray-800">{room.hotel?.name}</p>
                <p className="text-gray-600">{room.hotel?.address}</p>
                <p className="text-gray-600">{room.hotel?.city}, {room.hotel?.countryCode}</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-3">Room Details</h3>
              <div className="flex gap-3">
                <img
                  src={room.imageUrls?.[0] || 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=200'}
                  alt={room.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="text-sm">
                  <p className="font-medium text-gray-800">{room.name}</p>
                  <p className="text-gray-600">{ratePlan.name}</p>
                  <p className="text-gray-600">Sleeps {room.maxGuests}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Details */}
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-gray-800 mb-3">Stay Details</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Check-in:</span>
                <span className="font-medium ml-2">{formatDate(checkInDate)}</span>
              </div>
              <div>
                <span className="text-gray-600">Check-out:</span>
                <span className="font-medium ml-2">{formatDate(checkOutDate)}</span>
              </div>
              <div>
                <span className="text-gray-600">Guests:</span>
                <span className="font-medium ml-2">{roomsCount} room{roomsCount > 1 ? 's' : ''}, {adultsCount + childrenCount} guest{(adultsCount + childrenCount) > 1 ? 's' : ''}</span>
              </div>
              <div>
                <span className="text-gray-600">Total Paid:</span>
                <span className="font-bold text-blue-600 ml-2">${totalPrice}</span>
              </div>
            </div>
          </div>

          {/* Important Information */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <h3 className="font-semibold text-yellow-800 mb-2">Important Information</h3>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• Check-in time: {room.hotel?.checkInTime || '2:00 PM'}</li>
              <li>• Check-out time: {room.hotel?.checkOutTime || '11:00 AM'}</li>
              <li>• Free cancellation until 24 hours before check-in</li>
              <li>• A confirmation email has been sent to your email address</li>
            </ul>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-lg font-medium transition-colors"
            >
              Close
            </button>
            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors">
              Download Receipt
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};