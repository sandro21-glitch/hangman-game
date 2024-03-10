const LettersBoard = () => {
  const alphabetArray = Array.from({ length: 26 }, (_, index) =>
    String.fromCharCode("A".charCodeAt(0) + index)
  );

  return (
    <div className="flex gap-5 flex-wrap justify-center items-center">
      {alphabetArray.map((a, index) => {
        return (
          <button
            type="button"
            key={index}
            className="w-[7rem] h-[5rem] bg-white rounded-[1rem]
             flex justify-center items-center text-[#261676]
              text-[3rem] font-medium hover:text-white hover:bg-primary-blue cursor-pointer transition-colors ease-in duration-150"
          >
            {a}
          </button>
        );
      })}
    </div>
  );
};

export default LettersBoard;
