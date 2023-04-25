export default function Calculator() {
  return (
    <div className="flex flex-col items-center justify-center gap-1  w-full border border-gray-400">
      <div className="w-full bg-gray-200 p-8">
        <h4 className="text-end text-3xl">0</h4>
      </div>
      <div className="flex w-full justify-between gap-1">
        <button
          type="button"
          className="w-1/4 h-16 shadow-md border-gray-900 bg-gray-400"
        >
          AC
        </button>
        <button
          type="button"
          className="w-1/4 h-16 shadow-md border-gray-900 bg-gray-400"
        >
          +/-
        </button>
        <button
          type="button"
          className="w-1/4 h-16 shadow-md border-gray-900 bg-gray-400"
        >
          %
        </button>
        <button
          type="button"
          className="w-1/4 h-16 shadow-md border-gray-900 bg-yellow-500"
        >
          ÷
        </button>
      </div>
      <div className="flex w-full justify-between gap-1">
        <button
          type="button"
          className="w-1/4 h-16 shadow-md border-gray-900 bg-gray-200"
        >
          7
        </button>
        <button
          type="button"
          className="w-1/4 h-16 shadow-md border-gray-900 bg-gray-200"
        >
          8
        </button>
        <button
          type="button"
          className="w-1/4 h-16 shadow-md border-gray-900 bg-gray-200"
        >
          9
        </button>
        <button
          type="button"
          className="w-1/4 h-16 shadow-md border-gray-900 bg-yellow-500"
        >
          x
        </button>
      </div>
      <div className="flex w-full justify-between gap-1">
        <button
          type="button"
          className="w-1/4 h-16 shadow-md border-gray-900 bg-gray-200"
        >
          4
        </button>
        <button
          type="button"
          className="w-1/4 h-16 shadow-md border-gray-900 bg-gray-200"
        >
          5
        </button>
        <button
          type="button"
          className="w-1/4 h-16 shadow-md border-gray-900 bg-gray-200"
        >
          6
        </button>
        <button
          type="button"
          className="w-1/4 h-16 shadow-md border-gray-900 bg-yellow-500"
        >
          -
        </button>
      </div>
      <div className="flex w-full justify-between gap-1">
        <button
          type="button"
          className="w-1/4 h-16 shadow-md border-gray-900 bg-gray-200"
        >
          1
        </button>
        <button
          type="button"
          className="w-1/4 h-16 shadow-md border-gray-900 bg-gray-200"
        >
          2
        </button>
        <button
          type="button"
          className="w-1/4 h-16 shadow-md border-gray-900 bg-gray-200"
        >
          3
        </button>
        <button
          type="button"
          className="w-1/4 h-16 shadow-md border-gray-900 bg-yellow-500"
        >
          +
        </button>
      </div>
      <div className="flex w-full justify-between gap-1">
        <button
          type="button"
          className="w-1/2 h-16 shadow-md border-gray-900 bg-gray-200"
        >
          0
        </button>
        <button
          type="button"
          className="w-1/4 h-16 shadow-md border-gray-900 bg-gray-200"
        >
          .
        </button>
        <button
          type="button"
          className="w-1/4 h-16 shadow-md border-gray-900 bg-yellow-500"
        >
          =
        </button>
      </div>
    </div>
  );
}
