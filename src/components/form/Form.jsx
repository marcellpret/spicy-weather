import "./Form.css";

const Form = ({ onAddActivity, alertMessage, setAlarmMessage }) => {
    return (
        <form className="form-activity" onSubmit={onAddActivity}>
            <div className="activity-input">
                <label htmlFor="activity">
                    <h2>Activity</h2>
                </label>
                <input
                    onChange={() => setAlarmMessage(null)}
                    type="text"
                    name="activity"
                    id="activity"
                    placeholder="What would you like to do?"
                />
                {alertMessage && <p className="alert">{alertMessage}</p>}
            </div>
            <div className="check-box">
                <label htmlFor="weather">Good weather activity:</label>
                <input type="checkbox" name="isForGoodWeather" id="weather" />
            </div>
            <button type="submit">Add activity</button>
        </form>
    );
};

export default Form;
