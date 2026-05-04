import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getMetaData } from "../helpers/metaData";

const useMetaTags = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const meta = getMetaData(currentPath);
  const baseUrl = "https://amicadigitalservices.com";
  const canonicalUrl = `${baseUrl}${currentPath}`;

  useEffect(() => {
    // Update document title
    document.title = meta.title;

    // Update or create meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", meta.description);
    } else {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      metaDescription.setAttribute("content", meta.description);
      document.head.appendChild(metaDescription);
    }

    // Update or create meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", meta.keywords);
    } else {
      metaKeywords = document.createElement("meta");
      metaKeywords.setAttribute("name", "keywords");
      metaKeywords.setAttribute("content", meta.keywords);
      document.head.appendChild(metaKeywords);
    }

    // Update or create canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute("href", canonicalUrl);
    } else {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      canonicalLink.setAttribute("href", canonicalUrl);
      document.head.appendChild(canonicalLink);
    }

    // Update Open Graph tags
    const ogTags = [
      { property: "og:title", content: meta.title },
      { property: "og:description", content: meta.description },
      { property: "og:url", content: canonicalUrl },
    ];

    ogTags.forEach((tag) => {
      let element = document.querySelector(`meta[property="${tag.property}"]`);
      if (element) {
        element.setAttribute("content", tag.content);
      } else {
        element = document.createElement("meta");
        element.setAttribute("property", tag.property);
        element.setAttribute("content", tag.content);
        document.head.appendChild(element);
      }
    });

    // Update Twitter Card tags
    const twitterTags = [
      { name: "twitter:title", content: meta.title },
      { name: "twitter:description", content: meta.description },
    ];

    twitterTags.forEach((tag) => {
      let element = document.querySelector(`meta[name="${tag.name}"]`);
      if (element) {
        element.setAttribute("content", tag.content);
      } else {
        element = document.createElement("meta");
        element.setAttribute("name", tag.name);
        element.setAttribute("content", tag.content);
        document.head.appendChild(element);
      }
    });

    console.log("Meta tags updated for:", currentPath);
    console.log("Title:", meta.title);
    console.log("Description:", meta.description);

    // Cleanup function (optional)
    return () => {
      // You can add cleanup logic here if needed
    };
  }, [currentPath, meta, canonicalUrl]);
};

export default useMetaTags;
