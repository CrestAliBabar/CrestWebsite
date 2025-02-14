"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// If you’re using react-icons to handle multiple icon providers:
import * as MdiIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";

/** ========== Types ========== */
type IconProvider = "mdi" | "fa";

type CardItem = {
  _type?: string;
  _key: string;
  icon: {
    _type: string;
    name: string;      // e.g. "MdHourglassTop"
    provider: string;  // e.g. "mdi" or "fa"
  };
  title: string;
  description: string;
};

type StepHowItWorksProps = {
  stepHowItWorksContent: {
    heading: string;
    headingTextColor?: { label: string; value: string };
    subHeading?: string;
    subHeadingTextColor?: { label: string; value: string };
    card?: CardItem[];
    backGroundColor?: any;
    blockBackGroundColor?: { label: string; value: string };
    blockTitleColor?: { label: string; value: string };
    blockDescriptionTextColor?: { label: string; value: string };
  };
};

const StepHowItWorks: React.FC<StepHowItWorksProps> = ({
  stepHowItWorksContent,
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  // Destructure fields from your Sanity doc
  const {
    heading,
    headingTextColor,
    subHeading,
    subHeadingTextColor,
    card = [], // default to empty array if undefined
    backGroundColor,
    blockBackGroundColor,
    blockTitleColor,
    blockDescriptionTextColor,
  } = stepHowItWorksContent;

  // Utility to pick the correct icon from react-icons.
  const getIconComponent = (provider: IconProvider, iconName: string) => {
    if (provider === "mdi" && MdiIcons[iconName as keyof typeof MdiIcons]) {
      const Icon = MdiIcons[iconName as keyof typeof MdiIcons];
      return <Icon className="h-8 w-8" />;
    }
    if (provider === "fa" && FaIcons[iconName as keyof typeof FaIcons]) {
      const Icon = FaIcons[iconName as keyof typeof FaIcons];
      return <Icon className="h-8 w-8" />;
    }
    // fallback if nothing matches
    return <div className="h-8 w-8" />;
  };

  const handleStepClick = (index: number) => {
    if (index === activeStep) {
      // If the user clicks the currently active card, go to the next step
      // Wrap to first if we reach the end.
      const nextStep = (activeStep + 1) % card.length;
      setActiveStep(nextStep);
    } else {
      // If user clicks a different card, jump straight to it
      setActiveStep(index);
    }

    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 500);
  };

  return (
    <section
      className="py-16 px-4 min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: backGroundColor, // or a page-level background
      }}
    >
      <div className="max-w-6xl mx-auto relative ">
        {/* Example animated background (optional) */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full opacity-10"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: Math.random() * 0.5 + 0.5,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                transition: {
                  duration: Math.random() * 10 + 10,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                },
              }}
              style={{
                width: `${Math.random() * 20 + 10}px`,
                height: `${Math.random() * 20 + 10}px`,
              }}
            />
          ))}
        </div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          style={{
            color: headingTextColor?.value || "#ffffff",
          }}
        >
          {heading}
        </motion.h2>

        {/* Subheading */}
        {subHeading && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-center mb-12"
            style={{
              color: subHeadingTextColor?.value || "#cccccc",
            }}
          >
            {subHeading}
          </motion.p>
        )}

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* 3D Steps Display */}
          <div className="relative h-[450px] perspective-1000">
            <AnimatePresence>
              {card.map((stepItem, index) => {
                const isActiveStep = index === activeStep;
                return (
                  <motion.div
                    key={stepItem._key}
                    initial={{ opacity: 0, rotateY: -90, z: -200 }}
                    animate={{
                      opacity: isActiveStep ? 1 : 0.6,
                      rotateY: isActiveStep ? 0 : (index - activeStep) * 30,
                      z: isActiveStep
                        ? 0
                        : -100 * Math.abs(index - activeStep),
                      scale: isActiveStep ? 1 : 0.9,
                    }}
                    exit={{ opacity: 0, rotateY: 90, z: -200 }}
                    transition={{ duration: 0.5 }}
                    className={`absolute inset-0 
                      rounded-xl shadow-2xl p-6 flex flex-col justify-center
                      transform-preserve-3d cursor-pointer
                      ${isActiveStep ? "z-10" : "z-0"}
                    `}
                    style={{
                      // Use blockBackGroundColor for the card background
                      backgroundColor: blockBackGroundColor?.value || "#333333",
                    }}
                    onClick={() => handleStepClick(index)}
                    whileHover={{ scale: isActiveStep ? 1.05 : 1 }}
                    whileTap={{ scale: isActiveStep ? 0.95 : 1 }}
                  >
                    {/* Icon + Title in a row */}
                    <div className="flex items-center text-2xl font-bold mb-2">
                      <span className="mr-3">
                        {getIconComponent(
                          stepItem.icon?.provider as IconProvider,
                          stepItem.icon?.name
                        )}
                      </span>
                      <h3
                        style={{
                          color: blockTitleColor?.value || "#ffffff",
                        }}
                      >
                        {stepItem.title}
                      </h3>
                    </div>
                    {/* Description below */}
                    <p
                      className="text-lg"
                      style={{
                        color: blockDescriptionTextColor?.value || "#dddddd",
                      }}
                    >
                      {stepItem.description}
                    </p>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Interactive Progress Tracker */}
          <div>
            <h3
              className="text-2xl font-bold mb-6"
              // Same color as the card title
              style={{ color: blockTitleColor?.value || "#ffffff" }}
            >
              Your Journey to Success
            </h3>

            {card.map((stepItem, index) => {
              const isPastStep = index < activeStep;
              const isCurrentStep = index === activeStep;
              // We'll color the bullet text the same as the card title
              // when it's active or completed; otherwise a gray tone.
              const textColor = isPastStep || isCurrentStep
                ? blockTitleColor?.value || "#ffffff"
                : "#888888";

              return (
                <motion.div
                  key={stepItem._key}
                  className="mb-4 flex items-center cursor-pointer"
                  onClick={() => handleStepClick(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="w-8 h-8 rounded-full mr-4 flex items-center justify-center"
                    style={{
                      // Use the blockBackGroundColor to match the card color
                      backgroundColor:
                        index <= activeStep
                          ? blockBackGroundColor?.value || "#333333"
                          : "#4b5563", // fallback gray if not active/completed
                    }}
                    animate={{
                      scale: isCurrentStep ? [1, 1.2, 1] : 1,
                    }}
                    transition={{
                      duration: 0.5,
                      repeat: isCurrentStep
                        ? Number.POSITIVE_INFINITY
                        : 0,
                    }}
                  >
                    {isPastStep ? "✓" : index + 1}
                  </motion.div>
                  <span style={{ color: textColor }}>
                    {stepItem.title}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepHowItWorks;
