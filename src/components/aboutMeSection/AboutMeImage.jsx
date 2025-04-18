const AboutMeImage = () => {
  return (
    // <div className="h-[500px] w-[300px] relative">
    //   <div className="h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden">
    //     <img
    //       src="/images/about-me.jpg"
    //       alt="About Me Image"
    //       className="h-full w-auto object-cover"
    //     />
    //   </div>
    //   <div className="h-[500px] w-[250px] bg-orange absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10"></div>
    // </div>


    <div class="opacity-0 transform translate-x-10 motion-safe:transition-all motion-safe:duration-500 motion-safe:opacity-100 motion-safe:translate-x-0">
        <div class="h-[485px] w-[289px] relative">
          <div class="h-full w-auto object-cover rounded-[80px] absolute overflow-hidden">
            <img alt="About Me Image" class="h-full w-auto object-cover" src="/portfolio/images/about-me.jpg" />
          </div>
            <div class="h-[485px] w-[250px] bg-orange absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10"></div>
        </div>
    </div>
    

  );
};

export default AboutMeImage;
