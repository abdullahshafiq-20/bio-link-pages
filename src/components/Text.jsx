import { useEffect } from "react";
import gsap from "gsap";

export default function Text({ title, subtitle, links }) {
  return (
    <>
      <div className="section-heading select-none">
        <div className="heading flex translate-y-56 items-center justify-center space-x-[3%] no-underline">
          <h2 className="w-fit text-5xl sm:text-special font-small font-grotesk  text-secondary-600">
            {title}
          </h2>
          <h4 className="w-fit text-5xl sm:text-special font-body-4 font-grotesk  text-secondary-600">
            {subtitle}
          </h4>
          <div className="link">
            {links.map((link, index) => (
              <p key={index}>
                <a href={link[0]}>{link[1]}</a>
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
