import React from "react";
import developerPhoto from "../../../static/assets/images/developer-photo.jpg";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + developerPhoto + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="right-column">
        <p>
          <h2>Profile</h2>
          <br />
          14 year career in the United States Air Force as part of a diverse
          team that solved complex problems with systematic troubleshooting
          approaches and outside-the-box thinking. Effectively operated in a
          high-stress environment while managing budget limitations, personnel
          shortages, and resource constraints. Key contributions include drive,
          focus, and intensive attention to detail to every task. The goal is to
          exceed the standard.
          <br />
          <h2>Relevant Skills</h2>
          <br /> • Soft Skills: “Adapt and overcome” through critical thinking
          and a systematic thought process. Always willing to learn. As a former
          supervisor in the military, the key to teamwork is rooted in empathy.
          • Technical Skills: Python3, Javascript, ReactJS, UML, HTML5, CSS,
          Flask, JSON, Git, MongoDB, SQL Databases, SCSS/SASS, Flexbox, CSS
          Grid. Projects • Fantastic Fries: A multi-page, responsive restaurant
          website that utilizes HTML5, CSS3, Flexbox, CSS Grid, Animations,
          media queries, custom forms, responsive images, and a range of front
          end development techniques.
          https://jdh-bottega-react-portfolio.herokuapp.com/ • Text-Based
          Adventure Game: A terminal game ran by Python3 featuring several
          Python modules, loops, user inputs, etc. // GitHub Link Goes Here •
          Author Website: A multi-page, responsive author website that utilizes
          HTML5, CSS3, Flexbox, CSS Grid, Animations, media queries, custom
          form, responsive images, and a range of front end development
          techniques. // Website Link Goes Here Work Experience • United States
          Air Force, F-16 Crew Chief August 2008-May 2022 Learning the core
          principles of tactical aircraft maintenance requires learning complex
          systems, reading and comprehension of complex documentation,
          troubleshooting concepts, and repair/test/complete cycles—concepts
          that translate directly to development practices. Promoted to a
          production management position supervising front-line workers and
          providing quality assurance, technical advisement, as well as tracking
          and managing status and workflow for 31 aircraft and 50+ employees.
          Education • Full Stack Developer Certification, Bottega University
          April 2022-June 2022 Classroom instruction provided an introduction to
          development concepts, skills, tasks, processes and tools. Coding
          exercises in Python3, Javascript, ReactJS, UML, HTML5, CSS, Flask,
          JSON, Git, MongoDB, SQL Databases, SCSS/SASS, Flexbox, CSS Grid.
          Outside class projects included developing websites, applications, and
          other projects available at //GitHub Link Goes Here. • Masters of
          Arts, English & Creative Writing, Southern New Hampshire University
          April 2014-January 2016 Major area of study included a combination of
          advanced writing and research skills: how to effectively gather,
          parse, and format information on given topics, methods to expound or
          condense that information, and best practices for verifying the
          integrity of gathered information. Activities • Military Science
          Fiction Author: Writing is a deep-seeded passion of mine. Humans learn
          best when information is communicated through stories. Stories that
          resonate stick with us, teach us, inform us...and can change us. To
          date I have published Redshift, the first novel in a trilogy with
          Temple Dark Books. The sequel, Apogee, is slated for release December
          2022. I am currently coauthoring with Rick Partlow, and I have also
          written a separate novel Calamity’s Edge, published by Aethon Books,
          release date TBA.
        </p>
      </div>
    </div>
  );
}
