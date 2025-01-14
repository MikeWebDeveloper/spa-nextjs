'use client';

export default function CookiePolicy() {
  return (
    <div className="space-y-6 text-gray-700">
      <section>
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p>Last updated: {new Date().toLocaleDateString('en-GB')}</p>
        <p className="mt-4">
          This Cookie Policy explains how Modern Business SPA ("we," "our," or "us") uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">2. What Are Cookies?</h2>
        <p>
          Cookies are small data files that are placed on your computer or mobile device when you visit a website. They are widely used by website owners to make their websites work, or work more efficiently, as well as to provide reporting information.
        </p>
        <p className="mt-2">
          Cookies set by the website owner (in this case, Modern Business SPA) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies".
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">3. Types of Cookies We Use</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-medium mb-2">Essential Cookies</h3>
            <p>These cookies are necessary for the website to function and cannot be switched off. They are usually only set in response to actions made by you, such as setting your privacy preferences, logging in, or filling in forms.</p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">Performance Cookies</h3>
            <p>These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us know which pages are the most and least popular and see how visitors move around the site.</p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">Functionality Cookies</h3>
            <p>These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.</p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-2">Targeting Cookies</h3>
            <p>These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">4. How We Use Cookies</h2>
        <p>We use cookies for the following purposes:</p>
        <ul className="list-disc ml-6 mt-2">
          <li>To identify you when you visit our website and as you navigate our website</li>
          <li>To help you complete forms on our website</li>
          <li>To analyze the use and performance of our website</li>
          <li>To personalize our website for you</li>
          <li>To enable certain functions of the website</li>
          <li>To store your preferences</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">5. Managing Cookies</h2>
        <p>
          Most browsers allow you to refuse to accept cookies and to delete them. The methods for doing so vary from browser to browser, and from version to version. You can obtain up-to-date information about blocking and deleting cookies via these links:
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li><a href="https://support.google.com/chrome/answer/95647" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
          <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Firefox</a></li>
          <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Safari</a></li>
          <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">6. Changes to This Cookie Policy</h2>
        <p>
          We may update this Cookie Policy from time to time. When we do, we will revise the "last updated" date at the top of this page. We encourage you to periodically review this page to stay informed about our use of cookies.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">7. Contact Information</h2>
        <p>
          If you have any questions about our use of cookies, please contact us at:
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