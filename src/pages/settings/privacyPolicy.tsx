import React from "react";

interface PolicySectionProps {
  title: string;
  content: string | React.ReactNode;
}

const PolicySection: React.FC<PolicySectionProps> = ({ title, content }) => (
  <div className="grid md:grid-cols-[200px_1fr] grid-cols-1 gap-4 md:gap-6 mb-6">
    <div className="text-sm font-semibold">{title}</div>
    <div className="text-sm text-gray-700 leading-relaxed">{content}</div>
  </div>
);

const PrivacyPolicy = () => {
  return (
    <div className="w-80 lg:w-full max-w-7xl p-2 text-left lg:mt-16">
      {/* Header Section */}
      <div className="mb-8 bg-white p-4 rounded-lg">
        <h1 className="text-2xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-xs uppercase text-gray-600 tracking-wide">
          OUR PERSONAL STATEMENT, COOKIES, THIRD-PARTIES
        </p>
      </div>
      <div className="max-w-5xl mx-auto rounded-lg shadow-sm">
        <div className="p-6 md:p-8">
          {/* Policy Sections */}
          <div className="space-y-6">
            <PolicySection
              title="Personal Statement"
              content={
                <>
                  We are committed to creating a secure and user-friendly
                  experience for every customer. To achieve this, we aim to be
                  as clear as possible about all of our policies as is evident
                  by our transparent Terms and Conditions.
                  <br />
                  <br />
                  When you visit our site renergyhub.com, some of your personal
                  information supplied during your order or by means of our
                  cookies policy may be gathered.
                </>
              }
            />

            <PolicySection
              title="What are Cookies?"
              content="Cookies are little text files that are stored within your browsers cache. First and third-party cookies are used on this site for functionality, statistics, and advertising."
            />

            <PolicySection
              title="Why do we use cookies?"
              content={
                <>
                  There are specific cookies necessary for a website to function
                  properly. Cookies is what keep track of settings, thus
                  allowing past shopping experiences to be tailored to you
                  (remembering your preference or settings).
                  <br />
                  <br />
                  Cookies also gathers data, for example, like the time of a
                  session, viewed pages, or just general demographic
                  information, like age and gender. The information that is
                  gathered can be used for analytical pursuits, allowing us to
                  generate customized shopping experiences for our users. We do
                  not use cookies that will track you or identify you.
                </>
              }
            />

            <PolicySection
              title="What information do we gather specifically?"
              content="The information we gather is what you supply us with when signing up for a newsletter or making a purchase. This is usually demographic information like name, address, or general contact information. Cookies will also gather session information like the pages viewed, the amount of time spent in the session, transactions, and any other general demographic information (origin, gender, age)."
            />

            <PolicySection
              title="What third-parties do we share your information with?"
              content="Any information we gather is only shared with our affiliate partners for analytical reasons. We will not share your information past our brand and trusted brand partners."
            />

            <PolicySection
              title="Disclosure of your information"
              content={
                <>
                  You have the right to request your data. If something is
                  incorrect, you can have it altered or removed.
                  <br />
                  <br />
                  You can also disable cookies on your device by changing your
                  browser's settings. You have the option to use opt-out
                  programs like 'NAI Consumer opt-out' or 'Google Analytics
                  opt-out browser add-on'. These prevent cookies from being used
                  in your browser. Know that if you do this, our site may not
                  function properly.
                </>
              }
            />

            <PolicySection
              title="Updates"
              content="Our privacy policies are subject to change. All updates will appear on this page."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
