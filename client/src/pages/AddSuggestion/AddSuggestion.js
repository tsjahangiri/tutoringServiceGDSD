import { Form, Button } from "react-bootstrap";
import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentUser } from "../../core/selectors/user";
import Page from "../../components/page/Page";
import './AddSuggestion.css';
import axios from "axios";
import getFeedback from '../../core/endpoints'
function AddSuggestion() {

    const suggestionRef = useRef(null);
    const descriptionRef = useRef(null);

    const user = useSelector(getCurrentUser);
    
    const submitSuggestion = () => {
        const Suggestion = {
            Suggestion: suggestionRef.current.value,
            Description: descriptionRef.current.value,
            UserId: user.id
        };
        console.log("Suggestion added = ",Suggestion);
        axios.post(getFeedback, Suggestion);
      };
   return (
   <>
    <Page></Page>
    <div className="suggestion-page">
      <div className="suggestion-content">
        <h1>Add Suggestion</h1>
        <Form>
          <br />
          <Form.Control type="text" ref={suggestionRef} placeholder="Suggestion" />
          <br />
          <br />
          <Form.Control
          ref={descriptionRef}
            as="textarea"
            rows={3}
            placeholder="Description"
          />
          <Button className="btn btn-success" variant="primary" onClick={submitSuggestion} type="submit">
            Save
          </Button>
        </Form>
      </div>
    </div>
   </>
      
   );
}
export default AddSuggestion;