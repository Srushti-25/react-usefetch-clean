import useFetch from "./hooks/useFetch";

function App() {
  const photos = useFetch("https://jsonplaceholder.typicode.com/photos");
  const posts = useFetch("https://jsonplaceholder.typicode.com/posts");
  const users = useFetch("https://jsonplaceholder.typicode.com/users");

  const colors = [
    "bg-red-500",
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-orange-500",
  ];

  
  const isLoading = photos.loading || posts.loading || users.loading;
  const isError = photos.error || posts.error || users.error;

 
 if (isLoading) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      
      {/* Spinner */}
      <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin mb-4"></div>

      {/* Loading Text */}
      <p className="text-lg">Loading data...</p>

    </div>
  );
}
 
  if (isError) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black text-white">
        <h1 className="text-2xl text-red-500">
          Error: Failed to fetch data
        </h1>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen text-white p-6 space-y-10">

      {/* 🔥 PHOTOS */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-center">Photos</h2>

        <div className="grid grid-cols-4 gap-4">
          {photos.data &&
            photos.data.slice(0, 8).map((item, index) => {
              const color = colors[index % colors.length];

              return (
                <div
                  key={item.id}
                  className="border p-2 rounded-lg hover:scale-105 transition duration-300"
                >
                  <div className={`w-full h-40 mb-2 ${color}`}>
                    {/* <img
                      src={item.thumbnailUrl}
                      alt=""
                      className="w-full h-full object-cover"
                    /> */}
                  </div>
                  <p className="text-sm">{item.title}</p>
                </div>
              );
            })}
        </div>
      </div>

      {/* 🔥 POSTS */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-center">Posts</h2>

        <div className="grid grid-cols-4 gap-4">
          {posts.data &&
            posts.data.slice(0, 8).map((item, index) => {
              const color = colors[index % colors.length];

              return (
                <div
                  key={item.id}
                  className="border p-2 rounded-lg hover:scale-105 transition duration-300"
                >
                  <div className={`w-full h-40 mb-2 ${color}`}></div>
                  <p className="text-sm">{item.title}</p>
                </div>
              );
            })}
        </div>
      </div>

      {/* 🔥 USERS */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-center">Users</h2>

        <div className="grid grid-cols-4 gap-4">
          {users.data &&
            users.data.slice(0, 8).map((item, index) => {
              const color = colors[index % colors.length];

              return (
                <div
                  key={item.id}
                  className="border p-2 rounded-lg hover:scale-105 transition duration-300"
                >
                  <div className={`w-full h-40 mb-2 ${color}`}></div>
                  <p className="text-sm">{item.name}</p>
                </div>
              );
            })}
        </div>
      </div>

    </div>
  );
}

export default App;