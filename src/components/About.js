import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    const handleClickBackToHome = () => {
        navigate('/');
    }

    return ( 
        <section id="404" className="flex-grow">
            <div className="text-center mx-auto pt-32">
                <h1 className="text-3xl text-gray-900 pb-12">About</h1>
                <p className="pb-4">Hi! My name is James and I built this website.</p>
                <p className="pb-4">I hope it servers as a quick lookup for the Go language.</p>
                <p className="pb-4">I hope it servers as a quick lookup for the Go language.</p>
                <p className="pb-4">You can check out my YouTube, LinkedIn and GitHub using the links in the footer.</p>
                
                <h1 className="text-3xl text-gray-900 py-12">Nerdy bit</h1>
                <p className="pb-4">I made this site to give me a practical learning experience with new tech.</p>
                <p className="pb-4">The frontend is powered by <b>React</b> and styled using the <b>Tailwind</b> framework.</p>
                <p className="pb-4"><b>Go</b> was used on the backend to provide and consume <b>RESTful APIs</b>.</p>
                <p className="pb-4">Selecting <b>NoSQL</b>, <b>MongoDB</b> stores all relevant data.</p>
                <p className="pb-4"><b>GitHub</b> holds the frontend and backend repositories.</p>
                <p className="pb-4">Finally, everything is presented on <b>dedicated hosting</b> secured with <b>SSL</b>.</p>
                
                <p className="pt-12">Thanks for visiting!</p>
                
                <button onClick={handleClickBackToHome} className="rounded-lg text-white bg-gray-800 hover:bg-gray-700 transition duration-500 mx-auto px-16 py-2 my-8 font-medium">Home</button>    
            </div>
        </section>
     );
}
 
export default NotFound;