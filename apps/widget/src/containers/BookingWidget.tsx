import { RoomCard } from '@/src/components';
import { DatePicker } from '@/src/components/DatePicker';
import { GuestSelector } from '@/src/components/GuestSelector';
import { rooms } from '@/src/data/rooms';
import { useState } from 'react';
import { Room, RatePlan } from '@/src/types';

export const BookingWidget = () => {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [selectedRatePlan, setSelectedRatePlan] = useState<RatePlan | null>(null);

  // Modal states
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showGuestSelector, setShowGuestSelector] = useState(false);

  // Booking data
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date(Date.now() + 2 * 24 * 60 * 60 * 1000));
  const [roomsCount, setRoomsCount] = useState(1);
  const [adultsCount, setAdultsCount] = useState(2);
  const [childrenCount, setChildrenCount] = useState(0);

  const handleRateSelect = (room: Room, ratePlan: RatePlan) => {
    setSelectedRoom(room);
    setSelectedRatePlan(ratePlan);
    console.log('Selected:', { room: room.name, ratePlan: ratePlan.name });
  };

  const handleDateSelect = (checkIn: Date, checkOut: Date) => {
    setCheckInDate(checkIn);
    setCheckOutDate(checkOut);
  };

  const handleGuestConfirm = (rooms: number, adults: number, children: number) => {
    setRoomsCount(rooms);
    setAdultsCount(adults);
    setChildrenCount(children);
  };

  const formatDateRange = () => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'short', month: 'short', day: 'numeric' };
    return `${checkInDate.toLocaleDateString('en-US', options)} → ${checkOutDate.toLocaleDateString('en-US', options)}`;
  };

  const formatGuests = () => {
    return `${roomsCount} Room${roomsCount > 1 ? 's' : ''}, ${adultsCount + childrenCount} Guest${adultsCount + childrenCount > 1 ? 's' : ''}`;
  };
  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      {/* Hero Header */}
      <header className="h-64 bg-[url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200')] bg-cover bg-center flex items-center justify-center">
        <div className="bg-white/10 backdrop-blur-sm p-4 rounded text-white text-4xl">🌲🌲🌲</div>
      </header>

      <main className="max-w-6xl mx-auto px-4 -mt-12">
        {/* Search Bar */}
        <div className="bg-white p-4 rounded-lg shadow-lg flex flex-wrap gap-4 items-center mb-8 border border-gray-100 relative">
          <div className="flex-1 min-w-[200px] relative">
            <label className="block text-xs uppercase text-gray-400">Select dates</label>
            <button
              onClick={() => setShowDatePicker(!showDatePicker)}
              className="text-sm font-medium w-full text-left hover:text-blue-600 transition-colors"
            >
              {formatDateRange()}
            </button>
            <DatePicker
              isOpen={showDatePicker}
              onClose={() => setShowDatePicker(false)}
              onSelect={handleDateSelect}
              initialCheckIn={checkInDate}
              initialCheckOut={checkOutDate}
            />
          </div>
          <div className="flex-1 min-w-[200px] relative">
            <label className="block text-xs uppercase text-gray-400">Rooms and guests</label>
            <button
              onClick={() => setShowGuestSelector(!showGuestSelector)}
              className="text-sm font-medium w-full text-left hover:text-blue-600 transition-colors"
            >
              {formatGuests()}
            </button>
            <GuestSelector
              isOpen={showGuestSelector}
              onClose={() => setShowGuestSelector(false)}
              onConfirm={handleGuestConfirm}
              initialRooms={roomsCount}
              initialAdults={adultsCount}
              initialChildren={childrenCount}
            />
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
                room={room}
                onRateSelect={handleRateSelect}
              />
            ))}
          </div>

          {/* Sidebar Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 sticky top-4">
              <div className="flex justify-between text-xs text-gray-500 mb-4">
                <span>{formatDateRange()}</span>
                <span>{Math.ceil((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24))} nights</span>
              </div>
              <div className="text-sm font-medium mb-6">{formatGuests()}</div>

              {selectedRoom && selectedRatePlan && (
                <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">Selected:</h4>
                  <p className="text-sm text-blue-700">{selectedRoom.name}</p>
                  <p className="text-sm text-blue-600">{selectedRatePlan.name}</p>
                </div>
              )}

              <div className="p-4 bg-stone-100 rounded text-center text-gray-500 text-sm mb-4">
                {selectedRoom && selectedRatePlan ? 'Ready to book!' : 'Select a rate to continue'}
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