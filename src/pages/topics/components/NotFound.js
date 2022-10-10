const NotFound = () => {
    return ( 
        <div className='flex flex-col justify-center text-center lg:text-left md:justify-start'>
            <p className="mb-2 text-sm leading-6 font-semibold text-sky-500">404</p>
            <h1 className="text-3xl sm:text-3xl font-medium text-slate-800 pb-8">Page not found!</h1>
            <p>
                <a href="/home" className="rounded-lg text-white bg-[#0ea5e9] hover:bg-[#1baff3] transition duration-500 mx-auto px-8 py-2 my-8 font-medium">Back To Home</a>
            </p>
        </div>
    );
}
 
export default NotFound;