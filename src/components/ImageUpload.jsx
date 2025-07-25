export default function ImageUpload({ label, field, setFormData }) {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setFormData((prev) => ({ ...prev, [field]: imageURL }));
    }
  };

  return (
    <div>
      <label className="block font-medium text-sm mb-1">{label}</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="block w-full text-sm border px-3 py-2 rounded"
      />
    </div>
  );
}
