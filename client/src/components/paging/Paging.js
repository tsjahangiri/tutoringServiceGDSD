// @flow
import React from "react";
import { Pagination } from "react-bootstrap";

type Props = {
  itemCount: number,
  pageSize?: number,
  className: string,
};

export default function Paging(props: Props) {
  const { itemCount, pageSize = 5, className } = props;

  if (itemCount <= pageSize) {
    return null;
  }

  let active = 1; // TODO: Implement logic of active pagination tab.

  const getPaginationItems = () => {
    let paginationItems = [];
    let pageNo = 1;
    let pageCount = itemCount / pageSize;

    while (pageNo <= pageCount) {
      paginationItems.push(
        <Pagination.Item key={pageNo} active={pageNo === active}>
          {pageNo}
        </Pagination.Item>
      );
      pageNo++;
    }

    return paginationItems;
  };

  return <Pagination className={className}>{getPaginationItems()}</Pagination>;
}
