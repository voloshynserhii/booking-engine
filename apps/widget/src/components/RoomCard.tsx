import { Room, RatePlan } from '@/src/types';
import { RateRow } from './RateRow';
import { useState } from 'react';

interface RoomCardProps {
  room: Room;
  onRateSelect?: (room: Room, ratePlan: RatePlan) => void;
}

export const RoomCard = ({ room, onRateSelect }: RoomCardProps) => {
  const [showMore, setShowMore] = useState(false);
  const mainImage = room.imageUrls?.[0] || 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800';

  const handleRateSelect = (ratePlan: RatePlan) => {
    onRateSelect?.(room, ratePlan);
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  // Check if description is long enough to need truncation
  const shouldTruncateDescription = room.description && room.description.length > 300;
  const truncatedDescription = shouldTruncateDescription && !showMore && room.description
    ? room.description.substring(0, 300) + '...'
    : room.description;

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden mb-6 hover:shadow-xl transition-shadow duration-300">
      <div className="md:flex">
        {/* Image Section */}
        <div className="md:w-2/5 relative">
          <img
            src={mainImage}
            alt={room.name}
            className="w-full h-64 md:h-full object-cover"
          />
          {room.imageUrls && room.imageUrls.length > 1 && (
            <div className="absolute bottom-3 right-3 bg-black bg-opacity-70 text-white text-xs px-3 py-1 rounded-full font-medium">
              +{room.imageUrls.length - 1} more photos
            </div>
          )}
          <div className="absolute top-3 left-3">
            <span className="bg-white bg-opacity-90 text-gray-800 text-xs px-2 py-1 rounded font-medium uppercase tracking-wide">
              {room.roomType}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="md:w-3/5 flex flex-col">
          <div className="p-6">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-bold text-gray-800">{room.name}</h3>
              <div className="text-right">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="mr-1">👤</span>
                  <span>Sleeps {room.maxGuests}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 mt-1">
                  <span className="mr-1">🛁</span>
                  <span>1 Bathroom</span>
                </div>
              </div>
            </div>

            {/* Room Description */}
            {room.description && (
              <div className="mt-4">
                <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                  {truncatedDescription}
                </p>
                {shouldTruncateDescription && (
                  <button
                    onClick={toggleShowMore}
                    className="mt-2 text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200 bg-none border-none p-0 cursor-pointer"
                  >
                    {showMore ? 'Show Less' : 'Show More'}
                  </button>
                )}
              </div>
            )}

            {/* Expandable Room Details */}
            {showMore && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Room Details</h4>
                <div className="space-y-3 text-sm text-gray-700">
                  <div>
                    <span className="font-medium">Room Type:</span> {room.roomType}
                  </div>
                  <div>
                    <span className="font-medium">Maximum Guests:</span> {room.maxGuests}
                  </div>
                  <div>
                    <span className="font-medium">Available Rooms:</span> {room.quantity}
                  </div>
                  {room.hotel?.description && (
                    <div>
                      <span className="font-medium">Hotel Description:</span> {room.hotel.description}
                    </div>
                  )}
                  {room.amenities && room.amenities.length > 0 && (
                    <div>
                      <span className="font-medium">Amenities:</span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {room.amenities.map((amenity) => (
                          <span key={amenity.id} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                            {amenity.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Rate Plans Section */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">Available Rates</h4>
              <div className="space-y-3">
                {room.ratePlans?.map((ratePlan) => (
                  <RateRow
                    key={ratePlan.id}
                    ratePlan={ratePlan}
                    room={room}
                    onSelect={handleRateSelect}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
