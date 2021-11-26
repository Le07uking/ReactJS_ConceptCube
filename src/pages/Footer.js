import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer-main">
      <div className="footer">
        <div className="whathappened">
          <h3>What happened</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            repellendus non exercitationem enim! Iusto corporis laborum, aliquid
            consequuntur consectetur eaque.
          </p>
        </div>
        <div>
          <h3>about us</h3>
        </div>
        <div>
          <h3>my order</h3>
        </div>
        <div>
          <h3>my account</h3>
        </div>
        <div>
          <h3>help</h3>
        </div>
      </div>
      <div className="botSide">
        <div class="social">
          <a>&copy; 2021</a>
          <a href="http://www.facebook.com">
            <i class="fab fa-facebook fa-2x" target="_blank"></i>
          </a>
          <a href="http://www.twitter.com">
            <i class="fab fa-twitter fa-2x" target="_blank"></i>
          </a>
          <a href="http://www.instagram.com">
            <i class="fab fa-instagram fa-2x" target="_blank"></i>
          </a>
          <a href="http://www.youtube.com">
            <i class="fab fa-youtube fa-2x" target="_blank"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
