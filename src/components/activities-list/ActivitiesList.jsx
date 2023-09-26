import "./ActivitiesList.css";

const ActivitiesList = ({ activities, onDeleteActivity }) => {
    return (
        <section className="activities">
            {activities.length === 0 ? (
                <h2>No activities</h2>
            ) : (
                <>
                    <h2>
                        Activities for{" "}
                        {activities[0].isForGoodWeather
                            ? "Good Weather"
                            : "Bad Weather"}
                    </h2>
                    <div className="activities_list">
                        {activities?.map((activity) => (
                            <h3 key={activity.id}>
                                {activity.activity}
                                <span
                                    onClick={() =>
                                        onDeleteActivity(activity.id)
                                    }
                                >
                                    ❌
                                </span>
                            </h3>
                        ))}
                    </div>
                </>
            )}
        </section>
    );
};

export default ActivitiesList;
