import logo from './../../public/nav-img/toyman.jpg'

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <img src={logo} alt="" />
          <p>CAR MAN Ltd.<br />Bashundhara; Dhaka; Bangladesh</p>
        </div>
        <div>
          <span className="footer-title">Contact Us with Social media</span>
          <a className="link link-hover">Instagram</a>
          <a className="link link-hover">Twitter</a>
          <a className="link link-hover">Linkedin</a>
          <a className="link link-hover">Facebook</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;