import Layout from "@/components/Layout";
import { Truck, Package, Wheat, Factory, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Truck,
    title: "Full Truck Load Transport",
    desc: "Complete truck load transportation services for large shipments across India with dedicated vehicles.",
    benefits: ["Dedicated vehicle", "Door-to-door service", "Real-time tracking support"],
  },
  {
    icon: Package,
    title: "Goods Transportation",
    desc: "Safe and reliable transportation of commercial goods, raw materials, and finished products.",
    benefits: ["Careful handling", "On-time delivery", "All goods types"],
  },
  {
    icon: MapPin,
    title: "Commission Agent Services",
    desc: "We connect truck owners with businesses needing transport, ensuring fair rates and quality service.",
    benefits: ["Best rate matching", "Verified transporters", "Hassle-free booking"],
  },
  {
    icon: Wheat,
    title: "Agricultural Goods Transport",
    desc: "Specialized transport for farm produce, seeds, fertilizers, and agricultural machinery.",
    benefits: ["Temperature-sensitive handling", "Rural connectivity", "Bulk transport"],
  },
  {
    icon: Factory,
    title: "Industrial Freight Transport",
    desc: "Heavy cargo and industrial equipment transportation with specialized vehicles.",
    benefits: ["Heavy load capacity", "Secure handling", "Industrial expertise"],
  },
  {
    icon: ArrowRight,
    title: "Long Distance Logistics",
    desc: "Pan-India long distance goods transportation with reliable scheduling and delivery.",
    benefits: ["Nationwide coverage", "Scheduled departures", "Competitive pricing"],
  },
];

const Services = () => {
  return (
    <Layout>
      <section className="relative py-20 md:py-28 bg-primary">
        <div className="container-main text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg opacity-90 max-w-xl">Comprehensive transport and logistics solutions for every need</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <div key={i} className="bg-card rounded-xl p-8 border hover:border-primary/30 hover:shadow-lg transition-all group">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                  <s.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{s.desc}</p>
                <ul className="space-y-2">
                  {s.benefits.map((b, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-16 py-12 bg-section rounded-2xl">
            <h2 className="text-2xl font-bold mb-3">Need a Custom Transport Solution?</h2>
            <p className="text-muted-foreground mb-6">Contact us to discuss your specific requirements</p>
            <Link to="/book">
              <Button size="lg" className="px-8">Request a Quote</Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
