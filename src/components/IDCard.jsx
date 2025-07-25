import PropTypes from "prop-types";

export default function IDCard({ data, textColor, textSize, backgroundColor }) {
  return (
    <div
      className="w-72 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center space-y-4 transition-all duration-300"
      style={{ backgroundColor, color: textColor, fontSize: textSize }}
    >
     
      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-gray-300 shadow-sm">
        {data?.photo ? (
          <img
            src={data.photo}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
            No Photo
          </div>
        )}
      </div>

     
      <div>
        <h2 className="text-lg font-bold tracking-wide">
          {data?.name || "Jane Doe"}
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-300">
          {data?.department || "Department"}
        </p>
      </div>

    
      <div className="w-full text-left text-sm space-y-1">
        {data?.idNumber && (
          <p>
            <strong className="font-medium">ID:</strong> {data.idNumber}
          </p>
        )}
        {data?.gender && (
          <p>
            <strong className="font-medium">Gender:</strong> {data.gender}
          </p>
        )}
        {data?.dob && (
          <p>
            <strong className="font-medium">DOB:</strong> {data.dob}
          </p>
        )}
        {data?.bloodGroup && (
          <p>
            <strong className="font-medium">Blood Group:</strong> {data.bloodGroup}
          </p>
        )}
        {data?.nationality && (
          <p>
            <strong className="font-medium">Nationality:</strong> {data.nationality}
          </p>
        )}
        {data?.address && (
          <p>
            <strong className="font-medium">Address:</strong> {data.address}
          </p>
        )}
      </div>

      
      {data?.role && (
        <div className="mt-2 text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-300">
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
  textColor: "#1F2937", // Tailwind's gray-800
  textSize: "14px",
  backgroundColor: "#FFFFFF",
};
