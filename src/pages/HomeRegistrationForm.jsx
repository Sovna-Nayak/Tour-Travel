// import React from "react";

// export default function HomeRegistrationForm() {
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
//       <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-3xl">
//         <h2 className="text-2xl font-bold mb-6">Home Registration</h2>

//         {/* Basic Details */}
//         <div className="grid grid-cols-2 gap-4">
//           <Input label="Owner Name*" />
//           <Input label="Mobile Number*" />
//           <Input label="Email Address*" />
//           <Input label="City*" />
//           <Input label="Pincode*" />
//           <Input label="Country*" />
//           <Input label="Landmark*" full />
//         </div>

//         {/* Identity Verification */}
//         <Section title="Identity Verification">
//           <div className="grid grid-cols-2 gap-4">
//             <FileInput label="Upload PAN Card*" />
//             <Input label="PAN Number*" />

//             <FileInput label="Upload Aadhaar Card*" />
//             <Input label="Aadhaar Number*" />
//           </div>
//         </Section>

//         {/* Bank Details */}
//         <Section title="Bank Details">
//           <div className="grid grid-cols-2 gap-4">
//             <Input label="Bank Name*" />
//             <Input label="Account Holder Name*" />
//             <Input label="Bank Account Number*" />
//             <Input label="IFSC Code*" />
//           </div>
//         </Section>

//         {/* Uploads */}
//         <Section title="Uploads">
//           <FileInput label="Upload Bank Statement*" />
//           <FileInput label="Upload Agreement*" />
//         </Section>

//         {/* Home Info */}
//         <Section title="Home Information">
//           <div className="grid grid-cols-2 gap-4 items-end">
//             <Input label="Property Name*" />
//             <button className="bg-teal-700 text-white px-4 py-2 rounded-lg">
//               Search Images from Google
//             </button>

//             <FileInput label="Upload Owner Image*" />
//             <FileInput label="Upload Property Images*" multiple />
//           </div>
//         </Section>

//         {/* Submit */}
//         <button className="w-full mt-6 bg-teal-600 text-white py-3 rounded-xl text-lg">
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// }

// /* 🔹 Input Component */
// function Input({ label, full }) {
//   return (
//     <div className={full ? "col-span-2" : ""}>
//       <label className="block text-sm font-medium mb-1">{label}</label>
//       <input
//         type="text"
//         className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
//       />
//     </div>
//   );
// }

// /* 🔹 File Input */
// function FileInput({ label, multiple }) {
//   return (
//     <div>
//       <label className="block text-sm font-medium mb-1">{label}</label>
//       <input
//         type="file"
//         multiple={multiple}
//         className="w-full text-sm"
//       />
//     </div>
//   );
// }

// /* 🔹 Section Wrapper */
// function Section({ title, children }) {
//   return (
//     <div className="mt-6">
//       <h3 className="text-lg font-semibold mb-3">{title}</h3>
//       {children}
//     </div>
//   );
// }






import React from "react";

export default function HomeRegistrationForm() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-3xl">
        <h2 className="text-2xl font-bold mb-6">Home Registration</h2>

        {/* Basic Details */}
        <div className="grid grid-cols-2 gap-4">
          <Input label="Owner Name*" />
          <Input label="Mobile Number*" />
          <Input label="Email Address*" />
          <Input label="City*" />
          <Input label="Pincode*" />
          <Input label="Country*" />
          <Input label="Landmark*" full />
        </div>

        {/* Identity Verification */}
        <Section title="Identity Verification">
          <div className="grid grid-cols-2 gap-4">
            <FileInput label="Upload PAN Card*" />
            <Input label="PAN Number*" />

            <FileInput label="Upload Aadhaar Card*" />
            <Input label="Aadhaar Number*" />
          </div>
        </Section>

        {/* Bank Details */}
        <Section title="Bank Details">
          <div className="grid grid-cols-2 gap-4">
            <Input label="Bank Name*" />
            <Input label="Account Holder Name*" />
            <Input label="Bank Account Number*" />
            <Input label="IFSC Code*" />
          </div>
        </Section>

        {/* Uploads */}
        <Section title="Uploads">
          <FileInput label="Upload Bank Statement*" />
          <FileInput label="Upload Agreement*" />
        </Section>

        {/* Home Info */}
        <Section title="Home Information">
          <div className="grid grid-cols-2 gap-4 items-end">
            <Input label="Property Name*" />
            <button className="bg-teal-700 text-white px-4 py-2 rounded-lg">
              Search Images from Google
            </button>

            <FileInput label="Upload Owner Image*" />
            <FileInput label="Upload Property Images*" multiple />
          </div>
        </Section>

        {/* Submit */}
        <button className="w-full mt-6 bg-teal-600 text-white py-3 rounded-xl text-lg">
          Submit
        </button>
      </div>
    </div>
  );
}

/* 🔹 Input Component */
function Input({ label, full }) {
  return (
    <div className={full ? "col-span-2" : ""}>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        type="text"
        className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
      />
    </div>
  );
}

/* 🔹 File Input with Button */
function FileInput({ label, multiple }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <label className="inline-block bg-teal-700 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-teal-800 transition">
        Choose File
        <input
          type="file"
          multiple={multiple}
          className="hidden"
        />
      </label>
    </div>
  );
}

/* 🔹 Section Wrapper */
function Section({ title, children }) {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      {children}
    </div>
  );
}