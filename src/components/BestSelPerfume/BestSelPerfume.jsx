import { useEffect, useState } from "react";
import BestPerfume from "./BestPerfume";
import Modal from "../Modal/Modal";

const BestSelPerfume = () => {
  const [bestPerfumes, setBestPerfumes] = useState([]);
  const [id, setId] = useState("");
  const [selectedPerfume, setSelectedPerfume] = useState({});
  const [seeMore, setSeeMore] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSeeMore = () => {
    setSeeMore(true);
  };
  useEffect(() => {
    fetch("http://localhost:5000/bestPerfume")
      .then((res) => res.json())
      .then((data) => setBestPerfumes(data));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/bestPerfume/${id}`)
      .then((res) => res.json())
      .then((data) => setSelectedPerfume(data));
  }, [id]);

  return (
    <div className="md:mt-24">
      <h1 className="text-center font-semibold text-3xl">Best Seller</h1>
      <h3 className="text-center font-serif">Best Seller Product This Week!</h3>
      <div className="md:grid grid-cols-4 gap-10 mt-10">
        {bestPerfumes.slice(0, seeMore ? 16 : 12).map((perfume) => (
          <BestPerfume
            key={perfume._id}
            perfume={perfume}
            setId={setId}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          ></BestPerfume>
        ))}
      </div>

      {!seeMore && (
        <button
          onClick={handleSeeMore}
          className="text-[#1979a1] mx-auto block font-semibold text-xl mt-10"
        >
          see more
        </button>
      )}

      <Modal
        selectedPerfume={selectedPerfume}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      ></Modal>
    </div>
  );
};

export default BestSelPerfume;
