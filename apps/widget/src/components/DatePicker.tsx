import { useState } from 'react';

interface DatePickerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (checkIn: Date, checkOut: Date) => void;
  initialCheckIn?: Date;
  initialCheckOut?: Date;
}

export const DatePicker = ({ isOpen, onClose, onSelect, initialCheckIn, initialCheckOut }: DatePickerProps) => {
  const [checkIn, setCheckIn] = useState(initialCheckIn || new Date());
  const [checkOut, setCheckOut] = useState(initialCheckOut || new Date(Date.now() + 2 * 24 * 60 * 60 * 1000));

  if (!isOpen) return null;

  const handleConfirm = () => {
    onSelect(checkIn, checkOut);
    onClose();
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 z-50 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Select dates</h3>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Check-in</label>
          <input
            type="date"
            value={checkIn.toISOString().split('T')[0]}
            onChange={(e) => setCheckIn(new Date(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <p className="text-sm text-gray-500 mt-1">{formatDate(checkIn)}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Check-out</label>
          <input
            type="date"
            value={checkOut.toISOString().split('T')[0]}
            onChange={(e) => setCheckOut(new Date(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <p className="text-sm text-gray-500 mt-1">{formatDate(checkOut)}</p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-600">
          {Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24))} nights
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
            Confirm dates
          </button>
        </div>
      </div>
    </div>
  );
};