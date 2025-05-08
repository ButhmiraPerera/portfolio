const Button = ({ text, className, id, href = "#" }) => {
  return (
    <a 
      onClick={(e) => {
        e.preventDefault();

        const target = document.getElementById('counter')

        if(target && id){
          const offset = window.innerHeight * 0.15;

          const top = target.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({ top, behaviour:'smooth'})
        }
      }}
      className={`${className ?? ''} cta-wrapper`} 
      
    >
      <div className="cta-button group relative flex items-center">
        <p className="text px-4">{text}</p>
        <div className="arrow-container relative flex-shrink-0">
          <div className="bg-morph absolute inset-0" />
          <img 
            src="/images/arrow-down.svg" 
            alt="arrow" 
            className="arrow-icon relative z-10 w-3 h-3"
          />
        </div>
      </div>
    </a>
  )
}

export default Button