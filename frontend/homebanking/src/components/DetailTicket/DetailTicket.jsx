import '../Card/Card.css'
import './DetailTicket.css'

const DetailTicket = () => {
    return (
        <article className='detailContainer'>
            <div className='detailContainer__origin'>
                <h6 className="card__title">Jose Martinez</h6>
                <p className="card__number">Saint Patrick Bank</p>
                <p className="card__number">4005520xxx</p>
            </div>
            <div className='detailContainer__gap'></div>
            <div className='detailContainer__destiny'>
                <h6 className="card__title">Adrian Ferrero</h6>
                <p className="card__number">Bank Porto</p>
                <p className="card__number">2217120xxx</p>
            </div>
        </article>
    )
}

export default DetailTicket