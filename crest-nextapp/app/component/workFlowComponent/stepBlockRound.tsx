/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useState, useRef } from "react";
import * as Icons from "react-icons/fa";

/** ========== Types ========== */

type StepBlockRoundProps = {
  stepBlockRoundContent: any;
};

type IconName = keyof typeof Icons;
type DynamicFontAwesomeIconProps = {
  name: IconName;
  iconSize?: number;
};

const DynamicFontAwesomeIcon: React.FC<DynamicFontAwesomeIconProps> = ({
  name,
  iconSize = 20,
}) => {
  const Icon = Icons[name];
  return <Icon size={iconSize} />;
};

/** ========== RoundBox Component with Proper Props ========== */

type RoundBoxProps = {
  title: string;
  description: string;
  iconUrl: IconName;
  bgColor: string;
  hoverColor: string;
  iconBgColor: string;
  titleColor: string;
  descriptionColor: string;
  index: number;
  isActive: boolean;
  isCompleted: boolean;
  isVisible: boolean;
  position: "left" | "right" | "center";
  onClick: () => void;
  cardRef: React.RefCallback<HTMLDivElement>;
};

const RoundBox: React.FC<RoundBoxProps> = ({
  title,
  description,
  iconUrl,
  bgColor,
  hoverColor,
  iconBgColor,
  titleColor,
  descriptionColor,
  index,
  isActive,
  isCompleted,
  isVisible,
  position,
  onClick,
  cardRef,
}) => {
  const [hover, setHover] = useState(false);

  // Responsive positions - center on mobile, left/right on larger screens
  const positions = {
    left: "mx-auto md:ml-12 md:mr-auto",
    right: "mx-auto md:mr-12 md:ml-auto",
    center: "mx-auto",
  };

  // Responsive dotted line path
  const getPath = (i: number) =>
    i % 2 === 0
      ? "M0,50 C100,50 100,150 200,150"
      : "M200,50 C100,50 100,150 0,150";

  return (
    <div className="relative w-full">
      {/* Draw dotted line if not first step - hidden on mobile */}
      {index > 0 && (
        <svg
          className="absolute w-48 h-24 transform -translate-y-12 hidden md:block"
          style={{
            left: index % 2 === 0 ? "0" : "auto",
            right: index % 2 === 1 ? "0" : "auto",
          }}
        >
          <path
            d={getPath(index)}
            stroke={isCompleted ? "#10B981" : "#6366F1"}
            strokeWidth="2"
            fill="none"
            strokeDasharray="8,8"
            className="transition-all duration-500"
          />
        </svg>
      )}

      <div
        ref={cardRef}
        className={`
          transition-all duration-500 transform
          ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-95 pointer-events-none"
          }
        `}
      >
        <div
          onClick={onClick}
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
          className={`
            w-full md:w-[28rem] ${positions[position]}
            flex flex-row items-center gap-4 md:gap-6
            rounded-[30px] md:rounded-[60px] border border-solid border-[#ada790]
            px-4 md:px-6 py-3 md:py-4 transition cursor-pointer
            ${
              isActive
                ? "bg-[#5ba4b5] shadow-lg scale-105"
                : hover
                ? hoverColor
                : bgColor
            }
            ${isCompleted ? "border-2 border-green-500" : ""}
          `}
        >
          {/* Icon Circle - Smaller on mobile */}
          <div
            style={{ backgroundColor: iconBgColor }}
            className="flex h-10 w-10 md:h-14 md:w-14 flex-none flex-col items-center justify-center rounded-full"
          >
            <DynamicFontAwesomeIcon 
              name={iconUrl} 
              iconSize={window.innerWidth < 768 ? 14 : 16} 
            />
          </div>

          {/* Title & description - Adjusted text sizes */}
          <div className="flex flex-col items-start gap-1.5 md:gap-2.5">
            <h5
              style={{ color: titleColor }}
              className="text-base md:text-lg font-bold md:text-xl"
            >
              {title}
            </h5>
            <p
              style={{ color: descriptionColor }}
              className="text-gray-600 text-xs md:text-sm"
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const StepBlockRound: React.FC<StepBlockRoundProps> = ({
  stepBlockRoundContent,
}) => {
  const heading = stepBlockRoundContent?.heading ?? "";
  const headingStyleColor = stepBlockRoundContent?.headingTextColor?.value || "#000000";
  const roundBoxes = stepBlockRoundContent?.roundBox || [];
  const backgroundColor = stepBlockRoundContent?.backGroundColor?.value || "#ffffff";
  const roundBoxBgColor = stepBlockRoundContent?.blockBackGroundColor?.value || "#ffffff";
  const roundBoxHoverColor = stepBlockRoundContent?.blockHoverColor?.value || "#eceae2";
  const roundBoxIconBgColor = stepBlockRoundContent?.iconBackGroundColor?.value || "#c9fd02";
  const roundBoxTitleColor = stepBlockRoundContent?.blockTitleColor?.value || "#000000";
  const roundBoxDescriptionColor = stepBlockRoundContent?.blockDescriptionTextColor?.value || "#636262";

  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState(new Set<number>());
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  const handleStepClick = (idx: number) => {
    if (idx === activeStep) {
      setCompletedSteps((prev) => {
        const newSet = new Set(prev);
        newSet.add(idx);
        return newSet;
      });
  
      const nextStep = idx + 1;
      setActiveStep(nextStep);
  
      setTimeout(() => {
        const nextCard = cardRefs.current[nextStep];
        if (nextCard && typeof nextCard.scrollIntoView === "function") {
          nextCard.scrollIntoView({
            behavior: "smooth",
            block: "center",
          });
        }
      }, 300);
    }
  };

  // Always return center for mobile, otherwise alternate left/right
  const getPosition = (i: number): "left" | "right" | "center" => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return "center";
    }
    return i % 2 === 0 ? "left" : "right";
  };

  return (
    <section style={{ backgroundColor }}>
      <div className="mx-auto w-full max-w-3xl px-4 md:px-10 py-8 md:py-16 lg:py-20">
        <h2
          style={{ color: headingStyleColor }}
          className="mx-auto mb-8 md:mb-12 max-w-3xl text-center text-2xl md:text-3xl font-extrabold md:text-5xl"
        >
          {heading}
        </h2>

        <div className="relative space-y-12 md:space-y-24">
          {roundBoxes.map((roundBox: any, index: number) => {
            const title = roundBox.title;
            const description = roundBox.description;
            const iconUrl = roundBox.icon?.name || "FaAdn";

            const isVisible = index <= activeStep;
            const isActive = index === activeStep;
            const isCompleted = completedSteps.has(index);
            const position = getPosition(index);

            return (
              <RoundBox
                key={index}
                index={index}
                isVisible={isVisible}
                isActive={isActive}
                isCompleted={isCompleted}
                position={position}
                onClick={() => handleStepClick(index)}
                cardRef={(el) => (cardRefs.current[index] = el)}
                title={title}
                description={description}
                iconUrl={iconUrl}
                bgColor={roundBoxBgColor}
                hoverColor={roundBoxHoverColor}
                iconBgColor={roundBoxIconBgColor}
                titleColor={roundBoxTitleColor}
                descriptionColor={roundBoxDescriptionColor}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StepBlockRound;