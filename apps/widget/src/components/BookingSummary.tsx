import { Room, RatePlan } from '@/src/types';

interface BookingSummaryProps {
  room: Room;
  ratePlan: RatePlan;
  checkInDate: Date;
  checkOutDate: Date;
  roomsCount: number;
  adultsCount: number;
  childrenCount: number;
  onBook: () => void;
  isLoading?: boolean;
}

export const BookingSummary = ({
  room,
  ratePlan,
  checkInDate,
  checkOutDate,
  roomsCount,
  adultsCount,
  childrenCount,
  onBook,
  isLoading = false
}: BookingSummaryProps) => {
  const nights = Math.ceil((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24));
  const basePrice = room.prices?.reduce((min, price) => Math.min(min, price.price), Infinity) || 120;
  const totalPrice = basePrice * nights * roomsCount;

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-6">Booking Summary</h3>

      {/* Room Details */}
      <div className="mb-6">
        <div className="flex items-start gap-4 mb-4">
          <img
            src={room.imageUrls?.[0] || 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=400'}
            alt={room.name}
            className="w-20 h-20 rounded-lg object-cover"
          />
          <div className="flex-1">
            <h4 className="font-semibold text-gray-800">{room.name}</h4>
            <p className="text-sm text-gray-600">{room.roomType} • Sleeps {room.maxGuests}</p>
            <p className="text-sm text-blue-600 font-medium">{ratePlan.name}</p>
          </div>
        </div>
      </div>

      {/* Booking Details */}
      <div className="space-y-3 mb-6">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Check-in</span>
          <span className="font-medium">{formatDate(checkInDate)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Check-out</span>
          <span className="font-medium">{formatDate(checkOutDate)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Nights</span>
          <span className="font-medium">{nights}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Guests</span>
          <span className="font-medium">{roomsCount} room{roomsCount > 1 ? 's' : ''}, {adultsCount + childrenCount} guest{(adultsCount + childrenCount) > 1 ? 's' : ''}</span>
        </div>
      </div>

      {/* Price Breakdown */}
      <div className="border-t pt-4 mb-6">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">${basePrice} × {nights} nights × {roomsCount} room{roomsCount > 1 ? 's' : ''}</span>
            <span className="font-medium">${totalPrice}</span>
          </div>
          <div className="flex justify-between text-sm text-green-600">
            <span>Taxes & fees</span>
            <span>Included</span>
          </div>
        </div>
        <div className="flex justify-between text-lg font-bold text-gray-800 mt-3 pt-3 border-t">
          <span>Total</span>
          <span>${totalPrice}</span>
        </div>
      </div>

      {/* Book Button */}
      <button
        onClick={onBook}
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-xl font-semibold text-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
      >
        {isLoading ? (
          <div className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </div>
        ) : (
          `Book Now - $${totalPrice}`
        )}
      </button>

      <p className="text-xs text-gray-500 text-center mt-3">
        Free cancellation until 24 hours before check-in
      </p>
    </div>
  );
};