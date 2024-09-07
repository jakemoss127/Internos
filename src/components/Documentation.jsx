import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

export const Documentation = () => {
  return (
    <div>
      <div className="w-full mx-auto p-8">
        <Nav />
        <div className="mx-auto mt-8 rounded-xl border-2 border-gray-100 shadow-lg">
          <div className="join join-vertical w-full">
            {/* Overview Section */}
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-1" defaultChecked />
              <div className="collapse-title text-xl font-medium">Overview</div>
              <div className="collapse-content">
                <p>
                  Internos is an AI-powered chatbot designed to assist users in
                  finding relevant internship opportunities. It provides
                  personalized recommendations based on user input and
                  preferences such as location, industry, and internship type.
                </p>
              </div>
            </div>

            {/* Key Features Section */}
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title text-xl font-medium">
                Key Features
              </div>
              <div className="collapse-content">
                <ul className="list-disc pl-6 mt-2">
                  <li>
                    AI-driven interaction for personalized internship
                    recommendations.
                  </li>
                  <li>
                    Supports user-specific preferences like location, industry,
                    and internship type.
                  </li>
                  <li>
                    Real-time updates on internships from various sources.
                  </li>
                  <li>Guidance through the internship application process.</li>
                </ul>
              </div>
            </div>

            {/* How to Use Section */}
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title text-xl font-medium">
                How to Use Internos
              </div>
              <div className="collapse-content">
                <p className="mt-2">To use Internos, follow these steps:</p>
                <ul className="list-decimal pl-6 mt-2">
                  <li>Open the chatbot and introduce yourself.</li>
                  <li>
                    Provide information about your internship preferences.
                  </li>
                  <li>
                    Internos will suggest internships based on your input.
                  </li>
                  <li>
                    Choose an internship, and Internos will guide you through
                    the application process.
                  </li>
                </ul>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title text-xl font-medium">FAQ</div>
              <div className="collapse-content">
                <div className="mt-2">
                  <p className="font-semibold">
                    How does Internos provide recommendations?
                  </p>
                  <p>
                    Internos uses advanced AI algorithms to match internships
                    based on the preferences provided during the interaction.
                  </p>
                </div>

                <div className="mt-4">
                  <p className="font-semibold">
                    Can I apply directly through Internos?
                  </p>
                  <p>
                    Yes, Internos integrates with many application platforms,
                    allowing you to apply directly for internships.
                  </p>
                </div>
              </div>
            </div>

            {/* Support Section */}
            <div className="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion-1" />
              <div className="collapse-title text-xl font-medium">Support</div>
              <div className="collapse-content">
                <p className="mt-2">
                  If you need any assistance, please contact us at{" "}
                  <a
                    className="text-blue-500 underline"
                    href="mailto:support@internos.com"
                  >
                    support@internos.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Documentation;
