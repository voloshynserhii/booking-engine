import { RoomCard } from '@/src/components';
import { rooms } from '@/src/data/rooms';
import { rates } from '@/src/data/rates';

export const BookingWidget = () => {
  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      {/* Hero Header */}
      <header className="h-64 bg-[url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200')] bg-cover bg-center flex items-center justify-center">
        <div className="bg-white/10 backdrop-blur-sm p-4 rounded text-white text-4xl">🌲🌲🌲</div>
      </header>

      <main className="max-w-6xl mx-auto px-4 -mt-12">
        {/* Search Bar */}
        <div className="bg-white p-4 rounded-lg shadow-lg flex flex-wrap gap-4 items-center mb-8 border border-gray-100">
          <div className="flex-1 min-w-[200px] border p-2 rounded">
            <label className="block text-xs uppercase text-gray-400">Select dates</label>
            <div className="text-sm font-medium">Sun, 5 Apr → Tue, 7 Apr</div>
          </div>
          <div className="flex-1 min-w-[200px] border p-2 rounded">
            <label className="block text-xs uppercase text-gray-400">Rooms and guests</label>
            <div className="text-sm font-medium">1 Room, 2 Guests</div>
          </div>
          <div className="flex-1 min-w-[150px] border p-2 rounded border-dashed">
            <label className="block text-xs uppercase text-gray-400">Promo code</label>
            <input type="text" placeholder="Add code" className="text-sm outline-none w-full" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Rooms List */}
          <div className="lg:col-span-2">
            {rooms.map(room => (
              <RoomCard 
                key={room.id} 
                room={{
                  ...room,
                  rates: rates
                }} 
              />
            ))}
          </div>

          {/* Sidebar Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 sticky top-4">
              <div className="flex justify-between text-xs text-gray-500 mb-4">
                <span>Sun, 5 Apr 26 - Tue, 7 Apr 26</span>
                <span>2 nights</span>
              </div>
              <div className="text-sm font-medium mb-6">1 room, 2 guests</div>
              <div className="p-4 bg-stone-100 rounded text-center text-gray-500 text-sm mb-4">
                Select a rate to continue
              </div>
              <button disabled className="w-full bg-stone-200 text-stone-400 py-3 rounded font-bold cursor-not-allowed">
                Book
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};