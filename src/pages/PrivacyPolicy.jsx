import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-10">

        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
          Privacy Policy
        </h1>

        {/* <p className="text-center text-gray-500 mb-8">
          Last updated: January 2026
        </p> */}

        <p className="text-gray-600 mb-8 leading-relaxed">
          At <span className="font-semibold">FirstTrack Tour & Travel</span>, we respect
          your privacy and are committed to protecting your personal information.
          This Privacy Policy explains how we collect, use, and safeguard your
          data when you visit or use our website.
        </p>

        {/* Section 1 */}
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          1. Information We Collect
        </h2>

        <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
          <li>Name, email address, and phone number</li>
          <li>Travel booking details</li>
          <li>Billing and payment information</li>
          <li>Device and browser information</li>
        </ul>

        <p className="text-gray-600 mb-6">
          We may also collect non-personal data such as IP address, browser type,
          device information, and browsing activity.
        </p>

        {/* Section 2 */}
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          2. How We Use Your Information
        </h2>

        <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
          <li>Process travel bookings and reservations</li>
          <li>Provide customer support</li>
          <li>Improve our website and services</li>
          <li>Send travel offers and promotional updates</li>
        </ul>

        {/* Section 3 */}
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          3. Sharing Your Information
        </h2>

        <p className="text-gray-600 mb-6">
          We do not sell or rent your personal information. Your data may be
          shared only with trusted partners such as payment processors or
          travel service providers to complete your booking.
        </p>

        {/* Section 4 */}
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          4. Cookies
        </h2>

        <p className="text-gray-600 mb-6">
          Our website may use cookies to enhance user experience and analyze
          website traffic. You can disable cookies through your browser settings.
        </p>

        {/* Section 5 */}
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          5. Data Security
        </h2>

        <p className="text-gray-600 mb-6">
          We use industry-standard security measures to protect your personal
          data from unauthorized access, misuse, or disclosure.
        </p>
        {/* Section 6 */}
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          6. Your Rights
        </h2>

        <p className="text-gray-600 mb-6">
          You have the right to access, update, or request deletion of your
          personal information. If you would like to review or modify your
          data, please contact us using the details provided above.
        </p>

        {/* Section 7 */}
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          7. Third-Party Links
        </h2>

        <p className="text-gray-600 mb-6">
          Our website may contain links to third-party websites such as hotel
          booking services or payment gateways. We are not responsible for
          the privacy practices of these external websites.
        </p>

        {/* Section 8 */}
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          8. Updates to This Policy
        </h2>

        <p className="text-gray-600 mb-6">
          We may update this Privacy Policy from time to time to reflect
          changes in our services or legal requirements. Any updates will
          be posted on this page with the revised date.
        </p>

        {/* Section 9 */}
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          9. Consent
        </h2>

        <p className="text-gray-600 mb-6">
          By using our website, you consent to our Privacy Policy and agree
          to its terms regarding the collection and use of your information.
        </p>

        {/* Section 10 */}
        <h2 className="text-xl font-semibold text-gray-800 mb-3">
          10. Contact Us
        </h2>

        <p className="text-gray-600">
          If you have any questions regarding this Privacy Policy, please
          contact us:
        </p>

        <div className="mt-3 text-gray-600">
          <p  className="mt-2 font-medium text-gray-800">
            First Track Tour & Travel<br />
            Email: firsttracktravel@gmail.com
          </p>
          {/* <p>Phone: +91 1234567890</p>
          <p>Location: Bhubaneswar, Odisha</p> */}
        </div>

      </div>

    </div>
  );
};

export default PrivacyPolicy;