const Map = () => {
  // Replace this URL with your actual Google Maps embed URL
  // Go to Google Maps, search for your location, click Share > Embed a map
  // Copy the iframe src URL and paste it below
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.428508976604!2d18.738806876929087!3d49.22265177139451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4714450123456789%3A0x0!2zNDnCsDEzJzIxLjYiTiAxOMKwNDQnMjcuNyJF!5e0!3m2!1sen!2ssk!4v1234567890123!5m2!1sen!2ssk";

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
          <p className="text-center text-muted-foreground mt-6 text-sm">
            * Nahraďte URL v komponente Map.tsx vaším Google Maps odkazom
          </p>
        </div>
      </div>
    </section>
  );
};

export default Map;
