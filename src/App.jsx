import { useEffect, useState } from "react";
import Form from "./components/form/Form";
import { uid } from "uid";
import useLocalStorage from "use-local-storage";

import "./App.css";

import ActivitiesList from "./components/activities-list/ActivitiesList";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const App = () => {
    const [activities, setActivities] = useLocalStorage("activities", []);
    const [weather, setWeather] = useState(null);
    const [alertMessage, setAlertMessage] = useState(null);

    const isGoodWeather = weather?.isGoodWeather;

    // Fetch weather data from the API and update it every 5 seconds
    useEffect(() => {
        const fetchWeatherData = async () => {
            const weather = await fetch(
                "https://example-apis.vercel.app/api/weather"
            ).then((res) => res.json());
            setWeather(weather);
        };

        fetchWeatherData();

        const interval = setInterval(() => {
            fetchWeatherData();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    // Function to add an activity including a random id and the information from the form
    const addActivity = (e) => {
        e.preventDefault();

        const form = e.target;

        if (!form.activity.value)
            return setAlertMessage("Please enter an activity");

        const activity = {
            id: uid(),
            activity: form.activity.value,
            isForGoodWeather: form.isForGoodWeather.checked,
        };

        setActivities((activities) => [...activities, activity]);

        form.reset();
        form.activity.focus();
    };

    // Function to delete an activity based on its id
    const deleteActivity = (id) => {
        setActivities((activities) => activities.filter((a) => a.id !== id));
    };

    // Filter activities based on weather
    const filteredActivities = activities.filter(
        (activity) => activity.isForGoodWeather === isGoodWeather
    );

    return (
        <div
            id="app"
            className={isGoodWeather ? "good-weather" : "bad-weather"}
        >
            <Header weather={weather} />
            <main>
                <Form
                    onAddActivity={addActivity}
                    alertMessage={alertMessage}
                    setAlarmMessage={setAlertMessage}
                />

                {weather ? (
                    <ActivitiesList
                        activities={filteredActivities}
                        onDeleteActivity={deleteActivity}
                    />
                ) : (
                    <h2>Loading Activities...</h2>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default App;
