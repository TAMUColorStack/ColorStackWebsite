import './Page_footer.css'

export default function Page_footer(){
    return (
        <footer className="footer">
          <div className="footer-content">
            <a 
              href="mailto:tamucolorstack@gmail.com"
              className="footer-link"
            >
              <i className="fa-solid fa-envelope"></i>
              <span>tamucolorstack@gmail.com</span>
            </a>
            
            <a 
              href="https://instagram.com/tamucolorstack"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <i className="fa-brands fa-instagram"></i>
              <span>instagram.com/tamucolorstack</span>
            </a>
            
            <a 
              href="https://linkedin.com/company/tamucolorstack"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <i className="fa-brands fa-linkedin"></i>
              <span>linkedin.com/company/tamucolorstack</span>
            </a>
          </div>
        </footer>
      );
    };