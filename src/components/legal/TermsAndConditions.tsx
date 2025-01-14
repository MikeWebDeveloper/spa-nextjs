'use client';

export default function TermsAndConditions() {
  return (
    <div className="space-y-6 text-gray-700">
      <section>
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p>Last updated: {new Date().toLocaleDateString('en-GB')}</p>
        <p className="mt-4">
          By accessing and using Modern Business SPA ("we," "our," or "us"), you agree to be bound by these Terms and Conditions. Please read these terms carefully before using our services.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">2. Intellectual Property Rights</h2>
        <p>
          All content, including but not limited to text, graphics, logos, images, and software, is the property of Modern Business SPA and is protected by UK and international intellectual property laws.
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li>You may not use our content without our express written permission</li>
          <li>Our trademarks may not be used in connection with any product or service without prior written consent</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">3. Restrictions</h2>
        <p>You are specifically restricted from:</p>
        <ul className="list-disc ml-6 mt-2">
          <li>Publishing any material from our website in any media without permission</li>
          <li>Selling, sublicensing, or commercializing any website material</li>
          <li>Using our website in any way that causes damage to the website</li>
          <li>Using our website contrary to applicable laws and regulations</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">4. Your Content</h2>
        <p>
          By submitting content to our website, you grant us a worldwide, irrevocable, non-exclusive, royalty-free license to use, reproduce, adapt, publish, translate, and distribute your content.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">5. No Warranties</h2>
        <p>
          Our website is provided "as is" without any warranties, expressed or implied. We make no representations or warranties of any kind.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Modern Business SPA shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the website.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">7. Indemnification</h2>
        <p>
          You agree to indemnify and hold Modern Business SPA harmless from any claims, damages, or expenses arising from your use of our website or violation of these terms.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">8. Severability</h2>
        <p>
          If any provision of these terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
        <p>
          These terms shall be governed by and construed in accordance with the laws of the United Kingdom. Any disputes shall be subject to the exclusive jurisdiction of the courts of the United Kingdom.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">10. Changes to Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. We will notify users of any material changes by posting the new terms on the website.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">11. Contact Information</h2>
        <p>
          If you have any questions about these Terms and Conditions, please contact us at:
        </p>
        <p className="mt-2">
          Email: contact@modernbusinessspa.com<br />
          Address: [Your Business Address]<br />
          Phone: [Your Phone Number]
        </p>
      </section>
    </div>
  );
} 