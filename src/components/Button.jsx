const Button = ({ text, className, id }) => {
    return (
      <div className={`${className ?? ''} cta-wrapper`} id={id}>
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
      </div>
    )
  }
export default Button