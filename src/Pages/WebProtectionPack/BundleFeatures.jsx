import React from "react";

export default function BundleFeatures() {
  return (
    <div className="py-8 md:py-16">
      {features.map((bf, index) => (
        <div key={index} className="mt-5">
          <h2 className="text-center text-2xl font-semibold">
            Key features of <span className="text-primary">{bf.header}</span>{" "}
          </h2>
          <div className="my-8 grid grid-cols-2 gap-4 md:grid-cols-3">
            {bf.children.map((bfc, k) => (
              <div
                key={k}
                className="min-h-[150px] rounded bg-[#fff1e5] p-4 shadow"
              >
                <h5 className="mb-1.5 font-semibold">{bfc.title}</h5>
                <p className="font-light">{bfc.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const features = [
  {
    header: "Bitss VWAR",
    children: [
      {
        title: "Realtime Auto-Scanning",
        description:
          "Constant monitoring with customizable scan intervals: Realtime, Hourly, Twice Daily, or Once Daily.",
      },
      {
        title: "Realtime Malware Neutralization",
        description:
          "Detect and neutralize malware instantly with user control options to automate or manually approve actions.",
      },
      {
        title: "Manual Malware Scanning",
        description:
          "Initiate manual scans, view detailed reports of detected malware, and neutralize threats with a single click.",
      },
      {
        title: "Neutralized Files Management",
        description:
          "Store and manage neutralized malware; choose to permanently remove or restore it.",
      },
      {
        title: "Malware-to-JPEG Conversion",
        description:
          "Convert neutralized malware into a JPEG for visual documentation, automatically sent to the admin’s email.",
      },
      {
        title: "Modified Files Tracker",
        description:
          "Continuously monitor directory changes, categorize modifications by time frames, and analyze changes to identify potential threats.",
      },
    ],
  },
  {
    header: "BITSS WAP",
    children: [
      {
        title: "Blacklist IP Management",
        description:
          "Efficiently block IPs flagged for spam or failed logins and customize restriction levels for enhanced security.",
      },
      {
        title: "IP Blocking Levels",
        description:
          "Set thresholds to deny access automatically to malicious users, ensuring secure and seamless user experiences.",
      },
      {
        title: "Effortless IP Unblocking",
        description:
          "Quickly restore access by removing IPs from the blacklist with a simple, user-friendly process.",
      },
      {
        title: "Whitelist IP Management",
        description:
          "Easily manage trusted IPs to ensure uninterrupted admin access while maintaining top-level security.",
      },
      {
        title: "Admin IP Control",
        description:
          "Register admin IPs with custom validation periods for smooth, secure access to administrative functions.",
      },
      {
        title: "Real-Time User Monitoring",
        description:
          "Track logged-in users and remotely log out suspicious sessions directly from the admin panel.",
      },
    ],
  },
  {
    header: "BITSS C Contact Form",
    children: [
      {
        title: "Customizable Form Fields",
        description:
          "Easily add, remove, or modify form fields to match your specific data collection needs. Choose from text inputs, dropdowns, checkboxes, and more.",
      },
      {
        title: "Spam Protection",
        description:
          "Built-in CAPTCHA or reCAPTCHA options to prevent spam submissions and ensure that only genuine messages are received.",
      },
      {
        title: "File Attachment Support",
        description:
          "Allow users to attach files (images, documents, etc.) to their messages for more detailed inquiries or feedback.",
      },
      {
        title: "Message Validation & Error Handling",
        description:
          "Real-time validation for required fields and proper data formats (e.g., email, phone number) to minimize submission errors.",
      },
      {
        title: "Customizable Thank-You Message",
        description:
          "Display a personalized thank-you message or redirect users to a custom confirmation page after they submit their form.",
      },
      {
        title: "Email Notifications",
        description:
          "Receive instant email notifications with the submitted form data. Option to notify both the admin and the user about the successful submission.",
      },
      {
        title: "Multi-Language Support",
        description:
          "Support multiple languages for global users by easily translating form elements and messages.",
      },
      {
        title: "Advanced Routing Options",
        description:
          "Automatically route form submissions to different email addresses or systems based on user selections or message content.",
      },
      {
        title: "Form Analytics",
        description:
          "Track and analyze form submissions, including submission rate, bounce rate, and user interaction metrics, for optimization.",
      },
      {
        title: "Responsive Design",
        description:
          "Optimized for mobile and desktop devices to ensure users can easily access and submit forms from any device.",
      },
      {
        title: "Auto-Response Confirmation",
        description:
          "Send an automatic acknowledgment email to the user after their submission, assuring them that their inquiry is being processed.",
      },
      {
        title: "Data Privacy & Encryption",
        description:
          "Ensure that all submitted data is securely encrypted, maintaining user privacy and complying with GDPR and other data protection regulations.",
      },
    ],
  },
];
