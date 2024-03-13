"use client"

import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const PhotoSlider = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <section id='PhotoSlider'>
      <>
      <div className=" flex items-center justify-center">
        <button
          className="bg-white hover:bg-primary-600 m-auto font-bold text-black py-2.5 px-5 rounded-lg"
          type="button"
          onClick={() => setOpen(true)}
        >
          CHECK MY WORK
        </button>
      </div>
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={[
            {
              src: "/images/a.jpeg",
              alt: "Image 1",
              width: 640,
              height: 427,
              srcSet: [
                { src: "/images/a.jpeg", width: 320, height: 213 },
                { src: "/images/a.jpeg", width: 640, height: 427 },
                { src: "/images/a.jpeg", width: 1200, height: 800 },
                { src: "/images/a.jpeg", width: 2048, height: 1365 },
              ],
            },
            {
              src: "/images/b.jpg",
              alt: "Image 2",
              width: 640,
              height: 427,
              srcSet: [
                { src: "/images/b.jpg", width: 320, height: 213 },
                { src: "/images/b.jpg", width: 640, height: 427 },
                { src: "/images/b.jpg", width: 1200, height: 800 },
                { src: "/images/b.jpg", width: 2048, height: 1365 },
              ],
            },
            {
              src: "/images/c.jpg",
              alt: "Image 3",
              width: 640,
              height: 427,
              srcSet: [
                { src: "/images/c.jpg", width: 320, height: 213 },
                { src: "/images/c.jpg", width: 640, height: 427 },
                { src: "/images/c.jpg", width: 1200, height: 800 },
                { src: "/images/c.jpg", width: 2048, height: 1365 },
              ],
            },
            {
              src: "/images/d.jpg",
              alt: "Image 4",
              width: 640,
              height: 427,
              srcSet: [
                { src: "/images/d.jpg", width: 320, height: 213 },
                { src: "/images/d.jpg", width: 640, height: 427 },
                { src: "/images/d.jpg", width: 1200, height: 800 },
                { src: "/images/d.jpg", width: 2048, height: 1365 },
              ],
            },
            {
              src: "/images/IMG_7540.jpg",
              alt: "Image 5",
              width: 640,
              height: 427,
              srcSet: [
                { src: "/images/IMG_7540.jpg", width: 320, height: 213 },
                { src: "/images/IMG_7540.jpg", width: 640, height: 427 },
                { src: "/images/IMG_7540.jpg", width: 1200, height: 800 },
                { src: "/images/IMG_7540.jpg", width: 2048, height: 1365 },
              ],
            },
            {
              src: "/images/IMG_7534.jpg",
              alt: "Image 6",
              width: 640,
              height: 427,
              srcSet: [
                { src: "/images/IMG_7534.jpg", width: 320, height: 213 },
                { src: "/images/IMG_7534.jpg", width: 640, height: 427 },
                { src: "/images/IMG_7534.jpg", width: 1200, height: 800 },
                { src: "/images/IMG_7534.jpg", width: 2048, height: 1365 },
              ],
            },
            {
              src: "/images/IMG_7550.jpg",
              alt: "Image 7",
              width: 640,
              height: 427,
              srcSet: [
                { src: "/images/IMG_7550.jpg", width: 320, height: 213 },
                { src: "/images/IMG_7550.jpg", width: 640, height: 427 },
                { src: "/images/IMG_7550.jpg", width: 1200, height: 800 },
                { src: "/images/IMG_7550.jpg", width: 2048, height: 1365 },
              ],
            },
            {
              src: "/images/IMG_7532.jpg",
              alt: "Image 7",
              width: 640,
              height: 427,
              srcSet: [
                { src: "/images/IMG_7532.jpg", width: 320, height: 213 },
                { src: "/images/IMG_7532.jpg", width: 640, height: 427 },
                { src: "/images/IMG_7532.jpg", width: 1200, height: 800 },
                { src: "/images/IMG_7532.jpg", width: 2048, height: 1365 },
              ],
            },
            {
              src: "/images/IMG_7541.jpg",
              alt: "Image 8",
              width: 640,
              height: 427,
              srcSet: [
                { src: "/images/IMG_7541.jpg", width: 320, height: 213 },
                { src: "/images/IMG_7541.jpg", width: 640, height: 427 },
                { src: "/images/IMG_7541.jpg", width: 1200, height: 800 },
                { src: "/images/IMG_7541.jpg", width: 2048, height: 1365 },
              ],
            },
            {
              src: "/images/tony.jpg",
              alt: "Image 9",
              width: 640,
              height: 427,
              srcSet: [
                { src: "/images/tony.jpg", width: 320, height: 213 },
                { src: "/images/tony.jpg", width: 640, height: 427 },
                { src: "/images/tony.jpg", width: 1200, height: 800 },
                { src: "/images/tony.jpg", width: 2048, height: 1365 },
              ],
            },

          ]}
        />
      </>
  </section>
  );
};

export default PhotoSlider;
