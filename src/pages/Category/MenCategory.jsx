import { useEffect, useState } from "react";
import CategorySingle from "./CategorySingle";
import Modal from "../../components/Modal/Modal";
import './men.css'

const MenCategory = () => {
  const [menCategory, setCategory] = useState([]);
  const [selectedPerfume, setSelectedPerfume] = useState({});
  const [id, setId] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch("https://perfume-ecommerce-server-1k4m3oy32-wdsayeed.vercel.app/category")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const categoryData = data.filter((item) => item.category === "men");
        setCategory(categoryData);
      });
  }, []);

  useEffect(() => {
    fetch(`https://perfume-ecommerce-server-1k4m3oy32-wdsayeed.vercel.app/bestPerfume/${id}`)
      .then((res) => res.json())
      .then((data) => setSelectedPerfume(data));
  }, [id]);
  return (
    <>
      <div className="w-full h-[530px] men-cover"></div>
      <div className="md:grid grid-cols-4 gap-10 mt-10 max-w-[1620px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 md:py-20">
        {menCategory.map((item) => (
          <CategorySingle
            key={item._id}
            item={item}
            setId={setId}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          ></CategorySingle>
        ))}
        <Modal
          selectedPerfume={selectedPerfume}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        ></Modal>
      </div>
    </>
  );
};
export default MenCategory;
