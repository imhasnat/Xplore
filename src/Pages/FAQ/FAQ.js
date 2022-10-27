import React from 'react';

const FAQ = () => {
    return (
        <section className="w-9/12 mx-auto rounded-lg my-28 py-20 bg-gray-100 text-gray-800">
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
                <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">What is the refund policy?</summary>
                        <div className="px-4 pb-4">
                            <p>If you subscribed, you get a 7-day free trial during which you can cancel at no penalty. After that, we don’t give refunds, but you can cancel your subscription at any time.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">Can I just enroll in a single course?</summary>
                        <div className="px-4 pb-4">
                            <p>Yes! To get started, click the course card that interests you and enroll. You can enroll and complete the course to earn a shareable certificate, or you can audit it to view the course materials for free. When you subscribe to a course that is part of a Certificate, you’re automatically subscribed to the full Certificate. Visit your learner dashboard to track your progress.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">Is this course really 100% online? Do I need to attend any classes in person?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p>This course is completely online, so there’s no need to show up to a classroom in person. You can access your lectures, readings and assignments anytime and anywhere via the web or your mobile device.</p>
                        </div>
                    </details>
                    <details>
                        <summary className="py-2 outline-none cursor-pointer focus:underline">Is this program offered in other languages?</summary>
                        <div className="px-4 pb-4 space-y-2">
                            <p>This certificate is currently available globally in English. You can also find Google Career Certificates available globally in the following languages: Turkish, German, Spanish, Arabic, Russian, and Indonesian Bahasa. We are working on adding more languages soon. Please continue to check back here for updates.</p>
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default FAQ;