import React, { Component } from 'react';
import { TextField, Button, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import SnackBar from './SnackBar';

const styles = (theme) => ({
	container: {
		display: 'flex',
		flexDirection: 'column',
		width: '70%',
		padding: theme.spacing(0, 10, 5),
		[theme.breakpoints.down('sm')]: {
			width: '65%',
			padding: theme.spacing(2, 0),
		},
		// background:'#888'
	},
	input: {
		fontFamily: 'Handlee',
		fontSize: '1.5rem',
	},
	rightIcon: {
		marginLeft: theme.spacing(4),
	},
	textField:{
		background:'#fff'
	}
});

const nameRegex = RegExp(/^[a-zA-Z\s]{3,15}$/);
const emailRegex = RegExp(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
const phoneRegex = RegExp(/^([0][4|5][0-9]{1})[-\s]?([0-9]{3}[-\s]?[0-9]{4})$/);
const msgRegex = RegExp(/^[a-zA-Z0-9\s.]{3,250}$/);

class ContactForm extends Component {
	state = {
		messages: [],
		message: {
			name: '',
			email: '',
			phone: '',
			message: '',
		},
		formErrors: {
			name: '',
			email: '',
			phone: '',
			message: '',
		},
		open: false,
	};
	handleChange = (e) => {
		const { name, value } = e.target;
		let formErrors = { ...this.state.formErrors };

		switch (name) {
			case 'name':
				formErrors.name = nameRegex.test(value);
				break;
			case 'email':
				formErrors.email = emailRegex.test(value);
				break;
			case 'phone':
				formErrors.phone = phoneRegex.test(value);
				break;
			case 'message':
				formErrors.message = msgRegex.test(value);
				break;
			default:
				break;
		}
		this.setState({
			message: {
				...this.state.message,
				[name]: value,
			},
			formErrors: formErrors,
		});
	};
	handleSubmit = (e) => {
		// e.preventDefault();
		this.setState({
			open: true,
		});
		setTimeout(() => {
			this.setState({
				open: false,
			});
		}, 3000);
	};
	render() {
		const { classes } = this.props,
			{
				message: { name, email, phone, message },
				formErrors,
			} = this.state;
		// console.log(this.state);
		return (
			// <form className={classes.container} method="POST" action="https://formspree.io/mostafa2015se@hotmail.com">
			<form className={classes.container}>
				<TextField
					label="Your Full Name"
					className={classes.textField}
					type="text"
					name="name"
					value={name}
					onChange={this.handleChange}
					autoComplete="name"
					margin="normal"
					variant="filled"
					fullWidth
				/>
				{formErrors.name === false ? (
					<Typography variant="caption" color="error">
						between 3 to 15 letters are valid! *
					</Typography>
				) : null}
				<TextField
					label="Your Email ID"
					className={classes.textField}
					type="email"
					name="email"
					value={email}
					onChange={this.handleChange}
					autoComplete="email"
					margin="normal"
					variant="filled"
					fullWidth
				/>
				{formErrors.email === false ? (
					<Typography variant="caption" color="error">
						your email ID is not valid! *
					</Typography>
				) : null}
				<TextField
					ref={(phone) => (this.inputPhone = phone)}
					label="Phone"
					className={classes.textField}
					type="number"
					name="phone"
					value={phone}
					onChange={this.handleChange}
					autoComplete="phone"
					margin="normal"
					variant="filled"
					fullWidth
				/>
				{formErrors.phone === false ? (
					<Typography variant="caption" color="error">
						just finnish mobile number valid! *
					</Typography>
				) : null}
				<TextField
					label="Leave Me a Message here"
					multiline
					rows="4"
					name="message"
					value={message}
					onChange={this.handleChange}
					className={classes.textField}
					margin="normal"
					variant="filled"
					fullWidth
				/>
				{formErrors.message === false ? (
					<Typography variant="caption" color="error">
						between 3 to 250 characters valid!
					</Typography>
				) : null}
				<Button
					type="submit"
					value="Send"
					onClick={this.handleSubmit}
					disabled={!formErrors.name || !formErrors.email || !formErrors.message}
					variant="contained"
					color="secondary"
					fullWidth
					className={classes.button}
				>
					Send
					<SendIcon className={classes.rightIcon} />
					<SnackBar open={this.state.open} />
				</Button>
			</form>
		);
	}
}

export default withStyles(styles)(ContactForm);