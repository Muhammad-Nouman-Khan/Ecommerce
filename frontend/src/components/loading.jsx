const Spinner = () => (
  <div className="flex flex-col items-center justify-center py-20">
    <svg
      className="animate-spin h-12 w-12 text-blue-500 mb-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v8z"
      ></path>
    </svg>
    <span className="text-white text-lg font-semibold">Loading...</span>
  </div>
);

export default Spinner;
