import React, { Component } from 'react';
import { connect } from 'react-redux';

class About extends Component {

    render() {
        return (
            <div className='section-share section-about'>
                <div className='title-about'>Cao oc 20</div>
                <div className='section-about-content'>
                    <div className='content-left'>
                        {/*<iframe width="100%" height="400" src={`https://www.youtube-nocookie.com/embed/FWYrRSWabIs`} frameBorder="0" title="Cao Ốc 20 | B RAY x DatG (ft MASEW x K-ICM) | MV OFFICIAL" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    */}
                    </div>
                    <div className='content-right'>
                        “Bạn không thể cố níu lấy quá khứ. Bởi vì không cần biết bạn có giữ chặt nó đến mức nào, nó cũng đã trôi qua mất rồi” - Ted Evelyn Mosby
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
