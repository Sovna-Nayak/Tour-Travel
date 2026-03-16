import React from "react";

const RefundCancellation = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-10">

        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
          Refund & Cancellation Policy
        </h1>

        {/* <p className="text-center text-gray-500 mb-8">
          Last updated: January 2026
        </p> */}

        <p className="text-gray-600 mb-8 leading-relaxed">
          At <span className="font-semibold">First Track Tour & Travel</span>,
          we strive to provide the best travel experience. This policy explains
          the terms for cancellations and refunds for our services.
        </p>

        {/* Section 1 */}
        <h2 className="text-xl font-semibold mb-3">
          1. Booking Cancellation
        </h2>

        <p className="text-gray-600 mb-6">
          Customers may cancel their bookings by contacting our support team
          or through their account dashboard.
        </p>

        {/* Section 2 */}
        <h2 className="text-xl font-semibold mb-3">
          2. Cancellation Time Frame
        </h2>

        <p className="text-gray-600 mb-6">
          Cancellations made at least 48 hours before the scheduled service
          may be eligible for a partial or full refund depending on the
          package terms.
        </p>

        {/* Section 3 */}
        <h2 className="text-xl font-semibold mb-3">
          3. Non-Refundable Services
        </h2>

        <p className="text-gray-600 mb-6">
          Certain bookings such as promotional packages, last-minute deals,
          or special discounted offers may be non-refundable.
        </p>

        {/* Section 4 */}
        <h2 className="text-xl font-semibold mb-3">
          4. Refund Processing
        </h2>

        <p className="text-gray-600 mb-6">
          Approved refunds will be processed within 5-7 working days
          through the original payment method.
        </p>

        {/* Section 5 */}
        <h2 className="text-xl font-semibold mb-3">
          5. Service Provider Policies
        </h2>

        <p className="text-gray-600 mb-6">
          Hotels, transport providers, and tour partners may have their
          own cancellation policies which must also be followed.
        </p>

        {/* Section 6 */}
        <h2 className="text-xl font-semibold mb-3">
          6. Changes to Bookings
        </h2>

        <p className="text-gray-600 mb-6">
          Customers may request changes to travel dates or services
          depending on availability and provider approval.
        </p>

        {/* Section 7 */}
        <h2 className="text-xl font-semibold mb-3">
          7. No-Show Policy
        </h2>

        <p className="text-gray-600 mb-6">
          If a customer fails to appear for the booked service without
          prior notice, the booking may be treated as a no-show and
          may not be eligible for a refund.
        </p>

        {/* Section 8 */}
        <h2 className="text-xl font-semibold mb-3">
          8. Exceptional Circumstances
        </h2>

        <p className="text-gray-600 mb-6">
          Refunds may be considered in special circumstances such as
          natural disasters, government travel restrictions, or medical
          emergencies.
        </p>

        {/* Section 9 */}
        <h2 className="text-xl font-semibold mb-3">
          9. Policy Updates
        </h2>

        <p className="text-gray-600 mb-6">
          We may update this Refund & Cancellation Policy from time to
          time. Any updates will be posted on this page.
        </p>

        {/* Section 10 */}
        <h2 className="text-xl font-semibold mb-3">
          10. Contact Us
        </h2>

        <p className="text-gray-600">
          If you have any questions regarding refunds or cancellations,
          please contact us:
        </p>

        <div className="mt-3 text-gray-600">
          <p className="mt-2 font-medium text-gray-800">
            First Track Tour & Travel <br />
            Email: firsttracktravel@gmail.com
          </p>
        </div>

      </div>

    </div>
  );
};

export default RefundCancellation;