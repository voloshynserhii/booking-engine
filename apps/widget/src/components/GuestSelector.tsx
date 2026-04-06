import { useState } from 'react';

interface GuestSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (rooms: number, adults: number, children: number) => void;
  initialRooms?: number;
  initialAdults?: number;
  initialChildren?: number;
}

export const GuestSelector = ({
  isOpen,
  onClose,
  onConfirm,
  initialRooms = 1,
  initialAdults = 2,
  initialChildren = 0
}: GuestSelectorProps) => {
  const [rooms, setRooms] = useState(initialRooms);
  const [adults, setAdults] = useState(initialAdults);
  const [children, setChildren] = useState(initialChildren);

  if (!isOpen) return null;

  const handleConfirm = () => {
    onConfirm(rooms, adults, children);
    onClose();
  };

  const Counter = ({
    label,
    value,
    onChange,
    min = 0,
    max = 10
  }: {
    label: string;
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
  }) => (
    <div className="flex items-center justify-between py-3">
      <span className="text-gray-700 font-medium">{label}</span>
      <div className="flex items-center gap-3">
        <button
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
          </svg>
        </button>
        <span className="w-8 text-center font-semibold text-gray-800">{value}</span>
        <button
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
    </div>
  );

  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Rooms and guests</h3>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="space-y-1 mb-6">
        <Counter
          label="Rooms"
          value={rooms}
          onChange={setRooms}
          min={1}
          max={5}
        />
        <Counter
          label="Adults"
          value={adults}
          onChange={setAdults}
          min={1}
          max={10}
        />
        <Counter
          label="Children"
          value={children}
          onChange={setChildren}
          min={0}
          max={10}
        />
      </div>

      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-600">
          {rooms} room{rooms > 1 ? 's' : ''}, {adults + children} guest{(adults + children) > 1 ? 's' : ''}
        </div>
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};