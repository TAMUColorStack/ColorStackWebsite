import './Page_footer.css'

export default function Page_footer(){
    return (
        <footer className="footer">
          <div className="footer-content">
            <a 
              href="mailto:tamucolorstack@gmail.com"
              className="footer-link"
            >
              <a className= "Icons">
              <i className="fa-solid fa-envelope"></i>
              </a>
              tamucolorstack@gmail.com
            </a>
            
            <a 
              href="https://instagram.com/tamucolorstack"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
             <a  className="Icon">
              <i className="fa-brands fa-instagram"></i>
             </a> 
              instagram.com/tamucolorstack
            </a>
            
            <a 
              href="https://linkedin.com/company/tamucolorstack"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <a className="Icons">
              <i className="fa-brands fa-linkedin"></i>
              </a>
              linkedin.com/company/tamucolorstack
            </a>
          </div>
        </footer>
      );
    };