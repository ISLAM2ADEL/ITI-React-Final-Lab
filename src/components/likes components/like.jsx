const Like = ({ isActive, onClick }) => {
  return (
    <>
      <i
        style={{
          ...thumbStyle.Thumb,
          color: isActive ? "green" : "inherit",
          cursor: "pointer",
        }}
        className="fa-regular fa-thumbs-up"
        onClick={onClick}
      ></i>
    </>
  );
};

export default Like;

const thumbStyle = {
  Thumb: {
    margin: "0px 20px 0px 0px",
  },
};
