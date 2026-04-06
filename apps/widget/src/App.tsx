import { BookingWidget } from "@/src/containers";
import { Header } from '@/src/components';


function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <BookingWidget />
    </div>
  );
}

export default App;