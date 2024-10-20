const Card = ({ children }) => {
  return (
    <>
      <div className="py-2 px-2 w-fit bg-[#f8f8f85d] border rounded-md shadow">
        {children}
      </div>
    </>
  );
};

export default Card;
