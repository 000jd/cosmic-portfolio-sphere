import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Contact = () => {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log("Form submitted:", formData);
    toast.success("Message sent successfully!");
    setFormData({ email: "", subject: "", message: "" });
  };

  return (
    <section className="py-16 px-4" id="contact">
      <h2 className="text-4xl font-bold text-center mb-12 text-space-purple animate-glow">
        Contact Me
      </h2>
      <Card className="max-w-2xl mx-auto bg-space-darker/50 backdrop-blur-sm border-space-purple/20">
        <CardHeader>
          <CardTitle className="text-space-purple">Get in Touch</CardTitle>
          <CardDescription>Send me a message and I'll get back to you as soon as possible.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm text-gray-400 flex items-center gap-2">
                <Mail className="h-4 w-4" /> Email
              </label>
              <Input
                type="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-space-dark/50 border-space-purple/20 focus:border-space-purple"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-400 flex items-center gap-2">
                <MessageSquare className="h-4 w-4" /> Subject
              </label>
              <Input
                type="text"
                placeholder="What's this about?"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="bg-space-dark/50 border-space-purple/20 focus:border-space-purple"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-gray-400 flex items-center gap-2">
                <MessageSquare className="h-4 w-4" /> Message
              </label>
              <Textarea
                placeholder="Your message here..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-space-dark/50 border-space-purple/20 focus:border-space-purple min-h-[150px]"
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-space-purple hover:bg-space-purple/90 text-white"
            >
              <Send className="mr-2 h-4 w-4" /> Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};