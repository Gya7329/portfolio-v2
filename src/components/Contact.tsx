import { useForm, ValidationError } from "@formspree/react";
import { User, Mail, Phone, MessageCircle } from "lucide-react";
import SectionTitle from "./ui/SectionTitle";

export default function Contact() {
  const [state, handleSubmit] = useForm("mwpkjdga");

  if (state.succeeded) {
    return (
      <section
        className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
        id="contact"
      >
        <div className="container mx-auto px-4">
          <SectionTitle>Contact Us</SectionTitle>
          <div className="max-w-4xl mx-auto">
            <p className="text-center text-lg font-medium text-gray-700 dark:text-gray-300">
              Thanks for reaching out! We will get back to you soon.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
      id="contact"
    >
      <div className="container mx-auto px-4">
        <SectionTitle>Contact Us</SectionTitle>
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 animate-fade-in-up">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    className="w-full pl-10 py-3 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Your Phone Number"
                    className="w-full pl-10 py-3 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email Address"
                    className="w-full pl-10 py-3 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <div className="relative">
                  <MessageCircle className="absolute left-3 top-4 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Write your message here..."
                    className="w-full pl-10 py-3 rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white"
                    required
                  ></textarea>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {state.submitting ? "Submitting..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
