import React from "react";
import { useSelector } from "react-redux";
import { ListGroup } from "react-bootstrap";
import pollList from "./pollList";
import { getPollById } from "../../../core/selectors/votingPoll";
import Page from "../../../../components/page/Page";

function showPoll(props) {
  var data = useSelector(getPollById);

  if (data === undefined) {
    return <div></div>;
  }

  return (
    <Page>
      <br />
      <ListGroup>
        {data?.map((item, i) => {
          return <pollList key={i} item={item} />;
        })}
      </ListGroup>
      <br />
    </Page>
  );
}

export default showPoll;
