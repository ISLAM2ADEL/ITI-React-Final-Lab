import { useState, useCallback } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import Input from "../components/inputComponent/input";

const AddNews = () => {
  const [refresh, setRefresh] = useState(false);

  const handleAddNews = useCallback((newsData) => {
    const newData = {
      title: newsData.title,
      description: newsData.descreption, // matching the typo in Input if any
      image: newsData.imageUrl,
      category: newsData.category,
      likes: 0,
      dislikes: 0,
    };

    axios.post("http://localhost:4000/data", newData)
      .then(() => {
        setRefresh((prev) => !prev);
        toast.success("News added successfully!");
      })
      .catch((err) => {
        console.error("Error adding news:", err);
        toast.error("Failed to add news");
      });
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Input onAddNews={handleAddNews} />
    </div>
  );
};

export default AddNews;
