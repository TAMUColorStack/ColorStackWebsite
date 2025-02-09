import './Page_footer.css'

export default function Page_footer(){
    return (
        <footer className="footer">
          <div className="footer-content">
            <a 
              href="mailto:tamucolorstack@gmail.com"
              className="footer-link"
            >
              tamucolorstack@gmail.com
            </a>
            
            <a 
              href="https://instagram.com/tamucolorstack"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              instagram.com/tamucolorstack
            </a>
            
            <a 
              href="https://linkedin.com/company/tamucolorstack"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              linkedin.com/company/tamucolorstack
            </a>
          </div>
        </footer>
      );
    };