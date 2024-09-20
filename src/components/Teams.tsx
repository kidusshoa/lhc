import React, { useEffect, useState } from "react";

interface Team {
  teamName: string;
  previousName: string;
  activities: string[];
  teamLeaders: string[];
}

const TeamCard: React.FC<{ team: Team }> = ({ team }) => {
  return (
    <div
      id="teams"
      className="border p-4 rounded-lg shadow-[#903839] shadow-lg bg-white"
    >
      <h2 className="text-xl font-semibold text-[#903839]">{team.teamName}</h2>
      <p className="text-sm text-gray-500">Formerly: {team.previousName}</p>
      <ul className="mt-2 list-disc pl-5">
        {team.activities.map((activity, index) => (
          <li key={index} className="text-gray-700">
            {activity}
          </li>
        ))}
      </ul>
      <h3 className="mt-4 font-medium">Team Leaders:</h3>
      <p>{team.teamLeaders.join(", ")}</p>
    </div>
  );
};

const TeamsList: React.FC = () => {
  const [teamData, setTeamData] = useState<Team[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const data: Team[] = await response.json();
        setTeamData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {teamData.map((team, index) => (
        <TeamCard key={index} team={team} />
      ))}
    </div>
  );
};

export default TeamsList;
