import React from "react";

const AboutUs: React.FC = () => {
  return (
    <div id="about" className="bg-white min-h-screen py-12">
      <div className="w-4/5 mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6 text-[#903839]">About Us</h1>
        <p className="text-lg mb-6">
          The <strong>Little Hearts Club (LHC)</strong> is a student-run charity
          organization at Hawassa University. Our mission is to support children
          living on the streets by providing them with essential resources,
          educational opportunities, and emotional support. We aim to help
          vulnerable children build a brighter future through direct aid,
          advocacy, and community engagement.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h2 className="text-2xl font-semibold text-[#903839] mb-2">
              Mission Statement
            </h2>
            <p className="text-lg">
              To empower and uplift children living on the streets by providing
              them with the resources, education, and support they need to
              thrive.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-[#903839] mb-2">
              Vision Statement
            </h2>
            <p className="text-lg">
              To create a community where every child, regardless of their
              circumstances, has the opportunity to achieve their full potential
              and lead a healthy, fulfilling life.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-[#903839] mb-4">
          Objectives
        </h2>
        <ul className="list-disc text-left text-lg space-y-2 ml-4 mb-8">
          <li>
            Provide Basic Needs: Supply food, clothing, hygiene products, and
            medical care to children in need.
          </li>
          <li>
            Educational Support: Offer tutoring, school supplies, and
            scholarships to facilitate educational opportunities.
          </li>
          <li>
            Emotional and Social Support: Create mentorship programs and safe
            spaces for emotional guidance.
          </li>
          <li>
            Advocacy and Awareness: Raise awareness about the issues faced by
            street children and advocate for their rights.
          </li>
          <li>
            Community Engagement: Foster volunteerism among university students
            and local residents.
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-[#903839] mb-4">
          Leadership Team
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 shadow rounded">
            <h3 className="text-xl font-bold text-[#903839]">
              Ibsa Gutema Hundea
            </h3>
            <p className="text-md">President</p>
            <p className="text-md">Biomedical, 3rd year</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h3 className="text-xl font-bold text-[#903839]">
              Biruk Abebe Chala
            </h3>
            <p className="text-md">Vice President</p>
            <p className="text-md">Biomedical, 3rd year</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h3 className="text-xl font-bold text-[#903839]">
              Dagimawi Melaku Fantahun
            </h3>
            <p className="text-md">Treasurer</p>
            <p className="text-md">Electrical, 4th year</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h3 className="text-xl font-bold text-[#903839]">
              Biruk Zerihun Tadesse
            </h3>
            <p className="text-md">Secretary</p>
            <p className="text-md">Biomedical, 3rd year</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h3 className="text-xl font-bold text-[#903839]">
              Helidana Aschalew Regasa
            </h3>
            <p className="text-md">Program Coordinator</p>
            <p className="text-md">Information Systems, 2nd year</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h3 className="text-xl font-bold text-[#903839]">
              Selam Kibrom Gebreyesus
            </h3>
            <p className="text-md">Volunteer Coordinator</p>
            <p className="text-md">Information Systems, 2nd year</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
