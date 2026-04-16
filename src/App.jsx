import useFetch from "./hooks/useFetch";
import DataGrid from "./components/DataGrid";

function App() {
  const photos = useFetch("https://jsonplaceholder.typicode.com/photos");

  return (
    <>
    <div className="bg-black min-h-screen text-white">
      <h1 className="text-center text-3xl font-bold py-5">
        Photos
      </h1>

      <DataGrid title="Photos" {...photos} />
    </div>
    </>
  );
  
}

export default App;