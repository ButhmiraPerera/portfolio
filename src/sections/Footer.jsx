import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer [width:100%] [padding:2rem_0] [background:var(--color-bg)]">
      <div className="footer-container [max-width:1200px] [margin:0_auto] [padding:0_2rem] [display:flex] [justify-content:space-between] [align-items:center] [gap:1rem]">
        <div className="[display:flex] [flex-direction:column] [justify-content:center]">
         {/* <p className="[color:var(--color-white)] [font-size:0.9rem]">Terms & Conditions</p>*/}
        </div>
        <div className="socials [display:flex] [gap:1rem]">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon [width:1rem] [height:1rem] [transition:all_0.3s_ease] hover:[transform:scale(1.1)]">
              <img 
                src={socialImg.imgPath} 
                alt="social icon" 
                className="[width:50%] [height:50%] [object-fit:contain]"
              />
            </div>
          ))}
        </div>
        <div className="[display:flex] [flex-direction:column] [justify-content:center]">
          <p className="[color:var(--color-white)] [font-size:0.9rem] [text-align:center] md:[text-align:end]">
            © {new Date().getFullYear()}  All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;