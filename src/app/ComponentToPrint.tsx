import React, {lazy, Suspense} from "react";
import Hidable from "./hidable/Hidable";
import element from "./element.json";

const LazyCurrentTimeComponent = lazy(() => import("./CurrentTimeComponent"));

const LazyLoadedComponent = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyCurrentTimeComponent />
      </Suspense>
    </div>
  );
};

const ComponentToPrint = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref}>
      <div className="text-left p-1 m-0 md:m-1 max-w-screen-xl">
        <Hidable>
          <LazyLoadedComponent />
        </Hidable>
        <div className="mx-16">
          <Hidable>
            <h1 className="font-bold text-4xl uppercase">
              {element.firstname} {element.lastname}
            </h1>
          </Hidable>
          <Hidable>
            <p className="font-semibold text-lg">{element.desc}</p>
          </Hidable>
          <div className="flex space-x-2 justify-start">
            <Hidable>
              <p className="font-light text-base">{element.address}</p>
            </Hidable>
            <Hidable>
              <p className="text-light">|</p>
            </Hidable>
            <Hidable>
              <p className="font-light text-base">{element.tel}</p>
            </Hidable>
          </div>
          <div className="flex space-x-2 justify-start">
            {element.contactList.map((item, index) => (
              <React.Fragment key={index}>
                <Hidable>
                  <a
                    className="text-base font-semibold"
                    href={element.contactLink[index]}
                  >
                    {item}
                  </a>
                </Hidable>
                {index !== element.contactList.length - 1 && (
                  <Hidable>
                    <span className="text-lg">|</span>
                  </Hidable>
                )}
              </React.Fragment>
            ))}
          </div>
          <br />
          <Hidable>
            <h2 className="text-2xl font-semibold">About Me</h2>
            <hr />
          </Hidable>
          <Hidable>
            <p className="text-base">{element.about.join(" ")}</p>
          </Hidable>
          <br />
          <Hidable>
            <h2 className="text-2xl font-semibold">Education</h2>
            <hr />
          </Hidable>
          {element.educations.map((item, index) => (
            <React.Fragment key={index}>
              <Hidable>
                <h3 className="text-xl font-semibold uppercase">{item}</h3>
              </Hidable>
                <div className="flex justify space-x-2">
                {element.details[index].map((detail, idx) => (
                  <React.Fragment key={idx}>
                    <Hidable>
                    <p className="text-sm">{detail}</p>
                    </Hidable>
                    {idx !== element.details[index].length - 1 && (
                      <Hidable>
                        <p className="text-sm">|</p>
                      </Hidable>
                    )}
                  </React.Fragment>
                ))}
                </div>
            </React.Fragment>
          ))}
          <br />
          <Hidable>
            <h2 className="text-2xl font-semibold">Projects</h2>
            <hr />
          </Hidable>
          {element.projects.map((item, index) => (
            <React.Fragment key={index}>
              <ul>
                <li>
                  <Hidable>
                    <p className="text-base font-semibold">{item}</p>
                  </Hidable>
                  <Hidable>
                    <p className="text-sm">{element["projects-info"][index]}</p>
                  </Hidable>
                </li>
              </ul>
            </React.Fragment>
          ))}
          <br />
          <Hidable>
            <h2 className="text-2xl font-semibold">Achievements</h2>
            <hr />
          </Hidable>
          {element.achievement.map((item, index) => (
            <React.Fragment key={index}>
              <ul>
                <li>
                  <Hidable>
                    <p className="text-base">{item}</p>
                  </Hidable>
                </li>
              </ul>
            </React.Fragment>
          ))}
          <br />
          <Hidable>
            <h2 className="text-2xl font-semibold">Technology</h2>
            <hr />
          </Hidable>
          {element.technology.map((val, index) => (
            <React.Fragment key={index}>
              <ul>
                <li>
                  <div className="flex space-x-1">
                  <Hidable>
                    <p className="text-base font-semibold">{val} :</p>
                  </Hidable>
                  {element["tech-info"][index].map((info, idx) => (
                    <React.Fragment key={idx}>
                      <Hidable>
                        <p className="text-base items-end">{info}</p>
                      </Hidable>
                    </React.Fragment>
                  ))}
                  </div>
                </li>
              </ul>
            </React.Fragment>
          ))}
          <br/>
          <Hidable>
            <h2 className="text-2xl font-semibold">Interests</h2>
            <hr />
          </Hidable>
          {element.interests.map((val, index) => (
            <React.Fragment key={index}>
              <ul>
                <Hidable>
                  <li>
                    <p className="text-sm">{val}</p>
                  </li>
                </Hidable>
              </ul>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
});

ComponentToPrint.displayName = "ComponentToPrint";

export default ComponentToPrint;
