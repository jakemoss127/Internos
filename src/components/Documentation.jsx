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
                  finding relevant internship opportunities by leveraging
                  advanced natural language processing and large language models
                  (LLMs). When a user interacts with Internos, the chatbot
                  parses the input using LLMs to understand queries such as
                  specific industries, locations, internship types, and other
                  preferences. This natural language understanding enables
                  Internos to interpret a wide range of user requests
                  accurately, even in cases where the phrasing may vary.<br/><br /> Behind
                  the scenes, Internos integrates with a backend system powered
                  by a PostgreSQL database, which stores thousands of
                  internships aggregated from over twenty different job boards.
                  This rich database ensures that users are presented with
                  up-to-date and diverse internship listings, including
                  opportunities in fields such as finance, marketing, software
                  engineering, and more. By parsing user queries and matching
                  them with available internships, Internos provides
                  personalized recommendations that fit the user’s needs. <br/><br />Once
                  the query is processed, Internos fetches relevant internships
                  from the database based on factors such as the job title,
                  location, and remote availability. Users can then explore
                  internship details and apply directly, making the process
                  seamless from inquiry to application.
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
