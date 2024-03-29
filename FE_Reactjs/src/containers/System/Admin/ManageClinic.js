import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ManageClinic.scss';
import { FormattedMessage } from 'react-intl';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import { CommonUtils } from '../../../utils';
import { toast } from 'react-toastify';
import { createNewClinic } from '../../../services/userService';

const mdParser = new MarkdownIt();

class ManageClinic extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address: '',
            imageBase64: '',
            descriptionHTML: '',
            descriptionMarkdown: ''
        }
    }

    async componentDidMount() {

    }

    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.language !== prevProps.language) {

        }
    }

    handleOnchangeInput = (event, id) => {
        let stateCopy = { ...this.state };
        stateCopy[id] = event.target.value;
        this.setState({
            ...stateCopy
        })
    }

    handleEditorChange = ({ html, text }) => {
        this.setState({
            descriptionHTML: html,
            descriptionMarkdown: text
        })
    }

    handleOnchangeImage = async (event) => {
        let data = event.target.files;
        let file = data[0];
        if (file) {
            let base64 = await CommonUtils.getBase64(file);
            this.setState({
                imageBase64: base64
            })
        }
    }

    handleSaveNewClinic = async () => {
        let res = await createNewClinic(this.state);
        if (res && res.errCode === 0) {
            toast.success('Add new clinic success!');
            this.setState({
                name: '',
                address: '',
                imageBase64: '',
                descriptionHTML: '',
                descriptionMarkdown: ''
            })
        } else {
            toast.error('Something wrongs ...')
        }
    }

    render() {
        let { language } = this.props;
        return (
            <div className='manage-clinic-container'>
                <div className='ms-title'>Quản lý chuyên khoa</div>
                <div className='add-new-clinic row'>
                    <div className='col-6 form-group'>
                        <label> Tên phòng khám </label>
                        <input className='form-control' type='text' value={this.state.name}
                            onChange={(event) => this.handleOnchangeInput(event, 'name')} />
                    </div>
                    <div className='col-6 form-group'>
                        <label> Địa chỉ phòng khám </label>
                        <input className='form-control' type='text' value={this.state.address}
                            onChange={(event) => this.handleOnchangeInput(event, 'address')} />
                    </div>
                    <div className='col-6 form-group'>
                        <label> Ảnh phòng khám </label>
                        <input className='form-control' type='file' key={this.state.imageBase64}
                            onChange={(event) => this.handleOnchangeImage(event)} />
                    </div>
                    <div className='col-12 mde'>
                        <MdEditor
                            style={{ height: '300px' }}
                            renderHTML={text => mdParser.render(text)}
                            onChange={this.handleEditorChange}
                            value={this.state.descriptionMarkdown} />
                    </div>
                    <div className='col-12'>
                        <button className='btn btn-success' onClick={() => { this.handleSaveNewClinic() }}>Save</button>
                    </div>
                </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ManageClinic);
