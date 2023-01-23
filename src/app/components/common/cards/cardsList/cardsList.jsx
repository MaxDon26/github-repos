import React, { useEffect, useState } from "react";
import Pagination from "../../pagination";
import Card from "../card/card";
import { paginate } from "../../../../utils/paginate";
import SelectField from "../../form/selectField";
import localStorageService from "../../../../services/localStorrage.service";

const CardsList = ({ items }) => {
  const [currentPage, setCurrentPage] = useState(
    localStorageService.getCurrentPage() || 1
  );
  const [pageSize, setPageSize] = useState(6);

  const count = items.length;
  const projectsCrop = paginate(items, currentPage, pageSize);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
    localStorageService.setCurrentPage(pageIndex);
  };

  useEffect(() => {
    if (pageSize > projectsCrop.length) {
      handlePageChange(1);
    }
  }, [pageSize]);

  return (
    <>
      <div className="cards__list">
        {projectsCrop?.length > 0 &&
          projectsCrop.map((project) => (
            <Card id={project.id} key={project.id} />
          ))}
      </div>
      <div className="d-flex justify-content-between mt-3">
        <SelectField
          value={pageSize}
          onChange={(e) => setPageSize(e)}
          options={[10, 25, 50]}
        />
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default CardsList;
