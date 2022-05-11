const GradientCard = ({text, link,first}) => {
  return (
    <div className={`gradient-card p-5 pt-10 mt-4 ${first}`}>
        <div className="max-width-200 mt-5 pt-4">
            <p className="subtitle text-small">{text}</p>
            <a href={link} className="text-small text-grey text-none">Schedule a free call</a>
        </div>
    </div>
  )
}

export default GradientCard