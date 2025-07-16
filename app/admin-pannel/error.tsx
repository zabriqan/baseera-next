'use client';

export default function Error({
   error,
   reset,
}: {
   error: Error & { digest?: string };
   reset: () => void;
}) {
   return (
      <main className="flex h-full flex-col items-center justify-center">
         <h2 className="text-center font-thin text-2xl">Something went wrong!</h2>
         <button
            className="mt-4 rounded-md bg-primary px-4 py-2 text-sm text-white transition cursor-pointer hover:bg-primary-hover"
            onClick={
               // Attempt to recover by trying to re-render the route
               () => reset()
            }
         >
            Try again
         </button>
      </main>
   );
}