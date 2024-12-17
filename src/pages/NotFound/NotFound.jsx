import './NotFound.scss';

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>404</h1>
            <p>Oops! The page you are looking for does not exist.</p>
            <a href="/" className="back-home">Go back to Home</a>
        </div>
    );
};

export default NotFound;
    