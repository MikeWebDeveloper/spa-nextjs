'use client';

export default function PrivacyPolicy() {
  return (
    <div className="space-y-6 text-gray-700">
      <section>
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p>Last updated: {new Date().toLocaleDateString('en-GB')}</p>
        <p className="mt-4">
          Welcome to Modern Business SPA ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018 (DPA 2018).
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
        <p>We collect information that you provide directly to us, including:</p>
        <ul className="list-disc ml-6 mt-2">
          <li>Contact information (name, email address, phone number)</li>
          <li>Business information (company name, job title)</li>
          <li>Message content when you contact us</li>
          <li>Technical information (IP address, browser type, device information)</li>
        </ul>
      </section>

      {/* Rest of the privacy policy content */}
      {/* ... */}
    </div>
  );
} 