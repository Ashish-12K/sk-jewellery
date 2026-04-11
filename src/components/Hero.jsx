export default function Hero() {
  return (
    <section
      className="h-[200px] md:h-[400px] bg-cover md:bg-cover bg-contain bg-no-repeat bg-center"
      style={{
        backgroundImage: "url('/images/BannerImg.png')",
      }}
    ></section>
  );
}