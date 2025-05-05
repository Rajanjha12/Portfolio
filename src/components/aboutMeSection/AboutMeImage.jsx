const AboutMeImage = () => {
  return (
    <div className="h-[500px] w-[300px] relative">
      {/* Image container */}
      <div className="h-[500px] w-[300px] rounded-[100px] absolute overflow-hidden">
        <img
          src="/images/about-me.jpg" // correct path if in public/images
          alt="About Me"
          className="object-cover h-full w-full"
        />
      </div>

      {/* Decorative background box */}
      <div className="h-[500px] w-[250px] bg-orange-500 absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10"></div>
    </div>
  );
};

export default AboutMeImage;
