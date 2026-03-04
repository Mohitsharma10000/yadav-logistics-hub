import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Truck, Network, ShieldCheck, Clock, MapPin, Phone, Star, ArrowRight, Package, Wheat, Factory } from "lucide-react";
import heroImage from "@/assets/hero-trucks.jpg";
import truckHeavy from "@/assets/truck-heavy.jpg";
import truckContainer from "@/assets/truck-container.jpg";
import truckGoods from "@/assets/truck-goods.jpg";
import Layout from "@/components/Layout";

const features = [
  { icon: Network, title: "Nationwide Transport Network", desc: "Connected across all major cities and towns in India" },
  { icon: Truck, title: "Professional Transport Contractors", desc: "Experienced team ensuring quality service every time" },
  { icon: ShieldCheck, title: "Fast and Secure Delivery", desc: "Your goods delivered safely and on time, guaranteed" },
];

const services = [
  { icon: Truck, title: "Truck Transportation", desc: "Full and partial load truck transport services across India" },
  { icon: Package, title: "Commission Agent Services", desc: "Connecting truck owners with businesses for efficient logistics" },
  { icon: Wheat, title: "Agricultural Goods Transport", desc: "Specialized transport for farm produce and agricultural equipment" },
  { icon: Factory, title: "Industrial Logistics", desc: "Heavy cargo and industrial freight transportation solutions" },
];

const whyUs = [
  "Experienced transport contractors",
  "Competitive pricing",
  "Strong transport network",
  "Reliable service",
  "Safe goods delivery",
];

const testimonials = [
  { name: "Rajesh Sharma", location: "Delhi", text: "Excellent service! They delivered my goods on time and at a very reasonable price. Highly recommended.", rating: 5 },
  { name: "Amit Gupta", location: "Lucknow", text: "M.S. Yadav Transport has been our trusted logistics partner for 3 years. Very professional and reliable.", rating: 5 },
  { name: "Suresh Patel", location: "Noida", text: "Great experience with their agricultural goods transport. The team handles cargo with utmost care.", rating: 5 },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Transport trucks on Indian highway" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative container-main text-background">
          <div className="max-w-2xl animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Reliable Transport Solutions Across India
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              Fast, Safe and Trusted Goods Transportation Services
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/book">
                <Button size="lg" className="text-base px-8">Book Transport</Button>
              </Link>
              <a href="tel:9910138901">
                <Button size="lg" variant="outline" className="text-base px-8 border-background/40 text-background hover:bg-background/10">
                  <Phone className="w-5 h-5 mr-2" /> Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-section">
        <div className="container-main">
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <f.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Services</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">Comprehensive transportation and logistics solutions tailored to your needs</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <div key={i} className="bg-card rounded-xl p-6 border hover:border-primary/30 hover:shadow-lg transition-all group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <s.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-semibold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services">
              <Button variant="outline" className="gap-2">View All Services <ArrowRight className="w-4 h-4" /></Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Fleet Preview */}
      <section className="section-padding bg-section">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Our Fleet</h2>
            <p className="text-muted-foreground">Modern and well-maintained vehicles for every transport need</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { img: truckHeavy, label: "Heavy Trucks" },
              { img: truckContainer, label: "Container Trucks" },
              { img: truckGoods, label: "Goods Carriers" },
            ].map((t, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={t.img} alt={t.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4 bg-card">
                  <h3 className="font-semibold text-center">{t.label}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Us?</h2>
              <div className="space-y-4">
                {whyUs.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img src={truckContainer} alt="Container truck on highway" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-section">
        <div className="container-main">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-card rounded-xl p-6 shadow-sm">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm mb-4 italic">"{t.text}"</p>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {t.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary">
        <div className="container-main text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Transport Service Today?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">Get in touch with us for reliable and affordable goods transportation services</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/book">
              <Button size="lg" variant="secondary" className="text-base px-8">Book Now</Button>
            </Link>
            <a href="tel:9910138901">
              <Button size="lg" variant="outline" className="text-base px-8 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10">
                <Phone className="w-5 h-5 mr-2" /> Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
