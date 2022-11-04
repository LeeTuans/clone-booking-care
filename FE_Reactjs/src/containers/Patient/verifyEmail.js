import React, { Component } from 'react';
import { connect } from 'react-redux';
import './verifyEmail.scss';
import { FormattedMessage } from 'react-intl';
import { LANGUAGES } from '../../utils';
import { postVerifyBookAppointment } from '../../services/userService';
import HomeHeader from '../HomePage/HomeHeader';

class verifyEmail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            statusVerify: false,
            errCode: 0
        }
    }

    async componentDidMount() {
        if (this.props.location && this.props.location.search) {
            let urlParams = new URLSearchParams(this.props.location.search);
            let token = urlParams.get('token');
            let doctorId = urlParams.get('doctorId');
            let res = await postVerifyBookAppointment({
                token: token,
                doctorId: doctorId
            })

            if (res && res.errCode === 0) {
                this.setState({
                    statusVerify: true,
                    errCode: res.errCode
                })
            } else {
                this.setState({
                    statusVerify: true,
                    errCode: res && res.errCode ? res.errCode : -1
                })
            }
            console.log(this.state.errCode);
        }
    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {

        }
    }

    render() {
        let { statusVerify, errCode } = this.state;
        return (
            <>
                <HomeHeader />
                <div className='verify-email-container'>
                    {statusVerify === false ?
                        <div> Loading data ... </div> :
                        <div>
                            {+errCode === 0 ?
                                <div className='infor-booking'>Xác định lịch hẹn thành công</div> :
                                <div>
                                    {+errCode === 2 ?
                                        <div className='infor-booking'>Lịch hẹn đã được xác nhận trước đó</div> :
                                        <div className='infor-booking'>Lịch hẹn không tồn tại</div>
                                    }
                                </div>
                            }
                        </div>
                    }
                </div>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(verifyEmail);
