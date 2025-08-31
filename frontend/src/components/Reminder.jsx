// components/ReminderModal.jsx
export default function Reminder({ isOpen, onClose, message = "Reminder" }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-gray-200 rounded-2xl pt-8 px-8 pb-4 w-full max-w-sm">
        <div className="text-center mb-4">
          <h1 className="text-gray-700 text-xl font-bold font-normal">Reminder</h1>
        </div>
        <div className="text-center mb-8">
          <h2 className="text-gray-700 text-xl font-normal">{message}</h2>
        </div>
        <div className="border-b-2 border-gray-400 mb-4 -mx-8"></div>
        <div className="text-center">
          <button 
            onClick={onClose}
            className="text-blue-500 text-lg font-normal hover:text-blue-600"
          >
            Okay
          </button>
        </div>
      </div>
    </div>
  );
}