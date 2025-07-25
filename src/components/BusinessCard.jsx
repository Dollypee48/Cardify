import PropTypes from "prop-types";

export default function BusinessCard({ data, textColor, textSize, backgroundColor }) {
  const {
    name,
    title,
    company,
    email,
    phone,
    website,
    Twitter,
    address,
    logo,
  } = data;

  return (
    <div
      className="w-full max-w-lg border rounded-xl shadow-md px-6 py-5 flex items-center justify-between"
      style={{ backgroundColor }}
    >
      <div className="flex-1 space-y-1" style={{ color: textColor, fontSize: textSize }}>
        <h2 className="font-bold text-xl">{name || "John Doe"}</h2>
        <p>{title || "Job Title"}</p>
        <p className="opacity-80">{company || "Company Name"}</p>

        <div className="mt-2 space-y-1 text-sm">
          {email && <p><strong>Email:</strong> {email}</p>}
          {phone && <p><strong>Phone:</strong> {phone}</p>}
          {address && <p><strong>Address:</strong> {address}</p>}
          {Twitter && <p><strong>Twitter:</strong> {Twitter}</p>}
          {website && <p><strong>Website:</strong> {website}</p>}
        </div>
      </div>

      {logo && (
        <div className="ml-6">
          <img
            src={logo}
            alt="Logo"
            className="w-20 h-20 object-contain rounded-lg border"
          />
        </div>
      )}
    </div>
  );
}

BusinessCard.propTypes = {
  data: PropTypes.object,
  textColor: PropTypes.string,
  textSize: PropTypes.string,
  backgroundColor: PropTypes.string,
};

BusinessCard.defaultProps = {
  data: {},
  textColor: "#1F2937",
  textSize: "14px",
  backgroundColor: "#FFFFFF",
};
