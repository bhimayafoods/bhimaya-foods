function Offline() {
  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-[9999]">
      <div className="text-center px-6">
        <h2 className="text-2xl font-bold text-primary mb-4">
          ⚠ No Internet Connection
        </h2>
        <p className="text-gray-600 mb-6">
          Please check your internet connection and try again.
        </p>

        <button
          onClick={() => window.location.reload()}
          className="bg-primary text-white px-6 py-3 rounded-full hover:opacity-90 transition"
        >
          Retry
        </button>
      </div>
    </div>
  );
}

export default Offline;