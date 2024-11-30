const Loading = () => {
  const text:string = 'Loading...'
  return (
    <div className="flex flex-col items-center fixed z-[300] inset-0 justify-center min-h-screen bg-gray-100">
    <div className="lds-hourglass"></div>
    <p className="text-lg font-bold flex space-x-1">
        {text.split('').map((char, index) => (
          <span
            key={index}
            className="inline-block opacity-0 animate-fade-in"
            style={{
              animationDelay: `${index * 0.2}s`, // Delay each letter's animation
            }}
          >
            {char}
          </span>
        ))}
      </p>
    </div>
  );
};

export default Loading;
