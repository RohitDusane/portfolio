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
















// import React from "react";

// const SingleCertification = ({ name, year, align, image, link, tags }) => {
//   return (
//     <div className={`flex ${align === "right" ? "flex-row-reverse" : ""} items-center gap-8`}>
//       <img src={image} alt={name} className="w-40 h-40 object-cover rounded-lg" />
//       <div className="flex flex-col gap-2">
//         <a href={link} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-blue-600">
//           {name}
//         </a>
//         <p className="text-gray-500">{year}</p>
//         <div className="flex gap-2">
//           {tags.map((tag, index) => (
//             <span key={index} className="bg-gray-200 px-2 py-1 rounded-full text-sm">{tag}</span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleCertification;



// import React from "react";

// const SingleCertification = ({ name, year, align, image, link, tags }) => {
//   return (
//     <div className={`flex ${align === "right" ? "flex-row-reverse" : ""} items-center gap-8`}>
//       <img src={image} alt={name} className="w-40 h-40 object-cover rounded-lg" />
//       <div className="flex flex-col gap-2">
//         <a href={link} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-blue-600">
//           {name}
//         </a>
//         <p className="text-gray-500">{year}</p>
//         <div className="flex gap-2">
//           {tags.map((tag, index) => (
//             <span key={index} className="bg-gray-200 px-2 py-1 rounded-full text-sm">{tag}</span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleCertification;



// const SingleCertification = ({ date, description, link, certificateText }) => {
//   return (
//     <div className="flex flex-col gap-2">
//       <p>
//         <strong>{date}</strong>: {description}{" "}
//         {link && <a href={link} target="_blank" rel="noopener noreferrer">{certificateText}</a>}
//       </p>
//     </div>
//   );
// };

// export default SingleCertification;
