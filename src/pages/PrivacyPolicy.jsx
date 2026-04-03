import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div className="container animate-fade-in" style={{ padding: 'clamp(2rem, 5vw, 4rem) 0' }}>
      <div className="glass-panel responsive-panel" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
          Privacy <span className="text-gradient">Policy</span>
        </h1>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
          <section>
            <p><strong>Effective Date:</strong> {new Date().toLocaleDateString()}</p>
            <p>
              At SKDev, we consider the privacy of our users to be extremely important. This Privacy Policy document describes in detail the types of personal information is collected and recorded by our applications and how we use it.
            </p>
          </section>

          <section>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Information Collection And Use</h3>
            <p>
              We prioritize privacy and strive to collect minimal personal information. 
              Our applications, such as Aniset and Anify Widget, handle most operations locally on your device. 
              Any external services we use (like AdMob for advertising or Firebase for basic analytics) may collect standard anonymous usage data to help us improve the app experience.
            </p>
          </section>

          <section>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Log Data</h3>
            <p>
              Like many app developers, we may collect information that your device sends whenever you use our apps ("Log Data"). This Log Data may include information such as your device's Internet Protocol ("IP") address, device name, operating system version, the configuration of the app when utilizing our Service, the time and date of your use of the Service, and other statistics.
            </p>
          </section>

          <section>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Third-Party Partners</h3>
            <p>
              We may use third-party Service Providers to monitor and analyze the use of our Service or to serve advertisements. For instance, Google AdMob may use device identifiers to personalize content and ads. You can generally opt-out of personalized advertising within your device settings.
            </p>
          </section>

          <section>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Security</h3>
            <p>
              We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Changes to This Privacy Policy</h3>
            <p>
              We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.
            </p>
          </section>

          <section>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Contact Us</h3>
            <p>
              If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at <strong>satyakiran296@gmail.com</strong>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
