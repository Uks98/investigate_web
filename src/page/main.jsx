import '../css/main.css'
import ServeyPage from './servey';
const MainPage = () => {
    return (
        <div className="mainPage">
        <nav>
            <ul>
                <li><a href="#servey">Survey</a></li>
                <li><a href="#chart">Chart</a></li>
                <li><a href="#login">Login</a></li>
            </ul>
        </nav>
        <ServeyPage />
        </div>
    );
}
export default MainPage;