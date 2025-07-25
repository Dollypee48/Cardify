import PropTypes from "prop-types";

export default function IDCard({ data, textColor, textSize, backgroundColor }) {
  return (
    <div
      className="w-64 rounded-xl border shadow-md p-5 flex flex-col items-center text-center space-y-3"
      style={{ backgroundColor, color: textColor, fontSize: textSize }}
    >
      <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300">
        {data?.photo ? (
          <img src={data.photo} alt="Profile" className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
            No Photo
          </div>
        )}
      </div>

      <h2 className="font-semibold">{data?.name || "Jane Doe"}</h2>
      <p>{data?.department || "Department"}</p>

      <div className="w-full text-left mt-2 space-y-1">
        {data?.idNumber && <p><strong>ID:</strong> {data.idNumber}</p>}
        {data?.gender && <p><strong>Gender:</strong> {data.gender}</p>}
        {data?.dob && <p><strong>DOB:</strong> {data.dob}</p>}
        {data?.bloodGroup && <p><strong>Blood Group:</strong> {data.bloodGroup}</p>}
        {data?.nationality && <p><strong>Nationality:</strong> {data.nationality}</p>}
        {data?.address && <p><strong>Address:</strong> {data.address}</p>}
      </div>

      {data?.role && (
        <div className="mt-4 text-xs uppercase tracking-wide opacity-70">
          {data.role}
        </div>
      )}
    </div>
  );
}

IDCard.propTypes = {
  data: PropTypes.object,
  textColor: PropTypes.string,
  textSize: PropTypes.string,
  backgroundColor: PropTypes.string,
};

IDCard.defaultProps = {
  data: {},
  textColor: "#1F2937",
  textSize: "14px",
  backgroundColor: "#FFFFFF",
};
