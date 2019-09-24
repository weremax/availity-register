import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Button, Spinner } from 'reactstrap';
import { register, registerError, update } from '../../actions/registrationActions';
import Alerts from './Alerts';
import validate from './validate';
import './styles.css';

class Register extends Component {

    constructor(props) {
        super(props);
        
        this.onSubmit = this.onSubmit.bind(this);
        this.onError = this.onError.bind(this);
        this.loadData = this.loadData.bind(this);
    }

    rederField = ({
        input,
        label,
        type,
        placeholder,
        meta: { touched, error }
      }) => (
        <div>
          <label className={touched && error ? 'labelErrorMsg': ''}>{label}</label>
          <div>
            <input {...input} placeholder={placeholder} type={type} />
            {touched &&
              (error && <div className="errorMsg">{error}</div>)}
          </div>
        </div>
      )

    onSubmit = values =>  {
        this.props.update({ loading: true, type: 'submit'});
        this.props.register(values);
    }

    onError() {
        this.props.update({ loading: true, type: 'error' });
        this.props.registerError();
    }

    loadData() {
        const { registration } = this.props;

        this.props.initialize(registration);
    }

    renderMessage() {
        const { registration } = this.props;

        if (registration.status && registration.status.status) {
            return (
                <Alerts type={registration.status.status} message={registration.status.message} />
            )
        }

        return null;
    }

    renderSubmitButton() {
        const { loading, type } = this.props.registration;

        if (type === 'submit' && loading) {
            return (
                <Spinner size="sm" color="primary" />
            )
        }

        return (
            <Button color="primary" type='submit'>primary</Button>
        )
    }

    renderErrorButton() {
        const { loading, type } = this.props.registration;

        if (type=== 'error' && loading) {
            return (
                <Spinner size="sm" color="warning" />
            )
        }

        return (
            <Button color="warning" onClick={this.onError}>Simulate Error</Button>
        )
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <Fragment>
                { this.renderMessage() }
                <form onSubmit={handleSubmit(this.onSubmit)}>
                    <Button color="warning" onClick={this.loadData}>Load Fake Data</Button>
                    <div className="question">
                        <Field
                            name="firstName"
                            id="firstName"
                            component={this.rederField}
                            type="input"
                            label="First Name"
                        />
                    </div>

                    <div>
                        <Field
                            name="lastName"
                            id="lastName"
                            component={this.rederField}
                            type="input"
                            label="Last Name"
                        />
                    </div>

                    <div>
                        <Field 
                            name="npiNumber"
                            id="npiNumber"
                            component={this.rederField}
                            type="input"
                            label="NPI Number"
                        />
                    </div>

                    <div>
                        <Field 
                            name="businessAddress"
                            id="businessAddress"
                            component={this.rederField}
                            type="input"
                            label="Business Address"
                        />
                    </div>

                    <div>
                        <Field 
                            name="telephoneNumber"
                            id="telephoneNumber"
                            component={this.rederField}
                            type="input"
                            label="Telephone Number"
                            placeholder='555-555-5555'
                        />
                    </div>

                    <div>
                        <Field 
                            name="email"
                            id="email"
                            component={this.rederField}
                            type="input"
                            label="Email Address"
                        />
                    </div>
                    <div className="buttons">
                        { this.renderSubmitButton() }{' '}
                        { this.renderErrorButton()}
                    </div>
                </form>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return { registration: state.registration };
}

const mapDispatchToProps = dispatch => ({
    register: values => {
        dispatch(register(values));
    },
    registerError: () => {
        dispatch(registerError());
    },
    update: values => {
        dispatch(update(values));
    }
});

export default reduxForm({ 
    form: 'REGISTER', 
    validate
})(connect(mapStateToProps, mapDispatchToProps)(Register));
