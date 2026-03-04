import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Truck, Phone, Mail } from "lucide-react";

const BookTransport = () => {
  const [form, setForm] = useState({
    name: "", phone: "", pickup: "", delivery: "", goodsType: "", weight: "", message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Build mailto link
    const subject = encodeURIComponent(`Transport Inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nPickup: ${form.pickup}\nDelivery: ${form.delivery}\nGoods Type: ${form.goodsType}\nWeight: ${form.weight}\nMessage: ${form.message}`
    );
    window.location.href = `mailto:monuy7@gmail.com?subject=${subject}&body=${body}`;
    
    setTimeout(() => {
      setLoading(false);
      toast.success("Your email client has been opened. Please send the email to complete your inquiry.");
    }, 500);
  };

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  return (
    <Layout>
      <section className="relative py-20 md:py-28 bg-primary">
        <div className="container-main text-primary-foreground">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Transport</h1>
          <p className="text-lg opacity-90 max-w-xl">Fill in the details and we'll get back to you with the best quote</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-main max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="bg-card rounded-xl p-6 md:p-8 border shadow-sm">
                <h2 className="text-2xl font-bold mb-6">Request Transport</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1 block">Name *</label>
                      <Input value={form.name} onChange={update("name")} required placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Phone Number *</label>
                      <Input value={form.phone} onChange={update("phone")} required placeholder="Your phone number" type="tel" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1 block">Pickup Location *</label>
                      <Input value={form.pickup} onChange={update("pickup")} required placeholder="City / Area" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Delivery Location *</label>
                      <Input value={form.delivery} onChange={update("delivery")} required placeholder="City / Area" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1 block">Goods Type</label>
                      <Input value={form.goodsType} onChange={update("goodsType")} placeholder="e.g. Agricultural, Industrial" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1 block">Weight of Goods</label>
                      <Input value={form.weight} onChange={update("weight")} placeholder="e.g. 5 Tonnes" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">Message</label>
                    <Textarea value={form.message} onChange={update("message")} placeholder="Any additional details..." rows={4} />
                  </div>
                  <Button type="submit" size="lg" className="w-full" disabled={loading}>
                    {loading ? "Processing..." : "Request Transport"}
                  </Button>
                </form>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-section rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Truck className="w-6 h-6 text-primary" />
                  <h3 className="font-semibold">Quick Booking</h3>
                </div>
                <p className="text-sm text-muted-foreground">Call us directly for immediate transport booking</p>
              </div>
              <div className="bg-section rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Phone className="w-6 h-6 text-primary" />
                  <h3 className="font-semibold">Call Us</h3>
                </div>
                <a href="tel:9910138901" className="text-sm text-primary font-medium hover:underline block">9910138901</a>
                <a href="tel:7310662797" className="text-sm text-primary font-medium hover:underline block">7310662797</a>
              </div>
              <div className="bg-section rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Mail className="w-6 h-6 text-primary" />
                  <h3 className="font-semibold">Email</h3>
                </div>
                <a href="mailto:monuy7@gmail.com" className="text-sm text-primary font-medium hover:underline">monuy7@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BookTransport;
