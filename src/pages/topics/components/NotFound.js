import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    const handleClickBackToHome = () => {
        navigate('/');
    }

    return ( 
        <div className='flex flex-col justify-center text-center lg:text-left md:justify-start'>
            <p className="mb-2 text-sm leading-6 font-semibold text-sky-500">404</p>
            <h1 className="text-3xl sm:text-3xl font-medium text-slate-800 pb-8">Page not found!</h1>
            <p>
                <button onClick={handleClickBackToHome} className="rounded-3xl text-white bg-sky-600 hover:bg-sky-500 transition duration-500 mx-auto px-8 py-2 mb-8 font-medium">Back to Home</button>    
            </p>
        </div>
    );
}
 
export default NotFound;