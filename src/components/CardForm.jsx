import PropTypes from "prop-types";

export default function CardForm({ formData, setFormData, cardType }) {
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? URL.createObjectURL(files[0]) : value,
    }));
  };

  return (
    <form className="bg-white p-6 rounded shadow">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
       
        <div>
          <label className="block font-medium">Name</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        
        {cardType === "business" && (
          <>
            <div>
              <label className="block font-medium">Title</label>
              <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <label className="block font-medium">Company</label>
              <input
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <label className="block font-medium">Logo</label>
              <input
                type="file"
                name="logo"
                accept="image/*"
                onChange={handleChange}
                className="w-full"
              />
            </div>
          </>
        )}

        {cardType === "id" && (
          <>
            <div>
              <label className="block font-medium">Department</label>
              <input
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <label className="block font-medium">ID Number</label>
              <input
                name="idNumber"
                value={formData.idNumber}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <label className="block font-medium">Photo</label>
              <input
                type="file"
                name="photo"
                accept="image/*"
                onChange={handleChange}
                className="w-full"
              />
            </div>
            <div>
              <input
                name="gender"
                placeholder="Gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <input
                name="dob"
                placeholder="DOB"
                value={formData.dob}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <input
                name="bloodGroup"
                placeholder="Blood Group"
                value={formData.bloodGroup}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <input
                name="nationality"
                placeholder="Nationality"
                value={formData.nationality}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <input
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <input
                name="role"
                placeholder="Role"
                value={formData.role}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>
          </>
        )}

      
        <div>
          <label className="block font-medium">Email</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Phone</label>
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Website</label>
          <input
            name="website"
            value={formData.website}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-medium">Twitter</label>
          <input
            name="Twitter"
            value={formData.Twitter}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

       
        <div>
          <label className="block font-medium">Text Color</label>
          <input
            type="color"
            name="textColor"
            value={formData.textColor}
            onChange={handleChange}
            className="w-16 h-10 p-0 border rounded"
          />
        </div>
       
        <div>
          <label className="block font-medium">Background Color</label>
          <input
            type="color"
            name="bgColor"
            value={formData.bgColor}
            onChange={handleChange}
            className="w-16 h-10 p-0 border rounded"
          />
        </div>
      </div>
    </form>
  );
}

CardForm.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  cardType: PropTypes.string.isRequired,
};
