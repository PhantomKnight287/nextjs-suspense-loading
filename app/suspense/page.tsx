import { Suspense } from "react";
import { Loader2 } from "lucide-react";

function SuspensePage() {
  return (
    <>
      <span className="text-2xl font-medium">
        Fetching Todo, this can take a while
      </span>
      <Suspense
        fallback={
          <>
            <div className="flex flex-col items-center justify-center w-full h-full">
              <Loader2 className="w-10 h-10 text-blue-500 animate-spin" />
            </div>
          </>
        }
      >
        <DataFetchingComponent />
      </Suspense>
    </>
  );
}

export default SuspensePage;

async function DataFetchingComponent() {
  const req = await fetch("https://jsonplaceholder.typicode.com/todos", {
    cache: "no-cache",
  });
  const data = await req.json();
  const randomTodo = data[Math.floor(Math.random() * data.length)];

  return (
    <>
      <div>{JSON.stringify(randomTodo)}</div>
    </>
  );
}
