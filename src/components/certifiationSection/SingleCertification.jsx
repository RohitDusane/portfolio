const SingleCertification = ({ name, year, link, platform, description }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-1">{year} — {name}</h2>
      <p className="text-sm mb-2 text-gray">
        <span className="font-medium text-orange">{platform}:</span> {description}
      </p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan font-semibold hover:underline"
        >
          View Certificate
        </a>
      )}
    </div>
  );
};

export default SingleCertification;