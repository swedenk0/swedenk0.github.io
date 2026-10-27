const Map = () => {
  // Replace this URL with your actual Google Maps embed URL
  // Go to Google Maps, search for your location, click Share > Embed a map
  // Copy the iframe src URL and paste it below
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3141.5385542423487!2d17.687915976735766!3d48.410268932137306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476b59944dd56267%3A0x7c24b6df57ba7798!2sDeltacar!5e1!3m2!1ssk!2ssk!4v1764524427850!5m2!1ssk!2ssk";

  return (
    <section id="map" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Kde nás <span className="text-primary">nájdete</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Navštívte nás na našej adrese
          </p>
        </div>

        <div className="max-w-5xl mx-auto animate-slide-up">
          <div className="rounded-lg overflow-hidden shadow-lg border border-border aspect-video">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa autoservisu"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;
