export default function BackgroundPattern() {
  return (
    <>
      {/* <div className="absolute top-[232px] sm:top-[248px] md:top-[264px] lg:top-[320px] left-1/2 transform -translate-x-1/2 z-0 pointer-events-none">
      <svg
        className="w-[936px] sm:w-[1404px] md:w-[2106px] lg:w-[2808px] h-auto opacity-30 sm:opacity-40 md:opacity-50 mix-blend-multiply"
        style={{
          filter: "hue-rotate(15deg) saturate(0.7) brightness(1.2)",
        }}
        viewBox="0 0 2808 1200"
        preserveAspectRatio="xMidYMid slice"
      >
        <rect width="100%" height="100%" fill="none" />
      </svg>
    </div> */}

      <div className="self-stretch border-t border-[#E0DEDB] border-b border-[#E0DEDB] flex justify-center items-start mt-60">
        {/* <!-- Left Pattern --> */}
        <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
          <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
            <template id="pattern-template">
              <div className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"></div>
            </template>
          </div>
        </div>

        {/* <!-- Feature Cards --> */}
        <div className="flex-1 px-0 sm:px-2 md:px-0 flex flex-col md:flex-row justify-center items-stretch gap-0">
          {/* <!-- Card 1 --> */}
          <div className="w-full md:flex-1 self-stretch px-6 py-5 overflow-hidden flex flex-col justify-start items-start gap-2 cursor-pointer relative border-b md:border-b-0 border-l-0 border-r-0 md:border border-[#E0DEDB]/80">
            <div className="self-stretch flex justify-center flex-col text-[#49423D] text-sm md:text-sm font-semibold leading-6 md:leading-6">
              Plan your schedules
            </div>
            <div className="self-stretch text-[#605A57] text-[13px] md:text-[13px] font-normal leading-[22px] md:leading-[22px]">
              Streamline customer subscriptions and billing with automated
              scheduling tools.
            </div>
            {/* Added image for Plan your schedules card */}
            <img
              src="./assets/images/services/plan-your-schedules.jpeg"
              alt="Plan schedules dashboard"
              className="w-full h-40 object-cover rounded-md mt-3"
            />
          </div>
          {/* <!-- Card 2 --> */}
          <div className="w-full md:flex-1 self-stretch px-6 py-5 overflow-hidden flex flex-col justify-start items-start gap-2 cursor-pointer relative border-b md:border-b-0 border-l-0 border-r-0 md:border border-[#E0DEDB]/80">
            <div className="self-stretch flex justify-center flex-col text-[#49423D] text-sm md:text-sm font-semibold leading-6 md:leading-6">
              Analytics & insights
            </div>
            <div className="self-stretch text-[#605A57] text-[13px] md:text-[13px] font-normal leading-[22px] md:leading-[22px]">
              Transform your business data into actionable insights with
              real-time analytics.
            </div>
            {/* Added analytics dashboard image */}
            <img
              src="./assets/images/services/analytics-dashboard-with-charts-graphs-and-data-vi.jpg"
              alt="Analytics dashboard"
              className="w-full h-40 object-cover rounded-md mt-3"
            />
          </div>
          {/* <!-- Card 3 --> */}
          <div className="w-full md:flex-1 self-stretch px-6 py-5 overflow-hidden flex flex-col justify-start items-start gap-2 cursor-pointer relative last:border-b-0 border-b md:border-b-0 border-l-0 border-r-0 md:border border-[#E0DEDB]/80">
            <div className="self-stretch flex justify-center flex-col text-[#49423D] text-sm md:text-sm font-semibold leading-6 md:leading-6">
              Collaborate seamlessly
            </div>
            <div className="self-stretch text-[#605A57] text-[13px] md:text-[13px] font-normal leading-[22px] md:leading-[22px]">
              Keep your team aligned with shared dashboards and collaborative
              workflows.
            </div>
            {/* Added data visualization image */}
            <img
              src="./assets/images/services/data-visualization-dashboard-with-interactive-char.jpg"
              alt="Data visualization dashboard"
              className="w-full h-40 object-cover rounded-md mt-3"
            />
          </div>
        </div>

        {/* Right Pattern */}
        <div className="w-4 sm:w-6 md:w-8 lg:w-12 self-stretch relative overflow-hidden">
          <div className="w-[120px] sm:w-[140px] md:w-[162px] left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
            <template id="pattern-template-2">
              <div className="self-stretch h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"></div>
            </template>
          </div>
        </div>
      </div>
    </>
  );
}
