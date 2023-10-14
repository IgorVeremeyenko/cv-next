
const PercentageCircle = ({ percent }) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - percent / 100);

  return (
    <div className="w-32 h-32 relative">
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
          stroke="rgba(209, 213, 219, 1)"
          strokeWidth="8"
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="transparent"
          stroke="rgba(59, 130, 246, 1)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          className="transition-all duration-1000 ease-in-out stroke-myYellow"
        />
      </svg>
      <div className="w-full h-full text-2xl font-bold absolute top-0 left-0 flex items-center justify-center">
        {percent}%
      </div>
    </div>
  );
  };
  
  export default PercentageCircle;