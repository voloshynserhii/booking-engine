import { Room, RatePlan } from '@/src/types';

const RateRow = ({ rate }: { rate: RatePlan }) => (
  <div className="flex justify-between items-center p-3 bg-gray-50 rounded border border-gray-100">
    <div>
      <h4 className="font-medium text-gray-800">{rate.name}</h4>
      <div className="text-xs text-gray-600 mt-1">
        {rate.description || `${rate.mealPlan.replace(/_/g, ' ')} • ${rate.isRefundable ? 'Refundable' : 'Non-refundable'}`}
      </div>
    </div>
    <div className="text-right">
      <div className="text-sm text-blue-600 font-semibold">From $99</div>
      <div className="text-xs text-gray-500">/night</div>
      <button className="mt-2 bg-stone-400 hover:bg-stone-500 text-white px-3 py-1 rounded text-xs transition">
        Select
      </button>
    </div>
  </div>
);

export const RoomCard = ({ room }: { room: Room }) => {
  const mainImage = room.imageUrls?.[0] || 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800';

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6 flex flex-col md:flex-row">
      <div className="md:w-1/3 relative">
        <img
          src={mainImage}
          alt={room.name}
          className="w-full h-48 object-cover"
        />
        {room.imageUrls && room.imageUrls.length > 1 && (
          <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
            +{room.imageUrls.length - 1} more
          </div>
        )}
      </div>
      <div className="md:w-2/3 flex flex-col">
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-800">{room.name}</h3>
          <p className="text-xs text-gray-500 mt-1 uppercase tracking-wide">
            👤 Sleeps {room.maxGuests} | 🛁 1 Bathroom
          </p>
          <p className="text-sm text-gray-600 mt-2">Room Type: {room.roomType}</p>

          {/* Rate Plans Section */}
          <div className="mt-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Available Rate Plans:</h4>
            <div className="space-y-2">
              {room.hotel?.ratePlans?.map((ratePlan) => (
                <RateRow key={ratePlan.id} rate={ratePlan} />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-auto p-4">
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Select Room
          </button>
        </div>
      </div>
    </div>
  );
};
