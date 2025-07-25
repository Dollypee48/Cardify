import html2canvas from "html2canvas";

export default function DownloadButton() {
  const handleDownload = async () => {
    const element = document.getElementById("card-preview");
    if (!element) {
      alert("Card preview not found!");
      return;
    }

    try {
      const canvas = await html2canvas(element);
      const link = document.createElement("a");
      link.download = "cardify-card.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (error) {
      console.error("Error generating image:", error);
    }
  };

  return (
    <button
      onClick={handleDownload}
      className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
    >
      Download Card
    </button>
  );
}
