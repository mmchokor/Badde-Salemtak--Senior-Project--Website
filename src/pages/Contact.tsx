import React, { useState } from 'react';

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	});

	const { name, email, subject, message } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	function onSubmit() {
		alert("Sent"
      )
	}

	return (
		<div className='flex flex-col items-center bg-gray-100 px-4 py-4 font-interR sm:px-6 md:px-8 lg:px-10'>
			<h1 className='mb-5 text-4xl font-bold text-salemtak'>Contact Us</h1>
			<form
				onSubmit={(e) => onSubmit(e)}
				className='w-full max-w-lg'>
				<div className='mb-6'>
					<label
						className='mb-2 block text-base font-medium text-gray-700'
						htmlFor='name'>
						Name
					</label>
					<input
						className='w-full appearance-none rounded-lg border px-3 py-2 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-1 focus:ring-salemtak'
						type='text'
						id='name'
						name='name'
						placeholder='Enter your name'
						value={name}
						onChange={(e) => onChange(e)}
						required
					/>
				</div>
				<div className='mb-6'>
					<label
						className='mb-2 block text-base font-medium text-gray-700'
						htmlFor='email'>
						Email
					</label>
					<input
						className='w-full appearance-none rounded-lg border px-3 py-2 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-1 focus:ring-salemtak'
						type='email'
						id='email'
						name='email'
						placeholder='Enter your email address'
						value={email}
						onChange={(e) => onChange(e)}
						required
					/>
				</div>
				<div className='mb-6'>
					<label
						className='mb-2 block text-base font-medium text-gray-700'
						htmlFor='subject'>
						Subject
					</label>
					<input
						className='w-full appearance-none rounded-lg border px-3 py-2 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-1 focus:ring-salemtak'
						type='text'
						id='subject'
						name='subject'
						placeholder='Enter the subject of your message'
						value={subject}
						onChange={(e) => onChange(e)}
						required
					/>
				</div>

				<div className='mb-6'>
					<label
						className='mb-2 block text-base font-medium text-gray-700'
						htmlFor='message'>
						Message
					</label>
					<textarea
						className='h-20 w-full appearance-none rounded-lg border px-3 py-2 placeholder-gray-400 shadow-sm focus:border-transparent focus:outline-none focus:ring-1 focus:ring-salemtak'
						id='message'
						name='message'
						placeholder='Enter your message'
						value={message}
						onChange={(e) => onChange(e)}
						required></textarea>
				</div>
				<div className='mt-1'>
					<button
						type='submit'
						className='hover:bg-salemtak-dark focus:ring-salemtak-dark w-full rounded-lg bg-salemtak px-4 py-2 text-lg font-medium text-white shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2'>
						Send
					</button>
				</div>
			</form>
		</div>
	);
};

export default Contact;
