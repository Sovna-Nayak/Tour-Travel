import React from "react";

const TermsOfUse = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-10">

        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
          Terms of Use
        </h1>

        {/* <p className="text-center text-gray-500 mb-8">
          Last updated: January 2026
        </p> */}

        <p className="text-gray-600 mb-8 leading-relaxed">
          Welcome to <span className="font-semibold">First Track Tour & Travel</span>.
          By accessing and using our website, you agree to comply with the
          following terms and conditions.
        </p>

        {/* Section 1 */}
        <h2 className="text-xl font-semibold mb-3">1. Acceptance of Terms</h2>
        <p className="text-gray-600 mb-6">
          By using our website, you agree to follow these Terms of Use and all
          applicable laws and regulations.
        </p>

        {/* Section 2 */}
        <h2 className="text-xl font-semibold mb-3">2. Use of Website</h2>
        <p className="text-gray-600 mb-6">
          You agree to use our website only for lawful purposes and not to
          misuse the services provided.
        </p>

        {/* Section 3 */}
        <h2 className="text-xl font-semibold mb-3">3. Booking and Payments</h2>
        <p className="text-gray-600 mb-6">
          All bookings made through our website are subject to availability
          and confirmation. Payments must be completed through approved
          payment methods.
        </p>

        {/* Section 4 */}
        <h2 className="text-xl font-semibold mb-3">4. Cancellation Policy</h2>
        <p className="text-gray-600 mb-6">
          Cancellation and refund policies may vary depending on the tour
          package or service booked.
        </p>

        {/* Section 5 */}
        <h2 className="text-xl font-semibold mb-3">5. Intellectual Property</h2>
        <p className="text-gray-600 mb-6">
          All content on this website including images, text, and logos
          belongs to First Track Tour & Travel and may not be copied
          without permission.
        </p>

        {/* Section 6 */}
        <h2 className="text-xl font-semibold mb-3">6. User Responsibilities</h2>
        <p className="text-gray-600 mb-6">
          Users must provide accurate information during booking and
          follow travel regulations.
        </p>

        {/* Section 7 */}
        <h2 className="text-xl font-semibold mb-3">7. Third Party Services</h2>
        <p className="text-gray-600 mb-6">
          Some services such as hotel bookings or payment gateways may be
          provided by third-party partners.
        </p>

        {/* Section 8 */}
        <h2 className="text-xl font-semibold mb-3">8. Limitation of Liability</h2>
        <p className="text-gray-600 mb-6">
          We are not responsible for travel delays, natural disasters,
          or service interruptions beyond our control.
        </p>

        {/* Section 9 */}
        <h2 className="text-xl font-semibold mb-3">9. Changes to Terms</h2>
        <p className="text-gray-600 mb-6">
          We may update these Terms of Use at any time. Changes will be
          posted on this page.
        </p>

        {/* Section 10 */}
        <h2 className="text-xl font-semibold mb-3">10. Contact Information</h2>
        <p className="text-gray-600">
          If you have questions about these Terms of Use, please contact us:
        </p>

        <div className="mt-3 text-gray-600">
          <p className="mt-2 font-medium text-gray-800">
            First Track Tour & Travel <br/>
            Email: firsttracktravel@gmail.com
          </p>
        </div>

      </div>

    </div>
  );
};

export default TermsOfUse;