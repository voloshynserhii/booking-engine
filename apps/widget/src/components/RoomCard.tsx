import { Room, Rate } from '@/src/types';

const RateRow = ({ rate }: { rate: Rate }) => (
  <div className="flex items-center justify-between p-4 border-t border-gray-100">
    <div>
      <h4 className="font-semibold text-gray-800">{rate.name}</h4>
      <ul className="text-xs text-green-600 mt-1">
        {rate.features.map((f, i) => <li key={i}>✓ {f}</li>)}
      </ul>
    </div>
    <div className="text-right">
      {rate.isAvailable ? (
        <>
          <div className="text-sm text-gray-500">EUR {rate.price.toFixed(2)}</div>
          <button className="mt-2 bg-stone-400 hover:bg-stone-500 text-white px-4 py-1 rounded text-sm transition">
            Select
          </button>
        </>
      ) : (
        <button className="text-sm border border-gray-300 text-gray-400 px-4 py-1 rounded cursor-not-allowed">
          Sold out
        </button>
      )}
    </div>
  </div>
);

export const RoomCard = ({ room }: { room: Room }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden mb-6 flex flex-col md:flex-row">
      <div className="md:w-1/3 relative">
        <img src={room.imageUrls?.[0]} alt={room.name} className="h-full w-full object-cover" />
      </div>
      <div className="md:w-2/3 flex flex-col">
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-800">{room.name}</h3>
          <p className="text-xs text-gray-500 mt-1 uppercase tracking-wide">
            👤 Sleeps {room.maxGuests} | 🛏️ {room.bedType} | 🛁 1 Bathroom
          </p>
          <p className="text-sm text-gray-600 mt-2 line-clamp-2">{room.description}</p>
        </div>
        <div className="mt-auto">
          {room.rates?.map(rate => <RateRow key={rate.id} rate={rate} />)}
        </div>
      </div>
    </div>
  );
};