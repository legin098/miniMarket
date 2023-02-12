import "./styles/Aside.css"

interface IAside {
  children: JSX.Element
}

const Aside = ({children}:IAside) => {
  return (
    <section className="aside">
      {children}
    </section>
  )
}

export default Aside