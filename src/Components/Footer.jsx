const Footer = () => {
    return (
        <footer className=" bg-[#040D11] text-white p-10">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:place-items-center">
                <nav className="">
                    <h6 className="font-bold text-xl">About us</h6>
                    <p className="opacity-60 pr-12">
                        We are a passionate team dedicated to providing the best services to our customers.
                    </p>
                </nav>
                <nav className="">
                    <h6 className="font-bold text-xl">Quick Links</h6>
                    <li><a className="link link-hover">Home</a></li>
                    <li><a className="link link-hover">Services</a></li>
                    <li><a className="link link-hover">About</a></li>
                    <li><a className="link link-hover">Contacts</a></li>
                </nav>
                <form className="">
                    <h6 className="font-bold text-xl">Subscribe</h6>
                    <fieldset className="form-control w-80">
                        <p className="opacity-60 mb-3">Subscribe to our newsletter for the latest updates.</p>
                        <button className="btn btn-primary border-none text-gray-800 bg-gradient-to-r from-pink-400 to-yellow-600 join-item">Subscribe</button>
                    </fieldset>
                </form>
            </div>
            <div className="border border-gray-800 mt-8 mb-3"></div>
            <p className="text-center text-xs opacity-60">Copyright © {new Date().getFullYear()} - All right reserved</p>
        </footer>
    );
};

export default Footer;