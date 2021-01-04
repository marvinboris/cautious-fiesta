import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import { faUser, faCheckCircle, faUserTag, faIdCard } from '@fortawesome/free-solid-svg-icons';
import { faSave } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Components
import Breadcrumb from '../../../../components/Backend/UI/Breadcrumb/Breadcrumb';
import SpecialTitle from '../../../../components/UI/Titles/SpecialTitle/SpecialTitle';
import Subtitle from '../../../../components/UI/Titles/Subtitle/Subtitle';
import Error from '../../../../components/Error/Error';
import CustomSpinner from '../../../../components/UI/CustomSpinner/CustomSpinner';
import Form from '../../../../components/Backend/UI/Form/Form';
import FormInput from '../../../../components/Backend/UI/Input/Input';
import FormButton from '../../../../components/UI/Button/BetweenButton/BetweenButton';
import Feedback from '../../../../components/Feedback/Feedback';

import * as actions from '../../../../store/actions';

class Add extends Component {
    state = {
        first_name: '',
        last_name: '',
        nid: '',
        driving_license: '',
        card: '',
        category_id: '',
        photo: null,
    }

    async componentDidMount() {
        this.props.reset();
        this.props.get();
    }

    componentWillUnmount() {
        this.props.reset();
    }

    submitHandler = async e => {
        e.preventDefault();
        await this.props.post(e.target);
    }

    inputChangeHandler = e => {
        const { name, value, files } = e.target;
        this.setState({ [name]: files ? files[0] : value });
    }

    fileUpload = () => document.getElementById('photo').click()

    render() {
        let {
            content: {
                cms: {
                    pages: { components: { form: { save, selected_file } }, backend: { pages: { drivers: { title, add, index, form } } } }
                }
            },
            backend: { drivers: { loading, error, message, categories } },
            auth: { data: { role: { features } } }
        } = this.props;
        let { first_name, last_name, nid, driving_license, card, category_id, photo } = this.state;
        let content = null;
        let errors = null;

        const feature = features.find(f => f.prefix === 'drivers');
        const redirect = !(feature && JSON.parse(feature.permissions).includes('c')) && <Redirect to="/user/dashboard" />;
        
        if (!categories) categories = [];
        const categoriesOptions = categories.sort((a, b) => a.name > b.name).map(item => <option key={JSON.stringify(item)} value={item.id}>{item.name}</option>);

        if (loading) content = <Col xs={12}>
            <CustomSpinner />
        </Col>;
        else {
            errors = <>
                <Error err={error} />
            </>;
            content = (
                <>
                    <Row>
                        <Form onSubmit={this.submitHandler} icon={faUserTag} title={add} list={index} link="/user/drivers" innerClassName="row" className="shadow-sm">
                            <Col lg={8}>
                                <Feedback message={message} />
                                <Row>
                                    <FormInput type="text" className="col-md-6" icon={faUser} onChange={this.inputChangeHandler} value={first_name} name="first_name" required placeholder={form.first_name} />
                                    <FormInput type="text" className="col-md-6" icon={faUser} onChange={this.inputChangeHandler} value={last_name} name="last_name" required placeholder={form.last_name} />
                                    <FormInput type="text" className="col-md-6" icon={faIdCard} onChange={this.inputChangeHandler} value={nid} name="nid" required placeholder={form.nid} />
                                    <FormInput type="text" className="col-md-6" icon={faIdCard} onChange={this.inputChangeHandler} value={driving_license} name="driving_license" required placeholder={form.driving_license} />
                                    <FormInput type="text" className="col-md-6" icon={faIdCard} onChange={this.inputChangeHandler} value={card} name="card" required placeholder={form.card} />
                                    <FormInput className="col-lg-6" type="select" name="category_id" placeholder={form.category} onChange={this.inputChangeHandler} icon={faUserTag} validation={{ required: true }} required value={category_id}>
                                        <option>{form.select_category}</option>
                                        {categoriesOptions}
                                    </FormInput>

                                    <input type="file" id="photo" name="photo" className="d-none" onChange={this.inputChangeHandler} accept=".png,.jpg,.jpeg" />

                                    <div className="col-12">
                                        <FormButton color="green" icon={faSave}>{save}</FormButton>
                                    </div>
                                </Row>
                            </Col>

                            <Col lg={4}>
                                <div className="embed-responsive embed-responsive-1by1 bg-soft border border-light d-flex justify-content-center align-items-center w-60 mx-auto" style={{ cursor: 'pointer' }} onClick={this.fileUpload}>
                                    {photo && <div className="text-center text-green">
                                        <div><FontAwesomeIcon icon={faCheckCircle} fixedWidth size="5x" /></div>
                                        <div className="mt-3">{selected_file}</div>
                                    </div>}
                                </div>
                            </Col>
                        </Form>
                    </Row>
                </>
            );
        }

        return (
            <>
                <div className="bg-soft py-4 pl-5 pr-4 position-relative">
                    <Breadcrumb main={add} icon={faUserTag} />
                    <SpecialTitle user icon={faUserTag}>{title}</SpecialTitle>
                    <Subtitle user>{add}</Subtitle>
                </div>
                <div className="p-4 pb-0">
                    {redirect}
                    {errors}
                    {content}
                </div>
            </>
        );
    }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => ({
    get: () => dispatch(actions.getDriversInfo()),
    post: data => dispatch(actions.postDrivers(data)),
    reset: () => dispatch(actions.resetDrivers()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Add));