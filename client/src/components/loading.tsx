const Loading = () => {
  return (
    <div className={`fixed z-[1000] inset-0 flex flex-col items-center justify-center bg-gray-100 `}>
    <svg className="animate-spin h-24 w-24 md:h-32 md:w-32 text-blue-600 mb-4" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
    </svg>
    <h1 className="text-gray-800 text-2xl md:text-3xl font-bold">Loading...</h1>
    <p className="text-gray-600 mt-2 text-center px-4 md:px-0">Please wait while we fetch your data.</p>
</div>
  )
}

export default Loading;