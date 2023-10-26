import { useEffect, useState } from "react";
import SingleShop from "./SingleShop";

const Shop = () => {
  const [bestPerfumes, setBestPerfumes] = useState([]);
  const [filteredPerfumes, setFilteredPerfumes] = useState([]);
  const [rememberMe, setRememberMe] = useState(false);
  const [selectedOption, setSelectedOption] = useState('lowest')
  const [searchText, setSearchText] = useState("")
  const [priceFilters, setPriceFilters] = useState({
    low: false,
    medium: false,
    high: false,
  });
  const options = ["Price(lowest)", "Price(highest)"];

  useEffect(() => {
    fetch("https://perfume-ecommerce-server-1k4m3oy32-wdsayeed.vercel.app/shop")
      .then((res) => res.json())
      .then((data) => {
        setBestPerfumes(data);
        setFilteredPerfumes(data); // Initialize the filtered list with all products
      });
  }, []);


  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter') {
      // Perform the search here, e.g., update the filteredPerfumes based on the search query
      // You can reuse your existing code for fetching data with the search query
      fetch(`https://perfume-ecommerce-server-1k4m3oy32-wdsayeed.vercel.app/jobSearchByTitle/${searchText}`)
        .then((res) => res.json())
        .then((data) => {
          setFilteredPerfumes(data);
        });
    }
  };

  const handleCategoryFilter = (category) => {
    if (category === "All") {
      setFilteredPerfumes(bestPerfumes); // Show all products
    } else {
      const filteredItems = bestPerfumes.filter(
        (item) => item.category === category
      );
      setFilteredPerfumes(filteredItems);
    }
  };

  const onOptionChangeHandler = (event) => {

    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    const queryParams =
      selectedValue === "Price(lowest)" ? "lowest" : "highest";

    fetch(`https://perfume-ecommerce-server-1k4m3oy32-wdsayeed.vercel.app/shop?sortBy=${queryParams}`)
      .then((res) => res.json())
      .then((data) => {
        setFilteredPerfumes(data);
      });
  };


  const handlePriceFilterChange = (filterType) => {
    setPriceFilters({
      ...priceFilters,
      [filterType]: !priceFilters[filterType],
    });

    fetch(`https://perfume-ecommerce-server-1k4m3oy32-wdsayeed.vercel.app/shop?sortBy=${selectedOption}&priceFilters=${filterType}`)
    .then((res) => res.json())
    .then((data) => {
      setFilteredPerfumes(data);
    });
  };

  
  // const applyFilters = () => {
  //   const filteredItems = bestPerfumes.filter((item) => {
  //     if (priceFilters.low && item.price >= 50 && item.price <= 100) {
  //       return true;
  //     }
  //     if (priceFilters.medium && item.price > 100 && item.price <= 500) {
  //       return true;
  //     }
  //     if (priceFilters.high && item.price > 500 && item.price <= 1000) {
  //       return true;
  //     }
  //     return false;
  //   });
  //   setFilteredPerfumes(filteredItems);
  // };

  // useEffect(() => {
  //   applyFilters();
  // }, [priceFilters]);

  return (
    <div className="mt-24  max-w-[1620px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 py-7">
      <div className="grid md:grid-flow-col gap-4 mt-10">
        <div className="row-span-3 px-4 ">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={handleSearchKeyDown}
            type="text"
            placeholder="Search here"
            className="input input-bordered w-full max-w-xs"
          />
          <div className="mt-5">
            <h3 className="font-medium text-lg">Category</h3>
            <p
              onClick={() => handleCategoryFilter("All")}
              className="cursor-pointer"
            >
              All
            </p>
            <p
              onClick={() => handleCategoryFilter("men")}
              className="cursor-pointer"
            >
              Men
            </p>
            <p
              onClick={() => handleCategoryFilter("women")}
              className="cursor-pointer"
            >
              Women
            </p>
          </div>
          <div className="flex flex-col gap-3 mt-10">
            <div className="form-control">
              <label className=" flex  item-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={priceFilters.low}
                  onChange={() => handlePriceFilterChange("low")}
                  className="checkbox checkbox-primary"
                />
                <span className="label-text">$50 - $100</span>
              </label>
            </div>
            <div className="form-control">
              <label className="flex  item-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={priceFilters.medium}
                  onChange={() => handlePriceFilterChange("medium")}
                  className="checkbox checkbox-primary"
                />
                <span className="label-text">$100 - $500</span>
              </label>
            </div>
            <div className="form-control">
              <label className="flex item-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={priceFilters.high}
            onChange={() => handlePriceFilterChange("high")}
                  className="checkbox checkbox-primary"
                />
                <span className="label-text">$500 - $1000</span>
              </label>
            </div>
          </div>
        </div>
        <div className="col-span-2 py-2">
          <div className="flex justify-between px-3">
            <div></div>
            <div className="-ml-36">
              <p>
                <span className="font-medium">{filteredPerfumes.length}</span>{" "}
                total products
              </p>
            </div>
            <div>
              <select
                onChange={onOptionChangeHandler}
                className="border-0 p-2  cursor-pointer rounded-full drop-shadow-md bg-sky-200 w-32 duration-300 hover:bg-yellow-400 focus:bg-sky-200 "
              >
                <option>Sort by price</option>
                {options.map((option, index) => {
                  return <option key={index}>{option}</option>;
                })}
              </select>
            </div>
          </div>
        </div>
        <div className=" row-span-2 col-span-2 ">
          <div className="md:grid grid-cols-4 gap-10">
            {filteredPerfumes.map((perfume) => (
              <SingleShop key={perfume._id} perfume={perfume}></SingleShop>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
