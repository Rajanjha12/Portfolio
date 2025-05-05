import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
      Hi, I'm Rajan Kumar Jha, a passionate Web Developer and tech enthusiast with a strong foundation in C++, Data Structures & Algorithms, and modern web technologies like HTML, CSS, JavaScript, and React. I’ve completed several certifications and internships, and I actively participate in hackathons and open-source programs like GSSOC.

I’m also a Gold Award winner of the Let’s Upgrade Student Ambassador program, where I connected with over 300 fellow tech learners and professionals. I’m currently working on a project called Shiksha Samagam, aimed at delivering educational resources and event updates for university students.

When I’m not coding, I enjoy learning about FinTech, doing competitive programming, and sharing knowledge with the developer community.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
