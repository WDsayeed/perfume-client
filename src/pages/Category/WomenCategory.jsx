import { useEffect, useState } from "react";
import WomSingleCate from "./WomSingleCate";
import Modal from "../../components/Modal/Modal";
import womenCateCover from '../../assets/womenCatejpg.jpg'
import './Women.css'

const WomenCategory = () => {
  const [womenCategory, setWomenCate] = useState([]);
  const [selectedPerfume, setSelectedPerfume] = useState({});
  const [id, setId] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/category")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const categoryData = data.filter((item) => item.category === "women");
        setWomenCate(categoryData);
      });
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/bestPerfume/${id}`)
      .then((res) => res.json())
      .then((data) => setSelectedPerfume(data));
  }, [id]);

  return (
          <div>
                  <div className="w-full h-[530px] women-cover">
                          
                  </div>
                   <div className="md:grid grid-cols-4 gap-10 mt-10 max-w-[1620px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 md:py-20">
      {womenCategory.map((item) => (
        <WomSingleCate
          key={item._id}
          item={item}
          setId={setId}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        ></WomSingleCate>
      ))}
      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        selectedPerfume={selectedPerfume}
      ></Modal>
    </div>
   </div>
  );
};

export default WomenCategory;
