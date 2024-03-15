import email from "/src/img/email.svg";
import phone from "/src/img/phone.svg";
const Footer = () => {
  return (
    <footer className="bg-[#CBC3E3] rounded-tl-3xl rounded-tr-3xl p-10 flex flex-col space-y-4 px-24 test-base">
      <div>
        Feel free to reach out to me if you're looking for a developer, have a
        query, or simply want to connect.
      </div>
      <div>
        <div className="flex flex-row items-center space-x-3">
          <img src={email} />
          <p>jla292@cornell.edu</p>
        </div>

        <div className="flex flex-row items-center space-x-3">
          <img src={phone} />
          <p>214-277-9317</p>
        </div>
      </div>
      <div>
        <p className="flex justify-center text-sm">
          &copy; 2024 WICC Technical Committee Workshop
        </p>
      </div>
    </footer>
  );
};

export default Footer;
