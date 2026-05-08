const Dislike = ({ isActive, onClick }) => {
  return (
    <>
      <i
        style={{
          color: isActive ? "red" : "inherit",
          cursor: "pointer",
        }}
        className="fa-regular fa-thumbs-down"
        onClick={onClick}
      ></i>
    </>
  );
};

export default Dislike;
