import Input from "../inputComponent/input";
import Card from "../cardComponent/card";

const Body = ({ onAddNews, refresh }) => {
  return (
    <div style={DivStyles.div}>
      <Input onAddNews={onAddNews} />
      <Card refresh={refresh} />
    </div>
  );
};

export default Body;

const DivStyles = {
  div: {
    backgroundColor: "#F8FAFC",
    minHeight: "500px",
    padding: "50px 50px",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
};
