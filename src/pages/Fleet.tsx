import Layout from "@/components/Layout";
import truckHeavy from "@/assets/truck-heavy.jpg";
import truckContainer from "@/assets/truck-container.jpg";
import truckGoods from "@/assets/truck-goods.jpg";

const fleet = [
  { img: truckHeavy, title: "Heavy Duty Trucks", desc: "Powerful trucks for large and heavy cargo transportation across long distances." },
  { img: truckContainer, title: "Container Trucks", desc: "Enclosed container vehicles for safe and weather-protected goods transport." },
  { img: truckGoods, title: "Goods Carriers", desc: "Versatile carriers ideal for general cargo, agricultural products, and mixed loads." },
  { img: truckHeavy, title: "Open Body Trucks", desc: "Open body trucks suitable for construction materials and oversized cargo." },
  { img: truckContainer, title: "Multi-Axle Trailers", desc: "Heavy-duty trailers for industrial equipment and large-scale shipments." },
  { img: truckGoods, title: "Mini Trucks", desc: "Compact vehicles for local deliveries and smaller cargo requirements." },
];

const Fleet = () => {
  return (
    <Layout>
      <section className="relative py-20 md:py-28 bg-primary">
        <div className="container-main text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Fleet</h1>
          <p className="text-lg opacity-90 max-w-xl">Modern, well-maintained vehicles driven by experienced professionals</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Strong Transport Fleet</h2>
            <p className="text-muted-foreground">
              Our diverse fleet of vehicles is equipped to handle all types of cargo — from agricultural produce to industrial machinery. Every vehicle is regularly maintained and driven by experienced, reliable drivers.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {fleet.map((f, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group border">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={f.img} alt={f.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5 bg-card">
                  <h3 className="font-semibold text-lg mb-1">{f.title}</h3>
                  <p className="text-muted-foreground text-sm">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Fleet;
