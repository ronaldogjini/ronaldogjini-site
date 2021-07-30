import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import ConfirmationModal from "../components/Effects/ConfirmationModal"
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function contact() {

    let [isSuccessful, setIsSuccessful] = useState(false)
    let [isError, setIsError] = useState(false)


    function sendEmail(e) {
        e.preventDefault();

        setName('');
        setEmail('');
        setMessage('');
        setIsSuccessful(true);
        emailjs.sendForm('service_aqkf7ff', 'template_rtvg528', e.target, 'user_cNKTKmeXJqM4JOsfeAgYE')
            .then((result) => {
                console.log(result.text);
                setIsSuccessful(true);
            }, (error) => {
                console.log(error.text);
            });
    }

    const [name, setName] = useState('');
    const updateName = (e) => setName(e.target.value);

    const [email, setEmail] = useState('');
    const updateEmail = (e) => setEmail(e.target.value);

    const [message, setMessage] = useState('');
    const updateMessage = (e) => setMessage(e.target.value);

    return (

        <Layout>

            <SEO
                title="Ronaldo Gjini | Contact"
                description="Contact Ronaldo Gjini and create a brand new program."
            />
            <div class="flex items-center height-custom-92vh bg-gray-100    dark:bg-gray-900">

                {
                    isSuccessful && <ConfirmationModal></ConfirmationModal>
                }

                <div class="container mx-auto">
                    <div class="max-w-xl mx-auto my-10 bg-white p-5 rounded-md shadow-md">
                        <div class="text-center">
                            <h1 class="my-3 text-4xl font-bold text-gray-700 dark:text-gray-200">Ready To Start A Project Together?</h1>
                        </div>
                        <div class="m-7">
                            <form onSubmit={sendEmail}>

                                <div class="mb-6">
                                    <label for="name" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Full Name</label>
                                    <input value={name} onChange={updateName} type="text" name="name" id="name" placeholder="John Doe" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                </div>
                                <div class="mb-6">
                                    <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                                    <input value={email} onChange={updateEmail} type="email" name="email" id="email" placeholder="you@company.com" required class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                                </div>
                                <div class="mb-6">
                                    <label for="message" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Your Message</label>

                                    <textarea rows="5" value={message} onChange={updateMessage} name="message" id="message" placeholder="Write your message" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" required></textarea>
                                </div>
                                <div class="mb-6">
                                    <button type="submit" value="Send" class="w-full px-3 py-4 text-white bg-red-500 rounded-md hover:bg-red-700">Send Message</button>
                                </div>
                                <p class="text-base text-center text-gray-400" id="result">
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

