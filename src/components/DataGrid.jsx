function DataGrid({ data, loading, error }) {
  const colors = [
    "bg-green-400",
    "bg-purple-500",
    "bg-pink-500",
    "bg-blue-400",
    "bg-yellow-400",
    "bg-indigo-500",
    "bg-teal-400",
    "bg-red-500",
  ];

  return (
    <div className="px-6 py-4">
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="grid grid-cols-4 gap-6">
        {Array.isArray(data) &&
          data.slice(0, 20).map((item, index) => {
            const bgColor = colors[index % colors.length];

            return (
              <div key={item.id} className="border border-white p-3">
                
                {/* Colored box instead of image */}
                <div className={`w-full h-40 ${bgColor}`}></div>

                {/* Title */}
                <p className="text-sm mt-2 text-center text-white">
                  Photo #{item.id}
                </p>

              </div>
            );
          })}
      </div>
    </div>
  );
}

export default DataGrid;