import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    const handleClickBackToHome = () => {
        navigate('/');
    }

    return ( 
        <section id="404" className="flex flex-grow justify-center content-center text-center">
            <div className="my-auto">
                <h1 className="text-3xl text-gray-900 pb-12">404 - Page not found</h1>
                <p className="pb-4">Sorry, this page cannot be found!</p>
                <button onClick={handleClickBackToHome} className="rounded-3xl text-white bg-sky-600 hover:bg-sky-500 transition duration-500 mx-auto px-8 py-2 mb-8 font-medium">Back to Home</button>    
            </div>
        </section>
     );
}
 
export default NotFound;