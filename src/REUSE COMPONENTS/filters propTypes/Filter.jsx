import React, { useState } from "react";
import FilterPropTypes from "./FilterPropTypes";
import { MdFilterList } from "react-icons/md";

const Filter = () => {
  const [show, setShow] = useState(false);
  const changeClick = () => setShow(!show);

  return (
    <div>
      <main className="md:flex cursor-pointer items-center justify-between mt-[50px] border-4 pt-[15px] bg-gray-900">
        {/*filter logo-content1 */}
        <article
          onClick={changeClick}
          className="flex items-center ml-[10px] mb-[15px] rounded-[5px] bg-gray-400 justify-evenly w-[100px]"
        >
          <p>Filter</p>
          <MdFilterList />
        </article>

        {/*filter content2 */}
        <div
          className={
            !show
              ? "hidden"
              : "grid grid-cols-3 mr-[10px] mb-[15px] md:flex items-center justify-between md:w-[820px]"
          }
        >
          {/*min selector */}
          <article>
            <FilterPropTypes
              filters={[
                { value: 1, label: "100, 000" },
                { value: 2, label: "150, 000" },
                { value: 3, label: "200, 000" },
                { value: 4, label: "250, 000" },
                { value: 5, label: "300, 000" },
                { value: 6, label: "350, 000" },
                { value: 7, label: "400, 000" },
              ]}
              placeholder="min"
            />
          </article>
          {/*max selector */}
          <article>
            <FilterPropTypes
              filters={[
                { value: 1, label: "500, 000" },
                { value: 2, label: "550, 000" },
                { value: 3, label: "600, 000" },
                { value: 4, label: "750, 000" },
                { value: 5, label: "800, 000" },
                { value: 6, label: "850, 000" },
                { value: 7, label: "1000, 000" },
              ]}
              placeholder="max"
            />
          </article>
          {/*beds selector */}
          <article>
            <FilterPropTypes
              filters={[
                { value: 1, label: "1" },
                { value: 2, label: "2" },
                { value: 3, label: "3" },
                { value: 4, label: "4" },
                { value: 5, label: "5" },
              ]}
              placeholder="bedrooms"
            />
          </article>
          {/*button */}
          <button className="bg-green-400 md:px-2 rounded-full mt-[10px] text-white">
            result
          </button>
        </div>
      </main>
    </div>
  );
};

export default Filter;
