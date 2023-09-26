import "./Form.css";

const Form = ({ onAddActivity }) => {
    return (
        <form className="form-activity" onSubmit={onAddActivity}>
            <label htmlFor="activity">
                <h2>Activity</h2>
            </label>
            <input
                type="text"
                name="activity"
                id="activity"
                placeholder="What would you like to do?"
            />
            <div className="check-box">
                <label htmlFor="weather">Good weather activity:</label>
                <input type="checkbox" name="isForGoodWeather" id="weather" />
            </div>
            <button type="submit">Add activity</button>
        </form>
    );
};

export default Form;
