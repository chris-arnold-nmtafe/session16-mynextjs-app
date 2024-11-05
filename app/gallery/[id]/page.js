import GalleryItem from "../../components/GalleryItem";
import react from "react";

export default async function GalleryPage({ params }) {
  return <div>{<GalleryItem sid={(await params)["id"]} />}</div>;
}
