

const Footer=()=>{
    const CurrentYear = new Date().getFullYear()
    return <div className='container' id="contact">

        <footer className="bg-black text-center text-white">
            <div className="container p-4 pb-0">
                <section className="mb-4">
                    <a href='https://www.linkedin.com/in/m-oubida/' target="_blank" rel="noreferrer" className='btn btn-outline-warning btn-floating m-1' role="button"> <i className="bi bi-linkedin"></i> </a>
                    <a href='mailto:m.oubida11@gmail.com' className='btn btn-outline-warning btn-floating m-1' role="button"> <i className="bi bi-envelope-at-fill"></i> </a>
                    <a href='https://github.com/Oubida-Mohamed' target="_blank" rel="noreferrer" className='btn btn-outline-warning btn-floating m-1' role="button"> <i className="bi bi-github"></i> </a>
                </section>
            </div>

            <div className="text-center p-3" >© {CurrentYear} Copyright : Mohamed Oubida</div>
        </footer>
    </div>

}
export default Footer 
