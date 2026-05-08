import Card from "../components/cardComponent/card";

const ShowNews = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card refresh={false} />
    </div>
  );
};

export default ShowNews;
