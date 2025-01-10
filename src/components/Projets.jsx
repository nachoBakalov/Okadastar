import { useState } from 'react';

import { exploreWorlds } from '../constants/index';
import { ExploreCard } from '../extras';
import Heading from "./Heading";
import Section from './Section';

const Projets = () => {
  const [active, setActive] = useState('world-2');
  return (
    <Section id="explore">
      <div className="container"  >
        <Heading
            className="md:max-w-md lg:max-w-2xl text-color-7 "
            title="Нашите най-добри проекти"
          />
    
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
    </div>
  </Section>
  )
}

export default Projets