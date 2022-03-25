import { getCurrentUser } from "../../core/selectors/user";
import Page from "../../components/page/Page";
import './feedback.css';
import axios from "axios";
import getFeedback from '../../core/endpoints'

export default AddSuggestion {
    const submitSuggestion = () => {
        const user = useSelector(getCurrentUser);
        const suggestionRef = useRef(null);
        let Suggestion = {
            UserId: user.id,
            Subject: suggestionRef.suggestionRef,
            Description: suggestionRef.descriptionRef
        };
    };
    
    axios.post(getFeedback, Suggestion);


    const renderFeedback = () => {
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
    };
}


