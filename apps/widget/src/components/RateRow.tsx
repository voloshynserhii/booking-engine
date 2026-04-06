import { RatePlan, Room } from '@/src/types';

interface RateRowProps {
  ratePlan: RatePlan;
  room: Room;
  onSelect?: (ratePlan: RatePlan) => void;
}

export const RateRow = ({ ratePlan, room, onSelect }: RateRowProps) => {
  // Calculate minimum price from room prices (simplified - in real app would consider date range)
  const minPrice = room.prices?.reduce((min, price) => Math.min(min, price.price), Infinity) || 99;

  const handleSelect = () => {
    onSelect?.(ratePlan);
  };

  return (
    <div className="flex justify-between items-center p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200">
      <div className="flex-1">
        <h4 className="font-semibold text-gray-800 text-base">{ratePlan.name}</h4>
        <div className="text-sm text-gray-600 mt-1 flex items-center gap-2">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            ratePlan.mealPlan === 'BREAKFAST' ? 'bg-orange-100 text-orange-700' :
            ratePlan.mealPlan === 'NONE' ? 'bg-gray-100 text-gray-700' :
            'bg-green-100 text-green-700'
          }`}>
            {ratePlan.mealPlan.replace(/_/g, ' ')}
          </span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
            ratePlan.isRefundable ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}>
            {ratePlan.isRefundable ? 'Refundable' : 'Non-refundable'}
          </span>
        </div>
        {ratePlan.description && (
          <p className="text-sm text-gray-500 mt-2">{ratePlan.description}</p>
        )}
      </div>
      <div className="text-right ml-4">
        <div className="text-lg font-bold text-blue-600">${minPrice}</div>
        <div className="text-xs text-gray-500 mb-2">per night</div>
        <button
          onClick={handleSelect}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Select Rate
        </button>
      </div>
    </div>
  );
};