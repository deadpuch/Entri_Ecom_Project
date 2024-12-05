import React from "react";

export const About = () => {
  return (
    <main className="hidden md:block">
      <section>
        <div className="w-full h-[40vh] bg-black">
          <img
            src="/IMG/Hero_Section.webp"
            alt=""
            className="w-full block h-full object-cover"
          />
        </div>

        <div className="2xl:container 2xl:mx-auto grid grid-cols-2 mx-4 my-4">
          <div>
            <h3 className="font-semibold text-lg text-[#478E6E]">SRM PHARMA</h3>
            <h1 className="text-[3rem] font-semibold">
              A Legacy of <br />
              Ayurveda Wisdom
            </h1>
          </div>

          <div className="flex items-end">
            <p>
              SRM Pharma has a rich heritage built on traditional Ayurvedic
              medicine passed down through generations for over 120 years.{" "}
            </p>
          </div>
        </div>

        <div className="About_grid 2xl:container 2xl:mx-auto mx-4">
          <div className="bg-slate-300 h-[500px] rounded-2xl overflow-hidden">
            <img
              src="/IMG/happy-medical-team-hospital 1.png"
              alt=""
              className="w-full h-full block object-cover"
            />
          </div>
          <div className="bg-slate-500 h-[500px] rounded-2xl overflow-hidden">
            <img
              src="/IMG/ai-generated-8644565_1920 1.png"
              alt=""
              className="w-full h-full  block object-cover"
            />
          </div>
        </div>

        <div className="2xl:container 2xl:mx-auto grid grid-cols-2 mt-5 mx-4 my-16">
          <div>
            <h1 className="font-semibold text-[4rem] flex items-center">
              Our Story
              <span className="mx-12 ">
                <svg
                  width="49"
                  height="53"
                  viewBox="0 0 49 53"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M40.1592 52.872L4.38422 49.9076C1.99265 49.754 0.227718 47.7035 0.434297 45.3188C0.557505 44.1646 1.13786 43.0945 2.04643 42.3464C2.95499 41.5983 4.11652 41.2341 5.27294 41.3347L30.657 43.3454L1.64916 8.11576C0.142051 6.28539 0.445885 3.54543 2.32779 1.99588C4.2097 0.446336 6.95704 0.673987 8.46415 2.50436L37.472 37.734L40.2679 12.5201C40.6927 10.2809 42.7703 8.69718 45.0369 8.88499C47.3035 9.0728 48.9953 10.9688 48.9202 13.2371L44.9638 48.916C44.6928 51.2953 42.5463 53.0627 40.1592 52.872Z"
                    fill="black"
                  />
                </svg>
              </span>
            </h1>
          </div>

          <div>
            <p className="mb-5">
              The roots of SRM Pharma run deep, tracing back to a time when
              India, Pakistan, and Afghanistan were a single entity. Over 120
              years ago, our family embarked on a journey steeped in traditional
              Ayurveda medicine. Passed down through generations, this ancient
              knowledge serves as the very foundation upon which SRM Pharma
              stands today. We honour our roots while embracing the future.
            </p>
            <p>
              In those days, preserving medicines posed a challenge. Unlike the
              advanced techniques at our disposal now, our ancestors lacked the
              means to extend the shelf life of these precious remedies. Yet,
              despite these limitations, our family traded medicines even to
              Afghanistan. Our family home was a haven for those in search of
              healing. Nearby people would gather at our doorstep, hoping to
              find a cure for their ailments. As early as sunrise, a long queue
              would form. Remarkably, many were treated with no anticipation of
              remuneration. Our ancestors selflessly safeguarded their
              well-being, providing the spirit of compassion and service.
            </p>
          </div>
        </div>

        <div className=" bg-[#EBF8A1] py-[4rem]">
          <div className="2xl:container 2xl:mx-auto grid grid-cols-2 p-5 ">
            <div>
              <p className="mb-5">
                At SRM Pharma, we lead with innovation, crafting medicines that
                address today's needs while blending ancient wisdom with modern
                science. From acute ailments to chronic disorders, our focus is
                on excellence in healthcare.
              </p>

              <p className="mb-5">
                We understand the challenges of modern living – sedentary
                lifestyles, stress, and dietary issues. That's why we prioritize
                your health, offering tailored formulations for holistic
                wellness and vibrant living.
              </p>

              <p className="mb-5">
                Trust SRM Pharma for relief from everyday discomforts or for
                achieving optimal health. We bridge tradition and innovation,
                offering Ayurveda's wisdom for today's demands.
              </p>

              <p className="mb-5">
                We honor our ancestors, whose legacy guides us in every medicine
                we create.
              </p>
            </div>

            <div className="justify-center items-center flex">
              <h1 className="font-semibold text-[3rem]  ms-10 ">
                Where Tradition Meets Tomorrow
              </h1>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
