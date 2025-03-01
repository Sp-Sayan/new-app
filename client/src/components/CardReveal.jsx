import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import Am_img from "../assets/aarshi.jpeg";
import Sp_img from "../assets/sayan.jpg";

export default function CardReveal() {
  const [hoveredIdx, setHoveredIdx] = React.useState(null);
  const about_us = [
    {
      key: 0,
      name: "Sayan Paul",
      image: Sp_img,
      containerClass: "bg-[hsl(var(--destructive))]",
      colors: [[225, 29, 72]],
    },
    {
      key: 1,
      name: "Aarshi Mitra",
      image: Am_img,
      containerClass: "bg-[hsl(var(--destructive))]",
      colors: [[225, 29, 72]],
    },
  ];

  return (
    <>
      {about_us.map((contributor) => (
        <div
          key={contributor.key}
          className="card-container py-[5rem] flex gap-[8rem]"
        >
          <Card
            title={contributor.name}
            image={contributor.image}
            icon={<AceternityIcon />}
            onHover={(e) => {
              if (e) {
                setHoveredIdx(contributor.key);
              } else {
                setHoveredIdx(null);
              }
            }}
          >
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName={contributor.containerClass}
              colors={contributor.colors}
              dotSize={4}
            />
          </Card>

          <div className="description flex flex-col gap-[4rem] ">
            <div className="text-5xl font-title bg-gradient-to-b from-foreground from-30%  to-background to-90% text-transparent bg-clip-text">
              {hoveredIdx === contributor.key ? contributor.name : "?????"}
            </div>
            <p className="text-xl w-5/6 font-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              itaque, adipisci iure quam dicta nobis libero esse distinctio,
              eligendi saepe quibusdam quis voluptas neque placeat architecto
              expedita eos in reiciendis? Animi officia, numquam error sed
              beatae blanditiis voluptatibus ab mollitia nobis excepturi in
              fugiat eos iste fugit quae quo odit illum placeat voluptatem
              asperiores perspiciatis facere recusandae voluptate velit?
              Quibusdam? Voluptates assumenda illo maxime velit dicta, deserunt
              eius fugit sint corporis nulla perspiciatis numquam! Qui totam
              harum sapiente saepe, tempora quas maxime eligendi sequi ipsam
              incidunt, perferendis quod fugiat pariatur!
            </p>
          </div>
        </div>
      ))}
    </>
  );
}

const Card = ({ title, onHover, icon, image, children }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => {
        setHovered(true);
        onHover(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
        onHover(false);
      }}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem] "
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative z-20 flex flex-col items-center">
        <div className="icon-container opacity-100 text-center h-full translate-y-[8rem]  group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  flex items-center justify-center">
          {icon}
        </div>
        <img
          className=" opacity-0  group-hover/canvas-card:opacity-100 top-[-10rem] transition-all duration-200 h-2/3 w-2/3 relative group-hover/canvas-card:-top-[4rem] aspect-[1/1] rounded-[50%]"
          src={image}
          alt="image"
        />
        <h2 className=" dark:text-foreground text-xl font-title uppercase opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-foreground mt-4  font-bold  group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = () => {
  return (
    <svg
      width="66"
      height="65"
      viewBox="0 0 66 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
    >
      <path
        d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
        stroke="currentColor"
        strokeWidth="15"
        strokeMiterlimit="3.86874"
        strokeLinecap="round"
        style={{ mixBlendMode: "darken" }}
      />
    </svg>
  );
};

export const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
