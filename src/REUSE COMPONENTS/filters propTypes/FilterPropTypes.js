import React from "react";
import propTypes from "prop-types";

const FilterPropTypes = ({ value, filters, placeholder }) => {
  return (
    <div>
      {/*container */}
      <select className="w-[110px] mt-4 md:mt-[0] border-[4px]" name="">
        <option>{placeholder}</option>
        {filters.map((data, key) => (
          <option key={key}>{data.label}</option>
        ))}
      </select>
    </div>
  );
};

FilterPropTypes.propTypes = {
  value: propTypes.string,
  filters: propTypes.array.isRequired,
  placeholder: propTypes.string,
};

FilterPropTypes.defaultProps = {
  value: "",
  placeholder: "",
};

export default FilterPropTypes;
