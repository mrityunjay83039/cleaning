import { Link } from 'react-router-dom';
import bg from '../assets/img/slider/breadcrumb-bg-1.jpg';

const BreadCrumb = ({breadCrumTitle, pageName}) => {
   const bTitle = breadCrumTitle.split(" ");
   const remainTitle = breadCrumTitle.substr(breadCrumTitle.indexOf(' ')+1);
  return (
    // <!-- breadcrumb area start -->
    <div className="tp-page-title-area pt-180 pb-185 position-relative fix" style={{background:`url(${bg})`}}>
        <div className="tp-custom-container">
            <div className="row">
                <div className="col-12">
                    <div className="tp-page-title z-index">
                        <h1 className="breadcrumb-title">{bTitle[0]} <span>{remainTitle}</span></h1>
                        <div className="breadcrumb-menu">
                            <nav className="breadcrumb-trail breadcrumbs">
                                <ul className="trail-items">
                                    <li className="trail-item trail-begin"><Link to="/">Home</Link>
                                    </li>
                                    <li className="trail-item trail-end"><span>{pageName}</span></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    // <!-- breadcrumb area end -->
  )
}

export default BreadCrumb
