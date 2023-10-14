'use client'
import { useState } from 'react';
import Button from '../buttons/Button';

export default function ContactForm() {
    const [formData,setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name,value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ваша логика обработки формы здесь
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-full min-w-[55%] pt-4 md:mr-8">
            <div className='flex gap-2'>
                <div className="mb-4 w-3/5">
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        placeholder='YOUR NAME'
                        onChange={handleChange}
                        className="w-full border rounded-xl p-2 focus:outline-none focus:ring-2 focus:border-blue-300"
                    />
                </div>

                <div className="mb-4 w-3/5">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder='YOUR EMAIL'
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border rounded-xl p-2 focus:outline-none focus:ring-2 focus:border-blue-300"
                    />
                </div>
            </div>
            <div className="mb-4">
                <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder='YOUR SUBJECT'
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full border rounded-xl p-2 focus:outline-none focus:ring-2 focus:border-blue-300"
                />
            </div>

            <div className="mb-4">
                <textarea
                    id="message"
                    name="message"
                    placeholder='YOUR MESSAGE'
                    value={formData.message}
                    onChange={handleChange}
                    className="resize w-full border rounded-xl rounded-br-none p-2 focus:outline-none focus:ring-2 focus:border-blue-300"
                    rows="4"
                />
            </div>
            <Button type='submit' text={'send message'} svg={<svg className='w-10 h-10' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.3009 13.6949L20.102 3.89742M10.5795 14.1355L12.8019 18.5804C13.339 19.6545 13.6075 20.1916 13.9458 20.3356C14.2394 20.4606 14.575 20.4379 14.8492 20.2747C15.1651 20.0866 15.3591 19.5183 15.7472 18.3818L19.9463 6.08434C20.2845 5.09409 20.4535 4.59896 20.3378 4.27142C20.2371 3.98648 20.013 3.76234 19.7281 3.66167C19.4005 3.54595 18.9054 3.71502 17.9151 4.05315L5.61763 8.2523C4.48114 8.64037 3.91289 8.83441 3.72478 9.15032C3.56153 9.42447 3.53891 9.76007 3.66389 10.0536C3.80791 10.3919 4.34498 10.6605 5.41912 11.1975L9.86397 13.42C10.041 13.5085 10.1295 13.5527 10.2061 13.6118C10.2742 13.6643 10.3352 13.7253 10.3876 13.7933C10.4468 13.87 10.491 13.9585 10.5795 14.1355Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            } />
        </form>
    );
}
