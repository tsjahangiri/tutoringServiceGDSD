import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button } from "react-bootstrap";
import "./VotingPoll.css";
import Page from "../../../components/page/Page";
import { savePoll } from "../../../core/actionCreators/votingPoll";
import { getCurrentUser } from "../../../core/selectors/user";

function VotingPoll(props) {
  const dispatch = useDispatch();

  const subjectRef = useRef(null);
  const levelRef = useRef(null);
  const descriptionRef = useRef(null);

  const user = useSelector(getCurrentUser);
  console.log("userid" + user );

  //function to save the qualification
  const submitPollResult = () => {
    const pollResult = {
      Id: user.id,
      CourseName: subjectRef.current.value,
      Description: descriptionRef.current.value,
      Level: levelRef.current.value,
    };
    dispatch(savePoll(pollResult));
  };

  return (
    <div>
    <Page></Page>
    <div className="qualification-page">
      <div className="qualification-content">
        <h1>Create Poll</h1>
        <Form>
            <div className="div1">
                <label className="labelS">Subject Name</label>                
                <Form.Control type="text" ref={subjectRef} placeholder="Subject" />
            </div>
            
            <div>
                <label className="labelS">Level</label>     
                <select name="level" ref={levelRef}>
                    <option value="Bachelor">Bachelor</option>
                    <option value="Masters">Masters</option>
                </select>           
            </div>

            <div>
                <label className="labelS">Description</label>                
                <Form.Control
                    ref={descriptionRef}
                    as="textarea"
                    rows={3}
                    placeholder="Description"
                />
            </div>

            <Button className="btn btn-success" variant="primary" onClick={submitPollResult} type="submit">
                Save
            </Button>
        </Form>
      </div>
    </div>
    </div>
  );
}

export default VotingPoll;
