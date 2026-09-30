import { Contact } from "../components/home/Contact";
import { Hero } from "../components/home/Hero";
import { People } from "../components/home/People";
import { Process } from "../components/home/Process";
import { Services } from "../components/home/Services";
import { Testimonials } from "../components/home/Testimonials";
import { Work } from "../components/home/Work";
import { useDocumentMeta } from "../seo/useDocumentMeta";

export default function HomePage() {
  useDocumentMeta("home");
  return (
    <>
      <Hero />
      <People />
      <Services />
      <Work />
      <Testimonials />
      <Process />
      <Contact />
    </>
  );
}
