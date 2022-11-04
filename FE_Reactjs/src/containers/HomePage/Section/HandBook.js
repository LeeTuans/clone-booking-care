import { times } from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import { FormattedMessage } from 'react-intl';

class HandBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className='section-share section-handbook'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'><FormattedMessage id='homepage.handbook' /></span>
                        <button className='btn-section'><FormattedMessage id='homepage.more-infor' /></button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.settings}>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook' style={{ backgroundImage: `url(https://cdn.bookingcare.vn/fr/w300/2022/10/31/232230-cang-chi-collagen-o-dau-tphcm.png)` }} />
                                <div className='right-content'><FormattedMessage id='homepage.handbook' /> cang-chi-collagen-o-dau-tphcm</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook' style={{ backgroundImage: `url(https://cdn.bookingcare.vn/fr/w300/2022/10/31/220947-anh-xet-nghiem.png)` }} />
                                <div className='right-content'><FormattedMessage id='homepage.handbook' /> anh-xet-nghiem</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook' style={{ backgroundImage: `url(https://cdn.bookingcare.vn/fr/w300/2022/10/27/145158-anh-xet-nghiem-14.png)` }} />
                                <div className='right-content'><FormattedMessage id='homepage.handbook' /> anh-xet-nghiem-14</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-handbook' style={{ backgroundImage: `url(https://cdn.bookingcare.vn/fr/w300/2022/10/29/224229-benh-vien-mat-cao-thang.png)` }} />
                                <div className='right-content'><FormattedMessage id='homepage.handbook' /> benh-vien-mat-cao-thang</div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        lang: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
