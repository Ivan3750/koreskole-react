import w from "@/app/assets/W.png";

const WebHjerte = ({ className = "" }) => {
  return (
    <a
      href="https://webhjerte.dk"
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center justify-center gap-1 pt-5 text-xs text-neutral-400 hover:text-neutral-600 transition-colors ${className}`}
    >
      <span>Made by</span>

      <img
        src={w.src}
        alt="WebHjerte"
        className="h-4 w-auto opacity-70"
      />

      <span className="font-medium">WebHjerte</span>
    </a>
  );
};

export default WebHjerte;