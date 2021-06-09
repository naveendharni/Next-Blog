import Image from "next/image";

import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/Profile.png"
          alt="Naveen"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Naveen</h1>
      <p>
        I blog about web development - especially frontend framework like React.
      </p>
    </section>
  );
};

export default Hero;
