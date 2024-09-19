import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { supabase } from "./../lib/supabase.ts";

interface ContactFormData {
  full_name: string;
  email: string;
  comment: string;
}

const ContactUs: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<ContactFormData>({
    defaultValues: { full_name: "", email: "", comment: "" },
  });

  const onSubmit = async (values: ContactFormData) => {
    const { error } = await supabase.from("Reviews").insert({
      full_name: values.full_name,
      email: values.email,
      comment: values.comment,
    });

    if (error) {
      toast.error("Message not sent, please try again.");
    } else {
      toast.success("Message sent successfully!");
      reset();
    }
  };

  return (
    <div id="contact" className="flex flex-col w-full h-full">
      <div className="text-[#312e2e] md:h-screen h-full w-full flex flex-col items-center justify-center">
        <div className="h-4/5 w-full flex items-center lg:flex-row flex-col md:p-10 p-3 justify-center gap-5">
          <div className="md:w-2/4 w-full h-full shadow-lg p-5 md:p-0 rounded-3xl flex flex-col items-center justify-center gap-5">
            <h1 className="text-3xl font-bold text-[#903839]">
              Get In Touch With Us
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5 md:w-2/3 items-center"
            >
              <input
                {...register("full_name", { required: true })}
                type="text"
                placeholder="Your Name"
                className="rounded border-[#903839] shadow-lg transition:0.3s p-3 md:w-4/5 box-border focus:border-2 focus:border-[#903839] bg-white text-xl outline-none"
              />
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Your Email"
                className="rounded border-[#903839] shadow-lg transition:0.3s p-3 md:w-4/5 box-border focus:border-2 focus:border-[#903839] bg-white text-xl outline-none"
              />
              <textarea
                {...register("comment", { required: true })}
                placeholder="Your Message"
                className="rounded border-[#903839] shadow-lg transition:0.3s p-3 md:w-4/5 box-border focus:border-2 focus:border-[#903839] bg-white text-xl outline-none"
                rows={5}
              ></textarea>
              <input
                type="submit"
                value="SUBMIT"
                className="w-1/3 h-16 bg-[#903839] hover:bg-[#a5494a] text-white rounded font-bold cursor-pointer"
              />
            </form>
          </div>
        </div>
        <div className="mt-5 text-center md:w-1/2">
          <h1 className="md:text-2xl text-[#505050] text-xl">
            We'd love to hear from you! Whether you have a question about our
            club, want to volunteer, or just want to say hello, feel free to
            reach out.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
