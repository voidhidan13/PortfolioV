import '../../styles/components/section.scss'
import '../../styles/themes/global.scss'

function Section({children, id='', title ='', subtitle = ''}) {
  return (
    <section className="section" id={id}>
        <div className="section-header">
            <h2 className="section-header__title">{title}</h2>
            <span className="section-header__text">{subtitle}</span>
        </div>
        <div className="section-line"></div>
        <div className="children">
            {children}
        </div>
    </section>
  )
}

export default Section