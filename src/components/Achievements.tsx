import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const achievements = [
  {
    title: 'COMSYS Hackathon 2023',
    organization: 'IIT Mandi',
    description: 'Ranked among the top 5 teams at the COMSYS Hackathon 2023 hosted by IIT Mandi and COMSYS Educational Trust',
    date: 'October 2023',
    skills: ['NLP', 'Regression', 'Time Series']
  },
  {
    title: 'COMSYS Hackathon-II',
    organization: 'Mizoram University and NIT Mizoram',
    description: 'Top Competitor and Winner Team: Secured 1st position',
    date: 'December 2023',
    skills: ['Feature Extraction', 'Audio Classification']
  },
  {
    title: 'DATA DRIVEN ASTRONOMY',
    organization: 'Cochin University of Science and Technology',
    description: 'Positron Foundation CITTIC, Cochin University of Science and Technology',
    skills: ['Python', 'Astroquery', 'fastAI']
  }
];

export const Achievements = () => {
  return (
    <section className="py-12 px-4" id="achievements">
      <h2 className="font-pixel text-4xl font-bold text-center mb-12 text-space-purple animate-glow">
        Achievements
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {achievements.map((achievement, index) => (
          <Card key={index} className="bg-space-darker/50 backdrop-blur-sm border-space-purple/20 hover:border-space-purple/50 transition-all duration-300 group">
            <CardHeader>
              <CardTitle className="font-pixel text-space-purple group-hover:text-space-cyan transition-colors">
                {achievement.title}
              </CardTitle>
              <CardDescription className="font-pixel text-gray-400">
                {achievement.organization}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-pixel text-sm text-gray-400 mb-4">{achievement.description}</p>
              {achievement.date && (
                <p className="font-pixel text-sm text-space-cyan mb-4">{achievement.date}</p>
              )}
              <div className="flex flex-wrap gap-2">
                {achievement.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="font-pixel text-xs px-2 py-1 rounded-full bg-space-purple/20 text-space-purple"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};