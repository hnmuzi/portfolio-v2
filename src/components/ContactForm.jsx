import { useForm, ValidationError } from "@formspree/react";
import { useEffect, useRef } from "react";
import { CheckCircle2, AlertTriangle } from "lucide-react";

export default function ContactForm() {
    const [state, handleSubmit] = useForm("mvgwzkjj"); // 🔑 Ganti dengan Form ID kamu
    const formRef = useRef(null);

    // Reset otomatis setelah submit sukses
    useEffect(() => {
        if (state.succeeded && formRef.current) {
            formRef.current.reset();
        }
    }, [state.succeeded]);

    return (
        <form
            id="contact-form"
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-6 max-w-lg mx-auto text-left"
        >
            {/* Name */}
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-200">
                    Name
                </label>
                <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    minLength={2}
                    maxLength={50}
                    autoComplete="name"
                    aria-label="Your full name"
                    placeholder="Your Name"
                    className="mt-1 w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 transition"
                />
                <p className="text-xs text-gray-400 mt-1">
                    2–50 characters
                </p>
                <ValidationError prefix="Name" field="name" errors={state.errors} />
            </div>

            {/* Email */}
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                    Email
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    aria-label="Your email address"
                    placeholder="you@example.com"
                    className="mt-1 w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 transition"
                />
                <p className="text-xs text-gray-400 mt-1">
                    We'll never share your email.
                </p>
                <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            {/* Message */}
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-200">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    minLength={10}
                    maxLength={500}
                    aria-label="Your message"
                    placeholder="Hello, I'm (Your Name), nice to meet you!"
                    className="mt-1 w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:ring-2 focus:ring-blue-500 transition resize-none"
                />
                <p className="text-xs text-gray-400 mt-1">
                    10–500 characters
                </p>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
                {state.submitting ? "Sending..." : "Send Message"}
            </button>

            {/* Feedback */}
            {state.succeeded && (
                <p className="mt-4 text-center flex items-center justify-center gap-2 text-green-400">
                    <CheckCircle2 className="w-5 h-5" /> Your message has been sent!
                </p>
            )}
            {state.errors && state.errors.length > 0 && (
                <p className="mt-4 text-center flex items-center justify-center gap-2 text-red-400">
                    <AlertTriangle className="w-5 h-5" /> Please fix the errors above.
                </p>
            )}
        </form>
    );
}
