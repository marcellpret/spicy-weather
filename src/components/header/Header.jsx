import "./Header.css";

const Header = ({ weather }) => {
    return (
        <header>
            <h1>
                Spicy <span>🌶️</span> Weather
            </h1>
            {weather ? (
                <h2>
                    <span>{weather?.condition}</span> {weather?.temperature}{" "}
                    <small>°C</small>
                </h2>
            ) : (
                <h2>Loading Weather...</h2>
            )}
        </header>
    );
};

export default Header;
