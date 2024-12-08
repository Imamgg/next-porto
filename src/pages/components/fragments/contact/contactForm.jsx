const ContactForm = ({ onSubmit }) => {
  return (
    <div className="space-y-2">
      <p className="text-gray-500">{`// Send me a message`}</p>
      <div className="text-[#4D5BCE]">
        <span className="text-[#c161e4]">function </span>
        <span className="text-[#5565E8]">sendMessage</span>
        <span className="text-slate-300">() {"{"}</span>
      </div>
      <form onSubmit={onSubmit} className="ml-4 space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full bg-transparent border border-[#4D5BCE] p-2 rounded text-slate-300"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="mail@example.com"
          className="w-full bg-transparent border border-[#4D5BCE] p-2 rounded text-slate-300"
        />
        <textarea
          name="message"
          placeholder="Your message here..."
          required
          className="w-full bg-transparent border border-[#4D5BCE] p-2 rounded text-slate-300 h-32"
        ></textarea>
        <button
          type="submit"
          className="bg-[#4D5BCE] text-slate-300 px-6 py-2 rounded hover:bg-[#3A4494]"
        >
          Execute
        </button>
      </form>
      <span className="text-slate-300">{"}"}</span>
    </div>
  );
};

export default ContactForm;