import Project from "./projects";

export default function Home() {
  return (
    <div>
      <div>
        <h2>Solving problems together.</h2>
        <h3>Web development</h3>
        <p>Three things are necessary for something to grow:</p>
        <p>
          The community is driven by the diligent effort of upstream
          contributors, bug fixes, designers, and document writers.
        </p>
        <p>
          For the projects, contributions, opportunities, difficulties, and
          individuals that have an effect on the community.
        </p>
        <p>
          Love entails support and culture. Why we care how we operate a
          community-building action.
        </p>
      </div>
      <div>
        <h3>Explore Projects</h3>
        <p>
          The projects you see here were born by hard work and dedication of our
          team, and patches are always welcome!
        </p>
        <Project />
      </div>
    </div>
  );
}
